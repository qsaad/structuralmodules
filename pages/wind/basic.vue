<template>
    <div>
        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- MODULE CARD -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <module-card-component title="WIND BASIC PRESSURE">
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- GRAPHICS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:graphics>
                <v-stage :config="{width:width, height:height}">
                    <v-layer ref="layer">
                        <!-- CANVAS -->
                        <v-rect :config="configCanvas"></v-rect>
                        <!-- BUILDING -->
                        <konva-building :xo="175" :yo="150" :width="buildingWidth" :floors="floors"></konva-building>
                        <!-- WIND PRESSURE -->
                        <!-- <konva-path :xo="width/2-10" :yo="0.8*height" :path="path"></konva-path> -->
                        <!-- PRESSURE AT 15 FT -->
                        <konva-text :xo="0.4*width" :yo="0.27*height" symbol="V" :text="input.V" :decimal="0" :unit="'mph'"></konva-text>
                        <!-- PRESSURE AT TOP -->
                        <konva-text :xo="0.4*width" :yo="0.37*height" symbol="Exposure" :text="input.exposure" :decimal="0" :unit="''"></konva-text>
                    </v-layer>
                </v-stage>
            </template> 
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- RESULTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:results>
                <v-card flat tile outlined class="mx-2">
                    <v-card-text class="title py-0 mx-2 px-0">
                        <span class="headline font-weight-bold">q<sub>h</sub> :</span>
                        <span class="headline font-weight-bold red--text">{{ (calc.qh).toFixed(0) }} </span>
                        <span class="subtitle-2 font-weight-bold">psf</span>
                    </v-card-text>
                </v-card>

                <v-card flat tile outlined class="mx-2">
                    <v-card-text class="title py-0 mx-2 px-0">
                        <span class="headline font-weight-bold">q<sub>min</sub> :</span>
                        <span class="headline font-weight-bold red--text">{{ (calc.qmin).toFixed(0) }} </span>
                        <span class="subtitle-2 font-weight-bold">psf</span>
                    </v-card-text>
                </v-card>
               
            </template>
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- CALCULATIONS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:calculations>
                <v-expansion-panels accordion multiple flat>
                    <!-- FLEXURE CAPACITY -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">PARAMETERS</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <parameter-value-component name="K<sub>z</sub>" :value="calc.Kz" :decimal="2" unit=""></parameter-value-component>
                                <parameter-value-component name="K<sub>d</sub>" :value="calc.Kd" :decimal="2" unit=""></parameter-value-component>
                                <parameter-value-component name="K<sub>zt</sub>" :value="calc.Kzt" :decimal="2" unit=""></parameter-value-component>
                              
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
            <div v-if="isEdit == 'PARAMETERS'">
                <input-data-component  label="V" unit="mph">
                    <v-text-field v-model.number="input.V" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="Exposure" unit="">
                    <v-combobox v-model="input.exposure" :items="exposureList"  dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="z" unit="ft">
                    <v-text-field v-model.number="input.z" dense outlined hide-details></v-text-field>
                </input-data-component>
            </div>
          
        </bottom-sheet-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- TOOLBAR -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-navigation-component>
            <v-btn-toggle v-model="isEdit" rounded background-color="teal lighten-2" color="white">
                <v-btn value = 'PARAMETERS' @click="sheet = true">PARAMETERS</v-btn>
            </v-btn-toggle>
        </bottom-navigation-component>
    </div>
</template>

<script>
//DATA
//CLASSES
import Wind from '@/classes/wind/clsWind'

//GRAPHICS
import KonvaPath from '@/components/graphics/KonvaPath'
import KonvaBuilding from '@/components/graphics/KonvaBuilding'

//MIXIN
import {graphicsMixin} from '@/mixins/graphicsMixin'
import {moduleMixin} from '@/mixins/moduleMixin'
import {windMixin} from '@/mixins/windMixin'

export default {
    head: {
        title: 'Basic Pressure',
    },
    middleware : [],
    components: {
       KonvaPath, KonvaBuilding
    },//COMPONENTS
    mixins : [graphicsMixin, moduleMixin, windMixin],
    layout : 'default',
    data: () => ({
        input: {
            V:115,
            z:15,
            exposure : 'B',
        },
        path:[
            {x: 150, y: 50},
            {x: 150, y: 150},
            {x: 50, y: 150},
        ],
        floors: [ 15, 12, 12, 12, 12],
        buildingWidth: 100
    
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
            let W = new Wind(this.input)

            return{
                //CAPACITY
                qh: W.qh(),
                qmin: W.qmin(),
                //PARAMETERS
                Kz: W.Kz,
                Kd: W.Kd,
                Kzt: W.Kzt
            }
        },
    },//COMPUTED
    methods:{
     
    },//METHODS  
}//EXPORT DEFAULT
</script>


   