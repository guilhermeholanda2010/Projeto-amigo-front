import { useNavigate } from 'react-router-dom';

import './style.css';

function Error(){

  const navigate = useNavigate();
  function handleUndo(){
    navigate('/', {replace: true})
  }
  return(
    <div className="error">
      <h1>404</h1>
      <p>Parece que essa página não existe!</p>
      <form className="undo-container" onSubmit={handleUndo}>
        <button type="submit" className="undo">Voltar para a pagina inicial</button>
      </form>
    </div>
  )
}

export default Error;