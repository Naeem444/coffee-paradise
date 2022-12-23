import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import './NavMobile.css';


const Nav = () => {
    return (
        <div className='navbar-container'>
            <div className="nav-name">
                <h2>Coffee Paradise </h2>


            </div>

            <div className="nav-elements">
                <NavLink><button className='home-btn nav-elem nav-elem-line nav-element-active'>Home</button></NavLink>
                <NavLink><button className='nav-elem nav-elem-line'>Reviews</button></NavLink>
                <NavLink><button className='nav-elem nav-elem-line'>Analytics</button></NavLink>
                <NavLink><button className='blogs-btn nav-elem nav-elem-line'>Blogs</button></NavLink>

            </div>
            
            <div  className="nav-login-signup">
            <Link><button className='secondary-btn'>Login</button></Link>
            <Link><button className='primary-btn'>Sign Up</button></Link>

            </div>

        
            
        </div>
    );
};

export default Nav;