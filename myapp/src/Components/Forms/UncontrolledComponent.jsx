import React from "react";

class UncontolledComponent extends React.Component{
    constructor(props){
        super(props)

       this.submit=this.submit.bind(this)
        
        this.username=React.createRef();
        this.password=React.createRef();
    }

submit(event){
event.preventDefault();
console.log(this.username.current.value)
console.log(this.password.current.value)

}

    render(){
        return(
            <div>
            <form>
                <label>username : </label>
                <input type="text" placeholder="UserName" className="username" required ref={this.username}/>
                <br></br>
                <br></br>
                <label>password  : </label>
                <input type="password" placeholder="Password" className="password" required ref={this.password}/>
                <br>
                </br>
                <br></br>
                 <button type="submit" onClick={this.submit}>Submit</button>
            </form>
            </div>
        )       
    }
}
export default UncontolledComponent;