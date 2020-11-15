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
                <PrimerNivel :showAprove="true" :title="'Solicitudes Pendientes (estado 0)'+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0"></PrimerNivel>
            <md-divider></md-divider>
            <div v-for="z in zones" :key="2+z">
                <PorZona :zone="z" :title="'Solicitudes zona (estado 1) '+ z" :statusLevel="2" :user="user" ></PorZona>
            </div>
            <div class="row">
            <div v-for="z in zones" :key="3+z">
              <PermisosPorZona :zone="z"></PermisosPorZona>
            </div>
            </div>
            <md-divider></md-divider>
                <PrimerNivel :title="'Solicitudes Aprobadas (estado 2)'+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus2"></PrimerNivel>
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
import PermisosPorZona from '../components/CantidadDePermisosPorZona'
import PorZona from '../components/PorZona'
let registerRef = db.collection('registers')

export default {
  name: "JefeDeArea",
  components:{
    PrimerNivel,
    PorZona,
    PermisosPorZona,
  },
  props: ['user', 'zones'],
  data(){
    return {
      FilterByMailRefStatus0:[],
      FilterByMailRefStatus2:[],
      registers: []
    }
  },
 watch: {
    user: {
      // call it upon creation too
      immediate: true,
      handler(user) {
        this.$bind('FilterByMailRefStatus0', registerRef.where('status', '==', 0).where('correoResp', '==', user))
        this.$bind('FilterByMailRefStatus2', registerRef.where('aprobadores', 'array-contains', user))
      },
    },
  },
  methods: {
  },
  firestore: {
    registers: registerRef,
  }
}
</script>

<style scoped>
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
}
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