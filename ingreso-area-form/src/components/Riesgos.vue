<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <md-card class="box-100" style="width: 70%">
            <md-badge id="badge-steps" md-content="11"/>
            <md-card-header>
            <div ref="checkList" tabindex="-1" class="md-title">
                Checklist - Información a considerar
            </div>
            <p class="md-caption">
                Lea atentamente las afirmaciones de la imagen
            </p>
            </md-card-header>
            <md-divider></md-divider>
            <md-card-content>
                <img src="../assets/PPTinicio.png" class="imagCheckList" style="object-fit: contain;margin: 0 auto 0 auto; display:block;">
                <div>
                    <md-checkbox class="md-primary" v-model="checkList" :value="'Sí'" @change="updateCheckList">
                    <span>He leído a conciencia y estoy en conocimiento que cumplo con los puntos anteriormente mencionados</span>
                    </md-checkbox>
                    <p
                    class="md-error"
                    v-if="!$v.checkList.required && $v.checkList.$dirty"
                    >Se requiere que lea los puntos anteriores</p>
                </div>
            </md-card-content>
        </md-card>
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí'">
            <md-badge id="badge-steps" md-content="12"/>
            <md-card-header>
            <div ref="checks" tabindex="-1" class="md-title">
                Riesgos y controles
            </div>
            <p class="md-caption">
                Para ingresar al área, usted y sus trabajadores debe tener TODOS los controles para los riesgos asociados. Por cada riesgo enlistado, coloque si aplica a su trabajo respectivo.
            </p>
            </md-card-header>
            <md-divider></md-divider>
            <md-card-content>
                <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                    <table>
                        <colgroup>
                            <col span="1" style="width: 75%">
                            <col span="1" style="width: 25%">
                        </colgroup>
                        <tr>
                            <th class="text-center">Riesgo</th>
                            <th
                                class="text-center"
                                id="op"
                            >Aplica</th>
                        </tr>
                        <tbody :class="validacion('checks')">
                            <tr v-for="(item, index) of ArrRiesgos"
                            :key="item">
                                <td id="riesgo">
                                    <img :src="getImagesUrl(index)" :alt="'Riesgo ' + index" class="imagRiesgos">
                                    <span>{{ item }}</span>
                                </td>
                                <td class="text-center">
                                    <md-checkbox
                                    class="md-primary"
                                    @change="updateChecksRiesgos"
                                    v-model="checks"
                                    :value="item"
                                    ></md-checkbox>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span
                class="md-error"
                v-if="!$v.checks.selectAllChecks && $v.checks.$dirty"
                >Seleccione al menos un riesgo</span>
            </md-card-content>
        </md-card>
        <md-divider></md-divider>
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí'">
            <md-badge id="badge-steps" md-content="13"/>
            <md-card-header>
            <div ref="checksAplican" tabindex="-1" class="md-title">
                Riesgos que aplican
            </div>
            <p class="md-caption">
                Para ingresar al área, usted y sus trabajadores debe tener TODOS los controles para los riesgos asociados. Por cada riesgo enlistado, coloque si aplica a su trabajo respectivo.
            </p>
            </md-card-header>
            <md-divider></md-divider>
            <md-card-content>
                <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                    <table>
                        <tbody v-for="(item, index) of ArrRiesgos"
                        :key="item">
                            <tr v-if="checks.includes(ArrRiesgos[index])">
                                <td style="text-align: center;">
                                <img :src="getControlesUrl(index)" :alt="'Riesgo ' + index" class="imagAcciones">
                                </td>
                            </tr>
                            <tr v-if="checks.includes(ArrRiesgos[index])">
                                <td>
                                <md-checkbox
                                class="md-primary"
                                @change="updateChecksRiesgosAplican"
                                v-model="checksAplican"
                                :value="item"
                                >{{siRiesgoAplica['op1']}}</md-checkbox>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span
                class="md-error"
                v-if="!$v.checksAplican.required && $v.checksAplican.$dirty"
                >Debe seleccionar todas las opciones para enviar el formulario</span>
            </md-card-content>
        </md-card>
        <!--Ingresa número de trabajadores-->
        <md-card v-if="checkList=='Sí'" class="box-100 box-NumTrabajadores">
            <md-badge id="badge-steps" md-content="14"/>
            <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-users md-size-2x"></md-icon>
                    <span ref="numTrabajadores" tabindex="-1" style="margin-left: 8px;">Número de trabajadores</span>
                </div>
                <p class="md-caption">
                ¿Desea copiar y pegar el listado de trabajadores desde una hoja de cálculo?
                </p>
            </md-card-header>
            <md-card-content ref="listadoTrabajadores" class="bottom" style="text-align: center;">
                <b-row>
                    <b-col cols="6" md="6">
                        <md-radio v-model="numTrabajadores" value="mas10" class="md-primary">Sí</md-radio>
                    </b-col>
                    <b-col cols="6" md="6">
                        <md-radio v-model="numTrabajadores" value="menos10" class="md-primary">No</md-radio>
                    </b-col>
                </b-row>
                <span
                class="md-error"
                v-if="!$v.numTrabajadores.required && $v.numTrabajadores.$dirty"
                >Seleccione una opción</span>
            </md-card-content>
        </md-card>
        <!--Inputs para ingresar trabajadores-->
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí' && numTrabajadores=='menos10'">
            <md-badge id="badge-steps" md-content="15"/>
            <md-card-header>
                <div class="md-title">
                    Listado de trabajadores
                </div>
                <p class="md-caption">
                    Por favor ingrese los datos de los trabajadores
                </p>
            </md-card-header>
            <md-divider></md-divider>
            <md-card-content>
                <b-container>
                    <b-row>
                        <b-col>
                            <div class="md-title">
                                Nombre
                            </div>
                            <md-field>
                                <label for="nombreTrabajador">Nombre trabajador</label>
                                <md-input type="text" name="nombreTrabajador" id="nombreTrabajador"  autocomplete="given-name" v-model="nombreTrabajador"/>
                            </md-field>
                        </b-col>
                        <b-col>
                            <div class="md-title">
                                Apellido
                            </div>
                            <md-field>
                                <label for="apellidoTrabajador">Apellido trabajador</label>
                                <md-input type="text" name="apellidoTrabajador" id="apellidoTrabajador"  autocomplete="given-name" v-model="apellidoTrabajador"/>
                            </md-field>
                        </b-col>
                        <b-col>
                            <div class="md-title">
                                RUT
                            </div>
                            <md-field>
                                <label for="rutTrabajador">Rut trabajador</label>
                                <md-input type="text" name="rutTrabajador" id="rutTrabajador"  autocomplete="given-name" v-model="rutTrabajador"/>
                            </md-field>
                        </b-col>
                    </b-row>
                    <md-button class="md-primary md-raised" @click="ingresarDatosTrabajador">Agregar</md-button>
                    <md-button class="md-accent md-raised" @click="eliminarDatosTrabajador">Eliminar</md-button>
                    <span
                    class="md-error"
                    v-if="!trabajadorCompleto"
                    >Ingrese todos los datos del trabajador</span>
                    <md-divider></md-divider>
                    <b-row>
                        <b-col v-for="(trabajador,index) of listadoTrabajadores" :key="index" cols="12" md="4">
                            <div class="md-title" style="text-align: center;">
                                Trabajador {{index + 1}}
                            </div>
                            <p style="text-align: center; margin-bottom: 2px;">{{trabajador.nombre}} {{trabajador.apellido}} {{trabajador.rut}}</p>
                        </b-col>
                    </b-row>
                </b-container>
                <span
                class="md-error"
                v-if="(!$v.listadoTrabajadores.validarListadoTrabajadores || !$v.listadoTrabajadores.required) && $v.listadoTrabajadores.$dirty"
                >Ingrese al menos un trabajador</span>
            </md-card-content>
        </md-card>
        <!--Cuando hay más de 10 trabajadores-->
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí' && numTrabajadores=='mas10'">
            <md-badge id="badge-steps" md-content="15"/>
            <md-card-header>
                <div class="md-title">
                    Listado de trabajadores
                </div>
                <p class="md-caption">
                    Por favor copie y pegue el listado de trabajadores de acuerdo al formato que se muestra en la imagen
                </p>
            </md-card-header>
            <md-divider></md-divider>
            <md-card-content>
                <b-row>
                    <b-col>
                        <img src="../assets/registroTrabajadores.jpeg" class="imagenListado">
                    </b-col>
                    <b-col>
                        <md-field style="margin-bottom: 7px">
                            <label for="listadoTrabajadoresMas10">Listado de trabajadores</label>
                            <md-textarea name="listadoTrabajadoresMas10" id="listadoTrabajadoresMas10"  autocomplete="given-name" v-model="listadoTrabajadoresMas10"/>
                        </md-field>
                    </b-col>
                </b-row>
                <md-button class="md-primary md-raised" @click="ingresarDatosTrabajadores">Agregar</md-button>
                <md-button class="md-accent md-raised" @click="eliminarDatosTrabajadores">Eliminar</md-button>
                
                <md-divider></md-divider>
                <b-row>
                    <b-col v-for="(trabajador,index) of listadoTrabajadores" :key="index" cols="12" md="4">
                        <div class="md-title" style="text-align: center;">
                            Trabajador {{index + 1}}
                        </div>
                        <p style="text-align: center; margin-bottom: 2px;">{{trabajador.nombre}} {{trabajador.apellido}} {{trabajador.rut}}</p>
                    </b-col>
                </b-row>
                <span
                class="md-error"
                v-if="(!$v.listadoTrabajadores.validarListadoTrabajadores || !$v.listadoTrabajadores.required) && $v.listadoTrabajadores.$dirty"
                >Ingrese al menos un trabajador</span>
            </md-card-content>
        </md-card>
        <md-card style="width: 70%" v-if="checkList=='Sí' && (numTrabajadores=='mas10'|| numTrabajadores=='menos10')" class="box-100">
            <md-badge id="badge-steps" md-content="16"/>
            <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-book md-size-2x"></md-icon>
                    <span style="margin-left: 8px;">Comentarios</span>
                </div>
                <p class="md-caption">
                Comentarios relativos a la actividad, o dirigidos a supervisor MLP y/o Jefe de turno
                </p>
            </md-card-header>
            <md-card-content class="bottom" style="text-align: center;">
                <md-field>
                    <label for="comentarios">Comentarios</label>
                    <md-textarea ref="comentarios" @input="updateComentarios" name="comentarios" id="comentarios"  autocomplete="given-name" v-model="comentarios"/>
                </md-field>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';
import {ArrRiesgos, imagesUrl, controlesUrl}from '../variables'

//Custom validations
const validarListadoTrabajadores = (value) => {
    if (value.length == 0) {
        return false
    }else {
        return true
    }
}

const selectAllChecks = (value) => {
    if (value.length == 0){
        return false
    }else{
        return true
    }
}

export default {
    name: "Riesgos",
    data() {
        return {
            ArrRiesgos,
            imagesUrl,
            controlesUrl,
            checkList: null,
            numTrabajadores: null,
            rutTrabajador: null,
            nombreTrabajador: null,
            apellidoTrabajador: null,
            listadoTrabajadoresMas10: null,
            listadoTrabajadores: [],
            checks: [],
            aplicaRiesgos: {
                op1: "Sí",
                op2: "No"
            },
            checksAplican: [],
            siRiesgoAplica: {
                op1: "Si cuento con los controles adecuados"
            },
            comentarios: null,
            trabajadorCompleto: true
        }
    },
    validations: {
        checkList: {
            required
        },
        numTrabajadores: {
            required
        },
        listadoTrabajadores: {
            required,
            validarListadoTrabajadores
        },
        checks: {
            required,
            selectAllChecks
        },
        checksAplican: {
            required,
        }
    },
    methods: {
        getImagesUrl(index){
            return require("../assets/"+this.imagesUrl[index])
        },
        getControlesUrl(index){
            return require("../assets/controles/"+this.controlesUrl[index])
        },
        eliminarDatosTrabajador(){
            this.listadoTrabajadores.pop()
            this.updateTrabajadores()
        },
        eliminarDatosTrabajadores(){
            this.listadoTrabajadores = []
            this.updateTrabajadores()
        },
        ingresarDatosTrabajador(){
            let trabajador = {}
            trabajador.rut = this.rutTrabajador
            trabajador.nombre = this.nombreTrabajador
            trabajador.apellido = this.apellidoTrabajador
            if(trabajador.rut==null||trabajador.nombre==null||trabajador.apellido==null){
                this.trabajadorCompleto = false
            }else{
                this.listadoTrabajadores.push(trabajador)
                this.updateTrabajadores()
                this.rutTrabajador = null
                this.nombreTrabajador = null
                this.apellidoTrabajador = null
                this.trabajadorCompleto = true
            }
        },
        ingresarDatosTrabajadores(){
            let arrTrabajadoresRaw = this.listadoTrabajadoresMas10.split('\n')
            console.log(arrTrabajadoresRaw)
            for(let strTrabajador of arrTrabajadoresRaw){
                let trabajador = {}
                let temp = strTrabajador.split('\t')
                trabajador.nombre = temp[0]
                trabajador.apellido = temp[1]
                trabajador.rut = temp[2]
                this.listadoTrabajadores.push(trabajador)
            }
            this.updateTrabajadores()
        },
        //Enviar datos al componente padre
        updateCheckList(){
            this.$emit('updateValues',{data: this.checkList, campo: "checkList"})
        },
        updateChecksRiesgos(){
            this.$emit('updateValues',{data: this.checks, campo: "checksRiesgos"})
        },
        updateChecksRiesgosAplican(){
            let msgControles
            if(this.checksAplican.length!=0){
                msgControles = "Sí, cuento con todos los controles adecuados"
            }else {
                msgControles = "No cuento con todos los controles adecuados"
            }
            this.$emit('updateValues',{data: msgControles, campo: "checksControles"})
        },
        updateTrabajadores(){
            this.$emit('updateValues', {data: this.listadoTrabajadores, campo: "listadoTrabajadores"})
        },
        updateComentarios(){
            this.$emit('updateValues', {data: this.comentarios, campo: "comentarios"})
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
        },
        ifVal(){
            return this.$v.$invalid
        },
        focusOnInvalid(){
            // 1. Es necesario que cada input tenga un atributo ref con el mismo nombre de las variables en validations
            for(let key in Object.keys(this.$v)){
                // 2. Extraer los inputs de este componente
                const input = Object.keys(this.$v)[key];
                // 3. Remover propiedades que no importan
                if (input.includes("$")) return false;

                    // 4. Chequear si hay error en algún input
                if (this.$v[input].$error) {
                    // 5. Hacer focus en el elemento que hay error
                    this.$refs[input].focus();

                    // 6. Una vez encontrado el input, terminar el loop
                    break;
                }
            }
        },
    }
}
</script>

<style scoped>
.box-100 {
min-width: 325px;
margin-top: 30px;
padding: 1rem;
border-radius: 25px;
margin: 10px;
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

.box-NumTrabajadores {
    width: 30%;
}

.table-selector {
max-width: 800px;
}
table {
width: 100%;
table-layout: fixed;
}
th {
text-align: left;
}

.imagAcciones{
    width: 60%;
    height: auto;
}

.imagRiesgos {
    width: 55px;
    height: 55px;
    display: inline-block;
    margin: 3px 0;
}

.imagCheckList{
    width: 80%;
    height: 80%;
}

.md-checkbox {
    margin: 0;
}

.bottom {
    bottom: 0;
    position: relative;
}

.imagenListado{
    width: 90%;
    object-fit: contain;
    margin: 0 auto 0 auto;
    display:block;
}

.md-error{
    color: red;
}
@media screen and (max-width: 700px){
    .imagCheckList {
        width: 100%;
        height: 100%;
    }

    .imagRiesgos {
        display: block;
        width: 45px;
        height: 45px;
        margin: 0 auto;
    }

    .imagAcciones{
    width: 100%;
    height: auto;
    }

    .imagenListado{
        width: 100%
    }
}
</style>