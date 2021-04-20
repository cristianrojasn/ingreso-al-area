<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <section class="permiso">
    <div class="admin">  
    <md-card  class="md-layout-item md-size-100 md-small-size-100 box">        
      <!--El header contiene el nombre del formulario y el logo de la empresa-->
      <md-card-header >        
        <!--Contenido del header-->
      <b-container fluid>
        <b-row class="md-title">
          <img
          class="responsive-img"
          width="300px"
          height="300px"
          src="../assets/mlp-logo2.png"
          />
        </b-row>
      </b-container>
      </md-card-header>
      <md-card-content>
        <md-card class="md-layout-item md-size-50 md-small-size-100 box">
        <md-card-header>
          <div class="md-title">Estado de permiso</div>
        </md-card-header>  
        </md-card>
      </md-card-content>
      <md-card-content>
        <div class="md-layout md-gutter" v-if="dataReady">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label >ID {{IDkey}} {{validar}}</label>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
    </div> 
    </section> 
    <Footer/>
  </div>  
</template>

<script>
import Footer from '@/components/Footer.vue';
import db, {Firebase} from '@/db'


export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return {
      IDkey:this.$route.params.id,
      dataReady: false,
    }
  },
  mounted() {
    const ref = this 
    const db_r = db.collection('registers').doc(this.$route.params.id);
    (async () => {
    const doc = await db_r.get();
    if (!doc.exists) {
      this.data_review = 'No existe'
  console.log('No such document!');
  } else {
    this.data_review = doc.data()
    console.log('Document data:', this.data_review);
  }
  this.dataReady = true;
  })();  
  },

  computed:{
    status: function () {
      let estado = 'no existe'
      if (this.data_review['status']=='0'){ estado = 'en espera aprobación supervisor MLP'}
      else if (this.data_review['status']=='1'){ estado = 'en espera aprobación efe de turno'}
      else if (this.data_review['status']=='2'){ estado = 'aprobado. Comprobante enviado a '+this.data_review['correoSol']}
      else if (this.data_review['status']=='-1'){ estado = 'rechazado. Comprobante enviado a '+this.data_review['correoSol']}
      return estado
    },
    validar: function () {
      try{
        if(this.data_review['status']==true) return this.status
        else return this.status 
      }
      catch(err){return 'cargando...'}
    }
  },

  watch: {
    data_review: {
      // call it upon creation too
      immediate: true,
      handler(data_review) {
        this.$bind('userData', db.collection('registers').doc(this.$route.params.id || '1'))
      },
    },
  },
}
</script>

<style>
#app {
  background-image: linear-gradient(
    to top,
    rgb(51, 121, 147) 0%,
    rgb(171, 214, 216) 100%
  );
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.md-menu-content.md-select-menu {
  width: auto;
  /*max-width: 400px !important;*/
}
.md-title {
  font-size: 20px !important;
}
</style>
