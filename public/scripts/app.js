"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TheAsia = function (_React$Component) {
    _inherits(TheAsia, _React$Component);

    function TheAsia(props) {
        _classCallCheck(this, TheAsia);

        var _this = _possibleConstructorReturn(this, (TheAsia.__proto__ || Object.getPrototypeOf(TheAsia)).call(this, props));

        _this.handleAddAdultOne = _this.handleAddAdultOne.bind(_this);
        _this.handleMinusAdultOne = _this.handleMinusAdultOne.bind(_this);
        _this.handleAddChildrenOne = _this.handleAddChildrenOne.bind(_this);
        _this.handleMinusChildrenOne = _this.handleMinusChildrenOne.bind(_this);

        _this.state = {
            //default values to be replaced with data from the database
            adultPrice: 26.00,
            childrenPrice: 20.06,
            adultMinQty: 2,
            adultQty: 2,
            childrenMinQty: 0,
            childrenQty: 0
        };

        return _this;
    }

    _createClass(TheAsia, [{
        key: "handleAddAdultOne",
        value: function handleAddAdultOne() {

            this.setState(function (prevState) {
                return {
                    adultQty: prevState.adultQty + 1
                };
            });
        }
    }, {
        key: "handleMinusAdultOne",
        value: function handleMinusAdultOne() {

            if (this.state.adultQty > this.state.adultMinQty) {
                this.setState(function (prevState) {
                    return {
                        adultQty: prevState.adultQty - 1
                    };
                });
            }
        }
    }, {
        key: "handleAddChildrenOne",
        value: function handleAddChildrenOne() {

            this.setState(function (prevState) {
                return {
                    childrenQty: prevState.childrenQty + 1
                };
            });
        }
    }, {
        key: "handleMinusChildrenOne",
        value: function handleMinusChildrenOne() {

            if (this.state.childrenQty > this.state.childrenMinQty) {
                this.setState(function (prevState) {
                    return {
                        childrenQty: prevState.childrenQty - 1
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(
                    "main",
                    null,
                    React.createElement(HeroSlider, null),
                    React.createElement(PageContentLayout, {
                        values: this.state,
                        handleAddAdultOne: this.handleAddAdultOne,
                        handleMinusAdultOne: this.handleMinusAdultOne,
                        handleAddChildrenOne: this.handleAddChildrenOne,
                        handleMinusChildrenOne: this.handleMinusChildrenOne
                    })
                )
            );
        }
    }]);

    return TheAsia;
}(React.Component);

var Header = function Header() {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "header",
            null,
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-2 col-md-1" },
                        React.createElement("img", { src: "http://ex.theasia.com/en/images/logo_v2.0.svg", alt: "The Asia", className: "logo" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-8 col-md-3" },
                        React.createElement(
                            "div",
                            { className: "input-group header-search" },
                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Search" }),
                            React.createElement(
                                "span",
                                { className: "input-group-btn" },
                                React.createElement(
                                    "button",
                                    { className: "btn btn-default", type: "button" },
                                    React.createElement("i", { className: "glyphicon glyphicon-search" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-2 col-md-6 pull-right" },
                        React.createElement(
                            "ul",
                            { className: "nav nav-pills pull-right hidden-xs hidden-sm" },
                            React.createElement(
                                "li",
                                { role: "presentation", className: "active" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Home"
                                )
                            ),
                            React.createElement(
                                "li",
                                { role: "presentation" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Cities"
                                )
                            ),
                            React.createElement(
                                "li",
                                { role: "presentation" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Blog"
                                )
                            ),
                            React.createElement(
                                "li",
                                { role: "presentation" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "English"
                                )
                            ),
                            React.createElement(
                                "li",
                                { role: "presentation" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "USD"
                                )
                            ),
                            React.createElement(
                                "li",
                                { role: "presentation" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "account" },
                                    React.createElement("img", { src: "http://ex.theasia.com/en/images/user_v2.0.svg", alt: "User Account", width: "70%" })
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "nav nav-pills pull-right visible-xs" },
                            React.createElement(
                                "li",
                                { role: "presentation" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "account" },
                                    React.createElement("img", { src: "http://ex.theasia.com/en/images/user_v2.0.svg", alt: "User Account" })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

var HeroSlider = function HeroSlider() {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "row" },
            React.createElement("div", { className: "hero-banner" })
        )
    );
};

var PageContentLayout = function PageContentLayout(props) {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-xs-12 col-md-8" },
                    React.createElement(Description, null)
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-12 col-md-4" },
                    React.createElement(BookingWidget, {
                        values: props.values,
                        handleAddAdultOne: props.handleAddAdultOne,
                        handleMinusAdultOne: props.handleMinusAdultOne,
                        handleAddChildrenOne: props.handleAddChildrenOne,
                        handleMinusChildrenOne: props.handleMinusChildrenOne
                    })
                )
            )
        )
    );
};

var BookingWidget = function (_React$Component2) {
    _inherits(BookingWidget, _React$Component2);

    function BookingWidget(props) {
        _classCallCheck(this, BookingWidget);

        var _this2 = _possibleConstructorReturn(this, (BookingWidget.__proto__ || Object.getPrototypeOf(BookingWidget)).call(this, props));

        _this2.handleAddAdultOne = _this2.handleAddAdultOne.bind(_this2);
        _this2.handleMinusAdultOne = _this2.handleMinusAdultOne.bind(_this2);
        _this2.handleAddChildrenOne = _this2.handleAddChildrenOne.bind(_this2);
        _this2.handleMinusChildrenOne = _this2.handleMinusChildrenOne.bind(_this2);
        return _this2;
    }

    _createClass(BookingWidget, [{
        key: "handleAddAdultOne",
        value: function handleAddAdultOne() {
            console.log('handleAddAdultOne');
            this.props.handleAddAdultOne();
        }
    }, {
        key: "handleMinusAdultOne",
        value: function handleMinusAdultOne() {
            console.log('handleMinusAdultOne');
            this.props.handleMinusAdultOne();
        }
    }, {
        key: "handleAddChildrenOne",
        value: function handleAddChildrenOne() {
            console.log('handleAddChildrenOne');
            this.props.handleAddChildrenOne();
        }
    }, {
        key: "handleMinusChildrenOne",
        value: function handleMinusChildrenOne() {
            console.log('handleMinusChildrenOne');
            this.props.handleMinusChildrenOne();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "text-center widget-header" },
                        "Adult ",
                        (this.props.values.adultPrice * this.props.values.adultQty).toFixed(2),
                        " USD / Child ",
                        (this.props.values.childrenPrice * this.props.values.childrenQty).toFixed(2),
                        " USD ",
                        React.createElement("i", { className: "glyphicon glyphicon-question-sign" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row widget-wrapper" },
                    React.createElement(
                        "form",
                        { action: "", className: "" },
                        React.createElement(
                            "div",
                            { className: "form-group margin-header" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12" },
                                    React.createElement(
                                        "select",
                                        { className: "form-control", name: "", id: "" },
                                        React.createElement(
                                            "option",
                                            { value: "0" },
                                            "Universal Studio Singapore"
                                        ),
                                        React.createElement(
                                            "option",
                                            { value: "1" },
                                            "Universal Studio Singapore with 1 Day Hopper Pass"
                                        ),
                                        React.createElement(
                                            "option",
                                            { value: "2" },
                                            "Universal Studio Singapore with 2 Ways Shuttle"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12" },
                                    React.createElement(
                                        "label",
                                        { htmlFor: "input_date" },
                                        React.createElement("i", { className: "glyphicon glyphicon-calendar" }),
                                        " Select Date"
                                    ),
                                    React.createElement("input", { id: "input_date", type: "text", className: "form-control" })
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-6" },
                                    React.createElement(
                                        "label",
                                        { htmlFor: "quantity_adult" },
                                        "Adult"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "input-group col-xs-10" },
                                        React.createElement(
                                            "span",
                                            { className: "input-group-btn" },
                                            React.createElement(
                                                "button",
                                                { onClick: this.handleMinusAdultOne, className: "btn btn-default input-height", type: "button" },
                                                "-"
                                            )
                                        ),
                                        React.createElement("input", { id: "quantity_adult", type: "text", className: "form-control", value: this.props.values.adultQty, disabled: true }),
                                        React.createElement(
                                            "span",
                                            { className: "input-group-btn" },
                                            React.createElement(
                                                "button",
                                                { onClick: this.handleAddAdultOne, className: "btn btn-default input-height", type: "button" },
                                                "+"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-xs-6" },
                                    React.createElement(
                                        "label",
                                        { htmlFor: "quantity_child" },
                                        "Child ",
                                        React.createElement("i", { className: "glyphicon glyphicon-question-sign" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "input-group col-xs-10" },
                                        React.createElement(
                                            "span",
                                            { className: "input-group-btn" },
                                            React.createElement(
                                                "button",
                                                { onClick: this.handleMinusChildrenOne, className: "btn btn-default input-height", type: "button" },
                                                "-"
                                            )
                                        ),
                                        React.createElement("input", { id: "quantity_child", type: "text", className: "form-control", value: this.props.values.childrenQty, disabled: true }),
                                        React.createElement(
                                            "span",
                                            { className: "input-group-btn" },
                                            React.createElement(
                                                "button",
                                                { onClick: this.handleAddChildrenOne, className: "btn btn-default input-height", type: "button" },
                                                "+"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12" },
                                    React.createElement(
                                        "table",
                                        { className: "table" },
                                        React.createElement(
                                            "tbody",
                                            null,
                                            React.createElement(
                                                "tr",
                                                null,
                                                React.createElement("th", null),
                                                React.createElement(
                                                    "th",
                                                    null,
                                                    "Price"
                                                ),
                                                React.createElement(
                                                    "th",
                                                    null,
                                                    "Pax"
                                                ),
                                                React.createElement(
                                                    "th",
                                                    null,
                                                    "Total"
                                                )
                                            ),
                                            React.createElement(
                                                "tr",
                                                null,
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    "Adult"
                                                ),
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    this.props.values.adultPrice
                                                ),
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    this.props.values.adultQty
                                                ),
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    (this.props.values.adultPrice * this.props.values.adultQty).toFixed(2)
                                                )
                                            ),
                                            React.createElement(
                                                "tr",
                                                null,
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    "Children"
                                                ),
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    this.props.values.childrenPrice
                                                ),
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    this.props.values.childrenQty
                                                ),
                                                React.createElement(
                                                    "td",
                                                    null,
                                                    (this.props.values.childrenPrice * this.props.values.childrenQty).toFixed(2)
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "text-center widget-total" },
                                        React.createElement(
                                            "h4",
                                            null,
                                            "Total Cost: ",
                                            React.createElement(
                                                "span",
                                                { className: "color-danger" },
                                                React.createElement(
                                                    "strong",
                                                    null,
                                                    (this.props.values.adultPrice * this.props.values.adultQty + this.props.values.childrenPrice * this.props.values.childrenQty).toFixed(2),
                                                    " "
                                                ),
                                                "USD"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12" },
                                    React.createElement(
                                        "button",
                                        { className: "btn btn-primary btn-lg col-xs-12 button-primary" },
                                        "Instant Book"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BookingWidget;
}(React.Component);

var Description = function Description() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-xs-12" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h1",
                        null,
                        "Universal Studio Singapore"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-3" },
                        React.createElement("i", { className: "glyphicon glyphicon-map-marker" }),
                        " Departure: Singapore"
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-9" },
                        React.createElement(
                            "div",
                            { className: "row text-center" },
                            React.createElement(
                                "div",
                                { className: "col-xs-4" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("img", { src: "http://ex.theasia.com/en/icons/img-ticket.png", alt: "Type", className: "icon" })
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "strong",
                                        null,
                                        "Type"
                                    ),
                                    React.createElement(
                                        "div",
                                        null,
                                        "Ticket"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-xs-4" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("img", { src: "http://ex.theasia.com/en/icons/img-open.png", alt: "Open Hours", className: "icon" })
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "strong",
                                        null,
                                        "Open Hours"
                                    ),
                                    React.createElement(
                                        "div",
                                        null,
                                        "10:00 - 21:30"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-xs-4" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("img", { src: "http://ex.theasia.com/en/icons/img-calendar.png", alt: "Available Day", className: "icon" })
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "strong",
                                        null,
                                        "Available Day"
                                    ),
                                    React.createElement(
                                        "div",
                                        null,
                                        "Everyday"
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        React.createElement("hr", null),
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-xs-12" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-3" },
                        React.createElement(
                            "strong",
                            { className: "color-primary" },
                            "Description"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-9" },
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "color-secondary" },
                                    "Universal Studios Singapore"
                                ),
                                " is Southeast Asia's first Hollywood Movie Theme Park. It is located inside the World Sentosa Resort on Sentosa Island, Singapore. Just like the Original Universal Studios in the USA, Universal Studios Singapore, features an enticing selection of attractions, hundreds of rides and various entertainment for families and thrill seekers. Go beyond the big screen and ride the Movies. Experience cutting edge roller coasters, virtual reality rides, and attractions based on your favorite blockbuster films or television shows such as Puss in Boots, Transformers, Jurassic Park, The Ultimate 3D Battle, just to name a few. This amazing theme park will awake all of your senses and give you the ultimate experience that should not be missed."
                            ),
                            React.createElement(
                                "p",
                                null,
                                "There are seven movie-themed zones, and each is uniquely designed. You will find the renowned Hollywood Walk of Fame at the Hollywood zone, and as you venture into New York, the landscape evolves into impressive city skylines, including a mock-up of a subway entrance. Here, you can step onto a movie set and experience the destructive force of a hurricane with special effects produced by Steven Spielberg."
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "strong",
                                { className: "color-secondary" },
                                "Breathtaking Rides"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Sci-Fi City features the famous TRANSFORMERS The Ride: The Ultimate 3D Battle ride where you fight evil forces in heart-pounding 3D combat. Move on to Ancient Egypt and face mummies and scarab beetles on an indoor roller coaster in total darkness \u2013 all the better to ignite your fears. And in Madagascar, prepare to be drenched in a wet river boat ride."
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "strong",
                                { className: "color-secondary" },
                                "Thrills and spills"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Performances here are equally spectacular. The young ones will love the Shrek 4-D Adventure at Far Far Away. This fun cinematic experience allows you to physically feel the action of the movie. In the Lost World, witness death-defying stunts and explosions in Water World\u2122, a live performance."
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "strong",
                                { className: "color-secondary" },
                                "Parade And Fireworks Show"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Be amazed as the Hollywood Dreams Parade\u2122 brings to life your favourite blockbuster movies and beloved characters on magnificent floats that go beyond your imagination in the afternoon. Then watch Lake Hollywood Spectacular, the incredible fireworks show set to a brilliant musical score that will burst across the night sky"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "After an exhilarating day out, replenish your energy between the attractions and step in to the many themed restaurants across the parks. And make sure you have your camera ready for \u201Ccelebrity\u201D sightings."
                            )
                        ),
                        React.createElement("hr", null)
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-3" },
                        React.createElement(
                            "strong",
                            { className: "color-primary" },
                            "Additional Information"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-9" },
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "strong",
                                { className: "color-secondary" },
                                "Stage Show"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "When I grow up(Pantages Hollywood Theater)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Donkey Live(Far Far Away)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Water World (The Lost World)"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "strong",
                                { className: "color-secondary" },
                                "Street Entertainment"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "The Dance For The Magic Beans(Far Far Away)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Sesame Street Stage Show(New York)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "The Rockafellas(New York)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Mel's Dinettes(Hollywood)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "The Cruisers(Hollywood)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Madagascar Boogie(Madagasca)"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Show time is change everyday depend on the weather.Please check show timetable at entrance"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-3" },
                        React.createElement(
                            "strong",
                            { className: "color-primary" },
                            "Notice"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-md-9" },
                        React.createElement(
                            "div",
                            { className: "row margin-content" },
                            React.createElement(
                                "table",
                                { className: "table table-striped" },
                                React.createElement(
                                    "tbody",
                                    null,
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "Have to redeem ticket at Resort World City Tours Kiosk No.11. (basement 1 coach bay)"
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "Universal Studios Singapore operating hours are subject to change without prior notice."
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "Mandatory Bag Checks will be conducting the bag checks upon entry."
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "Prohibited items: Tools/ Chemicals/ Any form of weaponry (including but not limited to, firearms/ Explosives or flammables/ Knives or sharp objects/ Balloons/ Outside food and drinks."
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "Kindly note that items which are non-threatening such as balloons/food/drinks are advised to be stored in the lockers within the park."
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(TheAsia, null), document.getElementById('app'));
