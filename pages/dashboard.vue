<template>
    <v-container fluid class="pa-0 ma-0">
        
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- INITIAL SETUP - NO DATA  -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <v-row dense justify="center" align="center" v-if="gid == ''">
            <v-col cols="12" sm="6" md="4">
                <v-chip outlined pill class="title font-weight-bold mt-1" color="info">
                    INTIAL SETUP
                </v-chip>
            </v-col>
        </v-row>
        <v-row dense justify="center" align="center" v-else>
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- PANEL 1  -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
            <v-col cols="12" sm="6" md="4">
                 <v-card hover height="100%" shaped outlined class="pa-0 ma-0">
                          <v-container fluid class="py-0">
                            <v-row justify="center" >
                                <v-col cols="12" align="start" class="pt-1 d-flex justify-space-between">
                                    <v-chip outlined pill class="title font-weight-bold mt-1" color="success">
                                        PANEL 1
                                    </v-chip>
                                </v-col>
                                <v-col cols="12">
                                    CONTENT 1
                                </v-col>
                            </v-row>
                          </v-container>
                 </v-card>
            </v-col>
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- PANEL 2  -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
            <v-col cols="12" sm="6" md="4">
                 <v-card hover height="100%" shaped outlined class="pa-0 ma-0">
                          <v-container fluid class="py-0">
                            <v-row justify="center" >
                                <v-col cols="12" align="start" class="pt-1 d-flex justify-space-between">
                                    <v-chip outlined pill class="title font-weight-bold mt-1" color="success">
                                        PANEL 2
                                    </v-chip>
                                </v-col>
                                <v-col cols="12">
                                    CONTENT 2
                                </v-col>
                            </v-row>
                          </v-container>
                 </v-card>
            </v-col>
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- PANEL 3  -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
            <v-col cols="12" sm="6" md="4">
                 <v-card hover height="100%" shaped outlined class="pa-0 ma-0">
                          <v-container fluid class="py-0">
                            <v-row justify="center" >
                                <v-col cols="12" align="start" class="pt-1 d-flex justify-space-between">
                                    <v-chip outlined pill class="title font-weight-bold mt-1" color="success">
                                        PANEL 3
                                    </v-chip>
                                </v-col>
                                <v-col cols="12">
                                    CONTENT 3
                                </v-col>
                            </v-row>
                          </v-container>
                 </v-card>
            </v-col>


        </v-row>
    </v-container>
</template>

<script>

export default {
    middleware : [],
    components: {
  
    },//COMPONENTS
    layout : 'default',
    data: () => ({
     
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
        gid(){
            return this.$store.getters.gid
        },
    },//COMPUTED
    methods:{
     
    },//METHODS  
}//EXPORT DEFAULT
</script>

   