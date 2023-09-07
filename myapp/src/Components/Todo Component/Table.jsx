import React from "react";
import "../../Counter/Bootstrap.css"
class Table extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
        userList:[{
            id:1,
            name:"Peter",
            designation:"Sr.Developer"
        },
        {
            id:2,
            name:"Parker",
            designation:"Sr.Developer"
        },
        {
            id:3,
            name:"Michael",
            designation:"Jr.Developer"

        },
        {
            id:4,
            name:"Tommy",
            designation:"Sr.Developer"
        },
        {
            id:5,
            name:"John",
            designation:"Developer"
        }
    ]
        }
        
    }
    
    deleteUser(index){
        let tempUsers=[...this.state.userList]
        tempUsers.splice(index,1)
        this.setState({
            userList:tempUsers
        })
    }

    render(){
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Click to Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userList.map((user,index)=>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.designation}</td>
                            <td><button onClick={()=>this.deleteUser(index)}>Delete</button></td>
                        </tr>
                        )}
                        
                        
                    </tbody>
                </table>
            </div>
        )
    }
    
}
export default Table;
