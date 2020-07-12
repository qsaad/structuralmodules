<template>
    <div>
        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- MODULE CARD -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <module-card-component title="CONCRETE BEAM CAPACITY">
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- GRAPHICS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:graphics>
                <v-stage :config="{width:width, height:height}">
                    <v-layer ref="layer">
                        <v-rect :config="configCanvas"></v-rect>
                        <!-- GRAPHICS -->
                        <!-- +++++++++++++++++++++++++++++++++++++++++ -->
                        <v-rect :config="figure"></v-rect>
                        
                        <!-- UNIFORM LOAD -->
                        <konva-text :xo="0.4*width" :yo="0.27*height" :text="input.t" :unit="'in'"></konva-text>

                        
                        
            
                    </v-layer>
                </v-stage>
            </template> 
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- RESULTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:results>
                <v-card flat tile outlined class="mx-2">
                    <v-card-text class="title py-0 mx-2 px-0">
                        <span class="headline font-weight-bold">&phi;M<sub>n</sub> :</span>
                        <span class="headline font-weight-bold red--text">{{ (calc.fMn).toFixed(2) }} </span>
                        <span class="subtitle-2 font-weight-bold">k-ft</span>
                    </v-card-text>
                </v-card>
                <v-card flat tile outlined class="mx-23">
                    <v-card-text class="title py-0 mx-2 px-0">
                        <span class="headline font-weight-bold">&phi;V<sub>n</sub> :</span>
                        <span class="headline font-weight-bold red--text">{{ (calc.fVn).toFixed(2) }} </span>
                        <span class="subtitle-2 font-weight-bold">k</span>
                    </v-card-text>
                </v-card>
            </template>
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- CALCULATIONS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:calculations>
                <v-expansion-panels accordion multiple flat>
                    <!-- POINT LOAD -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">FLEXURE CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <parameter-value-component name="d<sub>b</sub>" :value="calc.db" :decimal="3" unit="in"></parameter-value-component>
                                <parameter-value-component name="A<sub>b</sub>" :value="calc.Ab" unit="in<sup>2</sup>"></parameter-value-component>
                                <parameter-value-component name="A<sub>g</sub>" :value="calc.Ag" unit="in<sup>2</sup>"></parameter-value-component>
                                <parameter-value-component name="d" :value="calc.d" unit="in"></parameter-value-component>
                                <parameter-value-component name="A<sub>st</sub>" :value="calc.Ast" unit="in<sup>2</sup>"></parameter-value-component>
                                <parameter-value-component name="a" :value="calc.a" unit="in"></parameter-value-component>
                                <parameter-value-component name="&beta;" :value="calc.beta" unit=""></parameter-value-component>
                                <parameter-value-component name="c" :value="calc.c" unit="in"></parameter-value-component>
                                <parameter-value-component name="&epsilon;<sub>t</sub>" :value="calc.et" unit=""></parameter-value-component>
                                <parameter-value-component name="&phi;" :value="calc.phi" unit=""></parameter-value-component>
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- TRAPEZOIDAL LOAD -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">SHEAR CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <parameter-value-component name="A<sub>sv</sub>" :value="calc.Asv" :decimal="3" unit="in"></parameter-value-component>
                                <parameter-value-component name="V<sub>c</sub>" :value="calc.Vc" unit="k"></parameter-value-component>
                                <parameter-value-component name="V<sub>s</sub>" :value="calc.Vs" unit="k"></parameter-value-component>
                                <parameter-value-component name="&phi;" :value="calc.phi_v" unit=""></parameter-value-component>
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>   
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- CHARTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:charts>
               
            </template>      
        </module-card-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- INPUT -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-sheet-component :sheet="sheet">
            <div v-if="isEdit == 'BEAM'">
                <input-data-component  label="b" unit="in">
                    <v-text-field v-model.number="input.b" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="h" unit="in">
                    <v-text-field v-model.number="input.h" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="fc" unit="psi">
                    <v-text-field v-model.number="input.fc" dense outlined hide-details></v-text-field>
                </input-data-component>
            </div>
            <div v-if="isEdit == 'REBAR'">
                <input-data-component  label="Size" unit="">
                    <v-combobox v-model="input.rebarSize" :items="input.rebarList" dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="Quantity" unit="">
                    <v-text-field v-model.number="input.rebarQty" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="Cover" unit="in">
                    <v-text-field v-model.number="input.cover" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component  label="Fy" unit="ksi">
                    <v-combobox v-model="input.Fy" :items="input.FyList" dense outlined hide-details></v-combobox>
                </input-data-component>
            </div>
            <div v-if="isEdit == 'STIRRUP'">
                <input-data-component  label="Size" unit="">
                    <v-combobox v-model="input.stirrupSize" :items="input.rebarList" dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="Spacing" unit="in">
                    <v-text-field v-model.number="input.stirrupSpa" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="No of Legs" unit="">
                    <v-text-field v-model.number="input.stirrupLegs" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="Cover" unit="in">
                    <v-text-field v-model.number="input.cover" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component  label="Fy" unit="ksi">
                    <v-combobox v-model="input.Fyv" :items="input.FyList" dense outlined hide-details></v-combobox>
                </input-data-component>
            </div>
        </bottom-sheet-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- TOOLBAR -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-navigation-component>
            <v-btn-toggle v-model="isEdit" rounded background-color="teal lighten-2" color="white">
                <v-btn value = 'BEAM' @click="sheet = true">BEAM</v-btn>
                <v-btn value = 'REBAR' @click="sheet = true">REBAR</v-btn>
                <v-btn value = 'STIRRUP' @click="sheet = true">STIRRUP</v-btn>
            </v-btn-toggle>
        </bottom-navigation-component>
    </div>
</template>

<script>
//DATA
import {rebar, rebarList, FyList} from '@/data/concrete/rebar'
//CLASSES
import Beam from '@/classes/concrete/clsBeam'
//COMPONENTS
//import ParameterTableComponent from '@/components/layout/ParameterTableComponent'
//import ParameterValueComponent from '@/components/layout/ParameterValueComponent'

//MIXIN
import {graphicsMixin} from '@/mixins/graphicsMixin'
import {moduleMixin} from '@/mixins/moduleMixin'

export default {
    head: {
        title: 'Concrete Beam Capacity',
    },
    middleware : [],
    components: {
       //ParameterTableComponent, ParameterValueComponent
    },//COMPONENTS
    mixins : [graphicsMixin, moduleMixin],
    layout : 'default',
    data: () => ({
        input: {
            b: 12,
            h: 24,
            fc: 3000,
            Fy: 60,
            rebarSize: "#5",
            rebarList: rebarList,
            FyList: FyList,
            rebarQty: 3,
            cover: 1.5,
            stirrupSize: "#5",
            stirrupSpa: 12,
            stirrupLegs: 2,
            Fyv: 60,
        },
        block:{
            x: 175,
            y: 175,
            width: 30,
            height: 15,
            stroke: '#333',
            strokeWidth : 3,
        }
        
       
        
    }),//DATA
    async asyncData({store}){
        return{
           
        }//RETURN
    },//ASYNC DATA
    async fetch({store}){
      
    },
    created(){
      
    
    },//CREATED
    mounted(){
      
    },//MOUNTED
    watch: {
      
    },//WATCH
    computed:{
      calc(){
          let B = new Beam(this.input)

          return{
                //CAPACITY
                fMn: B.fMn(),
                fVn: B.fVn(),
                //FLEXURE PARAMETER
                db: B.db(),
                Ab: B.Ab(),
                Ag: B.Ag(),
                d: B.d(),
                Ast: B.Ast(),
                a: B.a(),
                beta: B.beta(),
                c: B.c(),
                et: B.et(),
                phi: B.phi(),
                //SHEAR PARAMS
                Asv: B.Asv(),
                Vc: B.Vc(),
                Vs: B.Vs(),
                phi_v: B.phi_v,

          }
      },
      figure(){
          let SF = 3
          return{
                x: this.configCanvas.width/2 - this.input.b/2 * SF,
                y: this.configCanvas.height/2 - this.input.h/2 * SF,
                width: this.input.b * SF,
                height: this.input.h * SF,
                stroke: '#333',
                strokeWidth : 3,
          }
      }
    },//COMPUTED
    methods:{
        
       
    },//METHODS  
}//EXPORT DEFAULT
</script>


   