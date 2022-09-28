import React, { useEffect, useState } from 'react';
import { AddToLocalStore } from '../AddToDB/AddToDB';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    const handler = (meal) => {
        const newCart = [...carts, meal];
        setCarts(newCart);
        AddToLocalStore(meal);
    }

    return (
        <div className='meals-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal} handle={handler}></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Meals;