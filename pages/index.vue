<template>
  <div>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- TAGLINE + START -->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <v-row justify="center" align="center" class="section-one">
      <v-col cols="12" sm="8" md="6" justify="center" align="center" >
          <img src="QsaadLogo.png" alt="Logo" style="height:100px; width:100px;">
          <p class="display-4 font-weight-bold">QSAAD</p>
          <p class="body-2 red--text text--darken-3">Quick Structural Analysis and Design</p>
            <v-btn color="indigo white--text" to="dashboard">Get Started</v-btn>
        </v-col>
    </v-row>

  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- FOOTER -->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <v-footer color="teal darken-4">
      <v-row dense justify="center" align="center">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>QSAAD</strong>
      </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>


export default {
  middleware : [],
  components: {},
  layout : 'landing',
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
      
    },//COMPUTED
    methods:{
     
    },//METHODS  
}
</script>

<style scoped>
.section-one{
  height : 100vh;
}
</style>

