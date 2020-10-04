<template>
    <div style="width: 80%; padding-left: 15px; padding-right: 15px">
        <!--Datos de la empresa-->
        <!--Empresa-->
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1 rounded">
                    <md-badge id="badge-steps" md-content="6"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-briefcase md-size-2x"></md-icon>
                            <span style="margin-left: 10px;">Empresa</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="empresa">Empresa</label>
                            <md-select name="empresa" id="empresa" v-model="empresa" md-dense>
                                <md-option v-for="emp of empresas" :key="emp" :value="emp">
                                    {{ emp }}
                                </md-option>
                            </md-select>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1 rounded">
                    <md-badge id="badge-steps" md-content="7"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-briefcase md-size-2x"></md-icon>
                            <span style="margin-left: 10px;">Area</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="area">Area</label>
                            <md-select name="area" id="area" v-model="area" md-dense>
                                <md-option v-for="ar of areas" :key="ar" :value="ar">
                                    {{ ar }}
                                </md-option>
                            </md-select>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import {empresas, areas} from '../variables.js'

export default {
    name: "SelEmpresas",
    data() {
        return {
            empresas,
            areas,
            area: null,
            empresa: null
        }
    }
}
</script>

<style scoped>

</style>