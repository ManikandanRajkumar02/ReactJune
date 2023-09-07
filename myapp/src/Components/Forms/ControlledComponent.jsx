import React from "react";

class ControlledComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",   
            isloginsuccess:false,
            isloginfails:false

        }
        this.submit=this.submit.bind(this)

        this.usernameonchange=this.usernameonchange.bind(this)
        this.passwordOnchange=this.passwordOnchange.bind(this)
    }
usernameonchange(event){
    this.setState({
    [event.target.name]:event.target.value
    })
}
passwordOnchange(event){
    this.setState({
        [event.target.name]:event.target.value
    })
}
submit(event){
  event.preventDefault();
  console.log(this.state.username);
  console.log(this.state.password);

  if (this.state.username==="Mani" && this.state.password==="12345") {
    this.setState({
        isloginsuccess:true,
        isloginfails:false
    })
  }else{
    this.setState({
        isloginsuccess:false,
        isloginfails:true
    })
  }


}

    render(){
        return(
            <div>
                <form>
                   <label>UserName : </label>
                   <input type="text" placeholder="Username" name="username" required value={this.state.username} onChange={this.usernameonchange}/>
                   <br></br>    
                   <br></br>    
                   <label>Password : </label>
                   <input type="password" placeholder="Password" name="password" required value={this.state.password} onChange={this.passwordOnchange}/>
                   <br></br> <br></br>
                   <button type="submit" onClick={this.submit}>Submit</button>
                </form>
                <LoginStatus isSuccess={this.state.isloginsuccess} 
                isFails={this.state.isloginfails}/>
            </div>
        )
    }
}

function LoginStatus (props){
    if (props.isSuccess||props.isFails) {
        return(
           props.isSuccess? <div>Success</div>:<div>Failed</div>
        )
    }
}

export default ControlledComponent;