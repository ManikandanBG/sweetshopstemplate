class CartPageContainer extends CartBaseContainer {
  constructor(props) {
    super(props);
  }

  

  renderPage() {

    if (this.state && this.state.items) {
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
                <tr>
                  <td>
                    <div className="product-box">
                      <img src="assets/images/products/cart-1-1.jpg" alt="" />
                      <h3>
                        <a href="product-details.html">Banana</a>
                      </h3>
                    </div>
                  </td>
                  <td>$9.99</td>
                  <td>
                    <div className="quantity-box">
                      <button type="button" className="sub">
                        -
                      </button>
                      <input type="number" id="2" value="1" />
                      <button type="button" className="add">
                        +
                      </button>
                    </div>
                  </td>
                  <td>$9.99</td>
                  <td>
                    <i className="organik-icon-close remove-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-box">
                      <img src="assets/images/products/cart-1-2.jpg" alt="" />
                      <h3>
                        <a href="product-details.html">Tomatoes</a>
                      </h3>
                    </div>
                  </td>
                  <td>$9.99</td>
                  <td>
                    <div className="quantity-box">
                      <button type="button" className="sub">
                        -
                      </button>
                      <input type="number" id="2" value="1" />
                      <button type="button" className="add">
                        +
                      </button>
                    </div>
                  </td>
                  <td>$9.99</td>
                  <td>
                    <i className="organik-icon-close"></i>
                  </td>
                </tr>
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
                  <span>$19.98 USD</span>
                </li>
                <li>
                  <span>Shipping Cost</span>
                  <span>$0.00 USD</span>
                </li>
                <li>
                  <span>Total</span>
                  <span>$19.98 USD</span>
                </li>
              </ul>
              <div className="button-box">
                <a href="#" className="thm-btn">
                  Update
                </a>
                <a href="#" className="thm-btn">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.createRoot(document.querySelector("section.cart-page > div.container")).render(
  <CartPageContainer />);
