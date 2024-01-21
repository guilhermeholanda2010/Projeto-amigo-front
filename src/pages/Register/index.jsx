import React, { useState } from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'

import person_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

const Register = () => {

  const action = "Register";
  const [name, setName] = useState(''); 
  const [cpf, setCpf] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  function handleRegister(e){
    e.preventDefault();
    let formErrors = false;
    
    if(name.length < 3 || name.length > 200){
      formErrors = true;
      toast.error('Nome inválido.');
    }
    if(!(cpf.length !== 11)){
      formErrors = true;
      toast.error('CPF inválido.');
    }
    if(!isEmail(email)){
      formErrors = true;
      toast.error('Email inválido.');
    }
    if(password.length < 3 || password.length > 200){
      formErrors = true;
      toast.error('Senha inválida.');
    }
    
  }

  return (
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <form className='inputs' onSubmit={handleRegister}>
            <div className='input'>
              <img src= {person_icon} alt="" />
              <input 
                type="text" 
                placeholder='Nome'
                value={name}
                onChange={(e)=> setName(e.target.value)}
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
              <img src= {email_icon} alt="" />
              <input 
                type="text" 
                placeholder='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
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
          <div className="newAccount">Já possui uma conta?  
            <a>
              <Link to="/">Faça login!</Link>
            </a>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">Register</button>
          </div>
        </form>
      </div>
    )
  }

export default Register;