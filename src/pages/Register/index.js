import React, { useState } from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {isEmail} from 'validator'

import axios from '../../services/axios'

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
  
  async function handleRegister(e){
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 200) {
      formErrors = true;
      alert("Nome inválido, o nome deve ter de 4 a 199 caracteres")
    }

    if (cpf.length !== 11) {
      formErrors = true;
      alert("Cpf inválido, o cpf deve ter exatamente 11 caracteres")
    }

    if (!isEmail(email)) {
      formErrors = true;
      alert("Email inválido")
    }

    if (password.length < 6 || password.length > 200) {
      formErrors = true;
      alert("Senha inválida, a senha deve ter de 6 a 199 caracteres")
    }

    if(formErrors) return;

    try {
      const response = await axios.post('/doctors', {
        name, 
        email, 
        cpf, 
        password,
      });
      navigate('/', {replace: true})
      console.log(response.data);
    } catch (error) {
      alert('Falha ao cadastrar-se')
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