<template>
     <div>
        <v-row  justify="center" align="center">
            <v-col xs="12" sm="8" md="6">
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- TITLE -->
                <!-- +++++++++++++++++++++++++++++++ -->
                <v-toolbar flat dense color="blue white--text text-h5 font-weight-bold">
                    MASONRY BEARING WALL
                    <v-spacer></v-spacer>
                </v-toolbar>
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- INPUT AND OUTPUT -->
                <!-- +++++++++++++++++++++++++++++++ -->
                <v-row justify="center" align="start">
                    <!-- INPUT -->
                    <v-col cols="4">
                        <v-card flat class="pt-0">
                            <v-card-text class="py-0">
                                <v-text-field v-model.number="input.t" v-if="isEdit == 'THICKNESS'" prefix="t" class="pb-1" dense outlined suffix="in" hide-details></v-text-field>
                                <v-text-field v-model.number="input.h" v-if="isEdit == 'HEIGHT'" prefix="h" class="pb-1" dense outlined suffix="ft" hide-details></v-text-field>
                                <v-text-field v-model.number="input.fm" v-if="isEdit == 'GRADE'" prefix="fm" class="pb-1" dense outlined suffix="psi" hide-details></v-text-field>
                                <v-text-field v-model.number="input.S" v-if="isEdit == 'SPACING'" prefix="S" class="pb-1" dense outlined suffix="in" hide-details></v-text-field>
                            
                                <v-text-field v-model="input.DL" v-if="isEdit == 'DL'" prefix="DL" class="pb-1" dense outlined suffix="PLF" hide-details></v-text-field>
                                <v-text-field v-model="input.WL" v-if="isEdit == 'WL'" prefix="WL" class="pb-1" dense outlined suffix="PSF" hide-details></v-text-field>
                               
                            </v-card-text>
                            <v-card-actions class="py-0">
                               
                                
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <!-- OUTPUT -->
                    <v-col cols="8">
                        <div id="container">
                            <v-stage :config="{width:width, height:height}">
                                <v-layer ref="layer">
                                  
                                
                                 <!-- BEAM SPAN -->
                                    <konva-span :xo="0.3*width" :yo="0.5*height" :length="0" :height="0.8*height" ></konva-span>
                                </v-layer>
                            </v-stage>
                        </div>
                    </v-col>
                   
                </v-row>
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- ACCORDIAN INPUTS -->
                <!-- +++++++++++++++++++++++++++++++ -->
              
                <!-- +++++++++++++++++++++++++++++++ -->
                <!-- CHARTS -->
                <!-- +++++++++++++++++++++++++++++++ -->
               
            </v-col>
        </v-row>
    </div>
</template>

<script>
import KonvaSpan from '@/components/graphics/KonvaSpan.vue'

import KonvaText from '@/components/graphics/KonvaText.vue'
import KonvaLabel from '@/components/graphics/KonvaLabel.vue'

import {graphicsMixin} from '@/mixins/graphicsMixin'

export default {
    middleware : [],
    components: {
        KonvaSpan, KonvaText, KonvaLabel
    },//COMPONENTS
    mixins : [graphicsMixin],

    layout : 'default',
    data: () => ({
        input:{
            t: 8,
            h: 15,
            fm: 2000,
            S: 32,
            DL: 300,
            WL: 20
        },
        isEdit: 'DL'
       
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
      
    },//COMPUTED
    methods:{
     
    },//METHODS  
}//EXPORT DEFAULT
</script>

   