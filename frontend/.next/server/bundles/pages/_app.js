module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_CartStyles__ = __webpack_require__("./components/styles/CartStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_Supreme__ = __webpack_require__("./components/styles/Supreme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_CloseButton__ = __webpack_require__("./components/styles/CloseButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_SickButton__ = __webpack_require__("./components/styles/SickButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_adopt__ = __webpack_require__("react-adopt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_adopt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_adopt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__User__ = __webpack_require__("./components/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CartItem__ = __webpack_require__("./components/CartItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_calcTotalPrice__ = __webpack_require__("./lib/calcTotalPrice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TakeMyMoney__ = __webpack_require__("./components/TakeMyMoney.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Cart.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var LOCAL_STATE_QUERY = __WEBPACK_IMPORTED_MODULE_6_graphql_tag___default()(_templateObject);
var TOGGLE_CART_MUTATION = __WEBPACK_IMPORTED_MODULE_6_graphql_tag___default()(_templateObject2);
var Composed = Object(__WEBPACK_IMPORTED_MODULE_7_react_adopt__["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__User__["b" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, render);
  },
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Query"], {
      query: LOCAL_STATE_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, render);
  }
});

var Cart = function Cart() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Composed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, function (_ref4) {
    var user = _ref4.user,
        toggleCart = _ref4.toggleCart,
        localState = _ref4.localState;
    var me = user.data.me;
    if (!me) return null;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles_CartStyles__["a" /* default */], {
      open: localState.data.cartOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_CloseButton__["a" /* default */], {
      onClick: toggleCart,
      title: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, "\xD7"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__styles_Supreme__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }, me.name, "'s Cart"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }, "You have ", me.cart.length, " item", me.cart.length === 1 ? "" : "s", " in your cart.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, me.cart.map(function (cartItem) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__CartItem__["a" /* default */], {
        key: cartItem.id,
        cartItem: cartItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      });
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    }, Object(__WEBPACK_IMPORTED_MODULE_11__lib_formatMoney__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_10__lib_calcTotalPrice__["a" /* default */])(me.cart))), me.cart.length && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__TakeMyMoney__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_SickButton__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, "Checkout"))));
  });
};

/* harmony default export */ __webpack_exports__["c"] = (Cart);


/***/ }),

/***/ "./components/CartCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/CartCount.js";




var AnimationStyles = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-0"
})(["position:relative;.count{display:block;position:relative;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:rotateX(0.5turn);}"]);
var Dot = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-1"
})(["background:", ";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:\"true\";font-variant-numeric:tabular-nums;"], function (props) {
  return props.theme.red;
});

var CartCount = function CartCount(_ref) {
  var count = _ref.count;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AnimationStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__["TransitionGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__["CSSTransition"], {
    unmountOnExit: true,
    className: "count",
    classNames: "count",
    key: count,
    timeout: {
      enter: 400,
      exit: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, count))));
};

/* harmony default export */ __webpack_exports__["a"] = (CartCount);

/***/ }),

/***/ "./components/CartItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RemoveFromCart__ = __webpack_require__("./components/RemoveFromCart.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/CartItem.js";





var CartItemStyles = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "sc-1rm9l7o-0"
})(["padding:1rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;}h3,p{margin:0;}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  // first check if that item exists
  if (!cartItem.item) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CartItemStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "This Item has been removed"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RemoveFromCart__["a" /* default */], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CartItemStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    width: "100",
    src: cartItem.item.image,
    alt: cartItem.item.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cart-item-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, cartItem.item.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3__lib_formatMoney__["a" /* default */])(cartItem.item.price * cartItem.quantity), " - ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, cartItem.quantity, " \xD7 ", Object(__WEBPACK_IMPORTED_MODULE_3__lib_formatMoney__["a" /* default */])(cartItem.item.price), " each"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RemoveFromCart__["a" /* default */], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }));
};

CartItem.propTypes = {
  cartItem: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CartItem);

/***/ }),

/***/ "./components/ErrorMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/ErrorMessage.js";



var ErrorStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Cart__ = __webpack_require__("./components/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Search__ = __webpack_require__("./components/Search.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Header.js";









__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeStart = function () {
  __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeComplete = function () {
  __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeError = function () {
  __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.done();
};

var Logo = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.red;
});
var StyledHeader = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "Sick Fits"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "sub-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Search__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Cart__["c" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Meta.js";



var Meta = function Meta() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Sick Fits!"));
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_NavStyles__ = __webpack_require__("./components/styles/NavStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__User__ = __webpack_require__("./components/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Signout__ = __webpack_require__("./components/Signout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Cart__ = __webpack_require__("./components/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CartCount__ = __webpack_require__("./components/CartCount.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Nav.js";









var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__User__["b" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, function (_ref) {
    var me = _ref.data.me;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_NavStyles__["a" /* default */], {
      "data-test": "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, "Shop")), me && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/sell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Sell")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/orders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, "Orders")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/me",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, "Account")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Signout__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Mutation"], {
      mutation: __WEBPACK_IMPORTED_MODULE_6__Cart__["b" /* TOGGLE_CART_MUTATION */],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, function (toggleCart) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: toggleCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "My Cart", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__CartCount__["a" /* default */], {
        count: me.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    })), !me && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, "Signin")));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Meta__ = __webpack_require__("./components/Meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var StyledPage = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(__WEBPACK_IMPORTED_MODULE_3_styled_components__["injectGlobal"])(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2');format('woff2');font-height:normal;font-style:normal;}html{box-sizing:border-box;font-size:10px;}*,*:before,*:after{box-sizing:inherit}body{padding:0;margin:0;font-size:1.5rem;line-height:2;font-family:'radnika_next';}a{text-decoration:none;color:", ";}"], theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_styled_components__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Meta__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.props.children)));
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./components/RemoveFromCart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export REMOVE_FROM_CART_MUTATION */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__User__ = __webpack_require__("./components/User.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/RemoveFromCart.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation removeFromCart($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var REMOVE_FROM_CART_MUTATION = __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject);
var BigButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var RemoveFromCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RemoveFromCart, _React$Component);

  function RemoveFromCart() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, RemoveFromCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = RemoveFromCart.__proto__ || Object.getPrototypeOf(RemoveFromCart)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "update", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(cache, payload) {
        // first read the cache
        var data = cache.readQuery({
          query: __WEBPACK_IMPORTED_MODULE_5__User__["a" /* CURRENT_USER_QUERY */]
        }); // remove that item from the cart

        var cartItemId = payload.data.removeFromCart.id;
        data.me.cart = data.me.cart.filter(function (cartItem) {
          return cartItem.id !== cartItemId;
        }); // write it back to the cart

        cache.writeQuery({
          query: __WEBPACK_IMPORTED_MODULE_5__User__["a" /* CURRENT_USER_QUERY */],
          data: data
        });
      }
    }), _temp));
  }

  _createClass(RemoveFromCart, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Mutation"], {
        mutation: REMOVE_FROM_CART_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: "Mutation",
          removeFromCart: {
            __typename: "CartItem",
            id: this.props.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, function (removeFromCart, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BigButton, {
          disabled: loading,
          title: "Delete Item",
          onClick: function onClick() {
            removeFromCart().catch(function (err) {
              return alert(err.message);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, "\xD7");
      });
    }
  }]);

  return RemoveFromCart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(RemoveFromCart, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (RemoveFromCart);


/***/ }),

/***/ "./components/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_downshift__ = __webpack_require__("downshift");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_downshift___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_downshift__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce__ = __webpack_require__("lodash.debounce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_DropDown__ = __webpack_require__("./components/styles/DropDown.js");

var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Search.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query SEARCH_ITEMS_QUERY($searchTerm: String!) {\n    items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {\n      id\n      image\n      title\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SEARCH_ITEMS_QUERY = __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_templateObject);

function routeToItem(item) {
  __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
    pathname: "/item",
    query: {
      id: item.id
    }
  });
}

var AutoComplete =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AutoComplete, _React$Component);

  function AutoComplete() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        items: [],
        loading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: __WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default()(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e, client) {
          var res;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // turn loading on
                  _this.setState({
                    loading: true
                  }); // manually query apollo client


                  _context.next = 3;
                  return client.query({
                    query: SEARCH_ITEMS_QUERY,
                    variables: {
                      searchTerm: e.target.value
                    }
                  });

                case 3:
                  res = _context.sent;

                  _this.setState({
                    items: res.data.items,
                    loading: false
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }(), 350)
    }), _temp));
  }

  _createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_2_downshift__["resetIdCounter"])();
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__styles_DropDown__["c" /* SearchStyles */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_downshift___default.a, {
        onChange: routeToItem,
        itemToString: function itemToString(item) {
          return item === null ? "" : item.title;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, function (_ref3) {
        var getInputProps = _ref3.getInputProps,
            getItemProps = _ref3.getItemProps,
            isOpen = _ref3.isOpen,
            inputValue = _ref3.inputValue,
            highlightedIndex = _ref3.highlightedIndex;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, function (client) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", _extends({}, getInputProps({
            type: "search",
            placeholder: "Search For An Item",
            className: _this2.state.loading ? "loading" : "",
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }));
        }), isOpen && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__styles_DropDown__["a" /* DropDown */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _this2.state.items.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__styles_DropDown__["b" /* DropDownItem */], _extends({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
            width: "50",
            src: item.image,
            alt: item.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }), item.title);
        }), !_this2.state.items.length && !_this2.state.loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__styles_DropDown__["b" /* DropDownItem */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, "Nothing found for ", inputValue)));
      }));
    }
  }]);

  return AutoComplete;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AutoComplete);

/***/ }),

/***/ "./components/Signout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__("./components/User.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Signout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var Signout = function Signout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: __WEBPACK_IMPORTED_MODULE_3__User__["a" /* CURRENT_USER_QUERY */]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, function (signout) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
      onClick: signout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, "Sign out");
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Signout);

/***/ }),

/***/ "./components/TakeMyMoney.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATE_ORDER_MUTATION */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout__ = __webpack_require__("react-stripe-checkout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_calcTotalPrice__ = __webpack_require__("./lib/calcTotalPrice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ErrorMessage__ = __webpack_require__("./components/ErrorMessage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__User__ = __webpack_require__("./components/User.js");

var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/TakeMyMoney.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation createOrder($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var API_KEY = "pk_test_51O29EqABFPWmh7GyHcntlJuroAb35Fec1jN5QbZugFuRl04C85gVWYcotsjgQfKD7HemfTCwUtvZ2QMMqnKn6QxW00wjofO3X3";
var CREATE_ORDER_MUTATION = __WEBPACK_IMPORTED_MODULE_7_graphql_tag___default()(_templateObject);

function totalItems(cart) {
  return cart.reduce(function (tally, cartItem) {
    return tally + cartItem.quantity;
  }, 0);
}

var TakeMyMoney =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TakeMyMoney, _React$Component);

  function TakeMyMoney() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TakeMyMoney);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TakeMyMoney.__proto__ || Object.getPrototypeOf(TakeMyMoney)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "onToken", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(res, createOrder) {
          var order;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.start(); // manually call the mutation once we have the stripe token

                  _context.next = 3;
                  return createOrder({
                    variables: {
                      token: res.id
                    }
                  }).catch(function (err) {
                    alert(err.message);
                  });

                case 3:
                  order = _context.sent;
                  __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({
                    pathname: "/order",
                    query: {
                      id: order.data.createOrder.id
                    }
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x, _x2) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(TakeMyMoney, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__User__["b" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, function (_ref2) {
        var me = _ref2.data.me,
            loading = _ref2.loading;
        if (loading) return null;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Mutation"], {
          mutation: CREATE_ORDER_MUTATION,
          refetchQueries: [{
            query: __WEBPACK_IMPORTED_MODULE_10__User__["a" /* CURRENT_USER_QUERY */]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, function (createOrder) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout___default.a, {
            amount: Object(__WEBPACK_IMPORTED_MODULE_8__lib_calcTotalPrice__["a" /* default */])(me.cart),
            name: "Sick Fits",
            description: "Order of ".concat(totalItems(me.cart), " items!"),
            image: me.cart.length && me.cart[0].item && me.cart[0].item.image,
            stripeKey: API_KEY,
            currency: "USD",
            email: me.email,
            token: function token(res) {
              return _this2.onToken(res, createOrder);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, _this2.props.children);
        });
      });
    }
  }]);

  return TakeMyMoney;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (TakeMyMoney);


/***/ }),

/***/ "./components/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/User.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n      orders {\n        id\n      }\n      cart {\n        id\n        quantity\n        item {\n          id\n          price\n          image\n          title\n          description\n        }\n      }\n    }\n  }\n"]);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var User = function User(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ "./components/styles/CartStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var CartStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["a"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var CloseButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["a"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var DropDown = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var NavStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;color:", ";font-weight:800;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:\"\";width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:\"\";width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["a"] = (NavStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var SickButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "sc-l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["a"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Supreme = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["a"] = (Supreme);

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoint; });
/* unused harmony export perPage */
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcTotalPrice;
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

/***/ }),

/***/ "./lib/formatMoney.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo__ = __webpack_require__("next-with-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_with_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Cart__ = __webpack_require__("./components/Cart.js");





function createClient(_ref) {
  var headers = _ref.headers;
  return new __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default.a({
    uri:  true ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* endpoint */] : endpoint,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: __WEBPACK_IMPORTED_MODULE_3__components_Cart__["a" /* LOCAL_STATE_QUERY */]
            }),
                cartOpen = _cache$readQuery.cartOpen; // wrtie the cart state to the opposite


            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withData__ = __webpack_require__("./lib/withData.js");

var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          apollo = _props.apollo,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Page__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps;

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__lib_withData__["a" /* default */])(MyApp));

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-boost":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "downshift":
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.debounce":
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next-with-apollo":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-adopt":
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-stripe-checkout":
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),

/***/ "react-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map