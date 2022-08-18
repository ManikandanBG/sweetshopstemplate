class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchQuery : ""
    };
    this.getItemsUrl = "https://script.google.com/macros/s/AKfycbxiXQZEVPC92sOY8C6IY8-iErL06pA-qMUBhyCMsDIp1mTO-r0LEFPcsthURdfBUIF7/exec";
    this.filterItems = this.filterItems.bind(this);
    this.filterBySearchQuery = this.filterBySearchQuery.bind(this);
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.sortItemByRate = this.sortItemByRate.bind(this);
  }

  componentDidMount() {
    const that = this;
    $.getJSON(
      that.getItemsUrl,
      {},
      function (items) {
        that.setState({
          items,
        });
      }
    );
  }

  handleSearchQueryChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  sortItemByRate(firstItem, secondItem) {
    return firstItem.rate - secondItem.rate;
  }

  filterBySearchQuery(item) {
    if (!this.state || !this.state.searchQuery) {
        return true;
    }

    return item.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
  }


  filterItems(item) {
    return this.filterBySearchQuery(item);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <div className="product-sidebar">
            <div className="product-sidebar__single product-sidebar__search-widget">
              <form action="#">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={this.state ? this.state.searchQuery : ""} 
                    onChange={this.handleSearchQueryChange}
                />
                <button
                  className="organik-icon-magnifying-glass"
                  type="submit"
                ></button>
              </form>
            </div>
            <div className="product-sidebar__single">
              <h3>Price</h3>
              <div className="product-sidebar__price-range">
                {
                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                }
                
                <div className="form-group">
                  <div className="left">
                    <p>
                      $<span id="min-value-rangeslider">12</span>
                    </p>
                    <span>-</span>
                    <p>
                      $<span id="max-value-rangeslider"></span>
                    </p>
                  </div>
                  <div className="right">
                    <input type="submit" className="thm-btn" value="Filter" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-sidebar__single">
              <h3>Categories</h3>
              <ul className="list-unstyled product-sidebar__links">
                <li>
                  <a href="#">
                    Vegetables <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Fresh Fruits <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Dairy Products <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Tomatos <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Oranges <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-9">
          <div className="product-sorter">
            <p>
              Showing 1–9 of {this.state && this.state.items ? this.state.items.length : 0} results
            </p>
            <div className="product-sorter__select">
              <select className="selectpicker">
                <option value="#">Sort by popular</option>
                <option value="#">Sort by popular</option>
                <option value="#">Sort by popular</option>
                <option value="#">Sort by popular</option>
              </select>
            </div>
          </div>
          <div className="row">
            {this.state && this.state.items ? (
              this.state.items.filter(this.filterItems).map(function (item, i) {
                return (
                  <div className="col-md-6 col-lg-4" key={i}>
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src={item.imgUrl}
                          className = "img-fluid"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <a href="#">
                            <i className="organik-icon-heart"></i>
                          </a>
                          <a href="cart.html">
                            <i className="organik-icon-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <a href="product-details.html">{item.name}</a>
                          </h3>
                          <p>${item.rate}</p>
                        </div>
                        <div className="product-card__right">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="text-center">
            <a href="#" className="thm-btn products__load-more">
              Load More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("productsContainer")).render(
  <ProductsContainer />
);
