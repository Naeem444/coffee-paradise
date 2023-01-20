import React from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { Link } from 'react-router-dom';
import firebaseApp from '../Authentication/init';
import './SignUp.css'

const auth = getAuth(firebaseApp);

const SignUp = () => {

    //google sign up provider
    const googleSigninProvider = new GoogleAuthProvider();

    //handle google signup
    const handleGoogleSignin=()=>{

        signInWithPopup(auth, googleSigninProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            

        })
        .catch(error =>{
            console.error("error occured: " + error);
        })

    }

    return (
        <div className='signup-container'>

            <Link className='link'><button className='google-sign-in' onClick={handleGoogleSignin}>
            <img src="images/google-logo.png" alt="google-logo"></img>

            <p>Sign in with google</p> 
                
            </button>
            
            </Link>
            
        </div>
    );
};

export default SignUp;