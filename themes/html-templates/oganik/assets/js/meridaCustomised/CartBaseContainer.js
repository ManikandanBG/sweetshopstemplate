class CartBaseContainer extends BaseContainer {
    constructor(props) {
        super(props);
        this.cartKey = "meridaSwathiSweetsCartKey";
        this.state = {
            cartItems: JSON.parse(localStorage[this.cartKey])
        };
    }

}