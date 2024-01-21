import { Link } from "react-router-dom";
import './style.css';

function Error(){
  return(
    <div className="error">
      <h1>404</h1>
      <h2>Página não encontrada</h2><br/>
      <span>Paginas encontradas disponíveis:</span><br/>
      <Link to= "/register">Register</Link><br/>
      <Link to= "/login">Login</Link>
    </div>
  )
}

export default Error;