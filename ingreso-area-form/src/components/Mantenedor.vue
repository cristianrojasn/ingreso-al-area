<template>
    <div class="admin">
      <div v-if="zona">

      <!--Fin del header del form-->
      <md-divider></md-divider>
          <PrimerNivel :showAprove="true" :title="'Solicitudes Pendientes '+ user" :statusLevel="1" :user="user" :registers="FilterByMailRefStatus0.filter((item) => empresasvalidas.has(item.empresa))"></PrimerNivel>
      <md-divider></md-divider>
      <md-divider></md-divider>
          <PrimerNivel :title="'Solicitudes Aprobadas '+ zona" :statusLevel="2" :user="user" :registers="FilterByMailRefStatus1.filter((item) => empresasvalidas.has(item.empresa))" :showAprove='false'></PrimerNivel>
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
                <md-option value="Fluidos">Fluidos</md-option>
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
      FilterByMailRefStatus1:[],
      registers: [],
      aproveds: [],
      zona: '',
      selected: {},
      showDialog: false,
      empresasvalidas : new Set(['AMECO CHILE S.A.','COMERCIALIZADORA FOURTHANE LIMITADA','COMERCIALIZADORA MAD S.A.','COMERCIALIZADORA PROTORQ S.A.','CONTITECH CHILE S.A','ESR','EST','FLSMIDTH S.A.','FUNDICION TALLERES LIMITADA.','INDUSTRIAL SUPPORT COMPANY LTDA.','MAESTRANZA DIESEL S A','MARCO INDUSTRIAL SPA.','METSO CHILE SPA','MLP','R Y Q INGENIERIA S A','SAN PEDRO INGENIERIA S.A.','SERV. INDUSTRIALES SPECTRUM LTDA','SOC. SERV. WELDER LTDA.']),
      showAprove: true,
    }
  },
  watch: {
    zona: {
      // call it upon creation too
      immediate: true,
      handler(zona) {
        this.$bind('FilterByMailRefStatus0', registerRef.where('status', '==', 0).where('zona', '==', zona))
        this.$bind('FilterByMailRefStatus1', registerRef.where('status', '==', 1).where('zona', '==', zona))
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