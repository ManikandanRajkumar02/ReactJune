import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "./Authentication";

function Login(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    let submit=(event)=>{
        event.preventDefault()

        if (username==="Mani"&& password==="12345") {
            Authentication.setLoggedUser(username)
            navigate("/home/mani")
        }
        else{
            navigate("*")
        }
    }

    
    return(
        <div>
            <form>
                <div>
                    <br></br>
                <label>Username : </label>
                <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
<br></br>
                <div>
                <label>Password : </label>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>    
<br></br> 
                <div>
                    <button type="submit" onClick={submit} >Login</button>
                </div>           
                </form>
        </div>
    )
}
export default Login;