<template>
    <div class="admin">
      <div v-if="zona">

      <!--Fin del header del form-->
      <md-divider></md-divider>
          <PrimerNivel :showAprove="true" :title="'Solicitudes Pendientes propias - '+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0"></PrimerNivel>
      <md-divider></md-divider>
       <md-divider></md-divider>
          <PrimerNivel :showAprove="true" :title="'Solicitudes Pendientes Sv - '+ zona" :statusLevel="1" :user="user" :registers="zoneStatus0.filter((item) => empresasvalidas.has(item.empresa))"></PrimerNivel>
      <md-divider></md-divider>
      <md-divider></md-divider>
          <PrimerNivel :title="'Solicitudes Aprobadas - '+ zona" :statusLevel="2" :user="user" :registers="FilterByMailRefStatus1.filter((item) => empresasvalidas.has(item.empresa))" :showAprove='false'></PrimerNivel>
      <md-divider></md-divider>
      <md-divider></md-divider>
        <PrimerNivel :showAprove="false" :title="'Solicitudes Rechazadas- '+ zona" :statusLevel="-1" :user="user" :registers="[...rejected1, ...rejected2]"></PrimerNivel>
      <md-divider></md-divider>
      <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
      <md-card-content>
      </md-card-content>
      </div>
      <div v-else>
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-field>
              <label for="zona">Seleccione zona</label>
              <md-select v-model="zona" name="zona" id="zona">
                <md-option value="Flotación">Flotación</md-option>
                <md-option value="Molienda">Molienda</md-option>
              </md-select>
            </md-field>
          </div>  
        </div>
      </div>
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
      zoneStatus0:[],
      FilterByMailRefStatus1:[],
      registers: [],
      aproveds: [],
      rejected1: [],
      rejected2: [],
      zona: '',
      selected: {},
      showDialog: false,
      empresasvalidas : new Set(['AMECO CHILE S.A.','COMERCIALIZADORA FOURTHANE LIMITADA','COMERCIALIZADORA MAD S.A.','COMERCIALIZADORA PROTORQ S.A.','CONTITECH CHILE S.A','ESR','EST','FLSMIDTH S.A.','FUNDICION TALLERES LIMITADA.','INDUSTRIAL SUPPORT COMPANY LTDA.','MAESTRANZA DIESEL S A','MARCO INDUSTRIAL SPA.','METSO CHILE SPA','MLP','R Y Q INGENIERIA S A','SAN PEDRO INGENIERIA S.A.','SERV. INDUSTRIALES SPECTRUM LTDA','SOC. SERV. WELDER LTDA.']),
      showAprove: true,
    }
  },
  watch: {
    user:{
      immediate: true,
      handler(user) {
        this.$bind('FilterByMailRefStatus0', registerRef.where('status', '==', 0).where('correoResp', '==', user))
        this.$bind('rejected1', registerRef.where('status', '==', -1).where('correoResp', '==', user))
      },
    },
    zona: {
      // call it upon creation too
      immediate: true,
      handler(zona) {
        this.$bind('zoneStatus0', registerRef.where('status', '==', 0).where('zona', '==', zona))
        this.$bind('FilterByMailRefStatus1', registerRef.where('status', '==', 1).where('zona', '==', zona))
        this.$bind('rejected2', registerRef.where('status', '==', -1).where('zona', '==', zona))
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
</style>