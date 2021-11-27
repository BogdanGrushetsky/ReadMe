import React, {useState} from 'react';

import NavBar from "./components/NavBar/NavBar";
import { MenuItem } from "./components/Menu/Menu";
import Menu from "./components/Menu/Menu";
import Task from "./components/task/Task";
import UserBar from './components/UserBar/UserBar';
import UserManage from './components/UserManage/UserManage'

import { Router } from 'react-router-dom'

import people from "./img/Menu/people.svg"
import settings from "./img/Menu/settings.svg"
import dashboard from "./img/Menu/dashboard.svg"

import "./components/main.css"
import Login from "./components/Login/Login";

import "./components/main.css";
import Footer from './components/Footer/Footer';

function App() {

   const [active, setActive] = useState(false)

  return (
    <div>
        {active && <Login/>}
      <NavBar/>
      <div className='main'>
        <Menu>
          <MenuItem src={dashboard} />
          <MenuItem src={people} />
          <MenuItem src={settings} />
        </Menu>
        <div className="main__vertical">
          <UserBar/>
          <UserManage/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>
    </div>
  );
}

export default App;
