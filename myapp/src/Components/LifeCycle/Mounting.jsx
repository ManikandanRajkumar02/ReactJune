import React from "react";

class Mounting extends React.Component{
   constructor(props){
    super(props)
    this.state={
        color:"Black"
    }
   }
// static getDerivedStateFromProps(props,state){
//     return{
//         color:props.favColor
//     }
// }

    render(){
        return(
            <div><h2>My favourite color is {this.state.color}</h2></div>
        )
    }
    
componentDidMount(){
    setTimeout(() => {
        this.setState({color:"Yellow"})
    }, 3000);
}
}

export default Mounting;