<template>
  <div class="master-form">
    <div class="personal-form" style="width:100%; margin-top:2rem; margin-bottom: 2rem;">

      <!--Se debe incluir todos los inputs del form dentro del tag form-->
      <form novalidate class="md-layout" md-large-size-100 @submit.prevent="validateUser">

        <!--Todo el contenido está dentro del tag md-card-->
        <md-card class="md-layout-item md-size-100 md-small-size-100 formulario">

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
                      <b>MLP</b> Permiso de ingreso al área
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
              <DatosPersonales ref="primeraPag" @updateData="update"/>
              <Riesgos ref="riesgosPag" @updateValues="updateRiesgos"/>
            </md-card-content>
            <md-card-actions style="justify-content: center;">
              <md-button
              type="submit"
              style="background-color: rgb(51, 121, 147); width: 150px; border-style: solid;border-color: rgb(228, 172, 59);border-width: 2px;"
              class="md-raised md-primary"              
              >Enviar</md-button>
            </md-card-actions>
          </md-card>
          <md-dialog-alert :md-active.sync="userSaved" md-title="Formulario envíado exitosamente" :md-content="Enviado" md-confirm-text="Salir"/>
      </form>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import DatosPersonales from '../components/PrimeraPag.vue';
import Riesgos from '../components/Riesgos.vue';
import db from '@/db'
import {areas} from '../variables.js'

const validarRut = (value) => {
    //Algoritmo del módulo 11 https://validarutchile.cl/calcular-digito-verificador.php
    const rutSinDVInv = value.slice(0,value.length-1).split('').reverse()
    const digitoVIngresado = value.slice(-1) 
    let i = 2;
    let sumaRut = 0;
    for (let digit of rutSinDVInv){
        sumaRut = sumaRut + digit * i;
        i++;
        if(i>7){
            i = 2;
        }
    }
    const restaRut = sumaRut - Math.trunc(sumaRut/11) * 11;
    let digitoVerificador = 11 - restaRut;
    if(digitoVerificador === 11 || digitoVerificador === 10){
        digitoVerificador = 0
    }
    if(digitoVerificador.toString()==digitoVIngresado){
        return true
    }else{
        return false
    }
}

const  validarTrabajadores = (value) => {
  //Reviso si cada trabajador posee su nombre, rut y appellido
  let nro = value["length"]
  let chequeo = ["nombre", "apellido", "rut"]
	for (let i=0; i<nro; i++){
		for (let u=0; u<chequeo.length; u++){
			if (value[i][chequeo[u]] == null){
				return false
			}
		}	
	}
	return true
}

let registerRef = db.collection('registers');
export default {
    name: 'PIAform',
    components: {
      DatosPersonales,
      Riesgos
    },
    data() {
      return {
        form: {
          descripcion: null,
          rut: null,
          nombreSol: null,
          apellidoSol: null,
          correoSol: null,
          numeroTel: null,
          nombreResp: null,
          correoResp: null,
          listadoTrabajadores: [],
          checksRiesgos: [],
          checksControles: null,
          checkList: null,
          area: null,
          empresa: null,
          timestamp: null,
          comentarios: ''
        },
        userSaved: false
      }
    },
    computed: {
      Enviado(){
        return 'Se ha registrado su envío correctamente:' + '<br> <strong>- Fecha: </strong>' + this.form.timestamp
      }
    },  
    methods: {
      update(value){
        if(typeof(value.data)=="object"){
          for (let i=0; i< value.data.length; i++){
            this.form[value.campo[i]]=value.data[i]
          }
        }else{
          this.form[value.campo] = value.data
        }
      },
      updateRiesgos(value){
        this.form[value.campo] = value.data
      },
      getNow: function () {
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      return dateTime
      },
      sendDataFirebase(){
        //debugger
        //let newRef = registerRef.push();
        this.$set(this.form, 'timestamp', this.getNow())
        //newRef.set(this.form);
        registerRef.add({...this.form,
        zona: this.form.area.split(" ")[0],
        status: 0, 
        timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        updated: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        turno: dayjs().hour() >= 7 & dayjs().hour() <= 19 ? 'Día' : 'Noche',
        //Agrego fecha de ingreso dependiendo de turno noche, para registro mismo turno.
        ingreso: dayjs().hour() >= 7 ? dayjs().format("YYYY-MM-DD"): dayjs().subtract(1,'day').format("YYYY-MM-DD"),  
        })
        window.setTimeout(() => {
          this.userSaved = true
          //this.sending = true
          //this.$refs.primeraPag.resetPrimeraPag()
          //this.$refs.riesgosPag.resetPreexistencias()
        }, 1500)
      },
      validateUser() {
        this.$refs.primeraPag.validar()
        this.$refs.riesgosPag.validar()
        let var_inferior = ['checksControles', 'checksRiesgos', 'comentarios','listadoTrabajadores']
        let valid = true
        for(let key in Object.keys(this.form)){
            // 2. Extraer los inputs de este componente
          const name = Object.keys(this.form)[key];
          const value = Object.values(this.form)[key];
          // 3. Remover propiedades que no importan
          if (name == 'listadoTrabajadores' && !validarTrabajadores(value)){
            valid = false
            this.$refs.riesgosPag.focusOnInvalid()
            console.log("Me fui a trabajadores")
            break
          }

          if (name == 'rut' && !validarRut(value)){
            //Reviso validación de RUT
            valid = false
            this.$refs.primeraPag.focusOnInvalid()
            console.log("Me fui a RUT")
            break
          }
          if (name == 'area' && !areas.includes(value)){
            //Reviso área específica
            valid = false
            this.$refs.primeraPag.focusOnInvalid()
            console.log("Me fui a area")
            break
          }

          if (!value && !var_inferior.includes(name) && name!= 'timestamp'){
            console.log(value+" "+name+"me fui a primera pag")
            this.$refs.primeraPag.focusOnInvalid()
            valid = false
            break
          }else if (!value && var_inferior.includes(name) && name!= 'timestamp' && name!= 'comentarios'){
            //Se agregó comentarios a excepción, para que no arroje error
            console.log(value+" "+name+" me fui a riesgos")
            this.$refs.riesgosPag.focusOnInvalid()
            valid = false
            break
          }
        }
        if (valid){
          //debugger
          console.log("envío formulario")
          //zona = this.form.area.split(" ")[0]
          //console.log(zona)
          //Saqué data de fila 50 -> @click="sendDataFirebase" (PROBLEMA: NO ENTREGA MENSAJE DE VALIDACIÓN)
          this.sendDataFirebase()          
        }
      }
    }, 
    firestore: {
      registers: registerRef,
    }
}
</script>

<style>
.master-form {
    display: flex;
    justify-content: center;
}
.personal-form {
    display: flex;
    justify-content: center;
}
.master-form form {
    width: 85%;
    max-width: 2500px;
}
.formulario {
padding: 2rem;
background-image: repeating-linear-gradient(
    120deg,
    #fdfbfb 30%,
    rgba(193, 222, 233, 0.623) 70%
);
/* background: linear-gradient(130deg, #fdfbfb 60%, rgb(197, 197, 197) 60%); */
}
@media screen and (max-width: 1080px) {
  .master-form form {
    width: 100%;
  }
  #titulo-foro {
    text-align: center;
  }
}
</style>