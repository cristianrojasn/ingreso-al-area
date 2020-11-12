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

            <md-table >
              <md-table-toolbar>
        <h1 class="md-title">Solicitudes Pendientes</h1>
      </md-table-toolbar>
                <md-table-row>
                  <md-table-head>Fecha y turno</md-table-head>
                  <md-table-head>Nombre solicitante</md-table-head>
                  <md-table-head>Nombre empresa</md-table-head>
                  <md-table-head>Nro contracto</md-table-head>
                  <md-table-head>Area</md-table-head>
                  <md-table-head>Nombre responsable MLP</md-table-head>
                  <md-table-head>Descripción de las labores</md-table-head>
                  <md-table-head>Riesgos cubiertos que aplican a la tarea</md-table-head>
                  <md-table-head>Observaciones responsable actividad</md-table-head>
                  <md-table-head>Listado de trabajadores</md-table-head>
                  <md-table-head>estado</md-table-head>
                </md-table-row>
              <md-table-row @click="select(registro, true)" v-for="registro of myRegisters" :key="registro.id">
                <md-table-cell>{{registro.timestamp}}</md-table-cell>
                <md-table-cell>{{`${registro.nombreSol} ${registro.apellidoSol}` }}</md-table-cell>
                <md-table-cell>{{`${registro.empresa}`}}</md-table-cell>
                <md-table-cell>{{`${registro.numeroTel}`}}</md-table-cell>
                <md-table-cell>{{`${registro.area}`}}</md-table-cell>
                <md-table-cell>{{`${registro.nombreResp}` }}</md-table-cell>
                <md-table-cell>{{`${registro.descripcion}` }}</md-table-cell>
                <md-table-cell><div v-for="riesgo of registro.checksRiesgos" :key="registro.id+riesgo">{{riesgo}}</div></md-table-cell>
                <md-table-cell>Observaciones responsable actividad</md-table-cell>
                <md-table-cell><div v-for="trabajador of registro.listadoTrabajadores" :key="trabajador.nombre+trabajador.rut+registro.id">{{`${trabajador.nombre} ${trabajador.apellido} ${trabajador.rut}`}}</div></md-table-cell>
                <md-table-cell>{{`${registro.status}` }}</md-table-cell>

              </md-table-row>
            </md-table>

            <md-divider></md-divider>
            <br>
            <br>


            <md-table >
              <md-table-toolbar>
        <h1 class="md-title">Solicitudes Aprobadas</h1>
      </md-table-toolbar>
                <md-table-row>
                  <md-table-head>Fecha y turno</md-table-head>
                  <md-table-head>Nombre solicitante</md-table-head>
                  <md-table-head>Nombre empresa</md-table-head>
                  <md-table-head>Nro contracto</md-table-head>
                  <md-table-head>Area</md-table-head>
                  <md-table-head>Nombre responsable MLP</md-table-head>
                  <md-table-head>Descripción de las labores</md-table-head>
                  <md-table-head>Riesgos cubiertos que aplican a la tarea</md-table-head>
                  <md-table-head>Observaciones responsable actividad</md-table-head>
                  <md-table-head>Listado de trabajadores</md-table-head>
                  <md-table-head>estado</md-table-head>
                </md-table-row>
              <md-table-row @click="select(registro, false)" v-for="registro of aproveds" :key="registro.id">
                <md-table-cell>{{registro.timestamp}}</md-table-cell>
                <md-table-cell>{{`${registro.nombreSol} ${registro.apellidoSol}` }}</md-table-cell>
                <md-table-cell>{{`${registro.empresa}`}}</md-table-cell>
                <md-table-cell>{{`${registro.numeroTel}`}}</md-table-cell>
                <md-table-cell>{{`${registro.area}`}}</md-table-cell>
                <md-table-cell>{{`${registro.nombreResp}` }}</md-table-cell>
                <md-table-cell>{{`${registro.descripcion}` }}</md-table-cell>
                <md-table-cell><div v-for="riesgo of registro.checksRiesgos" :key="registro.id+riesgo">{{riesgo}}</div></md-table-cell>
                <md-table-cell>Observaciones responsable actividad</md-table-cell>
                <md-table-cell><div v-for="trabajador of registro.listadoTrabajadores" :key="trabajador.nombre+trabajador.rut+registro.id">{{`${trabajador.nombre} ${trabajador.apellido} ${trabajador.rut}`}}</div></md-table-cell>
                <md-table-cell>{{`${registro.status}` }}</md-table-cell>

              </md-table-row>
            </md-table>

            <md-divider></md-divider>
            
            <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
            <md-card-content>
            </md-card-content>
          </md-card>
      <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Solicitud</md-dialog-title>
      <md-dialog-content>
        <md-table>

        
        <md-table-row>
          <md-table-cell>Fecha y turno</md-table-cell><md-table-cell>{{selected.timestamp}}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>ID</md-table-cell><md-table-cell>{{selected.id}}</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Nombre solicitante</md-table-cell><md-table-cell>{{`${selected.nombreSol} ${selected.apellidoSol}` }}</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Nombre empresa</md-table-cell><md-table-cell>{{`${selected.empresa}`}}</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Nro contracto</md-table-cell><md-table-cell>{{`${selected.numeroTel}`}}</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Area</md-table-cell><md-table-cell>{{`${selected.area}`}}</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Nombre responsable MLP</md-table-cell><md-table-cell>{{`${selected.nombreResp}` }}</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Descripción de las labores</md-table-cell><md-table-cell>{{`${selected.descripcion}` }}</md-table-cell>
        </md-table-row> <md-table-row>
          <md-table-cell>Riesgos cubiertos que aplican a la tarea</md-table-cell><md-table-cell><div v-for="riesgo of selected.checksRiesgos" :key="selected.id+riesgo">{{riesgo}}</div></md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Observaciones responsable actividad</md-table-cell><md-table-cell>Observaciones responsable actividad</md-table-cell>
        </md-table-row>
         <md-table-row>
          <md-table-cell>Listado de trabajadores</md-table-cell><md-table-cell><div v-for="trabajador of selected.listadoTrabajadores" :key="trabajador.nombre+trabajador.rut+selected.id">{{`${trabajador.nombre} ${trabajador.apellido} ${trabajador.rut}`}}</div></md-table-cell>
        </md-table-row>
        </md-table>
      </md-dialog-content>
      <md-dialog-actions v-if="showAprove">
        <md-button class=" md-accent md-raised" @click="showDialog = false"><md-icon class="fa fa-times-circle md-size-x"></md-icon>Rechazar</md-button>
        <md-button class=" md-primary md-raised" @click="aprove"><md-icon class="fa fa-check-circle md-size-x"></md-icon>Aprobar</md-button>
      </md-dialog-actions>
    </md-dialog>
    </div>
</template>

<script>
import db from '@/db'

const myMail = 'luis.leiva.s@gmail.com'

let registerRef = db.collection('registers').where('correoResp', '==', myMail).where('status', '==', 0);
let aprovedRef = db.collection('registers').where('correoResp', '==', myMail).where('status', '==', 1);
export default {
  name: "Admin",
  data(){
    return {
      registers: [],
      aproveds: [],
      selected: {},
      showDialog: false,
      showAprove: true,
    }
  },
  computed: {
    myRegisters: function () {
      return this.registers.filter(({correoResp}) => correoResp === myMail)
    }
  },
  methods: {
    log(r){
      console.log(r?r: this.myRegisters)
    },
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

<style>
.admin{
    min-height: 100vh;
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
@media screen and (min-width: 800px) {
    .box{
        width: 80%;
    }
}
</style>