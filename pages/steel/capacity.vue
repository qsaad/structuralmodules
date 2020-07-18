<template>
    <div>
        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- MODULE CARD -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <module-card-component title="STEEL CAPACITY">
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
                        <konva-text :xo="0.4*width" :yo="0.27*height" :text="input.L" :unit="'in'"></konva-text>

                      
                        
            
                    </v-layer>
                </v-stage>
            </template> 
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- RESULTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <template v-slot:results>
                <div class="d-flex flex-wrap justify-center">
                    <output-value-component :method="input.method" title="M<sub>nx</sub>" :value="calc.fMnx" unit="k-ft" :decimal="0"></output-value-component>
                    <output-value-component :method="input.method" title="M<sub>ny</sub>" :value="calc.fMny" unit="k-ft" :decimal="0"></output-value-component>
                    <output-value-component :method="input.method" title="V<sub>nx</sub>" :value="calc.fVnx" unit="k" :decimal="0"></output-value-component>
                    <output-value-component :method="input.method" title="V<sub>ny</sub>" :value="calc.fVny" unit="k" :decimal="0"></output-value-component>
                    <output-value-component :method="input.method" title="P<sub>n</sub>" :value="calc.fPn" unit="k" :decimal="0"></output-value-component>
                    <output-value-component :method="input.method" title="T<sub>n</sub>" :value="calc.fTn" unit="k" :decimal="0"></output-value-component>
               </div>
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
                                <parameter-value-component 
                                    :name="item.name" 
                                    :value="item.value" 
                                    :decimal="item.decimal" 
                                    :unit="item.unit"
                                    v-for="(item, key,i) in calc.flexureParams" :key="i"
                                >
                                </parameter-value-component>
                                
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                     <!-- SHEAR CAPACITY -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">SHEAR CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <!-- <parameter-value-component name="h/r" :value="calc.SR" :decimal="3" unit=""></parameter-value-component> -->
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- AXIAL CAPACITY -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">AXIAL CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <!-- <parameter-value-component name="h/r" :value="calc.SR" :decimal="3" unit=""></parameter-value-component> -->
                                
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- TENSION CAPACITY -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">TENSION CAPACITY</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <!-- <parameter-value-component name="h/r" :value="calc.SR" :decimal="3" unit=""></parameter-value-component> -->
                                
                            </parameter-table-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- SECTION PROPERTIES -->
                    <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-4" class="text-h6">SECTION PROPERTIES</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <parameter-table-component>
                                <!-- <parameter-value-component name="h/r" :value="calc.SR" :decimal="3" unit=""></parameter-value-component> -->
                                
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
             <div v-if="isEdit == 'SECTION'">
                <input-data-component  label="Method" unit="">
                    <v-combobox v-model="input.method" :items="methodList"  dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component  label="Type" unit="">
                    <v-combobox v-model="input.type" :items="typeList"  dense outlined hide-details></v-combobox>
                </input-data-component>
                <input-data-component  label="Shape" unit="">
                    <v-combobox v-model="input.shape" :items="items"  dense outlined hide-details></v-combobox>
                </input-data-component>
            </div>
            <div v-if="isEdit == 'BEAM'">
                <input-data-component label="L<sub>u</sub>" unit="ft">
                    <v-text-field v-model.number="input.Lu" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component  label="Fy" unit="">
                    <v-combobox v-model="input.Fy" :items="FyList"  dense outlined hide-details></v-combobox>
                </input-data-component>
            </div>
            <div v-if="isEdit == 'COLUMN'">
                <input-data-component label="K<sub>x</sub>" unit="">
                    <v-text-field v-model.number="input.Kx" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="L<sub>x</sub>" unit="ft">
                    <v-text-field v-model.number="input.Lx" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="K<sub>y</sub>" unit="">
                    <v-text-field v-model.number="input.Ky" dense outlined hide-details></v-text-field>
                </input-data-component>
                <input-data-component label="L<sub>y</sub>" unit="ft">
                    <v-text-field v-model.number="input.Ly" dense outlined hide-details></v-text-field>
                </input-data-component>
            </div>
        </bottom-sheet-component>

        <!-- +++++++++++++++++++++++++++++++ -->
        <!-- TOOLBAR -->
        <!-- +++++++++++++++++++++++++++++++ -->
        <bottom-navigation-component>
            <v-btn-toggle v-model="isEdit" rounded background-color="teal lighten-2" color="white">
                <v-btn value = 'SECTION' @click="sheet = true">SECTION</v-btn>
                <v-btn value = 'BEAM' @click="sheet = true">BEAM</v-btn>
                <v-btn value = 'COLUMN' @click="sheet = true">COLUMN</v-btn>
            </v-btn-toggle>
        </bottom-navigation-component>
    </div>
</template>

<script>
//DATA
import {DataW} from '@/data/steel/DataW' 
import {DataWT} from '@/data/steel/DataWT' 
import {DataHSS} from '@/data/steel/DataHSS'
import {DataC} from '@/data/steel/DataC'
import {DataMC} from '@/data/steel/DataMC'
import {DataPipe} from '@/data/steel/DataPipe'
import {DataHSR} from '@/data/steel/DataHSR'
import {DataLLBB} from '@/data/steel/DataLLBB'
import {DataLU} from '@/data/steel/DataLU'

//CLASSES
import CapacityW from '@/classes/steel/clsCapacityW'
import CapacityWT from '@/classes/steel/clsCapacityWT'
import CapacityHSS from '@/classes/steel/clsCapacityHSS'
import CapacityHSR from '@/classes/steel/clsCapacityHSR'
import CapacityC from '@/classes/steel/clsCapacityC'
import CapacityMC from '@/classes/steel/clsCapacityMC'
import CapacityPipe from '@/classes/steel/clsCapacityPipe'
import CapacityLLBB from '@/classes/steel/clsCapacityLLBB'
import CapacityLU from '@/classes/steel/clsCapacityLU'

//COMPONENTS
import OutputValueComponent from '@/components/layout/OutputValueComponent'

//MIXIN
import {graphicsMixin} from '@/mixins/graphicsMixin'
import {moduleMixin} from '@/mixins/moduleMixin'
import {steelMixin} from '@/mixins/steelMixin'

export default {
    head: {
        title: 'Steel Capacity',
    },
    middleware : [],
    components: {
       OutputValueComponent
    },//COMPONENTS
    mixins : [graphicsMixin, moduleMixin, steelMixin],
    layout : 'default',
    data: () => ({
        input: {
            type: 'W',
            shape: 'W18X50',
            method: 'ASD',
            Lu: 15,
            Lx: 15,
            Ly: 15,
            Kx: 1,
            Ky: 1,
            Fy: 50,
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
        //console.log(list_W)
        DataW.forEach(item => this.shapeList.push(item))
    },//MOUNTED
    watch: {
      
    },//WATCH
    computed:{
        items(){
            this.shapeList = []
            this.FyList = []
            switch(this.input.type){
                    case ('W'):
                        DataW.forEach(item => this.shapeList.push(item))
                        this.FyList = [36,50]
                        this.input.Fy = 50
                        this.input.shape = 'W18X50'
                        break
                    case ('WT'):
                        DataWT.forEach(item => this.shapeList.push(item))
                        this.FyList = [36,50]
                        this.input.Fy = 50
                        this.input.shape = 'WT5X6'
                        break
                    case ('HSS'):
                        DataHSS.forEach(item => this.shapeList.push(item)) 
                        this.FyList = [46]
                        this.input.Fy = 46
                        this.input.shape = 'HSS14X6X3/16'
                        break
                    case ('C'):
                        DataC.forEach(item => this.shapeList.push(item))
                        this.FyList = [36,50]
                        this.input.Fy = 36
                        this.input.shape = 'C15X33.9'
                        break
                    case ('MC'):
                        DataMC.forEach(item => this.shapeList.push(item))
                        this.FyList = [36,50]
                        this.input.Fy = 36
                        this.input.shape = 'MC6X12'
                        break
                    case ('Pipe'):
                        DataPipe.forEach(item => this.shapeList.push(item)) 
                        this.FyList = [35]
                        this.input.Fy = 35
                        this.input.shape = 'PIPE3-1/2STD'
                        break
                    case ('HSR'):
                        DataHSR.forEach(item => this.shapeList.push(item)) 
                        this.FyList = [42]
                        this.input.Fy = 42
                        this.input.shape = 'HSS6X.250'
                        break
                    case ('LLBB'):
                        DataLLBB.forEach(item => this.shapeList.push(item)) 
                        this.FyList = [36,50]
                        this.input.Fy = 36
                        this.input.shape = '2L5X3-1/2X5/16LLBB'
                        break
                    case ('LU'):
                        DataLU.forEach(item => this.shapeList.push(item)) 
                        this.FyList = [36,50]
                        this.input.Fy = 36
                        this.input.shape = 'L4X3-1/2X5/16'
                        break
            }//SWITCH

            return this.shapeList.map(({Shape}) => Shape)
           
        },//ITEMS
        calc(){
            let B = {}

            switch(this.input.type){
                    case ('W'):
                        B = new CapacityW(this.input)
                        break
                    case ('WT'):
                        B = new CapacityWT(this.input)
                        break
                    case ('HSS'):
                        B = new CapacityHSS(this.input)
                        break
                    case ('C'):
                        B = new CapacityC(this.input)
                        break
                    case ('MC'):
                        B = new CapacityMC(this.input) 
                        break
                    case ('Pipe'):
                        B = new CapacityPipe(this.input)
                        break
                    case ('HSR'):
                        B = new CapacityHSR(this.input)
                        break
                    case ('LLBB'):
                        B = new CapacityLLBB(this.input)
                        break
                    case ('LU'):
                        B = new CapacityLU(this.input)
                        break
                }//SWITCH

          return{
                //CAPACITY
                fMnx: B.fMnx(),
                fMny: B.fMny(),
                fVnx: B.fVnx(),
                fVny: B.fVny(),
                fPn: B.fPn(),
                fTn: B.fTn(),
                flexureParams: B.flexureParams(),
                axialParams: B.axialParams() ,
                shearParams: B.shearParams(),
                tensionParams: B.tensionParams(),
                // torsionParams: B.torsionParams(),
          }//RETURN
      }//CALC
    },//COMPUTED
    methods:{
        
       
    },//METHODS  
}//EXPORT DEFAULT
</script>


   