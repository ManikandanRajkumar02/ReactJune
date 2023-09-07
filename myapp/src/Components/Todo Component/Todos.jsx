import axios from "axios"
import { useEffect, useState } from "react"

function Todos(){
    const baseUrl="https://jsonplaceholder.typicode.com/"
    const [todos,setTodos]=useState([])

    useEffect(()=>{
      axios.get(`${baseUrl}posts`).then((response)=>{
        console.log(response.data);
        setTodos(response.data)
       }).catch((error)=>{
        console.log(error);
      })
    },[])

    return(
        <div>
            <h1>My Todos</h1>
            {todos.map((value,index)=>{
                <div key={index}>
                    <div>{value.title}</div>
                    <div>{value.body}</div>
                </div>
            })}
        </div>
    )
}

export default Todos