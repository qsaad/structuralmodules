<template>
  <v-app dark>
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <!-- NAV SIDE BAR -->
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <!-- APP BAR -->
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-app-bar :clipped-left="clipped" dense fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-avatar color="white--text" size=36>
          AC
      </v-avatar>
      <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-row dense justify="center" align="center">
        <v-col cols="12" align="center">
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
      
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    middleware : ['auth'],
    components:{},
    mixins : [],
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'NuVuFi'
      }//RETURN
    },//DATA
   async asyncData({store}){
      return{
        
      }//RETURN
    },//ASYN
    async fetch({store,params}){
        
    },//FETCH
    created(){
      
      
    },//CREATED
    mounted(){
       
    },//MOUNTED
    computed:{
      items(){
        return [
          // {icon: 'mdi-home', title: 'Home', to: '/'},
          {icon: 'mdi-view-dashboard', title: 'Dashboard', to: '/dashboard'},
          {icon: 'mdi-folder-outline', title: 'Groups', to: '/tasks'},
          {icon: 'mdi-cog-outline', title: 'Setting', to: '/setting'},
        ]
      }
    },//COMPUTED
    methods:{
      logout(){
        this.$store.dispatch('logout')
      },//SIGNOUT
    }//METHODS
}
</script>
