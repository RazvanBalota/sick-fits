webpackHotUpdate(5,{

/***/ "./components/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_PaginationStyles__ = __webpack_require__("./components/styles/PaginationStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
var _jsxFileName = "/home/razvanb/projects/Advanced-React/sick-fits/frontend/components/Pagination.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var PAGINATION_QUERY = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var Pagination = function Pagination(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
    query: PAGINATION_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        erorr = _ref.erorr;
    if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, "Loading...");
    var count = data.itemsConnection.aggregate.count;
    var pages = Math.ceil(count / __WEBPACK_IMPORTED_MODULE_4__config__["b" /* perPage */]);
    var page = props.page;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles_PaginationStyles__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, "Sick Fits | Page ", page, " of ", pages)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
      prefetch: true,
      href: {
        pathname: "items",
        query: {
          page: page - 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      className: "prev",
      "aria-disabled": page <= 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, "Prev")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, "Page ", props.page, " of", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "totalPages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }, pages), "!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, count, " Items Total"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
      prefetch: true,
      href: {
        pathname: "items",
        query: {
          page: page + 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      className: "next",
      "aria-disabled": page >= pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, "Next")));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ })

})
//# sourceMappingURL=5.0ebef995913f5af29e00.hot-update.js.map