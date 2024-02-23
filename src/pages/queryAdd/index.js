import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import './style.css';


function Query(){

  const action = "Criar consulta";
  const [pacientName, setPacientName] = useState('');
  const [pacientCpf, setPacientCpf] = useState('');
  const [queryDate, setQueryDate] = useState('');
  const navigate = useNavigate();
  

  async function handleUndo(e){
    e.preventDefault();
    
    navigate('/admin', {replace: true})
  }
  
  async function handleQuery(e) {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token'); 
      const userId = localStorage.getItem('userId');
  
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      const response = await axios.post('/queries', {
        pacient_name:pacientName,
        pacient_cpf:pacientCpf,
        query_date: queryDate,
        doctor_id: userId,
      }, config);
      console.log(response.data);
      
      alert("Consulta criada com sucesso");
      navigate('/admin', {replace: true});
    } catch (error) {
      alert("Consulta não foi criada");
    }
  }
  

  return (
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <form className='inputs' onSubmit={handleQuery}>
            <div className='input'>
              <input 
                type="text" 
                placeholder='Nome do paciente...'
                value={pacientName}
                onChange={(e)=> setPacientName(e.target.value)}
              />
            </div>
            <div className='input'>
              <input 
                type="text" 
                placeholder='Cpf do paciente...'
                value={pacientCpf}
                onChange={(e)=> setPacientCpf(e.target.value)}
              />
            </div>
            <div className='input'>
              <input
                type="text" 
                placeholder='Data da consulta...'
                value={queryDate}
                onChange={(e)=> setQueryDate(e.target.value)}
              />
            </div>
          <div className="submit-container">
            <button type="submit" className="submit">Criar</button>
          </div>
        </form>
      <form className="back-container" onSubmit={handleUndo}>
        <button type="submit" className="back">Fazer outra ação</button>
      </form>
      </div>
    )
  }

export default Query;