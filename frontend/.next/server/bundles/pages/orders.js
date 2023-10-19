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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/OrderList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("date-fns");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_OrderItemStyles__ = __webpack_require__("./components/styles/OrderItemStyles.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/OrderList.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query USER_ORDERS_QUERY {\n    orders(orderBy: createdAt_DESC) {\n      id\n      total\n      createdAt\n      items {\n        id\n        title\n        price\n        description\n        quantity\n        image\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var USER_ORDERS_QUERY = __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_templateObject);
var OrderUl = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.ul.withConfig({
  displayName: "OrderList__OrderUl",
  componentId: "sc-rwafy5-0"
})(["display:grid;grid-gap:4rem;grid-template-columns:repeat(auto-fit,minmax(40%,1fr));"]);

var OrderList =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderList, _Component);

  function OrderList() {
    _classCallCheck(this, OrderList);

    return _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).apply(this, arguments));
  }

  _createClass(OrderList, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"], {
        query: USER_ORDERS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, function (_ref) {
        var orders = _ref.data.orders,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, "Loading...");
        if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Error, {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "You have ", orders.length, " orders."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OrderUl, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, orders.map(function (order) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__styles_OrderItemStyles__["a" /* default */], {
            key: order.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
            href: {
              pathname: "/order",
              query: {
                id: order.id
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "order-meta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }, order.items.reduce(function (a, b) {
            return a + b.quantity;
          }, 0), " Items"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }, order.items.length, " Products"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, Object(__WEBPACK_IMPORTED_MODULE_6__lib_formatMoney__["a" /* default */])(order.total))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "images",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }, order.items.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              width: "100",
              key: item.id,
              src: item.image,
              alt: item.title,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            });
          })))));
        })));
      });
    }
  }]);

  return OrderList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (OrderList);

/***/ }),

/***/ "./components/PleaseSignIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User__ = __webpack_require__("./components/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Signin__ = __webpack_require__("./components/Signin.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/PleaseSignIn.js";





var PleaseSignIn = function PleaseSignIn(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"], {
    query: __WEBPACK_IMPORTED_MODULE_2__User__["a" /* CURRENT_USER_QUERY */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, "Loading...");
    if (!data.me) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, "Please sign in before continuing"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Signin__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }));
    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PleaseSignIn);

/***/ }),

/***/ "./components/Signin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Form__ = __webpack_require__("./components/styles/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ErrorMessage__ = __webpack_require__("./components/ErrorMessage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__User__ = __webpack_require__("./components/User.js");

var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/components/Signin.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SIGNIN_MUTATION = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var Signin =
/*#__PURE__*/
function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        name: "",
        password: "",
        email: ""
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "saveToState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    }), _temp));
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: __WEBPACK_IMPORTED_MODULE_6__User__["a" /* CURRENT_USER_QUERY */]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, function (signup, _ref2) {
        var error = _ref2.error,
            loading = _ref2.loading;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_Form__["a" /* default */], {
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
              var res;
              return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signup();

                    case 3:
                      res = _context.sent;
                      console.log(res);

                      _this2.setState({
                        name: "",
                        email: "",
                        password: ""
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref3.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, "Sign Into Your Account"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ErrorMessage__["a" /* default */], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, "Email", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, "Password", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, "Sign In!")));
      });
    }
  }]);

  return Signin;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Signin);

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

/***/ "./components/styles/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var loading = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type=\"submit\"]{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:\"\";display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.red;
}, loading);
Form.displayName = "Form";
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./components/styles/OrderItemStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var OrderItemStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.li.withConfig({
  displayName: "OrderItemStyles",
  componentId: "sc-fbwo89-0"
})(["box-shadow:", ";list-style:none;padding:2rem;border:1px solid ", ";h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"], function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["a"] = (OrderItemStyles);

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

/***/ "./pages/orders.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PleaseSignIn__ = __webpack_require__("./components/PleaseSignIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_OrderList__ = __webpack_require__("./components/OrderList.js");
var _jsxFileName = "/home/razvanb/projects/sick-fits/frontend/pages/orders.js";




var OrderPage = function OrderPage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_PleaseSignIn__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_OrderList__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderPage);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/orders.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "date-fns":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=orders.js.map