<template>
    <v-bottom-navigation fixed background-color="blue-grey lighten-4" height="75">
            <v-row justify="center" align="center">
                <v-col cols="12" sm="8" md="6" class="text-center">
                   <slot></slot>
                </v-col>
            </v-row>
        </v-bottom-navigation>
</template>

<script>


export default {
    name:'BottomNavigationComponent',
    components:{
        
    },//COMPONENTS
    props:{
       
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