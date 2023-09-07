import { Link, useNavigate } from "react-router-dom";
import Authentication from "./Authentication";

function Header(){

const navigate=useNavigate()

let loggedIn=Authentication.isUserLoggedIn()

  let logout=()=>{
    Authentication.removeUser()
    navigate("/home/:name")
  }

    return(
        <div>
 
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"/login"}>CGT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   {loggedIn && <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/home"}>Home</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" to={"/table"}>Table</Link>
        </li>
        
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-light" type="submit" onClick={logout}>Log-Out</button>
        
      </form>
    </div>}
  </div>
</nav>


        </div>
    )
}
export default Header;