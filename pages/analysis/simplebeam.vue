<template>
    <div>
        <v-row  justify="center" align="center">
            <v-col xs="12" sm="8" md="6">
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- TITLE -->
                <!-- +++++++++++++++++++++++++++++++ -->
                <v-toolbar flat dense color="blue white--text text-h5 font-weight-bold">
                    SIMPLE BEAM
                    <v-spacer></v-spacer>
                    <v-btn icon @click="printPDF" class="d-print-none">
                        <v-icon color="white">mdi-printer</v-icon>
                    </v-btn>
                </v-toolbar>
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- INPUT AND OUTPUT -->
                <!-- +++++++++++++++++++++++++++++++ -->
                <v-row justify="center" align="start">
                    <!-- INPUT -->
                    <v-col cols="4">
                        <v-card flat class="pt-0">
                            <v-card-text class="py-0">
                                <v-text-field v-model.number="input.L" v-if="isEdit == 'SPAN'" prefix="L" class="pb-1" dense outlined suffix="ft" hide-details></v-text-field>
                                <v-text-field v-model.number="input.w" v-if="isEdit == 'UDL'" prefix="w" class="pb-1" dense outlined suffix="k/ft" hide-details></v-text-field>
                                <v-text-field v-model.number="input.E" v-if="isEdit == 'GRADE'" prefix="E" class="pb-1" dense outlined suffix="ksi" hide-details></v-text-field>
                                <v-text-field v-model.number="input.Ix" v-if="isEdit == 'SIZE'" prefix="Ix" class="pb-1" dense outlined suffix="in^4" hide-details></v-text-field>
                            
                                <v-text-field v-model="input.P" v-if="isEdit == 'PL'" prefix="P" class="pb-1" dense outlined suffix="k" hide-details></v-text-field>
                                <v-text-field v-model="input.a" v-if="isEdit == 'PL'" prefix="a" class="pb-1" dense outlined suffix="ft" hide-details></v-text-field>
                                <div class="d-block text-center">
                                    <v-btn icon medium class="primary " v-if="isEdit == 'PL'" @click="addPointLoad">
                                    <v-icon color="white">mdi-plus</v-icon>
                                </v-btn>
                                </div>
                                
                            </v-card-text>
                            <v-card-actions class="py-0">
                               
                                
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <!-- OUTPUT -->
                    <v-col cols="8">
                        <!-- <div class="text-center">
                            <div class="text-h4 font-weight-bold">M</div>
                            <div>
                               <span class="text-h5 red--text">{{ forces.M }}</span> 
                               <span class="subtitle-1"> k-ft</span>
                            </div>

                            <v-row>
                                <v-col cols="6">
                                    <div class="text-h4 font-weight-bold">RL</div>
                                    <div>
                                        <span class="text-h5 red--text">{{ forces.RL }}</span> 
                                        <span class="subtitle-1"> k</span>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="text-h4 font-weight-bold">RR</div>
                                    <div>
                                    <span class="text-h5  red--text">{{ forces.RR }}</span> 
                                    <span class="subtitle-1"> k</span>
                                    </div>

                                </v-col>
                            </v-row>
                           
                            <div class="text-h4 font-weight-bold">D</div>
                            <div>
                               <span class="text-h5  red--text">{{ forces.D }}</span> 
                               <span class="subtitle-1"> in</span>
                            </div>
                        </div> -->
                        <div>
                            <v-stage :config="{width:width, height:height}">
                                <v-layer ref="layer">
                                    <v-rect :config="configCanvas">
                                    </v-rect>
                                    <!-- TOOLBAR -->
                                    <!-- +++++++++++++++++++++++++++++++++++++++++ -->
                                    <!-- SPAN -->
                                   
                                    <!-- SIZE -->
                                    
                                     <!-- UDL -->
                                    
                                    <!-- POINTLOAD -->
                                    <konva-label :xo="0.60*width" :yo="0.03*height" text="ADD PL" :unit="''" :name="'PL'" :pointer="''" @selected-text="edit"></konva-label>

                                    <!-- GRAPHICS -->
                                    <!-- +++++++++++++++++++++++++++++++++++++++++ -->
                                    <!-- POINT LOAD -->
                                    <konva-point-load :xo="0.1*width" :yo="0.31*height" :width="0.8*width" :span="input.L" :pointLoads="input.PL" @delete-point-load="removePointLoad" v-if="input.PL.length > 0"></konva-point-load>
                                    <!-- UNIFORM LOAD -->
                                    <!-- <konva-text :xo="0.4*width" :yo="0.41*height" :text="input.w" :unit="'k/ft'" v-if="input.w > 0"></konva-text> -->
                                    <konva-uniform-load :xo="0.1*width" :yo="0.46*height" :width="0.8*width" :height="0.01*height" v-if="input.w > 0"></konva-uniform-load>
                                   
                                    <konva-label :xo="0.4*width" :yo="0.39*height" :text="input.w" :unit="'k/ft'" :name="'UDL'" :pointer="''" @selected-text="edit"></konva-label>
                                    
                                    
                                    <!-- BEAM SPAN -->
                                    <konva-span :xo="0.1*width" :yo="0.5*height" :length="0.8*width" :height="0"></konva-span>
                                    <!-- <konva-text :xo="0.40*width" :yo="0.55*height" :text="input.L" :unit="'ft'" v-if="input.L > 0"></konva-text> -->
                                    <konva-label :xo="0.25*width" :yo="0.52*height" :text="input.Ix" :unit="'in^4'" :name="'SIZE'" :pointer="''" @selected-text="edit"></konva-label>
                                    <konva-label :xo="0.55*width" :yo="0.52*height" :text="input.E" :unit="'ksi'" :decimal="0" :name="'GRADE'" :pointer="''" @selected-text="edit"></konva-label>
                                    <konva-label :xo="0.4*width" :yo="0.60*height" :text="input.L" :unit="'ft'" :name="'SPAN'" :pointer="''" @selected-text="edit"></konva-label>

                                    <!-- LEFT REACTIONS -->
                                    <konva-simple-support :xo="0.1*width" :yo="0.53*height" :radius="7" :rotation="0"></konva-simple-support>
                                    <konva-text :xo="0.05*width" :yo="0.55*height" :text="forces.RL" :unit="'k'" color="red"></konva-text>
                                    
                                    <!-- RIGHT REACTIONS -->
                                    <konva-simple-support :xo="0.9*width" :yo="0.53*height" :radius="7" :rotation="0"></konva-simple-support>
                                    <konva-text :xo="0.8*width" :yo="0.55*height" :text="forces.RR" :unit="'k'" color="red"></konva-text>

                                    <konva-text :xo="0.42*width" :yo="0.8*height" symbol="M" :text="forces.M" unit="k-ft" color="red"></konva-text>
                                    <konva-text :xo="0.42*width" :yo="0.85*height" symbol="D" :text="forces.D" unit="in" color="red"></konva-text>
                                </v-layer>
                            </v-stage>
                        </div>
                    </v-col>
                </v-row>
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- ACCORDIAN INPUTS -->
                <!-- +++++++++++++++++++++++++++++++ -->
                <v-row>
                    <v-col cols="12">
                        <v-expansion-panels accordion multiple flat>
                            <!-- POINT LOAD -->
                            <v-expansion-panel v-if="input.hasPointLoad">
                                <v-expansion-panel-header color="grey lighten-4" class="text-h6">Point Load</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-row justify="center" align="center">
                                        <v-col cols="4" class="py-0">
                                            <v-text-field v-model="input.P" label="P (k)" hide-details></v-text-field>
                                        </v-col>
                                         <v-col cols="4" class="py-0">
                                            <v-text-field v-model="input.a" label="a (ft)" hide-details></v-text-field>
                                        </v-col>
                                         <v-col cols="4" class="py-0 text-center">
                                            <v-btn icon small class="primary " @click="addPointLoad">
                                                <v-icon color="white">mdi-plus</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row v-for="(item, i) in input.PL" :key="i">
                                        <v-col cols="4" class="py-1 text-center">{{ item.P }}</v-col>
                                        <v-col cols="4" class="py-1 text-center">{{ item.a }}</v-col>
                                        <v-col cols="4" class="py-1 text-center">
                                            <v-btn icon small class="red" @click="removePointLoad(item)">
                                                <v-icon color="white">mdi-minus</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <!-- TRAPEZOIDAL LOAD -->
                            <v-expansion-panel v-if="input.hasTrapezoidalLoad">
                                <v-expansion-panel-header color="grey lighten-4" class="text-h6">Trapzoidal Load</v-expansion-panel-header>
                                <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, aliquid.</v-expansion-panel-content>
                            </v-expansion-panel>
                           
                        </v-expansion-panels>
                    </v-col>
                </v-row>
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- CHARTS -->
                <!-- +++++++++++++++++++++++++++++++ -->
                <v-row justify="center" align="center">
                    <v-col cols="12">
                        <Beam-Force-Chart
                            chartREF = "chartM"
                            :plotData = "forces.plotDataM"
                            plotTitle = "Moment Diagram"
                            plotLabelX = "Span (ft)"
                            plotLabelY = "Moment (k-ft)"
                        ></Beam-Force-Chart>
                    </v-col>
                    <v-col cols="12">
                        <Beam-Force-Chart
                            chartREF = "chartV"
                            :plotData = "forces.plotDataV"
                            plotTitle = "Shear Diagram"
                            plotLabelX = "Span (ft)"
                            plotLabelY = "Shear (k)"
                        ></Beam-Force-Chart>
                    </v-col>
                    <v-col cols="12">
                        <Beam-Force-Chart
                            chartREF = "chartD"
                            :plotData = "forces.plotDataD"
                            plotTitle = "Deflection Diagram"
                            plotLabelX = "Span (ft)"
                            plotLabelY = "Deflection (in)"
                        ></Beam-Force-Chart>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SimpleBeam from '@/classes/analysis/clsSimpleBeam'
import BeamForceChart from '@/components/charts/BeamForceChart'

import KonvaSpan from '@/components/graphics/KonvaSpan.vue'
import KonvaSimpleSupport from '@/components/graphics/KonvaSimpleSupport.vue'
import KonvaText from '@/components/graphics/KonvaText.vue'
import KonvaLabel from '@/components/graphics/KonvaLabel.vue'
import KonvaUniformLoad from '@/components/graphics/KonvaUniformLoad.vue'
import KonvaPointLoad from '@/components/graphics/KonvaPointLoad.vue'

import {graphics} from '@/mixins/graphicsMixin'

//import print from 'print-js'

export default {
    head: {
        title: 'Simple Beam',
    },
    middleware : [],
    components: {
        BeamForceChart, KonvaSpan, KonvaSimpleSupport, KonvaText, KonvaLabel,
        KonvaUniformLoad, KonvaPointLoad
    },//COMPONENTS
    mixins : [graphics],
    layout : 'default',
    data: () => ({
        input: {
            L: 12,
            w: 1,
            E: 29000,
            Ix: 100,
            id : 0,
            P: "",
            a: "",
            PL : [],
            hasPointLoad : false,
            hasTrapezoidalLoad: false,
        },
        configCanvas:{
            x: 0,
            y: 0,
            width: 350,
            height: 350,
            fill: '#F5F5F5',
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
        forces(){
           
            let B = new SimpleBeam(this.input)

            return{
                M: B.M(),
                V: B.V(),
                D: B.D(),
                RL: B.RL(),
                RR: B.RR(),
                plotDataM: B.plotM(),
                plotDataV: B.plotV(),
                plotDataD: B.plotD(),
            }


        },//FORCES
     
    },//COMPUTED
    methods:{
        addPointLoad(){
            this.input.id += 1
            this.input.PL.push({id:this.input.id, P: this.input.P, a: this.input.a})
            this.input.P = ""
            this.input.a =""
        },
        removePointLoad(id){
            this.input.PL.splice(
                this.input.PL.indexOf(
                    this.input.PL.filter(item => item.id == id)
                )
            , 1)
        },
        printPDF(){
            //window.resizeTo(800, 800);
            //window.resizeTo(screen.width-300,screen.height-500)
            //window.print();
            window.innerWidth = 960
            window.innerHeight = 1000

            //let d = document.getElementById("sideNav");
            //d.className += " removeSideNav";
            window.print();
        
        }
    },//METHODS  
}//EXPORT DEFAULT
</script>

<style scoped>
   
    .removeSideNav{
        display: none;
    }
    /* div.v-navigation-drawer__content{
        display: none !important;
    } */
    /* @media print{
        #topNav,#sideNav{
            display: none !important;
        }
        #mainContent {
            position:absolute;
            left:0;
            top:0;
        }
    } */

</style>

   