import React, {useEffect, useState} from 'react';


import "./components/main.css"
import "./components/main.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import CabinetPage from "./pages/CabinetPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from './pages/UserPage/UserPage';

import UserManage from './pages/UserPage/components/UserManage/UserManage'
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import AboutUs from './pages/AboutUsPage';

function App() {

  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('accessToken')) {
      navigate('/login');
    }
    else {
      //navigate('/cabinet')
    }
  }, [])

  const login = () => {
    setActive(true)
  }

  const removeLogin = () => {
    setActive(false)
    //localStorage.removeItem('accessToken')
}
    // поки закоментила, щоб не заважало

  return (
      <Routes>

      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>

      <Route path='/aboutUs' element={<AboutUs/>}/>

      <Route path='/settings' element={
        <UserPage> 
          <UserManage/>
        </UserPage>}
        />


      <Route path='/cabinet' element={
        <UserPage> 
          <CabinetPage/>
        </UserPage>}
        />
    
      </Routes>
  );
}

export default App;
