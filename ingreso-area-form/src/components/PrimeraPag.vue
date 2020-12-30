<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <b-row class="row-length">
            <!--RUT-->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="1"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>RUT solicitante</span>
                        </div>
                        <p class="md-caption">
                        (SIN GUION: ejemplo 123456789 - el k se reemplaza con 0)
                        </p>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('rut')">
                            <label for="rut">123456789</label>
                            <md-input ref="rut" @input="updateRut" name="rut" id="rut"  autocomplete="given-name" v-model="rut"/>
                            <span
                            class="md-error"
                            v-if="!$v.rut.required || !$v.rut.validarRut"
                            >Rut inválido</span>
                            <!-- <span
                            class="md-error"
                            v-else-if="!$v.rut.minLength || !$v.rut.maxLength"
                            >El rut ingresado no cumple con el largo adecuado</span> -->
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
            <!--Nombre-->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="2"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Nombre</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('nombreSol')">
                            <label for="nombre">Nombre</label>
                            <md-input ref="nombreSol" @input="updateNombreSol" name="nombre" id="nombre"  autocomplete="given-name" v-model="nombreSol"/>
                            <span
                            class="md-error"
                            v-if="!$v.nombreSol.required"
                            >Se requiere que ingrese su nombre</span>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
            <!--Apellido-->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="3"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Apellido</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('apellidoSol')">
                            <label for="apellido">Apellido</label>
                            <md-input ref="apellidoSol" @input="updateApellidoSol" name="apellido" id="apellido"  autocomplete="given-name" v-model="apellidoSol"/>
                            <span
                            class="md-error"
                            v-if="!$v.apellidoSol.required"
                            >Se requiere que ingrese su apellido</span>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
        <!--Fila con correo y número de contacto-->
        <!--Correo-->
        <b-row class="row-length">
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="4"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Correo electrónico del solicitante</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('correoSol')">
                            <label for="correo">Correo</label>
                            <md-input ref="correoSol" @input="updateCorreoSol" type="email" name="correo" id="correo"  autocomplete="given-name" v-model="correoSol"/>
                            <span
                            class="md-error"
                            v-if="!$v.correoSol.required || !$v.correoSol.email"
                            >Ingrese un correo válido</span>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
            <!--Número de contacto-->
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="5"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Número de contacto solicitante</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('numeroTel')">
                            <label for="numeroTel">Número</label>
                            <span class="md-prefix">+569</span>
                            <md-input ref="numeroTel" @input="updateNumeroTel" type="tel" name="numeroTel" id="numeroTel"  autocomplete="given-name" v-model="numeroTel"/>
                            <span
                            class="md-error"
                            v-if="!$v.numeroTel.required"
                            >Se requiere que ingrese su número de teléfono</span>
                            <span
                            class="md-error"
                            v-if="!$v.numeroTel.maxLength"
                            >Ingrese un número de máximo 8 carácteres</span>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
        <!--Datos de la empresa-->
            <!--Empresa-->
        <SelEmpresas ref="selectEmpA" @updateData="actualizarEmpresaArea"/>
        <!--Descripción de labores-->
        <b-row class="row-length justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="7">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="8"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-cog md-size-2x"></md-icon>
                            <span style="margin-left: 1px;">Descripción de las labores</span>
                        </div>
                        <p class="md-caption">
                        Áreas generales solo pueden ser utilizadas para trabajos de lubricación e instrumentación
                        </p>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('descripcion')">
                            <label for="descripcion">Descripción</label>
                            <md-textarea ref="descripcion" @input="updateDescripcion" name="descripcion" id="descripcion"  autocomplete="given-name" v-model="descripcion"/>
                            <span
                            class="md-error"
                            v-if="!$v.descripcion.required"
                            >Se requiere que ingrese una descripción</span>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
        <Responsable ref="resp" @updateData="actualizarResp"/>
    </div>
</template>

<script>

//import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, email} from 'vuelidate/lib/validators';
import SelEmpresas from '../components/SelEmpresas.vue';
import Responsable from '../components/Responsable.vue';


//Custom validations
const valCorreoResp = (value) => {
    const dominio = value.split('@')[1]
    if (dominio == 'pelambres.cl' || dominio == 'amsa.cl' || dominio == 'eeccmlp.cl') {
        return true
    }else {
        return false
    }
}

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

export default {
    name: "DatosPersonales",
    data() {
        return {
            rut: null,
            nombreSol: null,
            apellidoSol: null,
            correoSol: null,
            numeroTel: null,
            descripcion: null,
            nombreResp: null,
            correoResp: null,
            empresa: null,
            area: null
        }
    },
    components: {
        SelEmpresas,
        Responsable
    },
    validations: {
        rut: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(9),
            validarRut
        },
        nombreSol: {
            required
        },
        apellidoSol: {
            required
        },
        correoSol: {
            required,
            email
        },
        descripcion: {
            required
        },
        numeroTel: {
            required,
            maxLength: maxLength(8)
        },
        nombreResp: {
            required
        },
        correoResp: {
            required,
            email,
            valCorreoResp
        }
    },
    methods: {
        //Emitir datos al componente padre
        updateRut(){
            this.$emit('updateData', {data: this.rut, campo: "rut"})
        },
        updateNombreSol(){
            this.$emit('updateData', {data: this.nombreSol, campo:"nombreSol"})
        },
        updateApellidoSol(){
            this.$emit('updateData', {data: this.apellidoSol, campo: "apellidoSol"})
        },
        updateCorreoSol(){
            this.$emit('updateData', {data: this.correoSol, campo: "correoSol"})
        },
        updateNumeroTel(){
            this.$emit('updateData', {data: this.numeroTel, campo: "numeroTel"})
        },
        updateDescripcion(){
            this.$emit('updateData', {data: this.descripcion, campo: "descripcion"})
        },
        // updateNombreResp(){
        //     this.$emit('updateData', {data: this.nombreResp, campo: "nombreResp"})
        // },
        // updateCorreoResp(){
        //     this.$emit('updateData', {data: this.correoResp, campo: "correoResp"})
        // },
        actualizarEmpresaArea(value){
            if(value.campo == "empresa"){
                this.empresa = value.data
                this.$emit('updateData', {data: this.empresa, campo: "empresa"})
            }else if(value.campo == "area"){
                this.area = value.data
                this.$emit('updateData', {data: this.area, campo: "area"})
            }
        },
        actualizarResp(value){
            this.nombreResp = value.data[0]
            this.correoResp = value.data[1]
            this.$emit('updateData',{data: [this.nombreResp,this.correoResp], campo: ["nombreResp","correoResp"]})
        },
        //Reiniciar inputs luego de enviado el form
        reiniciarPrimeraPag(){
            this.rut = null
            this.nombreSol = null
            this.apellidoSol = null
            this.correoSol = null
            this.numeroTel = null
            this.descripcion = null
            this.nombreResp = null
            this.correoResp = null
            this.empresa = null
            this.area = null
            this.$refs.selectEmpA.restaurarSelects()
            this.$refs.resp.restaurarSelects()
        },
        validacion(campo){
            const field = this.$v[campo];
            if (field) {
                return {
                'md-invalid': field.$invalid && field.$dirty,
                };
            }
        },
        validar(){
            this.$v.$touch()
            this.$refs.selectEmpA.validarSelects()
            this.$refs.resp.validarResp()
        },
        ifVal(){
            return this.$v.$invalid && this.$refs.selectEmpA.ifValSelect() && this.$refs.resp.ifValSelect()
        },
        focusOnInvalid(){
            // 1. Es necesario que cada input tenga un atributo ref con el mismo nombre de las variables en validations
            for(let key in Object.keys(this.$v)){
                // 2. Extraer los inputs de este componente
                const input = Object.keys(this.$v)[key];
                // 3. Remover propiedades que no importan
                if (input.includes("$")) return false;

                    // 4. Chequear si hay error en algún input
                if (this.$v[input].$invalid) {
                    // 5. Hacer focus en el elemento que hay error
                    this.$refs[input].$el.focus();
                    // 6. Una vez encontrado el input, terminar el loop
                    //break;
                    return 
                }
            }
            this.$refs.selectEmpA.focusOnInvalidSelect()
            this.$refs.resp.focusOnInvalidSelect()
        },
    },
}
</script>

<style>


.box-respuestas-1 {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    border-radius: 25px !important;
    margin-bottom: 0.5em;
}
#badge-steps {
    background-color: rgb(51, 121, 147);
    position: absolute;
    top: 0;
    right: 0;
    height: 45px;
    width: 45px;
    margin-top: -10px;
    font-size: 25px;
    font-weight: 700;
    border-style: solid;
    border-color: rgb(228, 172, 59);
    border-width: 3px;
}

.bottom {
    bottom: 0;
    position: relative;
}
.center {
    margin: 0 auto;
}
.row-length {
    width: 80%
}
@media screen and (max-width: 800px){
    .row-length {
    width: 100%;
    min-width: 325px;
    }

}

@media screen and (max-width: 565px){
    .col-md-6, .col-12 {
        padding: 0 !important;
    }
}

</style>