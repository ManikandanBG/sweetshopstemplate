class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <div className="product-sidebar">
            <div className="product-sidebar__single product-sidebar__search-widget">
              <form action="#">
                <input type="text" placeholder="Search" />
                <button
                  className="organik-icon-magnifying-glass"
                  type="submit"
                ></button>
              </form>
            </div>
            <div className="product-sidebar__single">
              <h3>Price</h3>
              <div className="product-sidebar__price-range">
                <div className="range-slider-price" id="range-slider-price"></div>
                <div className="form-group">
                  <div className="left">
                    <p>
                      $<span id="min-value-rangeslider"></span>
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
            <p>Showing 1–9 of 12 results</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-1.jpg" alt="" />
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
                      <a href="product-details.html">Banana</a>
                    </h3>
                    <p>$1.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-2.jpg" alt="" />
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
                      <a href="product-details.html">Tomatoes</a>
                    </h3>
                    <p>$3.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-3.jpg" alt="" />
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
                      <a href="product-details.html">Bread</a>
                    </h3>
                    <p>$2.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-4.jpg" alt="" />
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
                      <a href="product-details.html">Apples</a>
                    </h3>
                    <p>$5.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-5.jpg" alt="" />
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
                      <a href="product-details.html">Olive Oil</a>
                    </h3>
                    <p>$6.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-6.jpg" alt="" />
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
                      <a href="product-details.html">Eggs</a>
                    </h3>
                    <p>$4.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-7.jpg" alt="" />
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
                      <a href="product-details.html">Honey</a>
                    </h3>
                    <p>$9.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-8.jpg" alt="" />
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
                      <a href="product-details.html">Onions</a>
                    </h3>
                    <p>$2.00</p>
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
            <div className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="product-card__image">
                  <img src="assets/images/products/product-1-9.jpg" alt="" />
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
                      <a href="product-details.html">Cabbage</a>
                    </h3>
                    <p>$3.00</p>
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

ReactDOM.createRoot(document.getElementById("productsContainer")).render(<ProductsContainer />);
