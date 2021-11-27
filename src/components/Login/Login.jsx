import React, {useState} from 'react';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className='login-container'>
            <div className='login-content'>
                <div className='login-title'>Login</div>
                <div className='login-text'>
                    Create an account to enjoy all the services without any ads for free!
                </div>
                <div className='login-form'>
                    <form >
                        <input  className='input-email' type='email' placeholder='Email'
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input  className='input-email' type='password' placeholder='Password'
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </form>
                </div>

                <button>Login</button>
                <div className='login-add-text'>Already Have An Account? <a href='#'>Sign In</a> </div>
            </div>
        </div>
    );
};

export default Login;