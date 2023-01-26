import React, { useState } from 'react';
import './Login.css';
import '../SignUp/SignUp.css';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import firebaseApp from '../Authentication/init';
import { Link } from 'react-router-dom';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const auth = getAuth(firebaseApp);

const Login = () => {
    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleLogin = event =>{
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.emailField.value;
        const pass = form.passwordField.value;

        
        
        setPassError("");

        signInWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            setSuccess(true);
            const user = result.user;

        })
        .catch(error =>{
            setPassError("Error occured: please provide correct credentials");
            console.error("Error occured: ", error);
        })


    }
    return (
        <div className='signup-container'>

            {/* signup form */}

            <div className='signup-box'>
                <h3>Login to Coffee <span style={{color: '#70350b'}}>Paradise</span></h3>
            <form onSubmit={handleLogin} className="signup-form">

                <input type="email" placeholder="Enter Your Email" name='emailField' className='signup-data-fields'></input>
             
                <input type="password" placeholder="Enter Your password" name='passwordField' className='signup-data-fields' style={passError !== '' ? {border: '1px solid #b71c1c'} : {border: "1px solid darkgray"}}></input>

                {/* error msg */}
                <small style={{color: '#b71c1c', width: "254px", fontWeight: "550"}}>{passError}</small>
                 {/* success msg */}
                {success && <small style={{color: '#198754', fontWeight: "550", width: "254px"}}>Login Successful <FontAwesomeIcon icon={faCircleCheck} /></small>}
                
                <button type='submit' className='signup-btn'>Login</button>
            </form> 


            <small>Don't have an account? Please <Link to="/signup" style={{color: '#70350b', fontWeight: "550"}}>Signup</Link></small>


            </div>
            
        </div>
    );
};

export default Login;