import React, { useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import { Link } from 'react-router-dom';
import firebaseApp from '../Authentication/init';
import './SignUp.css'

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

    const handleSignupSubmit = event =>{
        event.preventDefault();
        const email = event.target.emailField.value;
        const password = event.target.passwordField.value;

        //pass validation
        if (!/(?=.*[!@#$%^&*])/.test(password)){
            setPassError("password should have at least one special character")
            return;
        }
        else if (password.length < 6){
            setPassError("password should have at least 6 characters")
            return;
        }
        
        setPassError("");
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userDetails =>{
            //sign in 
            const user = userDetails.user;
            console.log("Sign in successful")
            
        })
        .catch(error =>{
            console.log("Error occured: ", error)
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
                <small style={{color: '#b71c1c'}}>{passError}</small>
                
                <button type='submit' className='signup-btn'>Sign up</button>
            </form> 
            <small style={{color: '#585858'}}>or</small>



            <Link className='google-signin-anchor link'><button className='google-sign-in' onClick={handleGoogleSignin}>
            <img src="images/google-logo.png" alt="google-logo"></img>

            <p>Sign in with google</p> 
                
            </button>
            
            </Link>

               


            {/* tried this for integration practice purpose */}
            {/* <Link>
                <button onClick={handleGithubSignin}>Sign in with github</button>
            
            </Link> */}
            </div>
            
        </div>
    );
};

export default SignUp;