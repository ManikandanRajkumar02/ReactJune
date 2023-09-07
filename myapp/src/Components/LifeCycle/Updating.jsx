import React from "react";
class Updating extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"black"
        }
        this.changeColor=this.changeColor.bind(this)
    }
//  static getDerivedStateFromProps(props,state){
//     return{
//         color:props.favColor
//     }
//  }

changeColor(){
    this.setState({
        color:"Violet"
    })
}
// shouldComponentUpdate(){
//     return false
// }

    render(){
        return(
            <div>
               <h2>My favourite color is {this.state.color} </h2>
               <button onClick={this.changeColor}>Change</button>
               <div id="div1"></div>
               <div id="div2"></div>
            </div>
        )
    }
getSnapshotBeforeUpdate(prevProps,prevState){
   document.getElementById("div1").innerHTML=prevState.color
   console.log(prevState.color);
    return null
}
componentDidUpdate(){
    document.getElementById("div2").innerHTML=this.state.color
    console.log(this.state.color);
}



}
export default Updating;