import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { carts } = props;
    return (
        <div className='cart'>
            <h1>Selected Food</h1>
            <h4>Selected Item: {carts.length}</h4>
            <ol>
                {
                    carts.map(cart => <li key={cart.idMeal}>{cart.strMeal}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;
{/* <Food food={cart.strMeal}></Food> */ }