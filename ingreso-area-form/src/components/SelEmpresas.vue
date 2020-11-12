<template>
    <div class="largo-empresas">
        <!--Datos de la empresa-->
        <!--Empresa-->
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" style="min-width: 325px" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="6"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-briefcase md-size-2x"></md-icon>
                            <span style="margin-left: 10px;">Empresa</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <!-- <md-field :class="validacion('empresa')"> -->
                            
                            <!-- <md-select name="empresa" id="empresa" v-model="empresa" md-dense>
                                <md-option v-for="emp of empresas" :key="emp" :value="emp">
                                    {{ emp }}
                                </md-option>
                            </md-select> -->
                            <md-autocomplete @input="updateEmpresa" ref="empresa" :class="validacion('empresa')" v-model="empresa" :md-options="empresas" :md-fuzzy-search="false" md-dense>
                                <label>Empresas</label>

                                <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                                    <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
                                </template>

                                <template slot="md-autocomplete-empty" slot-scope="{ term }">
                                    <small>No se encontró "{{term}}". Ingrese manualmente otra</small>    
                                </template>
                                <span
                            class="md-error"
                            v-if="!$v.empresa.required"
                            >Se requiere que ingrese una empresa</span>
                            </md-autocomplete>
                            
                        <!-- </md-field> -->
                        <!-- <md-field v-if="empresa == 'Otra'">
                            <label for="otraEmp">Ingrese la empresa</label>
                            <md-input name="otraEmp" id="otraEmp"  autocomplete="given-name" v-model="empresaOtra"/>
                            <span
                            class="md-error"
                            v-if="!$v.nombreSol.required"
                            >Se requiere que ingrese su nombre</span>
                        </md-field> -->
                    </md-card-content>
                </md-card>
            </b-col>
            <b-col class="box-respuestas-1" style="min-width: 325px" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="7"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-map-marker md-size-2x"></md-icon>
                            <span>Area</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field :class="validacion('area')">
                            <label for="area">Area</label>
                            <md-select @input="updateArea" ref="area" name="area" id="area" v-model="area" md-dense>
                                <md-option v-for="ar of areas" :key="ar" :value="ar">
                                    {{ ar }}
                                </md-option>
                            </md-select>
                            <span
                            class="md-error"
                            v-if="!$v.area.required"
                            >Se requiere que ingrese un área</span>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';
import {empresas, areas} from '../variables.js'

//Custom validation


export default {
    name: "SelEmpresas",
    data() {
        return {
            empresas,
            areas,
            area: null,
            empresa: null,
        }
    },
    validations: {
        area: {
            required
        },
        empresa: {
            required
        }
    },
    methods:{
        //Emitir datos al componente padre
        updateEmpresa(){
            this.$emit('updateData', {data: this.empresa, campo: "empresa"})
        },
        updateArea(){
            this.$emit('updateData', {data: this.area, campo: "area"})
        },
        //Reiniciar campos luego de enviado el form
        restaurarSelects(){
            this.area = null
            this.empresa = null
        },
        //Validación
        validacion(campo){
            const field = this.$v[campo];
            if (field) {
                return {
                'md-invalid': field.$invalid && field.$dirty,
                };
            }
        },
        validarSelects(){
            this.$v.$touch()
        },
        ifValSelect(){
            return this.$v.$invalid
        },
        focusOnInvalidSelects(){
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
                    break;
                }
            }
        },
    }
}
</script>

<style scoped>
.largo-empresas{
    width: 80%;
    padding: 0 15px
}
.prueba {
    word-wrap:break-word;
}
@media screen and (max-width: 800px){
    .largo-empresas{
    width: 100%;
    padding: 0;
}
}
</style>