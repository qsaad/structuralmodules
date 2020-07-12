<template>
    <div>
        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- MODULE CARD -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <module-card-component title="SIMPLE BEAM NEW">
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- GRAPHICS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:graphics>
                <v-stage :config="{width:width, height:height}">
                    <v-layer ref="layer">
                        <v-rect :config="configCanvas"></v-rect>
                        <!-- GRAPHICS -->
                        <!-- +++++++++++++++++++++++++++++++++++++++++ -->
                        <!-- POINT LOAD -->
                        <konva-point-load :xo="0.1*width" :yo="0.1*height" :width="0.8*width" :span="input.L" :pointLoads="input.PL" @delete-point-load="removePointLoad" v-if="input.PL.length > 0"></konva-point-load>
                        
                        <!-- UNIFORM LOAD -->
                        <konva-text :xo="0.4*width" :yo="0.27*height" :text="input.w" :unit="'k/ft'" v-if="input.w > 0"></konva-text>
                        <konva-uniform-load :xo="0.1*width" :yo="0.32*height" :width="0.8*width" :height="0.01*height" v-if="input.w > 0"></konva-uniform-load>
            
                        <!-- BEAM SPAN -->
                        <konva-span :xo="0.1*width" :yo="0.36*height" :length="0.8*width" :height="0"></konva-span>
                        <konva-text :xo="0.25*width" :yo="0.39*height" :text="input.Ix" :decimal="0" :unit="'in^4'" v-if="input.L > 0"></konva-text>
                        <konva-text :xo="0.55*width" :yo="0.39*height" :text="input.E" :decimal="0" :unit="'ksi'" v-if="input.L > 0"></konva-text>
                        
                        <konva-dim :xo="0.1*width" :yo="0.49*height" :L="0.8*width"></konva-dim>
                        <konva-text :xo="0.40*width" :yo="0.44*height" :text="input.L" :unit="'ft'" v-if="input.L > 0"></konva-text>
                        <!-- LEFT REACTIONS -->
                        <konva-simple-support :xo="0.1*width" :yo="0.40*height" :radius="7" :rotation="0"></konva-simple-support>
                        <konva-text :xo="0.05*width" :yo="0.58*height" :text="forces.RL" :unit="'k'" color="red"></konva-text>
                        
                        <!-- RIGHT REACTIONS -->
                        <konva-simple-support :xo="0.9*width" :yo="0.40*height" :radius="7" :rotation="0"></konva-simple-support>
                        <konva-text :xo="0.8*width" :yo="0.58*height" :text="forces.RR" :unit="'k'" color="red"></konva-text>
                        <konva-text :xo="0.42*width" :yo="0.58*height" symbol="M" :text="forces.M" unit="k-ft" color="red"></konva-text>
                        <konva-text :xo="0.42*width" :yo="0.63*height" symbol="D" :text="forces.D" unit="in" color="red"></konva-text>
                       
                    </v-layer>
                </v-stage>
            </template> 
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- CALCULATIONS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:calculations>
                <v-expansion-panels accordion multiple flat>
                    <!-- POINT LOAD -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">Point Load</v-expansion-panel-header>
                        <v-expansion-panel-content>
                           Calculation 1
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- TRAPEZOIDAL LOAD -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">Trapzoidal Load</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Calculation 2
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>   
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- CHARTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:charts>
                <Beam-Force-Chart
                    chartREF = "chartM"
                    :plotData = "forces.plotDataM"
                    plotTitle = "Moment Diagram"
                    plotLabelX = "Span (ft)"
                    plotLabelY = "Moment (k-ft)"
                ></Beam-Force-Chart>

                <Beam-Force-Chart
                    chartREF = "chartV"
                    :plotData = "forces.plotDataV"
                    plotTitle = "Shear Diagram"
                    plotLabelX = "Span (ft)"
                    plotLabelY = "Shear (k)"
                ></Beam-Force-Chart>

                 <Beam-Force-Chart
                    chartREF = "chartD"
                    :plotData = "forces.plotDataD"
                    plotTitle = "Deflection Diagram"
                    plotLabelX = "Span (ft)"
                    plotLabelY = "Deflection (in)"
                ></Beam-Force-Chart>
            </template>      
        </module-card-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- INPUT -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-sheet-component :sheet="sheet">
             <div v-if="isEdit == 'BEAM'">
                <input-data-component  label="L" unit="ft">
                    <v-text-field v-model.number="input.L" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="I<sub>X</sub>" unit="in<sup>4</sup>">
                    <v-text-field v-model.number="input.Ix" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="E" unit="ksi">
                    <v-text-field v-model.number="input.E" dense outlined hide-details></v-text-field>
                </input-data-component>
            </div>
             <div v-if="isEdit == 'LOAD'">
                <input-data-component  label="UDL" unit="k/ft">
                    <v-text-field v-model.number="input.w" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="P" unit="k">
                    <v-text-field v-model="input.P" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="a" unit="ft">
                    <v-text-field v-model="input.a" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="" unit="">
                    <div class="d-block text-center">
                        <v-btn icon medium class="primary " @click="addPointLoad">
                            <v-icon color="white">mdi-plus</v-icon>
                        </v-btn>
                    </div>
                </input-data-component>
            </div>
        </bottom-sheet-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- TOOLBAR -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-navigation-component>
            <v-btn-toggle v-model="isEdit" rounded background-color="teal lighten-2" color="white">
                <v-btn value = 'BEAM' @click="sheet = true">BEAM</v-btn>
                <v-btn value = 'LOAD' @click="sheet = true">LOAD</v-btn>
            </v-btn-toggle>
        </bottom-navigation-component>
      
    </div>
</template>

<script>
//CLASSES
import SimpleBeam from '@/classes/analysis/clsSimpleBeam'
import BeamForceChart from '@/components/charts/BeamForceChart'

//MIXIN
import {graphicsMixin} from '@/mixins/graphicsMixin'
import {moduleMixin} from '@/mixins/moduleMixin'

export default {
    head: {
        title: 'Simple Beam',
    },
    middleware : [],
    components: {
        BeamForceChart, 
    },//COMPONENTS
    mixins : [graphicsMixin, moduleMixin],
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
            // hasPointLoad : false,
            // hasTrapezoidalLoad: false,
        },
       
       
        
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
       
    },//METHODS  
}//EXPORT DEFAULT
</script>


   