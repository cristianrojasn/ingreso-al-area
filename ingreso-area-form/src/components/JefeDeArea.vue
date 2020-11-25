<template>
    <div class="admin">

            <!--El header contiene el nombre del formulario y el logo de la empresa-->
            <md-card-header>

              <!--Contenido del header-->
            </md-card-header>
            <!--Fin del header del form-->
            <md-divider></md-divider>
                <PrimerNivel :showAprove="true" :title="'Solicitudes Pendientes (estado 0)'+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0"></PrimerNivel>
            <md-divider></md-divider>
            <div v-for="z in zones" :key="2+z">
                <PorZona :zone="z" :title="'Solicitudes zona (estado 1) '+ z" :statusLevel="2" :user="user" ></PorZona>
            </div>
            <div class="admin">
              <md-card class="md-layout-item md-size-100 md-small-size-100 box">
                <md-card-header>
                  <div class="md-title">Resumen de permisos aprobados por zona</div>
                </md-card-header>
                <div class="row">
                  <div v-for="z in zones" :key="'zone'+z">
                    <PermisosPorZona :zone="z"></PermisosPorZona>
                  </div>
                </div>
              </md-card>
            </div>
            <br>
            <md-divider></md-divider>
                <PrimerNivel :title="'Solicitudes Aprobadas (estado 2)'+ user" :statusLevel="3" :user="user" :registers="FilterByMailRefStatus2"></PrimerNivel>
            <md-divider></md-divider>
            <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
            <md-card-content>
            </md-card-content>
    </div>
</template>

<script>
import db, {refTurn} from '@/db'
import PrimerNivel from '../components/PrimerNivelMail'
import PermisosPorZona from '../components/CantidadDePermisosPorZona'
import PorZona from '../components/PorZona'
import dayjs from 'dayjs'
let registerRef = refTurn

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
        this.$bind('FilterByMailRefStatus2', registerRef.where('status', '==', 2).where('aprobadores', 'array-contains', user))
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
  justify-content: flex-start;
  margin: 30px;
  margin-top: 0px ;

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
@media screen and (max-width: 600px) {
    #titulo-foro{
        font-size: 1.5em !important;
    }
}
@media screen and (max-width: 600px) {
    .admin{
        padding: 0px !important;
    }
}

</style>