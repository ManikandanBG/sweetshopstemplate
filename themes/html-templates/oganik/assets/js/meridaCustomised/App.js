// noinspection HtmlUnknownTarget,JSUnresolvedVariable


export class BodyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.container = props.container;
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                "div",
                { className: "preloader" },
                React.createElement("img", {
                    className: "preloader__image",
                    width: "55",
                    src: "assets/images/loader.png",
                    alt: ""
                })
            ),
            React.createElement(
                "div",
                { className: "page-wrapper" },
                React.createElement(
                    "header",
                    { className: "main-header" },
                    React.createElement(
                        "div",
                        { className: "topbar" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "main-logo" },
                                React.createElement(
                                    "a",
                                    { href: "index.html", className: "logo" },
                                    React.createElement("img", { src: "assets/images/logo-dark.png", width: "105", alt: "" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "mobile-nav__buttons" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "search-toggler"
                                        },
                                        React.createElement("i", { className: "organik-icon-magnifying-glass" })
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "mini-cart__toggler"
                                        },
                                        React.createElement("i", { className: "organik-icon-shopping-cart" })
                                    )
                                ),
                                React.createElement("span", { className: "fa fa-bars mobile-nav__toggler" })
                            ),
                            React.createElement(
                                "div",
                                { className: "topbar__left" },
                                React.createElement(
                                    "div",
                                    { className: "topbar__social" },
                                    React.createElement("a", { href: "#", className: "fab fa-twitter" }),
                                    React.createElement("a", { href: "#", className: "fab fa-facebook-square" }),
                                    React.createElement("a", { href: "#", className: "fab fa-instagram" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "topbar__info" },
                                    React.createElement("i", { className: "organik-icon-email" }),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Email",
                                        React.createElement(
                                            "a",
                                            {
                                                href: "/cdn-cgi/l/email-protection#b3daddd5dcf3dcc1d4d2dddad89dd0dcde"
                                            },
                                            React.createElement(
                                                "span",
                                                {
                                                    className: "__cf_email__",
                                                    "data-cfemail": "7c15121a133c130e1b1d121517521f1311"
                                                },
                                                "[email\xA0protected]"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "topbar__right" },
                                React.createElement(
                                    "div",
                                    { className: "topbar__info" },
                                    React.createElement("i", { className: "organik-icon-calling" }),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Phone ",
                                        React.createElement(
                                            "a",
                                            { href: "tel:+92-666-888-0000" },
                                            "92 666 888 0000"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "topbar__buttons" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "search-toggler"
                                        },
                                        React.createElement("i", { className: "organik-icon-magnifying-glass" })
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "mini-cart__toggler"
                                        },
                                        React.createElement("i", { className: "organik-icon-shopping-cart" })
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "nav",
                        { className: "main-menu" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "main-menu__login" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "organik-icon-user" }),
                                    "Login / Register"
                                )
                            ),
                            React.createElement(
                                "ul",
                                { className: "main-menu__list" },
                                React.createElement(
                                    "li",
                                    { className: "dropdown" },
                                    React.createElement(
                                        "a",
                                        { href: "index.html" },
                                        "Home"
                                    ),
                                    React.createElement(
                                        "ul",
                                        null,
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "index.html" },
                                                "Home One"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "index-2.html" },
                                                "Home Two"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "dropdown" },
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Header Styles"
                                            ),
                                            React.createElement(
                                                "ul",
                                                null,
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "index.html" },
                                                        "Header One"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "index-2.html" },
                                                        "Header Two"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "about.html" },
                                        "About"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown" },
                                    React.createElement(
                                        "a",
                                        { href: "products.html" },
                                        "Shop"
                                    ),
                                    React.createElement(
                                        "ul",
                                        null,
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "products.html" },
                                                "Shop"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "product-details.html" },
                                                "Product Details"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "cart.html" },
                                                "Cart Page"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "checkout.html" },
                                                "Checkout"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown" },
                                    React.createElement(
                                        "a",
                                        { href: "news.html" },
                                        "News"
                                    ),
                                    React.createElement(
                                        "ul",
                                        null,
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "news.html" },
                                                "News"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "news-details.html" },
                                                "News Details"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "contact.html" },
                                        "Contact"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "main-menu__language" },
                                React.createElement("img", { src: "assets/images/resources/flag-1-1.jpg", alt: "" }),
                                React.createElement(
                                    "label",
                                    { className: "sr-only", htmlFor: "language-select" },
                                    "select language"
                                ),
                                React.createElement(
                                    "select",
                                    { className: "selectpicker", id: "language-select-header" },
                                    React.createElement(
                                        "option",
                                        { value: "english" },
                                        "English"
                                    ),
                                    React.createElement(
                                        "option",
                                        { value: "arabic" },
                                        "Arabic"
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "stricky-header stricked-menu main-menu" },
                    React.createElement("div", { className: "sticky-header__content" })
                ),
                React.createElement(
                    "section",
                    { className: "page-header" },
                    React.createElement("div", {
                        className: "page-header__bg",
                        style: { "backgroundImage": "url(assets/sweet-img/backgrounds/merida-product-bg-1.cms.jpg)" }
                    }),
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "h2",
                            null,
                            "Products"
                        ),
                        React.createElement(
                            "ul",
                            { className: "thm-breadcrumb list-unstyled" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "index.html" },
                                    "Home"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "/"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "span",
                                    null,
                                    "Products"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "section",
                    { className: "products-page" },
                    React.createElement(
                        "div",
                        { className: "container", id: "productsContainer" },
                        React.createElement(this.container, null)
                    )
                ),
                React.createElement(
                    "footer",
                    { className: "site-footer background-black-2" },
                    React.createElement("img", {
                        src: "assets/images/shapes/footer-bg-1-1.png",
                        alt: "",
                        className: "site-footer__shape-1"
                    }),
                    React.createElement("img", {
                        src: "assets/images/shapes/footer-bg-1-2.png",
                        alt: "",
                        className: "site-footer__shape-2"
                    }),
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-sm-12 col-md-6 col-lg-6 col-xl-3" },
                                React.createElement(
                                    "div",
                                    { className: "footer-widget footer-widget__about-widget" },
                                    React.createElement(
                                        "a",
                                        { href: "index.html", className: "footer-widget__logo" },
                                        React.createElement("img", {
                                            src: "assets/images/logo-light.png",
                                            alt: "",
                                            width: "105",
                                            height: "43"
                                        })
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "thm-text-dark" },
                                        "Atiam rhoncus sit amet adip scing sed ipsum. Lorem ipsum dolor sit amet adipiscing ",
                                        React.createElement("br", null),
                                        "sem neque."
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-sm-12 col-md-6 col-lg-6 col-xl-2" },
                                React.createElement(
                                    "div",
                                    { className: "footer-widget footer-widget__contact-widget" },
                                    React.createElement(
                                        "h3",
                                        { className: "footer-widget__title" },
                                        "Contact"
                                    ),
                                    React.createElement(
                                        "ul",
                                        { className: "list-unstyled footer-widget__contact" },
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement("i", { className: "fa fa-phone-square" }),
                                            React.createElement(
                                                "a",
                                                { href: "tel:666-888-0000" },
                                                "666 888 0000"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement("i", { className: "fa fa-envelope" }),
                                            React.createElement(
                                                "a",
                                                {
                                                    href: "/cdn-cgi/l/email-protection#e1888f878ea1828e8c91808f98cf828e8c"
                                                },
                                                React.createElement(
                                                    "span",
                                                    {
                                                        className: "__cf_email__",
                                                        "data-cfemail": "d1b8bfb7be91b2bebca1b0bfa8ffb2bebc"
                                                    },
                                                    "[email\xA0protected]"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement("i", { className: "fa fa-map-marker-alt" }),
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "66 top broklyn street. New York"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-sm-12 col-md-6 col-lg-6 col-xl-2" },
                                React.createElement(
                                    "div",
                                    { className: "footer-widget footer-widget__links-widget" },
                                    React.createElement(
                                        "h3",
                                        { className: "footer-widget__title" },
                                        "Links"
                                    ),
                                    React.createElement(
                                        "ul",
                                        { className: "list-unstyled footer-widget__links" },
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "index.html" },
                                                "Top Sellers"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "products.html" },
                                                "Shopping"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "about.html" },
                                                "About Store"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "contact.html" },
                                                "Contact"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "contact.html" },
                                                "Help"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-sm-12 col-md-6 col-lg-6 col-xl-2" },
                                React.createElement(
                                    "div",
                                    { className: "footer-widget" },
                                    React.createElement(
                                        "h3",
                                        { className: "footer-widget__title" },
                                        "Explore"
                                    ),
                                    React.createElement(
                                        "ul",
                                        { className: "list-unstyled footer-widget__links" },
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "products.html" },
                                                "New Products"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "checkout.html" },
                                                "My Account"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "contact.html" },
                                                "Support"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "contact.html" },
                                                "FAQs"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-sm-12 col-md-6 col-lg-6 col-xl-3" },
                                React.createElement(
                                    "div",
                                    { className: "footer-widget" },
                                    React.createElement(
                                        "h3",
                                        { className: "footer-widget__title" },
                                        "Newsletter"
                                    ),
                                    React.createElement(
                                        "form",
                                        { action: "#", "data-url": "YOUR_MAILCHIMP_URL", className: "mc-form" },
                                        React.createElement("input", {
                                            type: "email",
                                            name: "EMAIL",
                                            id: "mc-email",
                                            placeholder: "Email Address"
                                        }),
                                        React.createElement(
                                            "button",
                                            { type: "submit" },
                                            "Subscribe"
                                        )
                                    ),
                                    React.createElement("div", { className: "mc-form__response" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "bottom-footer" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement("hr", null),
                            React.createElement(
                                "div",
                                { className: "inner-container text-center" },
                                React.createElement(
                                    "div",
                                    { className: "bottom-footer__social" },
                                    React.createElement("a", { href: "#", className: "fab fa-twitter" }),
                                    React.createElement("a", { href: "#", className: "fab fa-facebook-square" }),
                                    React.createElement("a", { href: "#", className: "fab fa-instagram" })
                                ),
                                React.createElement(
                                    "p",
                                    { className: "thm-text-dark" },
                                    "\xA9 Copyright ",
                                    React.createElement("span", { className: "dynamic-year" }),
                                    " by Company.com"
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "mobile-nav__wrapper" },
                React.createElement("div", { className: "mobile-nav__overlay mobile-nav__toggler" }),
                React.createElement(
                    "div",
                    { className: "mobile-nav__content" },
                    React.createElement(
                        "span",
                        { className: "mobile-nav__close mobile-nav__toggler" },
                        React.createElement("i", { className: "organik-icon-close" })
                    ),
                    React.createElement(
                        "div",
                        { className: "logo-box" },
                        React.createElement(
                            "a",
                            { href: "index.html", "aria-label": "logo image" },
                            React.createElement("img", { src: "assets/images/logo-light.png", width: "155", alt: "" })
                        )
                    ),
                    React.createElement("div", { className: "mobile-nav__container" }),
                    React.createElement(
                        "ul",
                        { className: "mobile-nav__contact list-unstyled" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement("i", { className: "organik-icon-email" }),
                            React.createElement(
                                "a",
                                { href: "/cdn-cgi/l/email-protection#bfd1dadadbd7dad3cfffd0cdd8ded1d6d491dcd0d2" },
                                React.createElement(
                                    "span",
                                    {
                                        className: "__cf_email__",
                                        "data-cfemail": "29474c4c4d414c455969465b4e48474042074a4644"
                                    },
                                    "[email\xA0protected]"
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement("i", { className: "organik-icon-calling" }),
                            React.createElement(
                                "a",
                                { href: "tel:666-888-0000" },
                                "666 888 0000"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mobile-nav__top" },
                        React.createElement(
                            "div",
                            { className: "mobile-nav__language" },
                            React.createElement("img", { src: "assets/images/resources/flag-1-1.jpg", alt: "" }),
                            React.createElement(
                                "label",
                                { className: "sr-only", htmlFor: "language-select" },
                                "select language"
                            ),
                            React.createElement(
                                "select",
                                { className: "selectpicker", id: "language-select" },
                                React.createElement(
                                    "option",
                                    { value: "english" },
                                    "English"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "arabic" },
                                    "Arabic"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "main-menu__login" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "organik-icon-user" }),
                                "Login / Register"
                            )
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "mini-cart" },
                React.createElement("div", { className: "mini-cart__overlay mini-cart__toggler" }),
                React.createElement(
                    "div",
                    { className: "mini-cart__content" },
                    React.createElement(
                        "div",
                        { className: "mini-cart__top" },
                        React.createElement(
                            "h3",
                            { className: "mini-cart__title" },
                            "Shopping Cart"
                        ),
                        React.createElement(
                            "span",
                            { className: "mini-cart__close mini-cart__toggler"
                            },
                            React.createElement("i", { className: "organik-icon-close" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mini-cart__item" },
                        React.createElement("img", { src: "assets/images/products/cart-1-1.jpg", alt: "" }),
                        React.createElement(
                            "div",
                            { className: "mini-cart__item-content" },
                            React.createElement(
                                "div",
                                { className: "mini-cart__item-top" },
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
                                    "$9.99"
                                )
                            ),
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
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mini-cart__item" },
                        React.createElement("img", { src: "assets/images/products/cart-1-2.jpg", alt: "" }),
                        React.createElement(
                            "div",
                            { className: "mini-cart__item-content" },
                            React.createElement(
                                "div",
                                { className: "mini-cart__item-top" },
                                React.createElement(
                                    "h3",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "product-details.html" },
                                        "Tomato"
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "$9.99"
                                )
                            ),
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
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mini-cart__item" },
                        React.createElement("img", { src: "assets/images/products/cart-1-3.jpg", alt: "" }),
                        React.createElement(
                            "div",
                            { className: "mini-cart__item-content" },
                            React.createElement(
                                "div",
                                { className: "mini-cart__item-top" },
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
                                    "$9.99"
                                )
                            ),
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
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "checkout.html", className: "thm-btn mini-cart__checkout" },
                        "Proceed To Checkout"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "search-popup" },
                React.createElement("div", { className: "search-popup__overlay search-toggler" }),
                React.createElement(
                    "div",
                    { className: "search-popup__content" },
                    React.createElement(
                        "form",
                        { action: "#" },
                        React.createElement(
                            "label",
                            { htmlFor: "search", className: "sr-only" },
                            "search here"
                        ),
                        React.createElement("input", { type: "text", id: "search", placeholder: "Search Here..." }),
                        React.createElement(
                            "button",
                            { type: "submit", "aria-label": "search submit", className: "thm-btn" },
                            React.createElement("i", { className: "organik-icon-magnifying-glass" })
                        )
                    )
                )
            ),
            React.createElement(
                "a",
                { href: "#", "data-target": "html", className: "scroll-to-target scroll-to-top" },
                React.createElement("i", { className: "fa fa-angle-up" })
            ),
            React.createElement("script", {
                "data-cfasync": "false",
                src: "../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
            }),
            React.createElement("script", { src: "assets/vendors/jquery/jquery-3.5.1.min.js" }),
            React.createElement("script", { src: "assets/vendors/bootstrap/bootstrap.bundle.min.js" }),
            React.createElement("script", { src: "assets/vendors/bootstrap-select/bootstrap-select.min.js" }),
            React.createElement("script", { src: "assets/vendors/jarallax/jarallax.min.js" }),
            React.createElement("script", { src: "assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" }),
            React.createElement("script", { src: "assets/vendors/jquery-appear/jquery.appear.min.js" }),
            React.createElement("script", { src: "assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" }),
            React.createElement("script", { src: "assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" }),
            React.createElement("script", { src: "assets/vendors/jquery-validate/jquery.validate.min.js" }),
            React.createElement("script", { src: "assets/vendors/nouislider/nouislider.min.js" }),
            React.createElement("script", { src: "assets/vendors/odometer/odometer.min.js" }),
            React.createElement("script", { src: "assets/vendors/swiper/swiper.min.js" }),
            React.createElement("script", { src: "assets/vendors/tiny-slider/tiny-slider.min.js" }),
            React.createElement("script", { src: "assets/vendors/wnumb/wNumb.min.js" }),
            React.createElement("script", { src: "assets/vendors/wow/wow.js" }),
            React.createElement("script", { src: "assets/vendors/isotope/isotope.js" }),
            React.createElement("script", { src: "assets/vendors/countdown/countdown.min.js" }),
            React.createElement("script", { src: "assets/js/organik.js" }),
            React.createElement("script", { src: "assets/js/meridaCustomised/vendors/react.development.js" }),
            React.createElement("script", { src: "assets/js/meridaCustomised/vendors/react-dom.development.js" }),
            React.createElement("script", { src: "assets/js/meridaCustomised/globals.js" }),
            React.createElement("script", {
                defer: "",
                src: "../../../beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194",
                integrity: "sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==",
                "data-cf-beacon": "{\"rayId\":\"73c1de4438283c13\",\"token\":\"72b2ec455a104aa0b3ca4230f1da2518\",\"version\":\"2022.8.0\",\"si\":100}",
                crossOrigin: "anonymous"
            })
        );
    }
}

export class HeadContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            React.createElement(
                "title",
                null,
                "Products Page || Oganik || HTML Template For Organic Stores"
            ),
            React.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "assets/images/favicons/apple-touch-icon.png"
            }),
            React.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "assets/images/favicons/favicon-32x32.png"
            }),
            React.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "assets/images/favicons/favicon-16x16.png"
            }),
            React.createElement("link", { rel: "manifest", href: "assets/images/favicons/site.webmanifest" }),
            React.createElement("meta", {
                name: "description",
                content: "Agrikon HTML Template For Agriculture Farm & Farmers"
            }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            React.createElement("link", {
                href: "../../../css2?family=Homemade+Apple&family=Abril+Fatface&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                rel: "stylesheet"
            }),
            React.createElement("link", { rel: "stylesheet", href: "assets/vendors/bootstrap/bootstrap.min.css" }),
            React.createElement("link", {
                rel: "stylesheet",
                href: "assets/vendors/bootstrap-select/bootstrap-select.min.css"
            }),
            React.createElement("link", { rel: "stylesheet", href: "assets/vendors/animate/animate.min.css" }),
            React.createElement("link", { rel: "stylesheet", href: "assets/vendors/fontawesome/css/all.min.css" }),
            React.createElement("link", { rel: "stylesheet", href: "assets/vendors/jarallax/jarallax.css" }),
            React.createElement("link", {
                rel: "stylesheet",
                href: "assets/vendors/organik-icon/organik-icons.css"
            }),
            React.createElement("link", {
                rel: "stylesheet",
                href: "assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
            }),
            React.createElement("link", {
                rel: "stylesheet",
                href: "assets/vendors/nouislider/nouislider.min.css"
            }),
            React.createElement("link", {
                rel: "stylesheet",
                href: "assets/vendors/nouislider/nouislider.pips.css"
            }),
            React.createElement("link", { rel: "stylesheet", href: "assets/vendors/odometer/odometer.min.css" }),
            React.createElement("link", { rel: "stylesheet", href: "assets/vendors/swiper/swiper.min.css" }),
            React.createElement("link", {
                rel: "stylesheet",
                href: "assets/vendors/tiny-slider/tiny-slider.min.css"
            }),
            React.createElement("link", { rel: "stylesheet", href: "assets/css/organik.css" }),
            React.createElement("link", { rel: "stylesheet", href: "assets/css/meridaCustomised/custom.css" })
        );
    }
}

export function renderHeader() {
    ReactDOM.createRoot(document.head).render(React.createElement(HeadContainer, null));
}
export function renderBody() {
    document.body.innerHTML = Handlebars.templates.bodyTag({});

    ["assets/vendors/jquery/jquery-3.5.1.min.js", "assets/vendors/bootstrap/bootstrap.bundle.min.js", "assets/vendors/bootstrap-select/bootstrap-select.min.js", "assets/vendors/jarallax/jarallax.min.js", "assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js", "assets/vendors/jquery-appear/jquery.appear.min.js", "assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js", "assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js", "assets/vendors/jquery-validate/jquery.validate.min.js", "assets/vendors/nouislider/nouislider.min.js", "assets/vendors/odometer/odometer.min.js", "assets/vendors/swiper/swiper.min.js", "assets/vendors/tiny-slider/tiny-slider.min.js", "assets/vendors/wnumb/wNumb.min.js", "assets/vendors/wow/wow.js", "assets/vendors/isotope/isotope.js", "assets/vendors/countdown/countdown.min.js", "assets/js/organik.js"].map(src => {
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