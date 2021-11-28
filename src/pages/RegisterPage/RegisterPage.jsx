import React, {useState} from 'react';
import './Register.css'
import axios from "axios";
import {useNavigate} from "react-router";

const RegisterPage = () => {

    const  [firstName, setFirstName] = useState('')
    const  [lastName, setLastName] = useState('')
    const  [email, setEmail] = useState('')
    const  [password, setPassword] = useState('')
    const  [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            confirmPassword: confirmPassword
        };

        axios.post('https://read-me.azurewebsites.net/api/Auth/Register', newInfo)
            .then(res => {
                alert(res.data.message)
                navigate('/login')
            })
            .catch(error =>alert(error.response.data.message))
    }

    return (
        <div>
            <div className='reg-container'>
                <div className='reg-content'>
                    <div className='reg-title'>Register</div>
                    <div className='reg-text'>
                        Create an account to enjoy all the services without any ads for free!
                    </div>
                    <div className='reg-form'>
                        <form onSubmit={handleSubmit}>
                            <input  className='input-email' type='text' placeholder='FirstName'
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <input  className='input-email' type='text' placeholder='SecondName'
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            <input  className='input-email' type='email' placeholder='Email'
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input  className='input-email' type='password' placeholder='Password'
                                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input  className='input-email' type='password' placeholder='Confirm Password'
                                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            <button >Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;