import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axios'
import './style.css';
const Query = () => {

  const [queries, setQueries] = useState([]);

  useEffect(()=>{
    async function loadQueries(){
      const token = localStorage.getItem('token'); 
      const userId = localStorage.getItem('userId');

      if (userId){
        try {
          const config = {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          };
          const response = await axios.get('/queries', config);
          console.log(response.data);
          setQueries(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    loadQueries();
  }, [])

  const navigate = useNavigate();
  
  
  function handleQuery(e){
    e.preventDefault();
    
  }

  async function handleUndo(e){
    e.preventDefault();
    
    navigate('/admin', {replace: true})
  }

  return (
    <>
      <div className='list-container'>
        <h1>Minhas consultas</h1>

        {queries.map((item)=>(
          <article key={item.userId} className='list'>
            <p>Paciente: {item.pacient_name}</p>
            <p>Cpf do paciente: {item.pacient_cpf}</p>
            <p>Data: {item.query_date}</p>

            <div>
              <button onClick={handleQuery}>Concluir</button>
              <button className='btn-delete'>Deletar</button>
            </div>
          </article>
        ))}
      </div>

      <form className="back-container" onSubmit={handleUndo}>
        <button type="submit" className="back">Fazer outra ação</button>
      </form>
      </>
      )
  }

export default Query;