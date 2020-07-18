<template>
    <div>
        <v-shape :config="{
            sceneFunc: function(context, shape) {
                context.beginPath();
                context.moveTo(xo, yo);
                path.forEach(item => {
                    context.lineTo(item.x, item.y);
                })
                context.closePath();

                // special Konva.js method
                context.fillStrokeShape(shape);
            },
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            rotation: rotation,
            //draggable: true
        }"></v-shape>

    </div>
</template>

<script>


export default {
    name:'KonvaPath',
    components:{
        
    },//COMPONENTS
    props:{
        xo : {type:Number,default:0},
        yo : {type:Number,default:0},
        path : {type:Array,default:[]},
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
