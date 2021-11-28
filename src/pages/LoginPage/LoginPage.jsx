import React from 'react';
import Login from "./Login/Login";
import background from '../../img/background-login.png'

const LoginPage = ({setActive, removeLogin}) => {
    return (
        <div>
            <Login setActive={setActive} removeLogin={removeLogin}/>
        </div>
    );
};

export default LoginPage;