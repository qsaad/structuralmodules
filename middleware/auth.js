export default({ store, route, redirect }) => {
    console.log('MIDDLEWARE - AUTH')
    // if(!store.getters.isAuthenticated){
    //   console.log('Invalid User ')
    //   redirect('/')
    // }
    // else{
    //   console.log('Valid User Name - ' + store.getters.displayName)
    // }
}