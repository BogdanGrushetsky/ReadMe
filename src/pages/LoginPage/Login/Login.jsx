import React, {useState} from 'react';
import './Login.css';
import axios from "axios";

import { useNavigate } from 'react-router';
import {Link} from "react-router-dom";

const Login = ({removeLogin}) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const navigate = useNavigate()

    const getUser = async (token) => {
        const instance = axios.create({
            baseURL: 'https://read-me.azurewebsites.net/api/',
            timout: 1000,
            headers: {'Authorization': 'Bearer ' + token}
        })

        await instance.get('/Account/PersonalInformation').then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data))
        }).catch((err) => {
            alert(err.response.data.message)
        })
        console.log(1)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newInfo = {email:email, password:password};
        await axios.post('https://read-me.azurewebsites.net/api/Auth/Login', newInfo)
            .then(async res =>{
                localStorage.setItem('accessToken', res.data.token);
                await getUser(res.data.token);
                console.log(2)
                navigate("/cabinet")
            })
            .catch(error =>alert(error.response.data.message))
            // якщо вийде, то добав history.push('/шото')
    }

    return (
        <div className='login-container'>
            <div className='login-content'>
                <div className='login-title'>Login</div>
                <div className='login-text'>
                    Enter your login and password to log in!
                </div>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <input  className='input-email' type='email' placeholder='Email'
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input  className='input-email' type='password' placeholder='Password'
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button >Login</button>
                    </form>
                </div>
                <div className='login-add-text'>Don't have an account?<Link to='/register'> Register here</Link> </div>
            </div>
        </div>
    );
};

export default Login;