<template>
    <tr>
        <td v-html="name"></td>
        <td v-html="computedValue"></td>
        <td v-html="unit"></td>
    </tr>
    
</template>

<script>


export default {
    name: 'ParameterValueComponent',
    components: {
        
    },//COMPONENTS
    props:{
        name : {type: String, default: ''},
        value : {type: [String, Number],default: 0},
        unit : {type: String, default: ''},
        decimal : {type:Number,default:2},
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
       computedValue(){
            return (typeof this.value === 'string') ? this.value   :  (this.value).toFixed(this.decimal) 
        },
   
    },//COMPUTED
    methods:{

    }//METHODS

}//EXPORT DEFAULT
</script>

<style scoped>

</style>