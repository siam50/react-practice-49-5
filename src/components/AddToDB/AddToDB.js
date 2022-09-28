const AddToLocalStore = (meal) => {
    // let quantity = 0;
    let shoppingCart = {};
    const getShoppingCart = localStorage.getItem('shopping-cart');
    if (getShoppingCart) {
        shoppingCart = JSON.parse(getShoppingCart)
        const quantity = shoppingCart[meal.strMeal];
        if (quantity) {
            shoppingCart[meal.strMeal] = quantity + 1;
        }
        else {
            shoppingCart[meal.strMeal] = 1;
        }
    }
    else {
        shoppingCart[meal.strMeal] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

export { AddToLocalStore };