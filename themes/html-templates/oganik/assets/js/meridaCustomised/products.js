class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-sm-12 col-md-12 col-lg-3" },
        React.createElement(
          "div",
          { className: "product-sidebar" },
          React.createElement(
            "div",
            { className: "product-sidebar__single product-sidebar__search-widget" },
            React.createElement(
              "form",
              { action: "#" },
              React.createElement("input", { type: "text", placeholder: "Search" }),
              React.createElement("button", {
                className: "organik-icon-magnifying-glass",
                type: "submit"
              })
            )
          ),
          React.createElement(
            "div",
            { className: "product-sidebar__single" },
            React.createElement(
              "h3",
              null,
              "Price"
            ),
            React.createElement(
              "div",
              { className: "product-sidebar__price-range" },
              React.createElement("div", { className: "range-slider-price", id: "range-slider-price" }),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "div",
                  { className: "left" },
                  React.createElement(
                    "p",
                    null,
                    "$",
                    React.createElement("span", { id: "min-value-rangeslider" })
                  ),
                  React.createElement(
                    "span",
                    null,
                    "-"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$",
                    React.createElement("span", { id: "max-value-rangeslider" })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "right" },
                  React.createElement("input", { type: "submit", className: "thm-btn", value: "Filter" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "product-sidebar__single" },
            React.createElement(
              "h3",
              null,
              "Categories"
            ),
            React.createElement(
              "ul",
              { className: "list-unstyled product-sidebar__links" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Vegetables ",
                  React.createElement("i", { className: "fa fa-angle-right" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Fresh Fruits ",
                  React.createElement("i", { className: "fa fa-angle-right" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Dairy Products ",
                  React.createElement("i", { className: "fa fa-angle-right" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Tomatos ",
                  React.createElement("i", { className: "fa fa-angle-right" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Oranges ",
                  React.createElement("i", { className: "fa fa-angle-right" })
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col-sm-12 col-md-12 col-lg-9" },
        React.createElement(
          "div",
          { className: "product-sorter" },
          React.createElement(
            "p",
            null,
            "Showing 1\u20139 of 12 results"
          ),
          React.createElement(
            "div",
            { className: "product-sorter__select" },
            React.createElement(
              "select",
              { className: "selectpicker" },
              React.createElement(
                "option",
                { value: "#" },
                "Sort by popular"
              ),
              React.createElement(
                "option",
                { value: "#" },
                "Sort by popular"
              ),
              React.createElement(
                "option",
                { value: "#" },
                "Sort by popular"
              ),
              React.createElement(
                "option",
                { value: "#" },
                "Sort by popular"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-1.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Banana"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$1.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-2.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Tomatoes"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$3.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-3.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Bread"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$2.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-4.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Apples"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$5.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-5.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Olive Oil"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$6.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-6.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Eggs"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$4.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-7.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Honey"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$9.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-8.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Onions"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$2.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-lg-4" },
            React.createElement(
              "div",
              { className: "product-card" },
              React.createElement(
                "div",
                { className: "product-card__image" },
                React.createElement("img", { src: "assets/images/products/product-1-9.jpg", alt: "" }),
                React.createElement(
                  "div",
                  { className: "product-card__image-content" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "organik-icon-heart" })
                  ),
                  React.createElement(
                    "a",
                    { href: "cart.html" },
                    React.createElement("i", { className: "organik-icon-shopping-cart" })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "product-card__content" },
                React.createElement(
                  "div",
                  { className: "product-card__left" },
                  React.createElement(
                    "h3",
                    null,
                    React.createElement(
                      "a",
                      { href: "product-details.html" },
                      "Cabbage"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "$3.00"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "product-card__right" },
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" }),
                  React.createElement("i", { className: "fa fa-star" })
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "a",
            { href: "#", className: "thm-btn products__load-more" },
            "Load More"
          )
        )
      )
    );
  }
}

ReactDOM.createRoot(document.getElementById("productsContainer")).render(React.createElement(ProductsContainer, null));