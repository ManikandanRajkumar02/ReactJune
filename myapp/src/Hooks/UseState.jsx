import { useState } from "react";

function UseState(){
    const[count,setCount]=useState(0)
    const[color,setColor]=useState("Red")
    const[user,setUser]=useState({
        fname:"Manikandan",
        age:27,
        Mobile:123456789
    })

    let updateNumber=()=>{
        setUser(prevState=>{
            return{...prevState,Mobile:777}
        })
    }
    
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click</button>
<br></br>
<br></br>
            <h2>{color}</h2>
            <button onClick={()=>setColor("Yellow")}>Click</button>
<br></br>
<br></br>
          <h2>{user.fname}</h2>
          <h4>My Name is {user.fname}, i'm {user.age} years old and my Mobile number is {user.Mobile}</h4>
          <button onClick={updateNumber}>Update</button>
        </div>
    )
}
export default UseState;