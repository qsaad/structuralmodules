<template>
    <div>
        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- MODULE CARD -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <module-card-component title="MASONRY WALL CAPACITY (ASD)">
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- GRAPHICS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:graphics>
                <v-stage :config="{width:width, height:height}">
                    <v-layer ref="layer">
                        <v-rect :config="configCanvas"></v-rect>
                        <!-- GRAPHICS -->
                        <!-- +++++++++++++++++++++++++++++++++++++++++ -->
                        <v-rect :config="block"></v-rect>
                        
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
                        <span class="headline font-weight-bold">M<sub>a</sub> :</span>
                        <span class="headline font-weight-bold red--text">{{ (calc.Ma).toFixed(0) }} </span>
                        <span class="subtitle-2 font-weight-bold">lb-ft</span>
                    </v-card-text>
                </v-card>
                <v-card flat tile outlined class="mx-23">
                    <v-card-text class="title py-0 mx-2 px-0">
                        <span class="headline font-weight-bold">P<sub>a</sub> :</span>
                        <span class="headline font-weight-bold red--text">{{ (calc.Pa).toFixed(0) }} </span>
                        <span class="subtitle-2 font-weight-bold">lb</span>
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
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">FLEXURAL CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <parameter-value-component name="E<sub>s</sub>" :value="calc.Es" :decimal="0" unit="ksi"></parameter-value-component>
                                <parameter-value-component name="E<sub>m</sub>" :value="calc.Em" :decimal="0" unit="ksi"></parameter-value-component>
                                <parameter-value-component name="n" :value="calc.n" unit=""></parameter-value-component>
                                <parameter-value-component name="b<sub>e</sub>" :value="calc.b" unit="in"></parameter-value-component>
                                <parameter-value-component name="d<sub>b</sub>" :value="calc.db" unit="in"></parameter-value-component>
                                <parameter-value-component name="A<sub>b</sub>" :value="calc.Ab" unit="in"></parameter-value-component>
                                <parameter-value-component name="d" :value="calc.d" unit="in"></parameter-value-component>
                                <parameter-value-component name="&rho;" :value="calc.rho" :decimal="3" unit=""></parameter-value-component>
                                <parameter-value-component name="k" :value="calc.k" :decimal="3" unit=""></parameter-value-component>
                                <parameter-value-component name="kd" :value="calc.kd" :decimal="3" unit="in"></parameter-value-component>
                                <parameter-value-component name="C<sub>f</sub>" :value="calc.Cf" :decimal="0" unit="lb"></parameter-value-component>
                                <parameter-value-component name="k<sub>1</sub>" :value="calc.k1" :decimal="3" unit=""></parameter-value-component>
                                <parameter-value-component name="j" :value="calc.j" :decimal="3" unit="in"></parameter-value-component>
                                <parameter-value-component name="F<sub>b</sub>" :value="calc.Fb" :decimal="0" unit="psi"></parameter-value-component>
                                <parameter-value-component name="F<sub>s</sub>" :value="calc.Fs" :decimal="0" unit="psi"></parameter-value-component>
                                <parameter-value-component name="M<sub>m</sub>" :value="calc.Mm" :decimal="0" unit="lb-ft"></parameter-value-component>
                                <parameter-value-component name="M<sub>s</sub>" :value="calc.Ms" :decimal="0" unit="lb-ft"></parameter-value-component>
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                     <!-- SECTION PROPERTIES -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">SECTION PROPERTIES</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <parameter-value-component name="A<sub>n</sub>" :value="calc.An" :decimal="3" unit="in<sup>2</sup>"></parameter-value-component>
                                <parameter-value-component name="I<sub>x</sub>" :value="calc.Ix" :decimal="3" unit="in<sup>4</sup>"></parameter-value-component>
                                <parameter-value-component name="S<sub>x</sub>" :value="calc.Sx" :decimal="3" unit="in<sup>3</sup>"></parameter-value-component>
                                <parameter-value-component name="r" :value="calc.r"  unit="in"></parameter-value-component>
                                <parameter-value-component name="wt" :value="calc.wt"  unit="lb/ft"></parameter-value-component>
                                
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- AXIAL CAPACITY -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">AXIAL CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <parameter-value-component name="h/r" :value="calc.SR" :decimal="3" unit=""></parameter-value-component>
                                <parameter-value-component name="F<sub>a</sub>" :value="calc.Fa" :decimal="0" unit="psi"></parameter-value-component>
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
            <div v-if="isEdit == 'WALL'">
                <input-data-component  label="t" unit="in">
                    <v-combobox v-model="input.t" :items="thicknessList"  dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="h" unit="ft">
                    <v-text-field v-model.number="input.h" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="fm" unit="psi">
                    <v-text-field v-model.number="input.fm" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component  label="Grout" unit="">
                    <v-combobox v-model="input.grout" :items="groutList"  dense outlined hide-details></v-combobox>
                </input-data-component>
            </div>
            <div v-if="isEdit == 'REBAR'">
                <input-data-component  label="Size" unit="">
                    <v-combobox v-model="input.rebarSize" :items="rebarList" dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="Spacing" unit="in">
                    <v-combobox v-model="input.rebarSpa" :items="spacingList" dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="Location" unit="">
                    <v-combobox v-model="input.rebarLocation" :items="locationList" dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component label="Cover" unit="in">
                    <v-text-field v-model.number="input.cover" dense outlined hide-details></v-text-field>
                </input-data-component>
            </div>
        </bottom-sheet-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- TOOLBAR -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-navigation-component>
            <v-btn-toggle v-model="isEdit" rounded background-color="teal lighten-2" color="white">
                <v-btn value = 'WALL' @click="sheet = true">WALL</v-btn>
                <v-btn value = 'REBAR' @click="sheet = true">REBAR</v-btn>
            </v-btn-toggle>
        </bottom-navigation-component>
    </div>
</template>

<script>
//DATA
import {rebar, rebarList, FyList} from '@/data/concrete/rebar'
//CLASSES
import Wall from '@/classes/masonry/clsWall'

//MIXIN
import {graphicsMixin} from '@/mixins/graphicsMixin'
import {moduleMixin} from '@/mixins/moduleMixin'
import {masonryMixin} from '@/mixins/masonryMixin'

export default {
    head: {
        title: 'Masonry Wall Capacity',
    },
    middleware : [],
    components: {
       
    },//COMPONENTS
    mixins : [graphicsMixin, moduleMixin, masonryMixin],
    layout : 'default',
    data: () => ({
        input: {
            t: 8,
            h: 15,
            fm: 2000,
            rebarSize: "#5",
            rebarSpa: 32,
            rebarLocation: "Center",
            cover: 1.5,
            grout: 'Partial'
        },
        block:{
            x: 10,
            y: 10,
            width: 30,
            height: 15,
            fill: 'red',
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
          let W = new Wall(this.input)
          return{
                //CAPACITY
                Ma: W.Ma(),
                Pa: W.Pa(),
                //PARAMETER
                Es: W.Es,
                Em: W.Em(),
                n: W.n(),
                b: W.b(),
                db: W.db(),
                Ab: W.Ab(),
                d: W.d(),
                rho: W.rho(),
                k: W.k(),
                kd: W.kd(),
                Cf: W.Cf(),
                k1: W.k1(),
                j: W.j(),
                Fb: W.Fb(),
                Fs: W.Fs(),
                Mm: W.Mm(),
                Ms: W.Ms(),
                //SECTION PROPERTIES
                An: W.An,
                Ix: W.Ix,
                Sx: W.Sx,
                r: W.r,
                wt: W.wt,
                //AXIAL CAPACITY
                SR: W.SR(),
                Fa: W.Fa(),
          }
      }
    },//COMPUTED
    methods:{
        
       
    },//METHODS  
}//EXPORT DEFAULT
</script>


   