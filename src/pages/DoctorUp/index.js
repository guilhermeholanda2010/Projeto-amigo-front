import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import './style.css';

import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import person_icon from '../../Assets/person.png'


function Query(){

  const action = "Atualizar dados";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  

  async function handleUndo(e){
    e.preventDefault();
    
    navigate('/admin', {replace: true})
  }
  
  async function handleUpdate(e) {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token'); 
  
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      const response = await axios.put('/doctors', {
        name,
        email,
        cpf,
        oldPassword,
        password,
        confirmPassword,
      }, config);
      
      console.log(response.data);
      
      alert("Dados atualizados com sucesso");
    } catch (error) {
      alert("Dados não foram atualizados!");
    }
  }
  

  return (
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <form className='inputs' onSubmit={handleUpdate}>
            <div className='input'>
              <img src= {person_icon} alt="" />
              <input 
                type="text" 
                placeholder='Digite seu nome...'
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src= {person_icon} alt="" />
              <input
                type="text" 
                placeholder='Digite seu CPF...'
                value={cpf}
                onChange={(e)=> setCpf(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src= {email_icon} alt="" />
              <input 
                type="text" 
                placeholder='Digite seu email...'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src= {password_icon} alt="" />
              <input 
                type="password" 
                placeholder='Digite sua senha atual...'
                value={oldPassword}
                onChange={(e)=> setOldPassword(e.t)}
              />
            </div>
            <div className='input'>
              <img src= {password_icon} alt="" />
              <input 
                type="password" 
                placeholder='Digite sua nova senha...'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src= {password_icon} alt="" />
              <input
                type="password" 
                placeholder='Digite novamente a nova senha...'
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
              />
            </div>
          <div className="submit-container">
            <button type="submit" className="submit">Atualizar</button>
          </div>
        </form>
      <form className="undo-container" onSubmit={handleUndo}>
        <button type="submit" className="undo">Fazer outra ação</button>
      </form>
      </div>
    )
  }

export default Query;