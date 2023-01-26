import React, { useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import { Link } from 'react-router-dom';
import firebaseApp from '../Authentication/init';
import './SignUp.css'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const auth = getAuth(firebaseApp);

const SignUp = () => {

    //google sign up provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //handle google signup
    const handleGoogleSignin=()=>{

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log("Sign in with google is successful");
            

        })
        .catch(error =>{
            console.error("error occured: " + error);
        })

    }


    // const handleGithubSignin=()=>{

    //     signInWithPopup(auth, githubProvider)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log("Sign in with google is successful");
            
    //     })
    //     .catch(error =>{
    //         console.error("error occured: " + error);
    //     })

    // }

    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState(false);


    const handleSignupSubmit = event =>{
        event.preventDefault();
        setSuccess(false);
        const email = event.target.emailField.value;
        const password = event.target.passwordField.value;

        //pass validation
        
        if (password.length < 6){
            setPassError("password should have at least 6 characters")
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)){
            setPassError("password should have at least one special character")
            return;
        }
        
        setPassError("");
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userDetails =>{
            //user created successfully
            setSuccess(true);
            //makes the data fields empty
            event.target.reset();


            //sign in 
            const user = userDetails.user;
            console.log("Sign in successful")


            
        })
        .catch(error =>{
            console.log("Error occured: ", error)
            setPassError("Email address already in use");
        })
    }


    return (
        <div className='signup-container'>

            {/* signup form */}

            <div className='signup-box'>
                <h3>Register to Coffee <span style={{color: '#70350b'}}>Paradise</span></h3>
            <form onSubmit={handleSignupSubmit} className="signup-form">
                <input type="email" placeholder="Enter Your Email" name='emailField' className='signup-data-fields'></input>
             
                <input type="password" placeholder="Enter Your password" name='passwordField' className='signup-data-fields' style={passError !== '' ? {border: '1px solid #b71c1c'} : {border: "1px solid darkgray"}}></input>

                {/* error msg */}
                <small style={{color: '#b71c1c', width: "254px", fontWeight: "550"}}>{passError}</small>
                 {/* success msg */}
                {success && <small style={{color: '#198754', fontWeight: "550", width: "254px"}}>Signup completed successfully <FontAwesomeIcon icon={faCircleCheck} /></small>}
                
                <button type='submit' className='signup-btn'>Sign up</button>
            </form> 
            <small style={{color: '#585858'}}>or</small>



            <Link className='google-signin-anchor link'><button className='google-sign-in' onClick={handleGoogleSignin}>
            <img src="images/google-logo.png" alt="google-logo"></img>

            <p>Sign up with google</p> 
                
            </button>
            
            </Link>
            <small>Already have an account? Please <Link to="/login" style={{color: '#70350b', fontWeight: "550"}}>Login</Link></small>

               


            {/* tried this for integration practice purpose */}
            {/* <Link>
                <button onClick={handleGithubSignin}>Sign in with github</button>
            
            </Link> */}
            </div>
            
        </div>
    );
};

export default SignUp;