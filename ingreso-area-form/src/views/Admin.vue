<template>
    <div class="admin">
        <md-card class="md-layout-item md-size-66 md-small-size-100 box">

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
            
            <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
            <md-card-content>
            </md-card-content>
            <md-card-actions style="justify-content: center;">
              <md-button
              type="submit"
              style="background-color: rgb(51, 121, 147); width: 150px; border-style: solid;border-color: rgb(228, 172, 59);border-width: 2px;"
              class="md-raised md-primary"
              @click="log()"
              >Enviar</md-button>
            </md-card-actions>
          </md-card>
    </div>
</template>

<script>
import db from '@/db'

let registerRef = db.collection('registers');
export default {
  name: "Admin",
  data(){
    return {
      registers: [],
    }
  },
  methods: {
    log(){
      console.log(this.registers)
    }
  },
  firestore: {
    registers: registerRef,
  }
}
</script>

<style>
.admin{
    min-height: 100vh;
    padding-top: 20px;
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