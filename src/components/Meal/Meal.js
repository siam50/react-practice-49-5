import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Meal.css';
const Meal = (props) => {
    const { handle } = props;
    const { idMeal, strInstructions, strMeal, strMealThumb } = props.meal;
    // console.log(props.meal)
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>Food Name:{strMeal}</h4>
            <p className='p'>{strInstructions.slice(0, 150)}...</p>
            <button onClick={() => handle(props.meal)}><p>BUY NOW</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Meal;