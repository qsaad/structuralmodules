<template>
    <v-simple-table dense>
       <template v-slot:default>
            <thead>
                <tr>
                    <th class="subtitle-1 font-weight-bold text-left">PARAMETER</th>
                    <th class="subtitle-1 font-weight-bold text-left">VALUE</th>
                    <th class="subtitle-1 font-weight-bold text-left">UNIT</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
       </template>
    </v-simple-table>
</template>

<script>


export default {
    name:'ParameterTableComponent',
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