export const strict = false

//---------------------------------------------------
//STATE
//---------------------------------------------------
export const state = () => ({
    user : {},
    //gid : '',
    role : '',
    default : [],
    list : [],
})//STATE

//---------------------------------------------------
//GETTERS
//---------------------------------------------------
export const getters = {
    user : state => state.user,
    list : state => state.list,
    role : state => state.role,
    uid : state => state.user.uid,
    email : state => state.user.email,
    displayName : state => state.user.displayName,
    photoURL : state => state.user.photoURL,
    isAuthenticated : state => { return state.user != null ? true : false },
}//GETTERS

//---------------------------------------------------
//MUTATIONS
//---------------------------------------------------
export const mutations = {
    //---------------------------------------------------
    //LOAD USERS
    //---------------------------------------------------
    async LOAD_USERS(state,payload){
    },
    //---------------------------------------------------
//LOGIN
//---------------------------------------------------
    async LOGIN (state, payload) {
        //state.gid = 'OEC'
        //state.groups.list = []
        state.user.email = payload.email
        state.user.displayName = 'Alpesh Chavda'
        state.user.uid = Math.random().toString(24)
        this.$router.replace('dashboard')
    // console.log(payload)
    //   try{
    //     console.log("VUEX INDEX : LOGIN")
    //     let userAuth = await fireAuth.signInWithEmailAndPassword(payload.email, payload.password)
    //     state.user = userAuth.user

    //     let query = await db.collection("members").where("uid","==",state.user.uid).get()
    //     if(query.empty){
    //       console.log("----- NO MEMBERS -----")
    //       state.group = ""
    //       state.gid = ""
    //     }
    //     else{
    //       console.log("----- SET GID AND ROLE -----")
    //       state.gid = query.docs[0].data().gid
    //       state.role = query.docs[0].data().role

    //       let groupsQuery = await db.collection("groups").where("gid","==",state.gid).get()
    //       console.log("----- SET GROUP NAME -----")
    //       state.group = groupsQuery.empty ? "" : groupsQuery.docs[0].data().group
    //       console.log(state.group)
    //     }

    //     let userQuery = await db.collection("users").where("uid","==",state.user.uid).get()
    //     if(userQuery.empty){
    //       console.log("----- NO USERS -----")
    //       state.rate = 0
    //       state.utilization = 0
    //       state.defaultColor = 'blue'
    //       state.defaultPid = ''
    //     }
    //     else{
    //       console.log("----- SET DEFAULTS -----")
    //       userQuery.forEach((doc) => {
    //         state.rate = doc.data().rate
    //         state.utilization = doc.data().utilization
    //         state.defaultColor = doc.data().defaultColor
    //         state.defaultPid = doc.data().defaultPid
    //       }) 
    //     }
       
    //     if(userAuth.user.emailVerified){
    //         state.user = userAuth.user
    //         state.gid == "" ? this.$router.replace('/groups') : this.$router.replace('/projects')
    //     }//IF VERIFIED
    //     else{
    //         Swal.fire({
    //             type: 'warning',
    //             title: 'VERIFY EMAIL',
    //             text: 'Check your email for verification link',
    //         })
    //         this.$router.replace('/')
    //     }//ELSE UNVERIFIED


    //   }//TRY
    //   catch(error){
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'USER LOGIN failed',
    //         text: 'login credentials not found' + error.message,
    //     })
    //   }//CATCH
  },//LOGIN
  //---------------------------------------------------
//LOGOUT
//---------------------------------------------------
async LOGOUT (state, payload) {
    state.user = {}
    state.gid = ''
    this.$router.replace('/')
    // try{
    //   console.log("VUEX INDEX : SIGNOUT")
    //   await fireAuth.signOut()
    //   //firebase.firestore().clearPersistence()
    //   state.user = {}
    //   state.group = ""
    //   state.gid = ""
    //   state.role = ""
    //   state.rate = 0
    //   state.utilization = 0
    //   this.$router.replace('/')
    // }//TRY
    // catch(error){
    //   console.error('Sign Out Error', error.message)
    // }//CATCH
  },//LOGOUT
//---------------------------------------------------
//RESET
//---------------------------------------------------
async RESET (state, payload) {
    // try{
    //   console.log("VUEX INDEX : RESET")
    //   await fireAuth.sendPasswordResetEmail(payload.email)
    //   this.$router.replace('/')
    // }//TRY
    // catch(error){
    //   console.error('RESET Error', error.message)
    // }//CATCH
  },//RESET
}//MUTATIONS

//---------------------------------------------------
//ACTIONS
//---------------------------------------------------
export const actions = {
    loadUsers : (context, payload) => {context.commit('LOAD_USERS', payload)},
    login : (context, payload) => {context.commit('LOGIN', payload)},
    logout : (context, payload) => {context.commit('LOGOUT', payload)},
    reset : (context, payload) => {context.commit('RESET', payload)},
}