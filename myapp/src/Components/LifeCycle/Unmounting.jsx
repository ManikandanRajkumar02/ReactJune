import React from "react";
class Unmounting extends React.Component{
     constructor(props){
        super(props)
            this.state={
                show:true
            }
        this.removeHeader=this.removeHeader.bind(this)
     }
     removeHeader(){
        this.setState({
            show:false
        })     
    }

    render(){
        if (this.state.show) {
            var head=<Header/>
        }
        return(
            <div>
                {head}
                {/* <Header/> */}
                <button onClick={this.removeHeader} >Remove</button>
            </div>
        )
    }
}



class Header extends React.Component{
     render(){
        return(
            <h1>Hello i'm Header</h1>
        )
     }
     componentWillUnmount(){
        alert("Component will remove")
    }
    
}
    
   
export default Unmounting;

