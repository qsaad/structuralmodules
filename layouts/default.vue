<template>
  <v-app light>
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <!-- NAV SIDE BAR -->
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-navigation-drawer v-model="drawer" width="350" id="sideNav"  :clipped="clipped" fixed app>
      <v-text-field v-model="search"  label="Looking for a module?" class="ma-2">

      </v-text-field>
      <v-treeview 
        dense
        
        active-class="grey lighten-2 teal--text"
        :items="filteredElements"
        :search="search"
        :open="filteredKeys"
        open-on-click
        hoverable
        activatable
        return-object
        item-key="id"
      >
        <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children">mdi-application</v-icon>
          </template>
        <template v-slot:append="{ item }">
             <v-chip class="ma-0 px-4" x-small :color="chipcolor(item.chip)" v-if="item.chip != null">{{item.chip}}</v-chip>
        </template>
        <template v-slot:label="{ item }">
             <span v-if="item.children" class="black--text font-weight-bold">{{item.name}}</span>
             <span v-else class="teal--text d-flex" @click="goto(item.to)">{{item.text}}</span>
        </template>
      </v-treeview>

    </v-navigation-drawer>

    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <!-- APP BAR -->
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-app-bar :clipped-left="clipped" id="topNav" class="d-print-none" dense fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>  
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-avatar color="white--text" size=36>
          AC
      </v-avatar> -->
      <!-- <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
      </v-btn> -->
    </v-app-bar>
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <!-- MAIN CONTENT -->
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-main id="mainContent">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <!-- FOOTER -->
    <!-- ++++++++++++++++++++++++++++++++++++++++ -->
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
import {modules} from '@/data/modules'

  export default {
    middleware : ['auth'],
    components:{},
    mixins : [],
    data () {
      return {
        search:'',
        caseSensitive: false,
        active: [],
        clipped: true,
        drawer: true,
        fixed: false,
       
        title: 'QSAAD'
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
      filteredElements() {
        let searchStr = this.search.toLowerCase()
        return modules.reduce((acc, curr) => {
          const childrenContain = curr.children.filter((child) => {
            const index = child.name.toLowerCase().indexOf(searchStr) >= 0
            return index
          })
          if (childrenContain.length) {
            acc.push({
              ...curr,
              children: [
                ...childrenContain
              ]
            })
          }
          return acc
          
        }, [])
      },//FILTERED ELEMENTS
      filteredKeys() {
        return this.filteredElements.map((top) => {
          return top.name
        })
      }, //FILTERED KEYS
     
    },//COMPUTED
    methods:{
      chipcolor(val){
        return val == "updated" ? "orange darken-2" : "primary"
      },
      goto(path){
        console.log(path)
        this.$router.replace(path)
      },
      // logout(){
      //   this.$store.dispatch('logout')
      // },//SIGNOUT
    
    }//METHODS
}
</script>

<style scoped>
    @media print{
        #topNav,#sideNav{
            display: none !important;
        }
        #mainContent {
            position:absolute;
            left:0;
            top:0;
        }
    }

</style>

