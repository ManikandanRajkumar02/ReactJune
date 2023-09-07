import React from "react";


import CounterComponent from "./Counter"; 
class CounterAll extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counterAll:0
        }
        this.reset=this.reset.bind(this)
        this.IncrementAll=this.IncrementAll.bind(this)
        this.DecrementAll=this.DecrementAll.bind(this)
    }
    IncrementAll(value){
          this.setState({
            counterAll:this.state.counterAll+value
          })
    } 
    
    DecrementAll(value){
        this.setState({
            counterAll:this.state.counterAll-value
        })

    }
     reset(){
        this.setState({
        counterAll:this.state.counterAll-this.state.counterAll
        })

     } 


    render(){
        return(
            <div>
        <h1>{this.state.counterAll}</h1>
        <CounterComponent inc={1} incAll={this.IncrementAll} decAll={this.DecrementAll} reset={0}/>
        <CounterComponent inc={5} incAll={this.IncrementAll} decAll={this.DecrementAll} reset={0}/>
        <CounterComponent inc={10} incAll={this.IncrementAll} decAll={this.DecrementAll} reset={0}/>
<br></br>
<button className="btn btn-secondary" type="submit" onClick={this.reset} >Reset</button>
            </div>
        )
    }
}
export default CounterAll;