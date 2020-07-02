<template>
<div>
    <!-- <app-bar-component path="login" name="Login"></app-bar-component> -->
  
  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
  <!-- TITLE -->
  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    
  
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- TAGLINE + LOGIN/REGISTER/RESET DIALOG -->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
  <v-row justify="center" align="center" class="section-one">
    <v-col cols="12" sm="8" md="6" justify="center" align="center" >
        <p class="display-3 font-weight-bold">QSAAD</p>
        <p class="body-2 red--text text--darken-3">Quick Structural Analysis and Design</p>
           <!-- <v-btn color="indigo" to="signup">Sign up</v-btn> -->
           <v-btn color="indigo" to="dashboard">Get Started</v-btn>
      </v-col>
  </v-row>

  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- FOOTER -->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <v-footer color="teal darken-4">
      <v-row dense justify="center" align="center">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>ibacklog</strong>
      </v-col>
      </v-row>
    </v-footer>


  
 
  </div>
</template>

<script>
import AppBarComponent from '@/components/AppBarComponent'

export default {
  middleware : [],
  components: {AppBarComponent},
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

