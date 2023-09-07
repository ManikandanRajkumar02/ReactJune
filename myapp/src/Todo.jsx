import { memo } from "react";

function Todo({todo,addTodo}){
    console.log("Todo Rendered");
    return(
        <div>
         <h2>My Todos</h2>
         <p>{todo}</p>
         <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}
export default memo(Todo)