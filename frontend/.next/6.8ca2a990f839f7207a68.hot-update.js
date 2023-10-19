webpackHotUpdate(6,{

/***/ "./components/Order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SINGLE_ORDER_QUERY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("./node_modules/date-fns/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ErrorMessage__ = __webpack_require__("./components/ErrorMessage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_OrderStyles__ = __webpack_require__("./components/styles/OrderStyles.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Order.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    order(id: $id) {\n      id\n      charge\n      total\n      createdAt\n      user {\n        id\n      }\n      items {\n        id\n        title\n        description\n        price\n        image\n        quantity\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SINGLE_ORDER_QUERY = Object(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__["a" /* default */])(_templateObject);

var Order =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Order, _React$Component);

  function Order() {
    _classCallCheck(this, Order);

    return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).apply(this, arguments));
  }

  _createClass(Order, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: SINGLE_ORDER_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ErrorMessage__["a" /* default */], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        });
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, "Loading");
        var order = data.order;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_OrderStyles__["a" /* default */], {
          "data-test": "order",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, "Sick Fits - Order ", order.id)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, "Order ID: "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _this.props.id, " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, "Charge"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, order.charge, " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Date"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["a" /* format */])(order.createdAt, "MMMM d,  h:mm a"), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, "Order Total"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, Object(__WEBPACK_IMPORTED_MODULE_6__lib_formatMoney__["a" /* default */])(order.total), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, "Item Count"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, order.items.length, " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "items",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, order.items.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "order-item",
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            src: item.image,
            alt: item.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "item-details",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }, item.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }, "Quantity: ", item.quantity), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          }, "Each: ", Object(__WEBPACK_IMPORTED_MODULE_6__lib_formatMoney__["a" /* default */])(item.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }, "Subtotal: ", Object(__WEBPACK_IMPORTED_MODULE_6__lib_formatMoney__["a" /* default */])(item.price + item.quantity)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, item.description)));
        })));
      });
    }
  }]);

  return Order;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Order, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Order);


/***/ })

})
//# sourceMappingURL=6.8ca2a990f839f7207a68.hot-update.js.map