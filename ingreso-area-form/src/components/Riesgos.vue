<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <md-card class="box-100" style="width: 70%">
            <md-badge id="badge-steps" md-content="10"/>
            <md-card-header>
            <div class="md-title">
                Riesgos y controles
            </div>
            <p class="md-caption">
                Para ingresar al área, usted y sus trabajadores debe tener TODOS los controles para los riesgos asociados. Por cada riesgo enlistado, coloque si aplica a su trabajo respectivo.
            </p>
            </md-card-header>
            <md-card-content>
                <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                    <table>
                        <tr>
                            <th>Riesgo</th>
                            <th
                                class="text-center"
                                id="op"
                            >Aplica</th>
                            <th
                                class="text-center"
                                id="op"
                            >No Aplica</th>
                        </tr>
                        <tr
                        v-for="(item, index) of ArrRiesgos"
                        :key="index"
                        >
                        <td id="riesgo">
                            <p>{{ item }}</p>
                        </td>
                        <td class="text-center">
                            <md-radio
                            class="md-primary"
                            v-model="radios[index]"
                            :value="aplicaRiesgos['op1']"
                            ></md-radio>
                        </td>
                        <td class="text-center">
                            <md-radio
                            class="md-primary"
                            v-model="radios[index]"
                            :value="aplicaRiesgos['op2']"
                            ></md-radio>
                        </td>
                        <!-- <small>{{ form.radios[index]}} target {{index}}</small> -->
                        </tr>
                    </table>
                </div>
            </md-card-content>
        </md-card>
        <md-divider></md-divider>
        <md-card class="box-100" style="width: 70%">
            <md-badge id="badge-steps" md-content="11"/>
            <md-card-header>
            <div class="md-title">
                Riesgos que aplican
            </div>
            </md-card-header>
            <md-card-content>
                <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                    <table v-for="(item, index) of ArrRiesgos"
                        :key="index">
                        <tr v-if="radios[index]=='Sí'">
                            <td style="text-align: center;">
                            <img :src="getImagesUrl(index)" :alt="'Riesgo ' + index" class="imagRiesgos">
                            </td>
                        </tr>
                        <tr v-if="radios[index]=='Sí'">
                            <td>
                            <md-radio
                            class="md-primary"
                            v-model="radiosAplican[index]"
                            :value="siRiesgoAplica['op1']"
                            >{{siRiesgoAplica['op1']}}</md-radio>
                            </td>
                        </tr>
                        <tr v-if="radios[index]=='Sí'">
                            <md-radio
                            class="md-primary"
                            v-model="radiosAplican[index]"
                            :value="siRiesgoAplica['op2']"
                            >{{siRiesgoAplica['op2']}}</md-radio>
                        </tr>
                    </table>
                </div>
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
            radios: {},
            aplicaRiesgos: {
                op1: "Sí",
                op2: "No"
            },
            radiosAplican: {},
            siRiesgoAplica: {
                op1: "Poseo este riesgo en mi trabajo y cuento con los TODOS los controles adecuados",
                op2: "Poseo este riesgo en mi trabajo, pero NO cuento con los controles adecuados"
            }
        }
    },
    methods: {
        getImagesUrl(index){
            return require("../assets/"+this.imagesUrl[index])
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

</style>