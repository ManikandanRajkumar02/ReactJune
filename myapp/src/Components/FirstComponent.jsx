import React from "react";
class FirstComponent extends React.Component{
    render(){
        return( 
            <div><h1 style={{color:"red"}} >Hi, I'm a class Component</h1>
            <ThirdComponent/>
            </div>
        )
    }
}

export class ThirdComponent extends React.Component{
    render (){
        return(
            <div>
                <h3 style={{color: "blue"}}>Hi I'm a third Component</h3>
            </div>
        )
    }
}
export default FirstComponent;

