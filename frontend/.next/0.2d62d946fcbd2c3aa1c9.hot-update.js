webpackHotUpdate(0,{

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_NavStyles__ = __webpack_require__("./components/styles/NavStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__User__ = __webpack_require__("./components/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Signout__ = __webpack_require__("./components/Signout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Cart__ = __webpack_require__("./components/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CartCount__ = __webpack_require__("./components/CartCount.js");
var _jsxFileName = "/home/razvanb/projects/Advanced-React/sick-fits/frontend/components/Nav.js";









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

/***/ })

})
//# sourceMappingURL=0.2d62d946fcbd2c3aa1c9.hot-update.js.map