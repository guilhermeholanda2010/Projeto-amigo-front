import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import person_icon from '../../Assets/person.png'

const Query = () => {

  const action = "Criar consulta";
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  function handleQuery(e){
    e.preventDefault();
    
    if(email === '' || password === '' || cpf === ''){
      alert("Preencha todos os campos!");
    }else{
      navigate('/admin', {replace: true})
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
              <img src= {email_icon} alt="" />
              <input 
                type="text" 
                placeholder='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src= {person_icon} alt="" />
              <input 
                type="text" 
                placeholder='Cpf'
                value={cpf}
                onChange={(e)=> setCpf(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src={password_icon} alt="" />
              <input
                autoComplete={false}
                type="password" 
                placeholder='********'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
          <div className="submit-container">
            <button type="submit" className="submit">Criar</button>
          </div>
        </form>
      </div>
    )
  }

export default Query;