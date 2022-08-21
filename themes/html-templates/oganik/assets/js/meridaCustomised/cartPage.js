class CartPageContainer extends CartBaseContainer {
  constructor(props) {
    super(props);
  }

  renderPage() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "div",
        { className: "table-responsive" },
        React.createElement(
          "table",
          { className: "table cart-table" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "Item"
              ),
              React.createElement(
                "th",
                null,
                "Price"
              ),
              React.createElement(
                "th",
                null,
                "Quantity"
              ),
              React.createElement(
                "th",
                null,
                "Total"
              ),
              React.createElement(
                "th",
                null,
                "Remove"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            this.state.cartItems.map(cartItem => {
              const item = this.state.items.filter(item => item.name === cartItem.name)[0];
              return React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "div",
                    { className: "product-box" },
                    React.createElement("img", { src: item.imgUrl, alt: "" }),
                    React.createElement(
                      "h3",
                      null,
                      React.createElement(
                        "a",
                        { href: "product-details.html" },
                        cartItem.name
                      )
                    )
                  )
                ),
                React.createElement(
                  "td",
                  null,
                  "$",
                  item.rate
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "div",
                    { className: "quantity-box" },
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        className: "sub",
                        onClick: () => this.updateQuantity(cartItem.name, cartItem.quantity - 1)
                      },
                      "-"
                    ),
                    React.createElement("input", {
                      type: "number",
                      id: "2",
                      value: cartItem.quantity,
                      onChange: event => this.updateQuantity(cartItem.name, parseInt(event.target.value))
                    }),
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        className: "add",
                        onClick: () => this.updateQuantity(cartItem.name, cartItem.quantity + 1)
                      },
                      "+"
                    )
                  )
                ),
                React.createElement(
                  "td",
                  null,
                  "$",
                  item.rate * cartItem.quantity
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement("i", { className: "organik-icon-close remove-icon" })
                )
              );
            })
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-lg-8" },
          React.createElement(
            "form",
            { action: "#", className: "contact-one__form" },
            React.createElement("input", { type: "text", placeholder: "Enter Coupon Code" }),
            React.createElement(
              "button",
              { type: "submit", className: "thm-btn" },
              "Apply Coupon"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-lg-4" },
          React.createElement(
            "ul",
            { className: "cart-total list-unstyled" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "span",
                null,
                "Subtotal"
              ),
              React.createElement(
                "span",
                null,
                "$",
                this.calculateSubTotal(),
                " USD"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "span",
                null,
                "Shipping Cost"
              ),
              React.createElement(
                "span",
                null,
                "$0.00 USD"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "span",
                null,
                "Total"
              ),
              React.createElement(
                "span",
                null,
                "$",
                this.calculateSubTotal() + this.state.shippingCost,
                " USD"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "button-box" },
            React.createElement(
              "a",
              { href: "#", className: "thm-btn" },
              "Checkout"
            )
          )
        )
      )
    );
  }
}

ReactDOM.createRoot(document.querySelector("section.cart-page > div.container")).render(React.createElement(CartPageContainer, null));