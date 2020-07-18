export const moduleMixin =  {
    data(){
        return{
            sheet: false,
            isEdit: '',
        }//RETURN
    },//DATA
    created(){

    },//CREATED
    mounted(){

    },//MOUNTED
    watch:{
        sheet: function(val) {
            this.sheet = val
            if(val == false){
                this.isEdit = ''
            }
        },
        isEdit: function(val){
            console.log(val)
            this.screen == true ? val : ''
        }
    },
    computed:{

    },//COMPUTED
    methods:{
        // edit(val){
        //     this.isEdit = val
        // },

    }//METHODS

}//MIXIN