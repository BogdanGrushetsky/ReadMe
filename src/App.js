import React, {useState} from 'react';

import NavBar from "./components/NavBar/NavBar";
import { MenuItem } from "./components/Menu/Menu";
import Menu from "./components/Menu/Menu";
import UserBar from './components/UserBar/UserBar';
import UserManage from './components/UserManage/UserManage'
import people from "./img/Menu/people.svg"
import settings from "./img/Menu/settings.svg"
import dashboard from "./img/Menu/dashboard.svg"
import "./components/main.css"
import Login from "./components/Login/Login";
import "./components/main.css";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LangNProgress from './components/LanguageNProgress/LangNProg';


function App() {

  const [active, setActive] = useState(false);

  const login = () => {
    setActive(true)
  }

  const removeLogin = () => {
    setActive(false)
    //localStorage.removeItem('accessToken')
}

  return (
    
    <div>
      <NavBar/>
        {active && <Login setActive={setActive} removeLogin={removeLogin}/>}
      <div className='main'>
        <Menu>
          <MenuItem src={dashboard} />
          <MenuItem src={people} />
          <MenuItem src={settings} />
        </Menu>

        <div className="main__vertical">
          <UserBar/>

          <Routes>

          <Route path="/settings" element={<UserManage/>}/>
             
          <Route path="/cabinet" element={<LangNProgress login={login}/>}/>

          </Routes>
        
        </div>

      <div>
         <Footer/>
      </div>

      </div>
    </div>
  );
}

export default App;
