// noinspection HtmlUnknownTarget,JSUnresolvedVariable


export class BodyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.container = props.container;
    }

    render() {
        return (
            <React.Fragment>
                <div className="preloader">
                    <img
                        className="preloader__image"
                        width="55"
                        src="assets/images/loader.png"
                        alt=""
                    />
                </div>

                <div className="page-wrapper">
                    <header className="main-header">
                        <div className="topbar">
                            <div className="container">
                                <div className="main-logo">
                                    <a href="index.html" className="logo">
                                        <img src="assets/images/logo-dark.png" width="105" alt=""/>
                                    </a>
                                    <div className="mobile-nav__buttons">
                                        <a href="#" className="search-toggler"
                                        ><i className="organik-icon-magnifying-glass"></i
                                        ></a>
                                        <a href="#" className="mini-cart__toggler"
                                        ><i className="organik-icon-shopping-cart"></i
                                        ></a>
                                    </div>
                                    <span className="fa fa-bars mobile-nav__toggler"></span>
                                </div>
                                <div className="topbar__left">
                                    <div className="topbar__social">
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-facebook-square"></a>
                                        <a href="#" className="fab fa-instagram"></a>
                                    </div>
                                    <div className="topbar__info">
                                        <i className="organik-icon-email"></i>
                                        <p>
                                            Email
                                            <a
                                                href="/cdn-cgi/l/email-protection#b3daddd5dcf3dcc1d4d2dddad89dd0dcde"
                                            ><span
                                                className="__cf_email__"
                                                data-cfemail="7c15121a133c130e1b1d121517521f1311"
                                            >[email&#160;protected]</span
                                            ></a
                                            >
                                        </p>
                                    </div>
                                </div>
                                <div className="topbar__right">
                                    <div className="topbar__info">
                                        <i className="organik-icon-calling"></i>
                                        <p>Phone <a href="tel:+92-666-888-0000">92 666 888 0000</a></p>
                                    </div>
                                    <div className="topbar__buttons">
                                        <a href="#" className="search-toggler"
                                        ><i className="organik-icon-magnifying-glass"></i
                                        ></a>
                                        <a href="#" className="mini-cart__toggler"
                                        ><i className="organik-icon-shopping-cart"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="main-menu">
                            <div className="container">
                                <div className="main-menu__login">
                                    <a href="#"><i className="organik-icon-user"></i>Login / Register</a>
                                </div>
                                <ul className="main-menu__list">
                                    <li className="dropdown">
                                        <a href="index.html">Home</a>
                                        <ul>
                                            <li>
                                                <a href="index.html">Home One</a>
                                            </li>
                                            <li><a href="index-2.html">Home Two</a></li>
                                            <li className="dropdown">
                                                <a href="#">Header Styles</a>
                                                <ul>
                                                    <li><a href="index.html">Header One</a></li>
                                                    <li><a href="index-2.html">Header Two</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="products.html">Shop</a>
                                        <ul>
                                            <li><a href="products.html">Shop</a></li>
                                            <li><a href="product-details.html">Product Details</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="news.html">News</a>
                                        <ul>
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="news-details.html">News Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                <div className="main-menu__language">
                                    <img src="assets/images/resources/flag-1-1.jpg" alt=""/>
                                    <label className="sr-only" htmlFor="language-select">select language</label>

                                    <select className="selectpicker" id="language-select-header">
                                        <option value="english">English</option>
                                        <option value="arabic">Arabic</option>
                                    </select>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="stricky-header stricked-menu main-menu">
                        <div className="sticky-header__content"></div>
                    </div>
                    <section className="page-header">
                        <div
                            className="page-header__bg"
                            style= {{"backgroundImage" : "url(assets/sweet-img/backgrounds/merida-product-bg-1.cms.jpg)"}}
                        ></div>

                        <div className="container">
                            <h2>Products</h2>
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li>/</li>
                                <li><span>Products</span></li>
                            </ul>
                        </div>
                    </section>
                    <section className="products-page">
                        <div className="container" id="productsContainer">
                            { ( <this.container />)}
                        </div>
                    </section>
                    <footer className="site-footer background-black-2">
                        <img
                            src="assets/images/shapes/footer-bg-1-1.png"
                            alt=""
                            className="site-footer__shape-1"
                        />
                        <img
                            src="assets/images/shapes/footer-bg-1-2.png"
                            alt=""
                            className="site-footer__shape-2"
                        />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                    <div className="footer-widget footer-widget__about-widget">
                                        <a href="index.html" className="footer-widget__logo">
                                            <img
                                                src="assets/images/logo-light.png"
                                                alt=""
                                                width="105"
                                                height="43"
                                            />
                                        </a>
                                        <p className="thm-text-dark">
                                            Atiam rhoncus sit amet adip scing sed ipsum. Lorem ipsum dolor
                                            sit amet adipiscing <br/>
                                            sem neque.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-2">
                                    <div className="footer-widget footer-widget__contact-widget">
                                        <h3 className="footer-widget__title">Contact</h3>
                                        <ul className="list-unstyled footer-widget__contact">
                                            <li>
                                                <i className="fa fa-phone-square"></i>
                                                <a href="tel:666-888-0000">666 888 0000</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope"></i>
                                                <a
                                                    href="/cdn-cgi/l/email-protection#e1888f878ea1828e8c91808f98cf828e8c"
                                                ><span
                                                    className="__cf_email__"
                                                    data-cfemail="d1b8bfb7be91b2bebca1b0bfa8ffb2bebc"
                                                >[email&#160;protected]</span
                                                ></a
                                                >
                                            </li>
                                            <li>
                                                <i className="fa fa-map-marker-alt"></i>
                                                <a href="#">66 top broklyn street. New York</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-2">
                                    <div className="footer-widget footer-widget__links-widget">
                                        <h3 className="footer-widget__title">Links</h3>
                                        <ul className="list-unstyled footer-widget__links">
                                            <li>
                                                <a href="index.html">Top Sellers</a>
                                            </li>
                                            <li>
                                                <a href="products.html">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="about.html">About Store</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Help</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-2">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">Explore</h3>
                                        <ul className="list-unstyled footer-widget__links">
                                            <li>
                                                <a href="products.html">New Products</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">My Account</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Support</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">FAQs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">Newsletter</h3>
                                        <form action="#" data-url="YOUR_MAILCHIMP_URL" className="mc-form">
                                            <input
                                                type="email"
                                                name="EMAIL"
                                                id="mc-email"
                                                placeholder="Email Address"
                                            />
                                            <button type="submit">Subscribe</button>
                                        </form>
                                        <div className="mc-form__response"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-footer">
                            <div className="container">
                                <hr/>
                                <div className="inner-container text-center">
                                    <div className="bottom-footer__social">
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-facebook-square"></a>
                                        <a href="#" className="fab fa-instagram"></a>
                                    </div>
                                    <p className="thm-text-dark">
                                        © Copyright <span className="dynamic-year"></span> by Company.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div className="mobile-nav__wrapper">
                    <div className="mobile-nav__overlay mobile-nav__toggler"></div>

                    <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler"><i className="organik-icon-close"></i></span>
                        <div className="logo-box">
                            <a href="index.html" aria-label="logo image">
                                <img src="assets/images/logo-light.png" width="155" alt=""/>
                            </a>
                        </div>

                        <div className="mobile-nav__container"></div>

                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="organik-icon-email"></i>
                                <a href="/cdn-cgi/l/email-protection#bfd1dadadbd7dad3cfffd0cdd8ded1d6d491dcd0d2">
                                    <span
                                        className="__cf_email__"
                                        data-cfemail="29474c4c4d414c455969465b4e48474042074a4644"
                                    >[email&#160;protected]
                                    </span>
                                </a>
                            </li>
                            <li>
                                <i className="organik-icon-calling"></i>
                                <a href="tel:666-888-0000">666 888 0000</a>
                            </li>
                        </ul>
                        <div className="mobile-nav__top">
                            <div className="mobile-nav__language">
                                <img src="assets/images/resources/flag-1-1.jpg" alt=""/>
                                <label className="sr-only" htmlFor="language-select">select language</label>

                                <select className="selectpicker" id="language-select">
                                    <option value="english">English</option>
                                    <option value="arabic">Arabic</option>
                                </select>
                            </div>
                            <div className="main-menu__login">
                                <a href="#"><i className="organik-icon-user"></i>Login / Register</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mini-cart">
                    <div className="mini-cart__overlay mini-cart__toggler"></div>
                    <div className="mini-cart__content">
                        <div className="mini-cart__top">
                            <h3 className="mini-cart__title">Shopping Cart</h3>
                            <span className="mini-cart__close mini-cart__toggler"
                            ><i className="organik-icon-close"></i
                            ></span>
                        </div>
                        <div className="mini-cart__item">
                            <img src="assets/images/products/cart-1-1.jpg" alt=""/>
                            <div className="mini-cart__item-content">
                                <div className="mini-cart__item-top">
                                    <h3><a href="product-details.html">Banana</a></h3>
                                    <p>$9.99</p>
                                </div>
                                <div className="quantity-box">
                                    <button type="button" className="sub">-</button>
                                    <input type="number" id="2" value="1"/>
                                    <button type="button" className="add">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="mini-cart__item">
                            <img src="assets/images/products/cart-1-2.jpg" alt=""/>
                            <div className="mini-cart__item-content">
                                <div className="mini-cart__item-top">
                                    <h3><a href="product-details.html">Tomato</a></h3>
                                    <p>$9.99</p>
                                </div>
                                <div className="quantity-box">
                                    <button type="button" className="sub">-</button>
                                    <input type="number" id="2" value="1"/>
                                    <button type="button" className="add">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="mini-cart__item">
                            <img src="assets/images/products/cart-1-3.jpg" alt=""/>
                            <div className="mini-cart__item-content">
                                <div className="mini-cart__item-top">
                                    <h3><a href="product-details.html">Bread</a></h3>
                                    <p>$9.99</p>
                                </div>
                                <div className="quantity-box">
                                    <button type="button" className="sub">-</button>
                                    <input type="number" id="2" value="1"/>
                                    <button type="button" className="add">+</button>
                                </div>
                            </div>
                        </div>
                        <a href="checkout.html" className="thm-btn mini-cart__checkout">Proceed To Checkout</a>
                    </div>
                </div>
                <div className="search-popup">
                    <div className="search-popup__overlay search-toggler"></div>
                    <div className="search-popup__content">
                        <form action="#">
                            <label htmlFor="search" className="sr-only">search here</label>
                            <input type="text" id="search" placeholder="Search Here..."/>
                            <button type="submit" aria-label="search submit" className="thm-btn">
                                <i className="organik-icon-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                    <i className="fa fa-angle-up"></i>
                </a>
                <script
                    data-cfasync="false"
                    src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script src="assets/vendors/jquery/jquery-3.5.1.min.js"></script>
                <script src="assets/vendors/bootstrap/bootstrap.bundle.min.js"></script>
                <script src="assets/vendors/bootstrap-select/bootstrap-select.min.js"></script>
                <script src="assets/vendors/jarallax/jarallax.min.js"></script>
                <script src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
                <script src="assets/vendors/jquery-appear/jquery.appear.min.js"></script>
                <script src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
                <script src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="assets/vendors/jquery-validate/jquery.validate.min.js"></script>
                <script src="assets/vendors/nouislider/nouislider.min.js"></script>
                <script src="assets/vendors/odometer/odometer.min.js"></script>
                <script src="assets/vendors/swiper/swiper.min.js"></script>
                <script src="assets/vendors/tiny-slider/tiny-slider.min.js"></script>
                <script src="assets/vendors/wnumb/wNumb.min.js"></script>
                <script src="assets/vendors/wow/wow.js"></script>
                <script src="assets/vendors/isotope/isotope.js"></script>
                <script src="assets/vendors/countdown/countdown.min.js"></script>

                <script src="assets/js/organik.js"></script>

                <script src="assets/js/meridaCustomised/vendors/react.development.js"></script>
                <script src="assets/js/meridaCustomised/vendors/react-dom.development.js"></script>
                <script src="assets/js/meridaCustomised/globals.js"></script>


                <script
                    defer=""
                    src="../../../beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194"
                    integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw=="
                    data-cf-beacon='{"rayId":"73c1de4438283c13","token":"72b2ec455a104aa0b3ca4230f1da2518","version":"2022.8.0","si":100}'
                    crossOrigin="anonymous"
                ></script>
            </React.Fragment>
        );
    }
}

export class HeadContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Products Page || Oganik || HTML Template For Organic Stores</title>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="assets/images/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="assets/images/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="assets/images/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="assets/images/favicons/site.webmanifest"/>
                <meta
                    name="description"
                    content="Agrikon HTML Template For Agriculture Farm & Farmers"
                />

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="../../../css2?family=Homemade+Apple&family=Abril+Fatface&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="assets/vendors/bootstrap/bootstrap.min.css"/>
                <link
                    rel="stylesheet"
                    href="assets/vendors/bootstrap-select/bootstrap-select.min.css"
                />
                <link rel="stylesheet" href="assets/vendors/animate/animate.min.css"/>
                <link rel="stylesheet" href="assets/vendors/fontawesome/css/all.min.css"/>
                <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css"/>
                <link
                    rel="stylesheet"
                    href="assets/vendors/organik-icon/organik-icons.css"
                />
                <link
                    rel="stylesheet"
                    href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
                />
                <link
                    rel="stylesheet"
                    href="assets/vendors/nouislider/nouislider.min.css"
                />
                <link
                    rel="stylesheet"
                    href="assets/vendors/nouislider/nouislider.pips.css"
                />
                <link rel="stylesheet" href="assets/vendors/odometer/odometer.min.css"/>
                <link rel="stylesheet" href="assets/vendors/swiper/swiper.min.css"/>
                <link
                    rel="stylesheet"
                    href="assets/vendors/tiny-slider/tiny-slider.min.css"
                />

                <link rel="stylesheet" href="assets/css/organik.css"/>
                <link rel="stylesheet" href="assets/css/meridaCustomised/custom.css"/>
            </React.Fragment>
        );
    }
}

export function renderHeader() {
    ReactDOM.createRoot(document.head).render(React.createElement(HeadContainer, null));
}
export function renderBody() {
    document.body.innerHTML = Handlebars.templates.bodyTag({});

    [
        "assets/vendors/jquery/jquery-3.5.1.min.js",
        "assets/vendors/bootstrap/bootstrap.bundle.min.js",
        "assets/vendors/bootstrap-select/bootstrap-select.min.js",
        "assets/vendors/jarallax/jarallax.min.js",
        "assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js",
        "assets/vendors/jquery-appear/jquery.appear.min.js",
        "assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js",
        "assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js",
        "assets/vendors/jquery-validate/jquery.validate.min.js",
        "assets/vendors/nouislider/nouislider.min.js",
        "assets/vendors/odometer/odometer.min.js",
        "assets/vendors/swiper/swiper.min.js",
        "assets/vendors/tiny-slider/tiny-slider.min.js",
        "assets/vendors/wnumb/wNumb.min.js",
        "assets/vendors/wow/wow.js",
        "assets/vendors/isotope/isotope.js",
        "assets/vendors/countdown/countdown.min.js",

        "assets/js/organik.js",
    ].map(src => {
        const elem = document.createElement("script");
        elem.src = src;
        return elem;
    }).forEach(script => document.body.append(script));
}

export function renderContainer(containerDomId, container) {
    renderHeader();
    renderBody();
    ReactDOM.createRoot(document.getElementById(containerDomId)).render(React.createElement(container, null));
}




