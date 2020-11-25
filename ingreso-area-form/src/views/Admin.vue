<template>
  <div class="admin">  
     <md-card  class="md-layout-item md-size-100 md-small-size-100 box">

            <!--El header contiene el nombre del formulario y el logo de la empresa-->
            <md-card-header >

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
      <md-card-content  v-if="!userData || !userData.permiso">
        <form novalidate class="md-layout" @submit.prevent="login">
        <md-card class="md-layout-item md-size-50 md-small-size-100 box">
        <md-card-header>
          <div class="md-title">Ingreso</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="email">Email</label>
                <md-input name="email" id="email" autocomplete="given-name" v-model="form.email" />
                <span class="md-error" v-if="!$v.form.email.required">Campo requerido</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="password">Contraseña</label>
                <md-input type="password" name="password" id="password" v-model="form.password"  />
                <span class="md-error" v-if="!$v.form.password.required">Campo requerido</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary" >Ingresar</md-button>
        </md-card-actions>
      </md-card>

        </form>
        
      </md-card-content>
      <div v-if="userData && userData.permiso">
        <div style="display:flex;flex-direction:row;justify-content:space-between ;">
          <div style="align-self: center;">
            bienvenido {{userData.nombre || userData.id}}
          </div>
          <div>
            <md-button type="submit" class="md-primary" @click="signOut" >Cerrar sesión</md-button>
          </div>
        </div>
        <div v-if="userData.permiso===2" class="" >
          <JefeDeArea :user="user" :zones="zones"></JefeDeArea>
        </div>
        <div v-if="userData.permiso===1" class="" >
          <PrimerAprobador :user="user" :zones="zones"></PrimerAprobador>
        </div>
        <div v-if="userData.permiso===3" class="" >
          <Mantenedor :user="user" :zona="userData.zona"></Mantenedor>
        </div>
      </div>
       </md-card>
  </div>
</template>

<script>
import db, {Firebase} from '@/db'
import JefeDeArea from '../components/JefeDeArea'
import PrimerAprobador from '../components/PrimerAprobador'
import Mantenedor from '../components/Mantenedor'
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
import 'firebase/auth'

export default {
  name: "Admin",
  components:{
    JefeDeArea,
    PrimerAprobador,
    Mantenedor
  },
   mixins: [validationMixin],
  data(){
    return {
      user: '',
      userData: {},
      form: {
        email: '',
        password:''
      }
    }
  },
  computed:{
    zones: function () {
      if(!this.userData) return []
      if (!this.userData.zona) return []
      return this.userData.zona
    },
  },
  methods: {
    async login(){
      const {email, password} = this.form
      const data = await Firebase.auth().signInWithEmailAndPassword(email, password)
      this.user = data.user.email
    },
    async signOut(){
      const data = await Firebase.auth().signOut()
      this.user = ''
    }
  },
  watch: {
    user: {
      // call it upon creation too
      immediate: true,
      handler(user) {
        this.$bind('userData', db.collection('users').doc(user || '1'))
      },
    },
  },
  validations: {
      form: {
        email: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(3)
        },
      }
    },
}
</script>

<style scoped>
.admin{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 100vh;
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
</style>

<style>
.primary{
  border-left: 5px solid rgb(56, 216, 56);
}
.secondary{
  border-left: 5px solid rgb(98, 82, 235);
}
.third{
  border-left: 5px solid rgb(235, 158, 106);
}
</style>