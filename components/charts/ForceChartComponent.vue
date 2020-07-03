<template>
    <div class="chart-container" style="height:800px; width:400px">
        <canvas id="myChart" ></canvas>
    </div>
</template>

<script>
import Chart from "chart.js";

export default {
    middleware : [],
    components: {
  
    },//COMPONENTS
    mixins : {},
    layout : 'default',
    data: () => ({
     
    }),//DATA
    props:{
        plotData: {type: Array, default: []},
        plotTitle: {type: String, default: ""},
        plotLabelX: {type: String, default: ""},
        plotLabelY: {type: String, default: ""},
    },
    async asyncData({store}){
        return{
         
        }//RETURN
    },//ASYNC DATA
    async fetch({store}){
      
    },
    created(){
      
    
    },//CREATED
    mounted(){
        let chart = null;
        let ctx = document.getElementById("myChart").getContext("2d");
        chart = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
            {
                //label: "My First dataset",
                //backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: this.plotData
            }
            ] //DATASET
        }, //DATA
        options: {
            responsive: true,
            legend: {
            display: false
            }, //LEGENDS
            title: {
            display: true,
            text: this.plotTitle
            },
            scales: {
            xAxes: [
                {
                scaleLabel: {
                    display: true,
                    labelString: this.plotLabelX
                },

                type: "linear"
                }
            ], //X AXES
            yAxes: [
                {
                scaleLabel: {
                    display: true,
                    labelString: this.plotLabelY
                }
                }
            ] //Y AXES
            } //SCALE
        } //OPTIONS
        }); //CHART
      
    },//MOUNTED
    watch: {
     
    },//WATCH
    computed:{
      
    },//COMPUTED
    methods:{
     
    },//METHODS  
}//EXPORT DEFAULT
</script>

   