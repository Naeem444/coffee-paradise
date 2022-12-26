import React from 'react';
import useFetchedData from '../../Hooks/useFetchedData';
import './HomepageReviews.css';
import './HomepageReviewsMobile.css';
import ShowHomepageReviews from './ShowHomepageReviews/ShowHomepageReviews';

const HomepageReviews = () => {
    const url = "coffee-reviews.json";
    //used Custom Hook here
    const [reviews, setReviews] = useFetchedData(url);


    return (
        <div className='homepage-review-card-container'>
            {
                reviews.map(review => <ShowHomepageReviews
                key={reviews._id}
                homepageReviews={review}
                
                ></ShowHomepageReviews>)
            }
            
            
        </div>
    );
};

export default HomepageReviews;