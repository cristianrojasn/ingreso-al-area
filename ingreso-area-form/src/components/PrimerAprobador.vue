<template>
    <div class="admin">

            <!--El header contiene el nombre del formulario y el logo de la empresa-->
           
            <!--Fin del header del form-->

            <md-divider></md-divider>
                <PrimerNivel :showAprove="true" :title="'Solicitudes Pendientes (estado 0)'+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0"></PrimerNivel>
            <md-divider></md-divider>
            <md-divider></md-divider>
                <PrimerNivel :title="'Solicitudes Aprobadas (estado 1)'+ user" :statusLevel="2" :user="user" :registers="FilterByMailRefStatus1" :showAprove='false'></PrimerNivel>
            <md-divider></md-divider>
            <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
            <md-card-content>
            </md-card-content>
    </div>
</template>

<script>
import db, {refTurn} from '@/db'
import PrimerNivel from '../components/PrimerNivelMail'
import Utf8ToAscii from '@/utils'


let registerRef = refTurn

export default {
  name: "Admin",
  components:{
    PrimerNivel,
  },
  props: ['user'],
  data(){
    return {
      FilterByMailRefStatus0:[],
      FilterByMailRefStatus1:[],
      registers: [],
      aproveds: [],
      selected: {},
      showDialog: false,
      showAprove: true,
    }
  },
  watch: {
    user: {
      // call it upon creation too
      immediate: true,
      handler(user) {
        this.$bind('FilterByMailRefStatus0', registerRef.where('status', '==', 0).where('correoResp', '==', user))
        this.$bind('FilterByMailRefStatus1', registerRef.where('status', '==', 1).where('correoResp', '==', user))
      },
    },
  },
  methods: {
    aprove(){
      db.collection('registers').doc(this.selected.id).update({status: 1}).then((e)=> alert('Aprobación exitosa')).catch(() => alert("aprobación erronea"))
      this.showDialog = false
    },
     rejectec(){
      db.collection('registers').doc(this.selected.id).update({status: -1}).then((e)=> alert('rechazo exitoso')).catch(() => alert("aprobación erronea"))
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
@media screen and (max-width: 600px) {
    .admin{
        padding: 0px !important;
    }
}
</style>