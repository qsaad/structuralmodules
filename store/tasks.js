export const strict = false

//---------------------------------------------------
//STATE
//---------------------------------------------------
export const state = () => ({
    list : [],
})//STATE

//---------------------------------------------------
//GETTERS
//---------------------------------------------------
export const getters = {
    list : state => state.list,
    listByGid : (state) => (gid) => {
        return state.list.filter(item => item.gid === gid)
    },
}//GETTERS

//---------------------------------------------------
//MUTATIONS
//---------------------------------------------------
export const mutations = {
//---------------------------------------------------
//LOAD 
//---------------------------------------------------
    async LOAD(state,payload){
        state.list = []
    },//LOAD
//---------------------------------------------------
//ADD
//---------------------------------------------------
    async ADD(state, payload) {
        state.list.push(payload)
    },//ADD
//---------------------------------------------------
//UPDATE
//---------------------------------------------------
async UPDATE(state, payload) {
    const index = state.list.findIndex(item => item.tid == payload.tid)
    state.list[index] = {...payload}
},//UPDATE
//---------------------------------------------------
//DELETE
//---------------------------------------------------
async DELETE(state, payload) {
    state.list.splice(state.list.indexOf(payload), 1)
},//DELETE
 
}//MUTATIONS

//---------------------------------------------------
//ACTIONS
//---------------------------------------------------
export const actions = {
    load : (context, payload) => {context.commit('LOAD', payload)},
    add : (context, payload) => {context.commit('ADD', payload)},
    update : (context, payload) => {context.commit('UPDATE', payload)},
    delete : (context, payload) => {context.commit('DELETE', payload)},
}