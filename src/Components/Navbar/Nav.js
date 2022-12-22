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
                <NavLink><button>Home</button></NavLink>
                <NavLink><button>Reviews</button></NavLink>
                <NavLink><button>Analytics</button></NavLink>
                <NavLink><button>Blogs</button></NavLink>

            </div>
            
            <div  className="nav-login-signup">
            <Link><button className='secondary-btn'>Login</button></Link>
            <Link><button className='primary-btn'>Sign Up</button></Link>

            </div>

        
            
        </div>
    );
};

export default Nav;