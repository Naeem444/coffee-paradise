import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faChartLine, faComments, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import './NavMobile.css';


const Nav = () => {
    return (
        <div className='navbar-container'>
            <div className="nav-name">
                <h2>Coffee <span>Paradise</span></h2>
            </div>

            <div className="nav-elements">
                <NavLink to='/'>
               
                    {
                        ({isActive})=>(
                            <button
                            className={isActive? 'nav-elements-btn home-btn nav-elem nav-element-active ' : 'nav-elements-btn home-btn nav-elem nav-elem-line'}>

                                
                                {
                                    window.innerWidth > 850 ? <span>Home</span>: <span>
                                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                                        <small>Home</small>
                                        
                                        </span>
                                }

                        </button>
                        )
                    }
                    
                </NavLink>


                <NavLink to='/reviews'>
                    {
                        ({isActive})=>(
                            <button
                            className={isActive? 'nav-elements-btn nav-elem nav-element-active' : 'nav-elements-btn nav-elem nav-elem-line'}>

{
                                    window.innerWidth > 850 ? <span>Reviews</span>: <span>
                                        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                                        
                                        <small>Reviews</small>
                                        
                                        </span>
                                }

                            </button>
                        )
                    }
                </NavLink>


                <NavLink to='/analytics'>
                {
                        ({isActive})=>(
                            <button
                            className={isActive? 'nav-elements-btn nav-elem nav-element-active' : 'nav-elements-btn nav-elem nav-elem-line'}>

{
                                    window.innerWidth > 850 ? <span>Analytics</span>: <span>
                                        <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                                        <small>Analytics</small>
                                        </span>
                                }

                            </button>
                        )
                    }
                </NavLink>


                <NavLink to='/blogs'>
                    {
                        ({isActive})=>(
                            <button
                            className={isActive? 'nav-elements-btn blogs-btn nav-elem nav-element-active' : 'nav-elements-btn blogs-btn nav-elem nav-elem-line'}>

{
                                    window.innerWidth > 850 ? <span>Blogs</span>: <span>
                                        <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                                        <small>Blogs</small>
                                        </span>
                                }

                            </button>
                        )
                    }
                </NavLink>

            </div>
            
            <div  className="nav-login-signup">
                <Link to='/login'><button className='secondary-btn'>Login</button></Link>
                <Link to='/signup'><button className='primary-btn'>Sign Up</button></Link>

            </div>
            
        </div>
    );
};

export default Nav;