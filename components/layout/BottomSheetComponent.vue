<template>
    <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center" max-height="250px">
               <v-row justify="center" align="start">
                   <v-col cols="8" sm="6" md="4">
                       <slot></slot>
                   </v-col>
               </v-row>
            </v-sheet>
    </v-bottom-sheet>
</template>

<script>


export default {
    name:'BottomSheetComponent',
    components:{
        
    },//COMPONENTS
    props:{
        sheet : {type:Boolean,default:false},
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