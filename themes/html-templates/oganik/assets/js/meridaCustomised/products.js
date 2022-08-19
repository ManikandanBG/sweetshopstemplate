class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.sortBy = {
      default: {
        func: () => 0,
        displayValue: "Sort By"
      },
      rateAscending: {
        func: this.sortItemByRate,
        displayValue: "Rate Ascending"
      },
      rateDescending: {
        func: (firstItem, secondItem) => this.sortItemByRate(firstItem, secondItem) * -1,
        displayValue: "Rate Descending"
      },
      nameAscending: {
        func: this.sortItemByName,
        displayValue: "Alphabetically Ascending"
      },
      nameDescending: {
        func: (firstItem, secondItem) => this.sortItemByName(firstItem, secondItem) * -1,
        displayValue: "Alphabetically Descending"
      }
    };

    this.state = {
      searchQuery: "",
      sortByKey: Object.entries(this.sortBy)[0][0]
    };
    this.getItemsUrl = "https://script.google.com/macros/s/AKfycbxiXQZEVPC92sOY8C6IY8-iErL06pA-qMUBhyCMsDIp1mTO-r0LEFPcsthURdfBUIF7/exec";
    this.filterItems = this.filterItems.bind(this);
    this.filterBySearchQuery = this.filterBySearchQuery.bind(this);
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.sortItemByRate = this.sortItemByRate.bind(this);
    this.intialiseNoUiSlider = this.intialiseNoUiSlider.bind(this);
    this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this);
    this.filterByPriceRange = this.filterByPriceRange.bind(this);
    this.sortItemByName = this.sortItemByName.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  componentDidMount() {
    const that = this;
    $.getJSON(that.getItemsUrl, {}, function (items) {
      that.setState({
        items,
        minPrice: 0,
        maxPrice: 0
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!document.getElementById("range-slider-price").noUiSlider) {
      this.intialiseNoUiSlider();
    }
  }

  intialiseNoUiSlider() {
    const that = this;
    const priceRange = document.getElementById("range-slider-price");
    const items = [...this.state.items].sort(this.sortItemByRate);
    const minPrice = items[0].rate;
    const maxPrice = items[items.length - 1].rate;

    noUiSlider.create(priceRange, {
      start: [minPrice, maxPrice],
      limit: maxPrice - minPrice,
      behaviour: "drag",
      connect: true,
      step: 1,
      range: { min: minPrice, max: maxPrice }
    });
    priceRange.noUiSlider.on("update", function (values, handle) {
      that.handlePriceRangeChange(values.map(val => parseInt(val)));
    });
  }

  handleSearchQueryChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handlePriceRangeChange([minPrice, maxPrice]) {
    this.setState({ minPrice, maxPrice });
  }

  handleSortByChange(event) {
    this.setState({ sortByKey: event.target.value });
  }

  sortItemByRate(firstItem, secondItem) {
    return firstItem.rate - secondItem.rate;
  }

  sortItemByName(firstItem, secondItem) {
    return firstItem.name.localeCompare(secondItem.name);
  }

  filterBySearchQuery(item) {
    if (!this.state || !this.state.searchQuery) {
      return true;
    }

    return item.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
  }

  filterByPriceRange(item) {
    if (!this.state || !(this.state.minPrice && this.state.maxPrice)) {
      return true;
    }

    return this.state.minPrice <= item.rate && item.rate <= this.state.maxPrice;
  }

  filterItems(item) {
    return this.filterBySearchQuery(item) && this.filterByPriceRange(item);
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
              React.createElement("input", {
                type: "text",
                placeholder: "Search",
                value: this.state ? this.state.searchQuery : "",
                onChange: this.handleSearchQueryChange
              }),
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
              React.createElement("div", {
                className: "range-slider-price",
                id: "range-slider-price"
              }),
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
                    React.createElement(
                      "span",
                      null,
                      this.state.minPrice
                    )
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
                    React.createElement(
                      "span",
                      null,
                      this.state.maxPrice
                    )
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
            "Showing 1\u20139 of",
            this.state && this.state.items ? this.state.items.length : 0,
            "results"
          ),
          React.createElement(
            "div",
            { className: "product-sorter__select" },
            React.createElement(
              "select",
              {
                className: "selectpicker",
                value: this.state.sortByKey || 0,
                onChange: this.handleSortByChange
              },
              Object.entries(this.sortBy).map(([sortByKey, sortByInst]) => {
                return React.createElement(
                  "option",
                  { value: sortByKey },
                  sortByInst.displayValue
                );
              })
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          this.state && this.state.items ? [...this.state.items].sort(this.sortBy[this.state.sortByKey].func).filter(this.filterItems).map(function (item, i) {
            return React.createElement(
              "div",
              { className: "col-md-6 col-lg-4", key: i },
              React.createElement(
                "div",
                { className: "product-card" },
                React.createElement(
                  "div",
                  { className: "product-card__image" },
                  React.createElement("img", { src: item.imgUrl, className: "img-fluid", alt: "" }),
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
                        item.name
                      )
                    ),
                    React.createElement(
                      "p",
                      null,
                      "$",
                      item.rate
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
            );
          }) : React.createElement(
            "div",
            null,
            "Loading..."
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