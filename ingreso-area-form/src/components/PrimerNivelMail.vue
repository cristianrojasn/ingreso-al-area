<template>
  <div :class="statusLevel === 1? 'admin primary': statusLevel === 2? 'admin secondary': statusLevel === 3? 'admin third': 'admin rejected'">
    <md-table >
      <md-table-toolbar>
        <h1 :class="statusLevel === 1? 'md-title text-custom-primary': statusLevel === 2? 'md-title text-custom-secondary': statusLevel === 3? 'md-title text-custom-third': 'md-title text-custom-rejected'">{{title}}</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Area</md-table-head>
        <md-table-head>Nombre empresa</md-table-head>
        <md-table-head>Nombre solicitante</md-table-head>
        <md-table-head>Fecha y turno</md-table-head>
        <md-table-head>Nro contracto</md-table-head>
        <md-table-head>Nombre responsable MLP</md-table-head>
        <md-table-head>Descripción de las labores</md-table-head>
        <md-table-head>Riesgos cubiertos que aplican a la tarea</md-table-head>
        <md-table-head>Nro de trabajadores</md-table-head>
        <md-table-head>Observaciones responsable actividad</md-table-head>
        <md-table-head>Observaciones primer aprobador</md-table-head>
        <md-table-head>Observaciones jefe de turno</md-table-head>
        <md-table-head>Aprobación Sv</md-table-head>           
      </md-table-row>
      <md-table-row @click="select(registro)" v-for="registro of registers" :key="registro.id">
        <md-table-cell>{{`${registro.area}`}}</md-table-cell>
        <md-table-cell>{{`${registro.empresa}`}}</md-table-cell>
        <md-table-cell>{{`${registro.nombreSol} ${registro.apellidoSol}` }}</md-table-cell>
        <md-table-cell>{{`${registro.turno} ${registro.timestamp}`}}</md-table-cell>
        <md-table-cell>{{`${registro.numeroTel}`}}</md-table-cell>
        <md-table-cell>{{`${registro.nombreResp}` }}</md-table-cell>
        <md-table-cell>{{`${registro.descripcion}` }}</md-table-cell>
        <md-table-cell><div v-for="riesgo of registro.checksRiesgos" :key="registro.id+riesgo">{{riesgo}}</div></md-table-cell>
        <md-table-cell>{{`${registro.listadoTrabajadores.length}`}}</md-table-cell>
        <md-table-cell>{{`${registro.comentarios}`}}</md-table-cell>
        <md-table-cell>{{`${registro.comentarioPrimerAprobador || ''}`}}</md-table-cell>
        <md-table-cell>{{`${registro.comentarioJefeDeTurno || ''}`}}</md-table-cell>
        <md-table-cell>{{`${registro.timestampPrimerAprobador || ''}`}}</md-table-cell>            
      </md-table-row>
    </md-table>
    <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Solicitud</md-dialog-title>
    <md-dialog-content>
        <md-table>
        <md-table-row>
          <md-table-cell>Fecha y turno</md-table-cell><md-table-cell>{{`${selected.turno} ${selected.timestamp}`}}</md-table-cell>
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
          <md-table-cell>Nro contracto / Correo</md-table-cell><md-table-cell>{{`${selected.numeroTel} / ${selected.correoSol}`}}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Area</md-table-cell><md-table-cell>{{`${selected.area}`}}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Nombre responsable MLP</md-table-cell><md-table-cell>{{`${selected.nombreResp}` }}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Correo responsable MLP</md-table-cell><md-table-cell>{{`${selected.correoResp}` }}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Descripción de las labores</md-table-cell><md-table-cell>{{`${selected.descripcion}` }}</md-table-cell>
        </md-table-row> <md-table-row>
          <md-table-cell>Riesgos cubiertos que aplican a la tarea</md-table-cell><md-table-cell><div v-for="riesgo of selected.checksRiesgos" :key="selected.id+riesgo">{{riesgo}}</div></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Observaciones responsable actividad</md-table-cell><md-table-cell>{{selected.comentarios}}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Observaciones primer aprobador</md-table-cell><md-table-cell>{{selected.comentarioPrimerAprobador || ''}}</md-table-cell>
        </md-table-row>
          <md-table-row>
          <md-table-cell>Observaciones jefe de turno</md-table-cell><md-table-cell>{{selected.comentarioJefeDeTurno || ''}}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Listado de trabajadores</md-table-cell><md-table-cell><div v-for="trabajador of selected.listadoTrabajadores" :key="trabajador.nombre+trabajador.rut+selected.id">{{`${trabajador.nombre} ${trabajador.apellido} ${trabajador.rut}`}}</div></md-table-cell>
        </md-table-row>
        </md-table>
      </md-dialog-content>
      <md-dialog-content>
        <div>
          <md-field>
            <label>Comentarios</label>
            <md-textarea v-model="coments"></md-textarea>
          </md-field>
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="mr-auto md-raised md-left" @click="showDialog = false">Cerrar</md-button>
        <md-button  v-if="showAprove"  class=" md-accent md-raised" @click="reject"><md-icon class="fa fa-times-circle md-size-x"></md-icon>Rechazar</md-button>
        <md-button  v-if="showAprove" id="apro" class=" md-primary md-raised" @click="aprove"><md-icon class="fa fa-check-circle md-size-x"></md-icon>Aprobar</md-button>
      </md-dialog-actions>
    </md-dialog>
    </div>
</template>

<script>
import db from '@/db'
import dayjs from 'dayjs'
import Utf8ToAscii from '@/utils'

export default {
  name: "PrimerNivelMail",
  data(){
    return {
      selected: {},
      showDialog: false,
      coments: '',
    }
  },
  props: ['registers', 'user', 'statusLevel', 'title','showAprove','datos_login'],
  computed: {
  },
  methods: {
  
    aprove(){
      let comment = {}
      if(+this.statusLevel === 1){
        comment = {
          comentarioPrimerAprobador: this.coments,
          timestampPrimerAprobador: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          rut_sv: this.datos_login[2],
        }
      } 
      else {
        comment = {
          comentarioJefeDeTurno: this.coments,
          timestampJefeDeTurno: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          rut_jt: this.datos_login[2],
          nombre_jt: this.datos_login[0],
          apellido_jt: this.datos_login[1],
        }
      }
      db.collection(Utf8ToAscii('registers')).doc(this.selected.id).update({
        status: +this.statusLevel, updated:dayjs().format("YYYY-MM-DD HH:mm:ss"), aprobadores: [...(this.selected.aprobadores || []), this.user],
        ...comment
        })
      this.showDialog = false
    },
    reject(){
      let comment = {}
      if(+this.statusLevel === 1){
        comment = {
          comentarioPrimerAprobador: this.coments,
          timestampPrimerAprobador: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          rut_sv: this.datos_login[2],
        }
      } 
      else {
        comment = {
          comentarioJefeDeTurno: this.coments,
          timestampJefeDeTurno: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          rut_jt: this.datos_login[2],
          nombre_jt: this.datos_login[0],
          apellido_jt: this.datos_login[1],
        }
      }
      db.collection(Utf8ToAscii('registers')).doc(this.selected.id).update({...comment,status: -1, updated:dayjs().format("YYYY-MM-DD HH:mm:ss"), rechazado: this.user })
      this.showDialog = false
    },
    select(r, showAprove){
      this.selected = r
      this.showDialog = true
    }
  },
}
</script>

<style scoped>
#apro{
  background-color: green;
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
    .admin{
        padding: 0px !important;
    }
}

</style>