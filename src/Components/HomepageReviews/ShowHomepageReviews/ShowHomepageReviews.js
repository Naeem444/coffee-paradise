import React from 'react';
import './ShowHomepageReviews.css';


const ShowHomepageReviews = (props) => {
    const {name, productName, userImg, productImg, ratings, review, dateOfReview} = props.homepageReviews;
    return (
        <>
        <div className='homepage-review-card'>
            <div className='homepage-review-card-userDetail'>
                <img src={userImg} alt='user'></img>
                <h4>{name}</h4>
                <div className='verified-user'>
                    <a href='##'>verified</a>

                </div>

            </div>
            <p className='homepage-review-date'>{dateOfReview}</p>
            <p className='homepage-review-ratings'>Ratings: {ratings}</p>
 
            <div className='homepage-user-review'>
                <h4>{productName}</h4>
                <p>{review}</p>
                <img src={productImg} alt='foodImage'></img>


            </div>



        </div>
            
        </>
    );
};

export default ShowHomepageReviews;