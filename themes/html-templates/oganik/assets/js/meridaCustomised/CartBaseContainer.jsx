class CartBaseContainer extends BaseContainer {
    constructor(props) {
        super(props);
        this.cartKey = "meridaSwathiSweetsCartKey";
        this.state = {
            cartItems : JSON.parse(localStorage[this.cartKey]),
            shippingCost : 0
        }
    }

    getItemFromCartItem(cartItemName) {
        return this.state.items.filter(item => item.name === cartItemName)[0];
    }

    
    updateQuantity(cartItemName, quantity) {

        if(quantity < 1)
            return;

        this.setState((prevState, prevProps) => {
            prevState.cartItems.filter(cartItem => cartItem.name === cartItemName)[0].quantity = quantity;
            
            localStorage[this.cartKey] = JSON.stringify(prevState.cartItems);
            return {cartItems : prevState.cartItems}
        });
    }

    removeCartItem(cartItemName) {
        this.setState((prevState, prevProps) => {
            const cartItems = prevState.cartItems.filter(cartItem => cartItem.name !== cartItemName);
            
            localStorage[this.cartKey] = JSON.stringify(cartItems);
            return {cartItems : cartItems}
        });
    }

    calculateSubTotal() {
        return [...this.state.cartItems]
        .map(cartItem => Object.assign(cartItem, { rate : this.getItemFromCartItem(cartItem.name).rate}))
        .reduce((subTotal, cartItem) => subTotal + cartItem.quantity * cartItem.rate, 0);
    }

}