class Authentication {

    setLoggedUser(username){
        localStorage.setItem("authenticatedUser",username)
    }
    getLoggedUser(){
        let username=localStorage.getItem("authenticatedUser")
        return username
    }
    isUserLoggedIn(){
        let user=this.getLoggedUser()

        if (user) {
            return true
        }else{
            return false
        }
    }
    removeUser(){
        localStorage.removeItem("authenticatedUser")
    }
    

}
export default new Authentication()