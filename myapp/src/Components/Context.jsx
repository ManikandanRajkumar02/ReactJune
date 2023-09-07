import { userContext } from "../App"
import { useContext } from "react"
function Child1(){
    return(
        <div>
        <Child2></Child2>
        </div>
    )
}

function Child2(){

    return(
        <div>
            <h2></h2>
        <Child3></Child3>
        </div>
    )
}

function Child3(){
    const obj=useContext(userContext)

    return(
        <div>
            <h4>{obj.user}</h4>
            {obj.status? <h5>I'm In</h5>:<h5>I'm Out</h5>}
            <button onClick={obj.changeStatus} >Change</button>
            
        </div>
    )
} 
export default Child1