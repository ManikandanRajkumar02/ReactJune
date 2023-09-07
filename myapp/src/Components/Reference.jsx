import { useEffect, useRef } from "react";

function Reference(){

    let inputElement=useRef()

    let focusInput=()=>{
           inputElement.current.focus()
    }
     
    useEffect(()=>{
         setTimeout(() => {
            inputElement.current.focus()
         }, 3000);
    })

    return(
        <div>
<input type="text" ref={inputElement} placeholder="Enter your text"/>
<button onClick={focusInput}>Click</button>
        </div>
    )
}
export default Reference;