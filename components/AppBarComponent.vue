<template>
    <v-app-bar dense color="teal darken-4" class="pa-0 ma-0">
        <v-toolbar-title><v-icon color="red">mdi-cloud-outline</v-icon>&nbsp;NuVuFi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="goto">{{name}}</v-btn>
    </v-app-bar>
</template>

<script>

export default {
    props:{
        path: {type: String, default: '/'},
        name: {type: String, default: 'Home'},
    },
    methods:{
        goto(){
            this.$router.replace(this.path)
        }
    }
}

</script>