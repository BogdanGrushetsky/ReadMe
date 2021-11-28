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
import "./components/main.css";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LangNProgress from './pages/CabinetPage/components/LanguageNProgress/LangNProg';
import CabinetPage from "./pages/CabinetPage";
import LoginPage from "./pages/LoginPage/LoginPage";


function App() {

  const [active, setActive] = useState(false);

  const login = () => {
    setActive(true)
  }

  const removeLogin = () => {
    setActive(false)
    //localStorage.removeItem('accessToken')
}

    // if(!localStorage.getItem('accessToken')) {
    //     return (
    //         <Routes>
    //             <Route exact path='/login' element={<LoginPage/>} />
    //         </Routes>
    //
    //     )
    // }
    // поки закоментила, щоб не заважало

  return (
    
    <div>
      <NavBar/>
        {active && <LoginPage setActive={setActive} removeLogin={removeLogin}/>}
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
             
          <Route path="/cabinet" element={<CabinetPage login={login}/>}/>

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
