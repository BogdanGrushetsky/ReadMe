import React from 'react';

import NavBar from './components/NavBar/NavBar';
import { MenuItem } from './components/Menu/Menu';
import Menu from './components/Menu/Menu';

import people from "./img/Menu/people.svg"
import settings from "./img/Menu/settings.svg"
import dashboard from "./img/Menu/dashboard.svg"

import "./components/main.css"


function App() {
  return (
    <div>
      <NavBar/>

      <div className='main'>
        <Menu>
          <MenuItem src={dashboard}/>
          <MenuItem src={people}/>
          <MenuItem src={settings}/>
        </Menu>

      </div>

    </div>
  );
}

export default App;
