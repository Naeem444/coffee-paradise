import React, { useState } from 'react';
import useFetchedData from '../../Hooks/useFetchedData';
import './HomepageReviews.css';
import './HomepageReviewsMobile.css';
import ShowHomepageReviews from './ShowHomepageReviews/ShowHomepageReviews';

const HomepageReviews = () => {
    const url = "coffee-reviews.json";
    //used Custom Hook here to fetch data
    const [reviews, setReviews] = useFetchedData(url);

    //load more state 
    const [load, setLoad] = useState(false);

    // handling 'load more'
    const handleLoadMore=(state)=>{
        setLoad(state);
        console.log("Hey Even handler is working wohoooooooo");

    }
    


    return (
        <div className='homepage-review-card-container'>
            {
                reviews.slice(0, 3).map(review => <ShowHomepageReviews
                key={review._id}
                homepageReviews={review}
                
                ></ShowHomepageReviews>)


            }
            <div className='load-more-homepage'>
                {
                    load === false ? 
                    <button 
                onClick={()=>handleLoadMore(true)}
                >Load more</button> : 

                reviews.slice(3, reviews.length).map(review => <ShowHomepageReviews
                    key={review._id}
                    homepageReviews={review}
                    
                    ></ShowHomepageReviews>)


                }

            </div>
            
            
        </div>
    );
};

export default HomepageReviews;