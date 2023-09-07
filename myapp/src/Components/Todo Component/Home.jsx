import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Home(){
    const[home,setHome]=useState("Welcome Home ")
    const navigate=useNavigate()
    const param=useParams()
    return(
        <div>
            <h1>{home}{param.name}</h1>
            <button type="submit" onClick={()=>navigate("/table")}>Go to list</button>
    
    <br></br>
            <Link to={"/table"}>List</Link>
        </div>
    )
}
export default Home;