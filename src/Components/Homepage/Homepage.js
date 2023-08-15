// This file is deprecated



import React from 'react';
import HomepageReviews from '../HomepageReviews/HomepageReviews';
import Shop from '../Shop/Shop';
import './Homepage.css';
import "./MobileHomepage.css"

const Homepage = () => {
    return (
        <div>
            <div className='Landing-page-background'>
                <h2>See the Reviews of Our Coffees and 
                    Choose What's Best for You</h2>

            </div>

            <div className='home-review-container'>

                <h2>Buy Your Favourite Coffees</h2>
                <div>
                    {/* <HomepageReviews></HomepageReviews> */}
                    <Shop></Shop>
                </div>



            </div>
            
        </div>
        
    );
};

export default Homepage;