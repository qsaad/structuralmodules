<template>
    <v-card flat tile outlined class="mx-2 my-1">
        <v-card-text class="title py-0 mx-2 px-0">
            <span class="headline font-weight-bold" v-html="computedTitle"></span>
            <span class="headline font-weight-bold red--text">{{value.toFixed(decimal)}}</span>
            <span class="subtitle-2 font-weight-bold" v-html="unit"></span>
        </v-card-text>
    </v-card>
</template>

<script>


export default {
    name:'OutputValueComponent',
    components:{
        
    },//COMPONENTS
    props:{
       title: {type:String,default:''},
       value: {type:[String, Number],default:''},
       unit: {type:String,default:''},
       decimal: {type:Number,default:2},
       method: {type:String,default:''},
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
       computedTitle(){
           if(this.method == ''){
               return this.title
           }
           else{
               return this.method == 'ASD' ? this.title + "/&Omega; :"  : "&phi;" + this.title + " :"
           }
       }
   
    },//COMPUTED
    methods:{

    }//METHODS

}//EXPORT DEFAULT
</script>

<style scoped>

</style>