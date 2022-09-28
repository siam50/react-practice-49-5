import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <h1>My Meal</h1>
            <div className='anchor'>
                <a href="/">Home</a>
                <a href="/">API</a>
                <a href="/">Forum</a>
                <input type="text" />
            </div>
        </div>
    );
};

export default Header;