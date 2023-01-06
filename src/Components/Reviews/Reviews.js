import React from 'react';
import useFetchedData from '../../Hooks/useFetchedData';
import '../HomepageReviews/HomepageReviews.css';
import '../HomepageReviews/HomepageReviewsMobile.css';

import './Reviews.css'
import ShowReviews from './ShowReviews/ShowReviews';

const Reviews = () => {
    const url = "coffee-reviews.json";
    //used Custom Hook here to fetch data
    const [reviews, setReviews] = useFetchedData(url);


    return (
        <>

        <div className='homepage-review-card-container'>
            {
                reviews.map(review => <ShowReviews
                key={review._id}
                reviews={review}
            
            ></ShowReviews>)


            }
        </div>

        </>
    );
};

export default Reviews;