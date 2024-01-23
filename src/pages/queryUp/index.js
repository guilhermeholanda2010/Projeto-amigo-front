import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';



const Query = () => {

  const action = "Atualizar";
  const [pacientName, setPacientName] = useState('');
  const [pacientCpf, setPacientCpf] = useState('');
  const [queryDate, setQueryDate] = useState('');
  const navigate = useNavigate();
  
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  
  function handleQuery(e){
    e.preventDefault();
    
    
  }

  return (
      <div className='ta'>
        
      </div>
    )
  }

export default Query;