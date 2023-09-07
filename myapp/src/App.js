// import { createContext, useState } from 'react';
import './App.css';
// import Child1 from './Components/Context';
import FirstComponent, { ThirdComponent } from './Components/FirstComponent';
import ControlledComponent from './Components/Forms/ControlledComponent';
import UncontolledComponent from './Components/Forms/UncontrolledComponent';
import Mounting from './Components/LifeCycle/Mounting';
import Unmounting from './Components/LifeCycle/Unmounting';
import Updating from './Components/LifeCycle/Updating';
import List from './Components/List/List';
import Reference from './Components/Reference';
import SecondComponent from './Components/SecondComponent';
import AuthenticatedRouter from './Components/Todo Component/AuthenticatedRouter';
import Error from './Components/Todo Component/Error';
import Footer from './Components/Todo Component/Footer';
import Header from './Components/Todo Component/Header';
import Home from './Components/Todo Component/Home';
import Login from './Components/Todo Component/Login';
import Table from './Components/Todo Component/Table';
import Todos from './Components/Todo Component/Todos';
import CounterComponent from './Counter/Counter';
import Counter from './Counter/Counter';
import CounterAll from './Counter/CounterAll';
import UseState from './Hooks/UseState';
import Todo from './Todo';
// export const  userContext=createContext()
import { useCallback, useState  } from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
// --------------------------
    // const[todo,setTodo]=useState(["Todo1","Todo2"])
    // const[count,setCount]=useState(0)

    // let increment=()=>{
    //   setCount(count+1)
    // }
    
    // let addTodo=useCallback(()=>{
    //     setTodo([...todo,"Todo3"])
    //   },[todo])
    
//--------------------------------------
// const[user,setUser]=useState("Manikandan")

// const[status,setStatus]=useState(false)
// const changeStatus=()=>{
//    setStatus(!status)
// }
// ----------------------------------------
  return (
    <div className="App">
    {/* <CounterAll/> */}
    {/* <UncontolledComponent/> */}
    {/* <ControlledComponent/> */}
    {/* <Mounting favColor="Red"/> */}
    {/* <Updating favColor="Red"/> */}
    {/* <Unmounting/> */}
    {/* <List/> */}
    {/* <UseState/> */}
    {/*-----------------------------------------------------  */}
    {/* <userContext.Provider value={{user:user, status:status, changeStatus:changeStatus}}>
    <Child1/>
    </userContext.Provider> */}
{/* ---------------------------------------------------------------- */}
      {/* <h1>React Memo</h1>  
      <Todo todo={todo} addTodo={addTodo}/> */}

      {/* <button onClick={addTodo}>Add Todo</button>--Cut and Paste in Todo.jsx for useCallBaclConcept */}

      {/* <h1>Counter</h1>
      <h2>{count}</h2> */}

      {/* Type1 */}
      {/* <button onClick={()=>setCount(count+1)} >Click</button> */}

      {/* Type2
      <button onClick={increment}>Click</button> */}
{/* ------------------------------------------------------------------------- */}
        {/* <h1>Use Ref</h1>
        <Reference/> */}
      {/* -------------------------------------------------------- */}
       
       <Router>

       <Header/>
       
        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/home/:name' element={<AuthenticatedRouter><Home/></AuthenticatedRouter>} ></Route>
          <Route path='/table' element={<AuthenticatedRouter><Todos/></AuthenticatedRouter>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
       </Router>
       
       

    </div>
  );
}

export default App;
