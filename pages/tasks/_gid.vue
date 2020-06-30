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
        <v-container style="max-width: 500px" class="mt-0 pt-0">
            <p class="title text-center blue--text text-uppercase mb-1">{{projectName}}</p>
            <div class="d-flex flex-row align-center">
                <v-btn to="/tasks" icon>
                <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-text-field 
                    v-model="task" 
                    label="What do you want to buy?"
                    solo
                    hide-details
                    @keydown.enter="create"
                    class="ml-2"
                ></v-text-field>
            </div>
            <v-divider class="my-2"></v-divider>
            <v-row class="my-1" align="center">
                <strong class="mx-4 info--text text--darken-2">
                    Remaining: {{ remainingTasks }}
                </strong>
                <v-divider vertical></v-divider>
                <strong class="mx-4 info--text text--darken-2">
                    Priority: {{ priorityTasks }}
                </strong>
                <v-divider vertical></v-divider>
                <strong class="mx-4 success--text text--darken-2">
                    Completed: {{ completedTasks }}
                </strong>
                <v-spacer></v-spacer>
                <v-progress-circular :value="progress" color="red" class="mr-4" v-if="tasks.length > 0"></v-progress-circular>
            </v-row>
            <v-divider class="my-2"></v-divider>
            <v-card v-if="filteredTasks.length > 0">
                    <template v-for="(task, i) in filteredTasks">
                        <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                        <v-list-item :key="`${i}-${task.text}`">
                            <v-list-item-action>
                                <v-checkbox v-model="task.done" :color="task.done && 'teal' || 'primary'" @change="toggleCheck(task)">
                                </v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title 
                                    v-if="!task.editable" 
                                    class="ml-4" 
                                    @dblclick="task.editable = !task.editable" 
                                    :class="task.done && 'teal--text' || 'primary--text'" 
                                    v-text="task.text" 
                                ></v-list-item-title>
                                <v-text-field 
                                    v-else
                                    autofocus 
                                    @keydown.enter="task.editable = !task.editable" 
                                    @blur="task.editable = !task.editable" 
                                    v-model="task.text" 
                                ></v-text-field>
                            </v-list-item-content>

                            <v-spacer></v-spacer>
                            <v-btn icon @click="togglePriority(task)">
                                <v-icon :color="task.done && 'teal' || 'primary'" v-if="task.priority">mdi-star</v-icon>
                                <v-icon :color="task.done && 'teal' || 'success'" v-else>mdi-star-outline</v-icon>
                            </v-btn>
                            <v-btn icon color="red"  @click="task.editable = !task.editable">
                                <v-icon v-if="!task.editable">mdi-pencil-outline</v-icon>
                                <v-icon v-else>mdi-content-save-outline</v-icon>
                            </v-btn>
                            <v-btn icon color="red" @click="remove(task)">
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </v-list-item>
                    </template>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import {orderBy, filter, sortBy, concat} from "lodash"

    export default {
        middleware : [],
        components:{},
        mixins : [],
        data () {
        return {
            search : '',
        }//RETURN
        },//DATA
        asyncData({store, params}){
            return{
                gid : params.gid,
                uid : params.uid,
                //name : params.name
                task : '',
                tasks : [],
            }//RETURN
        },//ASYN
        async fetch({store,params}){
            
        },//FETCH
        created(){
        
        
        },//CREATED
        mounted(){
        
        },//MOUNTED
        computed:{
            // gid(){
            //     return this.$store.getters.gid
            // },
            projectName(){
                return this.$store.getters['groups/nameByGid'](this.gid)
            },
            completedTasks () {
                return this.tasks.filter(task => task.done).length
            },
            progress () {
                return this.completedTasks / this.tasks.length * 100
            },
            remainingTasks () {
                return this.tasks.length - this.completedTasks
            },
            priorityTasks () {
                return this.tasks.filter(task => task.priority).length
            },
            filteredTasks(){
                this.tasks = this.$store.getters['tasks/listByGid'](this.gid)
                return orderBy(this.$store.getters['tasks/listByGid'](this.gid),['priority', 'text', 'done' ],['desc','asc', 'desc'])
                //return orderBy(this.$store.getters['tasks/listByGid'](this.gid),['done', 'text', 'priority' ],['desc','asc', 'desc'])
                
            }
        },//COMPUTED
        methods:{
            fake(){

            },
            toggleCheck(task){
                task.priority = false
            },
            togglePriority(task){
                task.priority ? task.done = false : task.done = false
                task.priority = !task.priority
            },
            create () {
                let payload = {
                    tid : Math.random().toString(24),
                    done: false,
                    editable : false,
                    priority : false,
                    text: this.task,
                    gid : this.gid
                }
                this.$store.dispatch('tasks/add', payload)
                this.task = null
                
            },
            update(task){
                this.$store.dispatch('tasks/update', task)
            },
            remove(task){
                this.$store.dispatch('tasks/delete', task)
            }
        }//METHODS
    }//EXPORT DEFAULT
</script>
