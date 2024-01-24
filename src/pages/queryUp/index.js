import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Query = () => {

  const action = "Atualizar";
  const [pacientName, setPacientName] = useState('');
  const [pacientCpf, setPacientCpf] = useState('');
  const [queryDate, setQueryDate] = useState('');
  const navigate = useNavigate();
  
  
  function handleQuery(e){
    e.preventDefault();
    
    
  }

  return (
      <div className='ta'>
        
      </div>
    )
  }

export default Query;