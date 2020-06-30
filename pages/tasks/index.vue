<template>
    <div>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!-- NO DATA -->
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ --> 
        <!-- <v-row justify="center" dense v-if="gid == ''">
            <v-col cols="12" md="6" align="center" > 
                <v-card tile hover class="ma-2">
                    <v-card-text>
                        <div class="text-center">
                            <v-alert icon="mdi-alert-outline" type="error" border="bottom" dark dense>Create new group</v-alert>
                            <p class="title green--text">OR</p>
                            <v-alert icon="mdi-alert-outline" type="error" border="bottom" dark dense>Join existing group through invitation</v-alert>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> -->
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!-- TASKS - LIST VIEW-->
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ --> 
     <!-- <v-row justify="center" dense v-else> 
            <v-col cols="12" align="center">
                <v-data-iterator
                    :items="items"
                    :search="search"
                    :sort-by="sortBy.toLowerCase()"
                    :sort-desc="sortDesc"
                    class="elevation-1"
                    disable-pagination
                    hide-default-footer
                >
                <template v-slot:header>
                    <v-toolbar dark color="teal darken-3" class="mb-1">
                            <v-row justify="center" align="center">
                                <v-btn color="orange" dark small fab class="ml-1 mr-2" @click="addGroup">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                <v-text-field
                                    v-model="search"
                                    clearable
                                    flat
                                    solo-inverted
                                    hide-details
                                    prepend-inner-icon="mdi-magnify"
                                    label="Search"
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <template v-if="$vuetify.breakpoint.mdAndUp">
                                    <v-autocomplete
                                        v-model="model"
                                        :items="sortList"
                                        prepend-icon="mdi-sort"
                                        dark
                                        class="pt-3"
                                    >
                                        <template v-slot:append-outer>
                                            <v-fade-transition leave-absolute>
                                            <v-icon
                                                color="green"
                                                :key="`icon-${sortDesc}`"
                                                @click="sortDesc = !sortDesc"
                                                v-text="sortDesc ? 'mdi-arrow-up' : 'mdi-arrow-down'"
                                            ></v-icon>
                                            </v-fade-transition>
                                        </template>
                                    </v-autocomplete>
                            </template>
                        </v-row>
                    </v-toolbar>
                </template>

                <template v-slot:default="props" >
                      <v-list two-line dense>
                        <v-list-item v-for="(item,i) in props.items" :key="i + 'ls'" @click="gotoPhases(item)" class="px-2 ma-0">
                            <v-list-item-content  >
                                <v-list-item-title class="subtitle-1 blue--text d-flex justify-space-between">
                                    {{item.name}}
                                </v-list-item-title>
                                <v-list-item-subtitle class="teal--text d-flex justify-space-between">
                                    {{item.description}}
                                </v-list-item-subtitle>
                                <v-divider></v-divider>
                            </v-list-item-content>
                        </v-list-item>
                         
                      </v-list>
                </template>
                </v-data-iterator>

            </v-col>
     </v-row> -->

      <v-container style="max-width: 500px">
            <v-text-field 
                v-model="group" 
                placeholder="Where do you want to shop?"
                solo
                hide-details
                @keydown.enter="add"
            ></v-text-field>
            
            <v-divider class="my-2"></v-divider>
            <v-card v-if="filteredGroups.length > 0">
                    <template v-for="(group, i) in filteredGroups">
                        <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                        <v-list-item :key="`${i}-${group.name}`">
                            <v-list-item-action @click="gotoList(group)" v-if="!group.editable"> 
                                <span class="blue--text">{{group.name}}</span>
                            </v-list-item-action>

                            <v-list-item-action v-else>
                                <v-text-field autofocus @keydown.enter="group.editable = !group.editable, update(group)" @blur="group.editable = !group.editable, update(group)" v-model="group.name">
                                
                                </v-text-field>
                            </v-list-item-action>

                            <v-spacer></v-spacer>
                            <v-btn icon color="red"  @click="group.editable = !group.editable">
                                <v-icon v-if="!group.editable">mdi-pencil-outline</v-icon>
                                <v-icon v-else>mdi-content-save-outline</v-icon>
                            </v-btn>
                            <v-btn icon color="red" @click="remove(group)">
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </v-list-item>
                    </template>
            </v-card>
        </v-container>

    </div>
</template>

<script>
    import {orderBy} from "lodash"

    export default {
        middleware : [],
        components: {},
        layout : 'default',
        data: () => ({
            search : '',
            group : '',
        }),//DATA
        async asyncData({store}){
            return{
                uid : store.getters['uid'],
            }//RETURN
        },//ASYNC DATA
        async fetch({store}){
        
        },//FETCH
        created(){
        
        
        },//CREATED
        mounted(){
        
        },//MOUNTED
        watch: {
        
        },//WATCH
        computed:{
            filteredGroups(){
                return orderBy(this.$store.getters['groups/listByUid'](this.uid),['name'],['asc'])
            }
        },//COMPUTED
        methods:{
            fake(){

            },
            gotoList(group){
                this.$router.push({path: '/tasks/' + group.gid})
            },
            add(){
                let payload = {
                    gid: Math.random().toString(24),
                    name : this.group,
                    editable : false,
                    uid : this.uid
                }
                this.$store.dispatch('groups/add',payload)
                this.group = null
            },
            update(group){
                this.$store.dispatch('groups/update',group)
            },
            remove(group){
                this.$store.dispatch('groups/delete',group)
            },
        },//METHODS  
    }//EXPORT DEFAULT
</script>

   