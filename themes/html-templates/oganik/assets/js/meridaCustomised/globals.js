window.addCartItem = window.addCartItem || function(cartItemName, quantity = 1) {
    const cartKey = "meridaSwathiSweetsCartKey";
    let cartItems = JSON.parse(localStorage[cartKey]);
    let cartItem = cartItems.filter(cartItem => cartItem.name === cartItemName);

    if(cartItem.length > 0) {
        cartItem[0].quantity += 1;
    } else {
        cartItems.push({
            name : cartItemName,
            quantity
        })
    }
 
    localStorage[cartKey] = JSON.stringify(cartItems);
}