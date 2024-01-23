import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Header from '../components/Header';
import Error from '../pages/Error';
import Admin from '../pages/Admin';
import QueryAdd from '../pages/queryAdd';
import QueryUp from '../pages/queryUp';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element= { <Login/> }/>
        <Route path="/register" element= { <Register/> }/>
        <Route path="/admin" element= { <Admin/> }/>
        <Route path="/queryAdd" element= { <QueryAdd/> }/>
        <Route path="/queryUp" element= { <QueryUp/> }/>
        <Route path="*" element= { <Error/> }/>
      </Routes>
    </BrowserRouter>
  )
};

export default RoutesApp;