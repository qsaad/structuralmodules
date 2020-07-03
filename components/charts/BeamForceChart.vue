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
        chart: {}
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
        this.plotChart
      
    },//MOUNTED
    watch: {
        plotData (val) {
            this.chart.data.datasets[0].data = val
            this.chart.update();
        }
    },//WATCH
    computed:{
        plotChart(){
            // let chart = null;
            let ctx = document.getElementById("myChart").getContext("2d");
            this.chart = new Chart(ctx, {
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
                    }, //SCALE
                    tooltips: {
                        displayColors: false,
                        callbacks: {
                            title: (tooltipItem) => {
                                return ""
                            },
                            label: (tooltipItem, data) => {
                                return `X : ${tooltipItem.xLabel.toFixed(2)} ft, M : ${tooltipItem.yLabel.toFixed(2)} k-ft`
                            }
                        }
                    }
                } //OPTIONS
            }); //CHART
            
        }//PlotChart
    },//COMPUTED
    methods:{
     
    },//METHODS  
}//EXPORT DEFAULT
</script>

   