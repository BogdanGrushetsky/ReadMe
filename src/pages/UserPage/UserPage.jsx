import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import UserBar from "./components/UserBar/UserBar"

import { Routes, Route } from 'react-router-dom';

const UserPage = (props) => {
  return (
  <>
    <NavBar/>
    
    <div className='main'>
    
    <Menu/>

    <div className="main__vertical">
      <UserBar/>

      {props.children}

    </div>

    <div>
      <Footer/>
    </div>

    </div>

  </>)
}

export default UserPage;