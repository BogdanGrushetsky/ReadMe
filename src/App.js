import React from 'react';
import people from "./img/Menu/people.svg"

import NavBar from './components/NavBar/NavBar';

import { MenuItem } from './components/Menu/Menu';
import Menu from './components/Menu/Menu';

import "./components/main.css"
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <NavBar/>
        <Login/>
      <div className='main'>

        {/*<Menu>*/}
        {/*  <MenuItem src={people}/>*/}
        {/*  */}
        {/*</Menu>*/}

      </div>

    </div>
  );
}

export default App;
