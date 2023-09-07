import React from "react";

import ".././Counter/Bootstrap.css"
class CounterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.reset1=this.reset1.bind(this)
        this.Increment=this.Increment.bind(this)
        this.Decrement=this.Decrement.bind(this)
    }
    Increment(){
        this.setState({
            count:this.state.count+this.props.inc
        })
        this.props.incAll(this.props.inc)
    }
    Decrement(){
        this.setState({
            count:this.state.count-this.props.inc
        })
        this.props.decAll(this.props.inc)
    }

    reset1(){
        this.setState({
            count:0
        })
    }

    render(){
        return(
            <div>

            <h1>{this.state.count}</h1>
            <button className="btn btn-success" onClick={this.Increment}>Increment</button>
            <button className="btn btn-secondary" type="submit" onClick={this.reset1}>Reset</button>
            <button className="btn btn-primary"onClick={this.Decrement}>Decrement</button>
            
            </div>
        )
    }
}   
export default CounterComponent