import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import "./Shop.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import CartModal from '../CartModal/CartModal';
import useFetchedData from '../../Hooks/useFetchedData';

const Shop = () => {
    const [products, setProduct] = useFetchedData('coffee.json');
    const [cart, setCart] = useState([]);

    

    //cart data handling
    const handleAddToCart=(selectedProduct)=>{
       
        const exists = cart.find(cartProduct=> selectedProduct.id === cartProduct.id);
        if(!exists){
            const newCart = [...cart, selectedProduct];

            setCart(newCart);
        }
       
    }
    //delete from cart
    const deleteCart = (cartProduct)=>{
        const restProducts = cart.filter(product=> product.id !== cartProduct.id);
        setCart(restProducts);
    }
 
    //modal handling
    const [show, setShow] = useState(false);

    const handleModal=(query)=>{
        setShow(query);
    }


    return (
        <div>
            <h2 className='landing-page-line'>See the Reviews of Our Coffees and 
                    Choose What's Best for You</h2>
            <div className='shop-container'>

                <div className='product-parent'>
                
                <h2>Buy Your Favourite Coffee</h2>

                <div className='product-section'>
 
                        
                        {
                            products.map(product=> <Products
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Products>)

                        }

                    </div>
                </div>
                    
                
               
                    <div className='cart-section'>
                        <button className='cart-btn' onClick={()=>handleModal(true)}>
                            <span className='cart-btn-text'>Cart</span> 
                            <div className='cart-icon-lg'>
                                <span className='cart-btn-icon'><FontAwesomeIcon icon={faShoppingCart}/>
                                </span>
                                <span className='cart-badge'>{cart.length}</span>
                            </div>
                        </button>

                        <CartModal 
                        show={show} 
                        onClose={()=>setShow(false)} 
                        cartData={cart}
                        deleteCart={deleteCart}
                        ></CartModal>

                    </div>
            </div>
        

            
        </div>
    );
};

export default Shop;