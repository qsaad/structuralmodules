<template>
    <v-row justify="start" align="center">
        <v-col cols="4" class="pt-0 pb-1">
            <div v-html="label" class="font-weight-bold"></div>
        </v-col>
        <v-col cols="6" class="pt-0 pb-1">
            <slot></slot>
        </v-col>
        <v-col cols="2" class="pt-0 pb-1">
            <div v-html="unit" class="font-weight-bold"></div>
        </v-col>
    </v-row>
</template>

<script>


export default {
    name:'InputDataComponent',
    components:{
        
    },//COMPONENTS
    props:{
       label : {type:String,default:''},
       unit : {type:String,default:''},
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