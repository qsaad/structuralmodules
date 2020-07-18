<template>
    <v-row  wrap justify="center" align="center">
        <v-col cols="12" xs="12" sm="8" md="10">
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- TITLE -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <v-toolbar flat dense color="blue white--text text-h5 font-weight-bold">
                {{title}}
                <v-spacer></v-spacer>
                <!-- <v-btn @click="printPDF()">PDF</v-btn> -->
            </v-toolbar>
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- GRAPHICS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <v-row justify="center" align="center">  
                <v-col cols="12" xs="12" sm="8" md="6" class="d-flex justify-center">
                    <div id="moduleCalculation">
                        <slot name="graphics"></slot>
                   </div>
                </v-col>
            </v-row>
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- RESULTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <v-row justify="center" align="center">
                <v-col cols="12" class="py-0 d-flex justify-center flex-wrap">
                    <slot name="results"></slot>
                </v-col>
            </v-row>
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- ACCORDIAN INPUTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <v-row>
                <v-col cols="12">
                    <slot name="calculations"></slot>
                </v-col>
            </v-row>
            <!-- +++++++++++++++++++++++++++++++ -->
            <!-- CHARTS -->
            <!-- +++++++++++++++++++++++++++++++ -->
            <v-row justify="center" align="center">
                <v-col cols="12">
                  <slot name="charts"></slot>
                </v-col>
            </v-row><!-- CHARTS ROW -->
        </v-col><!-- MAIN COL -->
    </v-row><!-- MAIN ROW -->
</template>

<script>
//import {printPdfMixin} from '@/mixins/printPdfMixin'


export default {
    name:'ModuleCardComponent',
    components:{
        
    },//COMPONENTS
    //mixins : [printPdfMixin],
    props:{
       title : {type:String,default:""},
    },
    data(){
        return{

        }//RETURN
    },//DATA
    created(){
       
    },//CREATED
    mounted(){
        
    },//MOUNTED
    computed:{
       
   
    },//COMPUTED
    methods:{

    }//METHODS

}//EXPORT DEFAULT
</script>

<style scoped>

</style>