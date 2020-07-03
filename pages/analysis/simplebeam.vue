<template>
    <div>
        <v-row  justify="center" align="center">
            <v-col xs="8" sm="6" md="4">
                <v-toolbar flat dense color="blue white--text font-weight-bold">SIMPLE BEAM</v-toolbar>
                <v-row justify="center" align="center">
                    <v-col cols="6">
                        <v-card flat>
                            <v-card-text>
                                <v-text-field v-model="L" label="L (ft)"></v-text-field>
                                <v-text-field v-model="w" label="w (k/ft)"></v-text-field>
                                <v-text-field v-model="E" label="E (ksi)"></v-text-field>
                                <v-text-field v-model="Ix" label="Ix (in^4)"></v-text-field>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <div class="text-center">
                            <div class="display-2 font-weight-bold">M</div>
                            <div>
                               <span class="display-1 red--text">{{ forces.M }}</span> 
                               <span class="subtitle"> k-ft</span>
                            </div>

                            <div class="display-2 font-weight-bold">V</div>
                            <div>
                               <span class="display-1  red--text">{{ forces.V }}</span> 
                               <span class="subtitle"> k</span>
                            </div>

                            <div class="display-2 font-weight-bold">D</div>
                            <div>
                               <span class="display-1  red--text">{{ forces.D }}</span> 
                               <span class="subtitle"> in</span>
                            </div>
                        </div>

                    </v-col>
                </v-row>
                <!-- <v-row>
                    <v-col cols="12">
                        {{ forces.plotData }}
                    </v-col>
                </v-row> -->
                <v-row>
                    <v-col cols="12">
                        <Beam-Force-Chart
                            :plotData = "forces.plotData"
                            :plotTitle = "forces.plotTitle"
                            :plotLabelX = "forces.plotLabelX"
                            :plotLabelY = "forces.plotLabelY"
                        ></Beam-Force-Chart>
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SimpleBeam from '@/classes/analysis/clsSimpleBeam'
import  BeamForceChart  from '@/components/charts/BeamForceChart'

export default {
    middleware : [],
    components: {
        BeamForceChart
    },//COMPONENTS
    mixins : {},
    layout : 'default',
    data: () => ({
        L: 12,
        w: 1,
        E: 29000,
        Ix: 100
    }),//DATA
    async asyncData({store}){
        return{
           
        }//RETURN
    },//ASYNC DATA
    async fetch({store}){
      
    },
    created(){
      
    
    },//CREATED
    mounted(){
      
    },//MOUNTED
    watch: {
      
    },//WATCH
    computed:{
        forces(){
            let input = {
                L: this.L,
                w: this.w,
                E: this.E,
                Ix: this.Ix,
            }
            let B = new SimpleBeam(input)

            return{
                M: B.M().toFixed(2),
                V: B.V().toFixed(2),
                D: B.D().toFixed(3),
                plotData: B.plotM(),
                plotTitle: "Moment Diagram",
                plotLabelX: "Span (ft)",
                plotLabelY: "Moment (k-ft)",
            }
        },//FORCES
      M(){
          return this.w*Math.pow(this.L,2)/8
      },
      V(){
          return this.w*this.L/2
      },
      D(){
          return (5*this.w*Math.pow(this.L,4)*1728)/(384*this.E*this.Ix)
      }
    },//COMPUTED
    methods:{
     
    },//METHODS  
}//EXPORT DEFAULT
</script>

<style scoped>
    @media print{
        .v-toolbar__content,
        .v-navigation-drawer__content,
        .v-footer{
            display: none !important;
        }
    }

</style>

   