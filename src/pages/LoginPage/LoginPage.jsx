import React from 'react';
import Login from "./Login/Login";
import './LoginPage.css'

const LoginPage = ({setActive, removeLogin}) => {
    return (
        <div className='login-container'>
            <Login setActive={setActive} removeLogin={removeLogin}/>
        </div>
    );
};

export default LoginPage;