<template>
    <div class="admin">
        <md-card class="md-layout-item md-size-100 md-small-size-100 box">

            <!--El header contiene el nombre del formulario y el logo de la empresa-->
            <md-card-header>

              <!--Contenido del header-->
              <b-container fluid>
                <b-row class="md-title">
                  <b-col>
                    <h2
                      id="titulo-foro"
                      class="md-display-2"
                      >
                      Sistema de administración ingreso al área
                    </h2>
                  </b-col>
                  <b-col md="auto">
                    <img
                    class="responsive-img"
                    width="300px"
                    height="300px"
                    src="../assets/mlp-logo2.png"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </md-card-header>
            <!--Fin del header del form-->

            <md-divider></md-divider>
              <PrimerNivel :title="'Solicitudes Pendientes (estado 0)'+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0"></PrimerNivel>
            <md-divider></md-divider>
            <br>
            <div v-for="z in zones" :key="1+z">
              <PrimerNivel :title="'Solicitudes zona (estado 0) '+ z" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0.filter(i => i.zona === z)"></PrimerNivel>
            </div>
            <div v-for="z in zones" :key="2+z">
              <PorZona :zone="z" :title="'Solicitudes zona (estado 1) '+ z" :statusLevel="2" :user="user" ></PorZona>
            </div>
            <md-divider></md-divider>
              <PrimerNivel :title="'Solicitudes Aprobadas (estado 2)'+ user" :statusLevel="1" :user="user" :registers="aproveds"></PrimerNivel>
            <md-divider></md-divider>
            <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
            <md-card-content>
            </md-card-content>
          </md-card>
    </div>
</template>

<script>
import db from '@/db'
import PrimerNivel from '../components/PrimerNivelMail'
import PorZona from '../components/PorZona'
const myMail = 'luis.leiva.s@gmail.com'

let registerRef = db.collection('registers')
let aprovedRef = db.collection('approved').where('correoResp', '==', myMail);
export default {
  name: "Admin",
  components:{
    PrimerNivel,
    PorZona,
  },
  data(){
    return {
      user: myMail,
      FilterByMailRefStatus0:[],
      FilterByMailRefStatus1:[],
      FilterByMailRefStatus2:[],
      registers: [],
      aproveds: [],
      selected: {},
      showDialog: false,
      showAprove: true,
    }
  },
  computed: {
    zones: function () {
      const z = new Set()
      this.registers.forEach(i => z.add(i.zona))
      console.log(z)
      return z
    }

  },
  watch: {
    user: {
      // call it upon creation too
      immediate: true,
      handler(user) {
        this.$bind('FilterByMailRefStatus0', registerRef.where('status', '==', 0).where('correoResp', '==', user))
        this.$bind('FilterByMailRefStatus1', registerRef.where('status', '==', 1).where('correoResp', '==', user))
        this.$bind('FilterByMailRefStatus2', registerRef.where('status', '==', 2).where('correoResp', '==', user))
      },
    },
  },
  methods: {
    aprove(){
      console.log(this.selected)
      db.collection('registers').doc(this.selected.id).update({status: 1}).then((e)=> alert('Aprobación exitosa')).catch(() => alert("aprobación erronea"))
      this.showDialog = false
    },
    select(r, showAprove){
      this.showAprove = showAprove
      this.selected = r
      this.showDialog = true
    }
  },
  firestore: {
    registers: registerRef,
    aproveds: aprovedRef,
  }
}
</script>

<style scoped>
.admin{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
.box{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
}
.mr-auto{
  margin-right:auto ;
}
@media screen and (min-width: 800px) {
    .box{
        width: 80%;
    }
}
</style>