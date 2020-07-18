<template>
    <div>
        <v-rect 
            :config="{
                x: xo,
                y: yo,
                width: length,
                height: 5,
                fill: '#f4a460',
                stroke: 'black',
                strokeWidth: 1,
                opacity : 1,
                rotation : rotation,
            }"  
        >
        </v-rect>
    </div>
</template>

<script>


export default {
    name:'KonvaSpan',
    components:{
        
    },//COMPONENTS
    props:{
        xo : {type:Number,default:0},
        yo : {type:Number,default:0},
        length : {type:Number,default:10},
        height : {type:Number,default:0},
        rotation : {type:Number,default:0},
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


