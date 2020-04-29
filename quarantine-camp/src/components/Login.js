import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axiosWithAuth from '../utilities/axiosWithAuth';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [credentialError, setCredentialError] = useState(false);

    const credentials = { username, password };

    const handleSubmit = e => {
        e.preventDefault();

        if ( username.length < 3 ) {
            setUsernameError(true);
        } else {
            setUsernameError(false);

        } if (password.length < 8 ) {
            setPasswordError(true);
        } else {
            setPasswordError(false);

        } if ( !passwordError && !usernameError ) {
            console.log(credentials);
            axiosWithAuth()
            .post('api_token_auth/', credentials)
            .then(res => {
                setCredentialError(false);
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => {
                console.log(err);
                setCredentialError(true);
            });
        };
    };
 
    return (

        <form className='login-form' onSubmit={handleSubmit}>

            <input
                className='input'
                type='text'
                name='username'
                placeholder='username'
                onChange={e => setUsername(e.target.value)}
            />

            { usernameError && (
                <span> username must be at least 3 characters long </span>
            )}

            <input
                className='input'
                type='password'
                name='password'
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            />

            { passwordError ? (
                <span> password must be at least 8 characters long </span>

            ) : credentialError ? (
                <span> login error </span>
                
            ) : null
            }
            
            <button value='submit'>log in</button>

            <Link className='link' to='/register'>Register</Link>

        </form>

    )
};

export default Login;
