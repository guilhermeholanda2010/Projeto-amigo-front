import { Link } from "react-router-dom";
import './style.css'

function Header(){
  return(
    <header>
      <h1>GH Medicos</h1>

      <div className="menu">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </header>
  )
}

export default Header;