import React, {useState} from 'react';
import './Login.css';
import axios from "axios";

const Login = ({removeLogin}) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = {email:email, password:password};
        axios.post('https://read-me.azurewebsites.net/api/Auth/Login', newInfo)
            .then(res => localStorage.setItem('accessToken', res.data.token))
            .catch(error =>alert(error.response.data.message))
            // якщо вийде, то добав history.push('/шото')
    }

    return (
        <div className='login-container'>
            <div className='login-content'>
                <div className='login-title'>Login</div>
                <div className='login-text'>
                    Create an account to enjoy all the services without any ads for free!
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
                <div className='login-add-text'>Already Have An Account? <a href='#'>Sign In</a> </div>
            </div>
        </div>
    );
};

export default Login;