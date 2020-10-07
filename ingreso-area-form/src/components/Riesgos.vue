<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <md-card class="box-100" style="width: 70%">
            <md-badge id="badge-steps" md-content="10"/>
            <md-card-header>
            <div class="md-title">
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
                    <md-checkbox class="md-primary" v-model="checkList" :value="'Sí'">
                    <span>He leído a conciencia y estoy en conocimiento que cumplo con los puntos anteriormente mencionados</span>
                    </md-checkbox>
                </div>
            </md-card-content>
        </md-card>
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí'">
            <md-badge id="badge-steps" md-content="11"/>
            <md-card-header>
            <div class="md-title">
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
                        <tr>
                            <th>Riesgo</th>
                            <th
                                class="text-center"
                                id="op"
                            >Aplica</th>
                        </tr>
                        <tr
                        v-for="(item, index) of ArrRiesgos"
                        :key="index"
                        >
                        <td id="riesgo">
                            <p>{{ item }}</p>
                        </td>
                        <td class="text-center">
                            <md-checkbox
                            class="md-primary"
                            v-model="checks[index]"
                            :value="aplicaRiesgos['op1']"
                            ></md-checkbox>
                        </td>
                        <!-- <small>{{ form.radios[index]}} target {{index}}</small> -->
                        </tr>
                    </table>
                </div>
            </md-card-content>
        </md-card>
        <md-divider></md-divider>
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí'">
            <md-badge id="badge-steps" md-content="12"/>
            <md-card-header>
            <div class="md-title">
                Riesgos que aplican
            </div>
            <p class="md-caption">
                Para ingresar al área, usted y sus trabajadores debe tener TODOS los controles para los riesgos asociados. Por cada riesgo enlistado, coloque si aplica a su trabajo respectivo.
            </p>
            </md-card-header>
            <md-divider></md-divider>
            <md-card-content>
                <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                    <table v-for="(item, index) of ArrRiesgos"
                        :key="index">
                        <tr v-if="checks[index]=='Sí'">
                            <td style="text-align: center;">
                            <img :src="getImagesUrl(index)" :alt="'Riesgo ' + index" class="imagRiesgos">
                            </td>
                        </tr>
                        <tr v-if="checks[index]=='Sí'">
                            <td>
                            <md-checkbox
                            class="md-primary"
                            v-model="checksAplican[index]"
                            :value="siRiesgoAplica['op1']"
                            >{{siRiesgoAplica['op1']}}</md-checkbox>
                            </td>
                        </tr>
                    </table>
                </div>
            </md-card-content>
        </md-card>
        <!--Ingresa número de trabajadores-->
        <md-card v-if="checkList=='Sí'" class="box-100 box-NumTrabajadores">
            <md-badge id="badge-steps" md-content="13"/>
            <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-users md-size-2x"></md-icon>
                    <span style="margin-left: 8px;">Número de trabajadores</span>
                </div>
            </md-card-header>
            <md-card-content class="bottom">
                <md-field>
                    <label for="numTrabajadores">Número de trabajadores</label>
                    <md-input type="number" min="0" name="numTrabajadores" id="numTrabajadores"  autocomplete="given-name" v-model="numTrabajadores"/>
                </md-field>
            </md-card-content>
        </md-card>
        <!--Inputs para ingresar trabajadores-->
        <md-card class="box-100" style="width: 70%" v-if="checkList=='Sí'">
            <md-badge id="badge-steps" md-content="12"/>
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
                                RUT
                            </div>
                            <md-field>
                                <label for="rutTrabajador">Rut trabajador</label>
                                <md-input type="text" name="rutTrabajador" id="rutTrabajador"  autocomplete="given-name" v-model="rutTrabajador"/>
                            </md-field>
                        </b-col>
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
                    </b-row>
                    <md-button class="md-primary md-raised" @:click="ingresarDatosTrabajador">Agregar</md-button>
                    <md-button class="md-accent md-raised" @:click="eliminarDatosTrabajador">Eliminar</md-button>
                    <md-divider></md-divider>
                    <b-row v-for="(trabajador,index) of listadoTrabajadores" :key="index">
                        <b-col cols="12" md="4">
                            <div class="md-title">
                                RUT
                            </div>
                            <span>{{trabajador.rut}}</span>
                        </b-col>
                        <b-col cols="12" md="4">
                            <div class="md-title">
                                Nombre
                            </div>
                            <span>{{trabajador.nombre}}</span>
                        </b-col>
                        <b-col cols="12" md="4">
                            <div class="md-title">
                                Apellido
                            </div>
                            <span>{{trabajador.apellido}}</span>
                        </b-col>
                    </b-row>
                </b-container>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
import {ArrRiesgos, imagesUrl}from '../variables'

export default {
    name: "Riesgos",
    data() {
        return {
            ArrRiesgos,
            imagesUrl,
            checkList: null,
            numTrabajadores: null,
            rutTrabajador: null,
            nombreTrabajador: null,
            apellidoTrabajador: null,
            listadoTrabajadores: [
            ],
            checks: {},
            aplicaRiesgos: {
                op1: "Sí",
                op2: "No"
            },
            checksAplican: {},
            siRiesgoAplica: {
                op1: "No cuento con los controles adecuados"
            }
        }
    },
    methods: {
        getImagesUrl(index){
            return require("../assets/"+this.imagesUrl[index])
        },
        eliminarDatosTrabajador(){
            this.listadoTrabajadores.pop()
        },
        ingresarDatosTrabajador(){
            let trabajador = {}
            trabajador.rut = this.rutTrabajador
            trabajador.nombre = this.nombreTrabajador
            trabajador.apellido = this.apellidoTrabajador
            this.listadoTrabajadores.push(trabajador)
            this.rutTrabajador = null
            this.nombreTrabajador = null
            this.apellidoTrabajador = null
        }
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

.imagRiesgos{
    width: 120px;
    height: 120px;
}

.imagCheckList{
    width: 80%;
    height: 80%;
}

.md-checkbox {
    margin: 0;
}

.box-respuestas-1 {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    border-radius: 25px;
    margin-bottom: 0.5em;
    width: 50%;
}

.rounded {
    border-radius: 25px !important;
}
.bottom {
    bottom: 0;
    position: relative;
}

@media screen and (max-width: 1080px){
    .imagCheckList {
    width: 100%;
    height: 100%;
    }
}
</style>