webpackHotUpdate(1,{

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoint; });
/* unused harmony export perPage */
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo__ = __webpack_require__("./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_with_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost__ = __webpack_require__("./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Cart__ = __webpack_require__("./components/Cart.js");





function createClient(_ref) {
  var headers = _ref.headers;
  return new __WEBPACK_IMPORTED_MODULE_1_apollo_boost__["a" /* default */]({
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

/***/ })

})
//# sourceMappingURL=1.9c126b496144b9d28963.hot-update.js.map