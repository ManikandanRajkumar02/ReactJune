import { Navigate } from "react-router-dom"
import Authentication from "./Authentication"

function AuthenticatedRouter(props){
    let isLoggedIn=Authentication.isUserLoggedIn()
     return isLoggedIn? props.children:<Navigate to='/'/>
      

}
export default AuthenticatedRouter