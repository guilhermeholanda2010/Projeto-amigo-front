import './style.css'
import { useNavigate } from "react-router-dom";


function Admin() {
  const navigate = useNavigate();
  
  async function handleAdd(e){
    e.preventDefault();
    
    navigate('/queryAdd', {replace: true})
  }

  async function handleView(e){
    e.preventDefault();
    
    navigate('/queryUp', {replace: true})
  }

  async function handleLogout(e){
    e.preventDefault();
    
    navigate('/', {replace: true})
  }

  return (
    <div className="admin-container">
      <h1>Clique para realizar a operação:</h1>

      <form className="add-container" onSubmit={handleAdd}>
        <button type="submit" className="add"> Criar Consulta</button>
      </form>

      <form className="view-container"onSubmit={handleView}>
        <button type="submit" className="view">Inspecionar consultas</button>
      </form>

      <form className="logout-container" onSubmit={handleLogout}>
        <button type="submit" className="logout">Fazer Logout</button>
      </form>

    </div>
  );
}

export default Admin;