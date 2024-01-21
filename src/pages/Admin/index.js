import { Link} from "react-router-dom";
import { useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";


function Admin() {
  const navigate = useNavigate();
  
  async function handleAdd(e){
    e.preventDefault();
    
    navigate('/queryAdd', {replace: true})
  }

  async function handleUp(e){
    e.preventDefault();
    
    navigate('/queryUp', {replace: true})
  }

  async function handleRemove(e){
    e.preventDefault();
    
    navigate('/queryAdd', {replace: true})
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

      <form className="remove-container"onSubmit={handleRemove}>
        <button type="submit" className="remove">Remover uma consulta</button>
      </form>
      <form className="update-container" onSubmit={handleUp}>
        <button type="submit" className="update">Atualizar dados de uma consulta</button>
      </form>

      <form className="logout-container" onSubmit={handleLogout}>
        <button type="submit" className="logout">Sair</button>
      </form>

    </div>
  );
}

export default Admin;