class CartPageContainer extends CartBaseContainer {
  constructor(props) {
    super(props);
  }

  renderPage() {
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cartItems.map((cartItem) => {
                const item = this.state.items.filter(
                  (item) => item.name === cartItem.name
                )[0];
                return (
                  <tr>
                    <td>
                      <div className="product-box">
                        <img src={item.imgUrl} alt="" />
                        <h3>
                          <a href="product-details.html">{cartItem.name}</a>
                        </h3>
                      </div>
                    </td>
                    <td>${item.rate}</td>
                    <td>
                      <div className="quantity-box">
                        <button
                          type="button"
                          className="sub"
                          onClick={() =>
                            this.updateQuantity(
                              cartItem.name,
                              cartItem.quantity - 1
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          id="2"
                          value={cartItem.quantity}
                          onChange={(event) =>
                            this.updateQuantity(
                              cartItem.name,
                              parseInt(event.target.value)
                            )
                          }
                        />
                        <button
                          type="button"
                          className="add"
                          onClick={() =>
                            this.updateQuantity(
                              cartItem.name,
                              cartItem.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${item.rate * cartItem.quantity}</td>
                    <td>
                      <i className="organik-icon-close remove-icon"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <form action="#" className="contact-one__form">
              <input type="text" placeholder="Enter Coupon Code" />
              <button type="submit" className="thm-btn">
                Apply Coupon
              </button>
            </form>
          </div>
          <div className="col-lg-4">
            <ul className="cart-total list-unstyled">
              <li>
                <span>Subtotal</span>
                <span>${this.calculateSubTotal()} USD</span>
              </li>
              <li>
                <span>Shipping Cost</span>
                <span>$0.00 USD</span>
              </li>
              <li>
                <span>Total</span>
                <span>
                  ${this.calculateSubTotal() + this.state.shippingCost} USD
                </span>
              </li>
            </ul>
            <div className="button-box">
              {/*<a href="#" className="thm-btn">
                Update
              </a>*/}
              <a href="#" className="thm-btn">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.createRoot(
  document.querySelector("section.cart-page > div.container")
).render(<CartPageContainer />);
