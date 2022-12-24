import React from 'react';
import useFetchedData from '../../Hooks/useFetchedData';
import './HomepageReviews.css';
import './HomepageReviewsMobile.css';

const HomepageReviws = () => {
    const url = "coffee-reviews.json";
    //used Custom Hook here
    const [reviews, setReviews] = useFetchedData(url);


    return (
        <div>
            {
                reviews.map(review => console.log(review.productName))
            }
            
            
        </div>
    );
};

export default HomepageReviws;