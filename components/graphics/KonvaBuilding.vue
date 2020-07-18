<template>
    <div>
        {{ computedHeight }}
        {{ computedLevels }}
        <v-shape :config="{
            sceneFunc: function(context, shape) {
                context.beginPath();
                context.moveTo(xo, yo);
                context.lineTo(xo, yo - height);
                context.lineTo(xo + width, yo - height);
                context.lineTo(xo + width, yo);
                context.lineTo(xo, yo);

                floors.forEach(item => {
                    context.moveTo(xo, yo - item);
                    context.lineTo(xo + width, yo - item);
                })

                context.closePath();

                // special Konva.js method
                context.fillStrokeShape(shape);
            },
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
        }"></v-shape>

    </div>
</template>

<script>


export default {
    name:'KonvaBuilding',
    components:{
        
    },//COMPONENTS
    props:{
        xo : {type:Number,default:0},
        yo : {type:Number,default:0},
        //height:  {type:Number,default:0},
        width: {type:Number,default:0},
        floors : {type:Array,default:[]},
    },
    data(){
        return{
           levels: []
        }//RETURN
    },//DATA
    created(){
       
    },//CREATED
    mounted(){
        
    },//MOUNTED
    computed:{
        computedHeight(){
            this.height = this.floors.reduce( (acc, item) => {acc + item}, 0)
            console.log(this.height)
        },
        computedLevels(){
            this.floors.reduce( (acc, item) => {this.levels.push(acc + item)}, 0)
            console.log(this.levels)
        }
        
    },//COMPUTED
    methods:{
        
    }//METHODS

}//EXPORT DEFAULT
</script>

<style scoped>

</style>
