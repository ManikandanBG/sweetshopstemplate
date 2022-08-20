class CartPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cartKey = "meridaSwathiSweetsCartKey";
    this.state = {
      cartItems: JSON.parse(localStorage[this.cartKey])
    };
  }

  componentDidMount() {
    const that = this;
    $.getJSON(that.getItemsUrl, {}, function (items) {
      that.setState({
        items
      });
    });
  }

  render() {
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
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "div",
                  { className: "product-box" },
                  React.createElement("img", { src: "assets/images/products/cart-1-1.jpg", alt: "" }),
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Banana"
                    )
                  )
                )
              ),
              React.createElement(
                "td",
                null,
                "$9.99"
              ),
              React.createElement(
                "td",
                null,
                React.createElement(
                  "div",
                  { className: "quantity-box" },
                  React.createElement(
                    "button",
                    { type: "button", className: "sub" },
                    "-"
                  ),
                  React.createElement("input", { type: "number", id: "2", value: "1" }),
                  React.createElement(
                    "button",
                    { type: "button", className: "add" },
                    "+"
                  )
                )
              ),
              React.createElement(
                "td",
                null,
                "$9.99"
              ),
              React.createElement(
                "td",
                null,
                React.createElement("i", { className: "organik-icon-close remove-icon" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "div",
                  { className: "product-box" },
                  React.createElement("img", { src: "assets/images/products/cart-1-2.jpg", alt: "" }),
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Tomatoes"
                    )
                  )
                )
              ),
              React.createElement(
                "td",
                null,
                "$9.99"
              ),
              React.createElement(
                "td",
                null,
                React.createElement(
                  "div",
                  { className: "quantity-box" },
                  React.createElement(
                    "button",
                    { type: "button", className: "sub" },
                    "-"
                  ),
                  React.createElement("input", { type: "number", id: "2", value: "1" }),
                  React.createElement(
                    "button",
                    { type: "button", className: "add" },
                    "+"
                  )
                )
              ),
              React.createElement(
                "td",
                null,
                "$9.99"
              ),
              React.createElement(
                "td",
                null,
                React.createElement("i", { className: "organik-icon-close" })
              )
            )
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
                "$19.98 USD"
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
                "$19.98 USD"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "button-box" },
            React.createElement(
              "a",
              { href: "#", className: "thm-btn" },
              "Update"
            ),
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