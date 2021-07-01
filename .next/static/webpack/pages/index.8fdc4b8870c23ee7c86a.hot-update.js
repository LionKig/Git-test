self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\components\\Layout.js",
    _s = $RefreshSig$();




function Layout(_ref) {
  _s();

  var startingTheme = _ref.startingTheme,
      children = _ref.children;

  var _useState = useState(startingTheme),
      _useState2 = (0,E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext.Provider, {
    value: {
      setTheme: setTheme,
      theme: theme
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: theme === "light" ? "container-fluid light" : "container-fluid dark",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_s(Layout, "7D3nJYxe783JeXHORkFR9pg9dCU=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/context/ThemeContext.js":
/*!*************************************!*\
  !*** ./src/context/ThemeContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": function() { return /* binding */ ThemeContext; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\context\\ThemeContext.js",
    _s = $RefreshSig$();


var ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function ThemeProvider(_ref) {
  _s();

  var startingTheme = _ref.startingTheme,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startingTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {
    value: {
      setTheme: setTheme,
      theme: theme
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_s(ThemeProvider, "RKD+6w/IF9arFzFRyzDg9ToRnWc=");

_c = ThemeProvider;


var _c;

$RefreshReg$(_c, "ThemeProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9UaGVtZUNvbnRleHQuanMiXSwibmFtZXMiOlsiTGF5b3V0Iiwic3RhcnRpbmdUaGVtZSIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwiVGhlbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxTQUFTQSxNQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBMUJDLGFBQTBCLFFBQTFCQSxhQUEwQjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFBQSxrQkFFZEMsUUFBUSxDQUFDRixhQUFELENBRk07QUFBQTtBQUFBLE1BRWpDRyxLQUZpQztBQUFBLE1BRTFCQyxRQUYwQjs7QUFJeEMsc0JBQ0ksOERBQUMsd0VBQUQ7QUFBdUIsU0FBSyxFQUMxQjtBQUFFQSxjQUFRLEVBQVJBLFFBQUY7QUFBYUQsV0FBSyxFQUFMQTtBQUFiLEtBREY7QUFBQSwyQkFHRTtBQUNFLGVBQVMsRUFDUEEsS0FBSyxLQUFLLE9BQVYsR0FBb0IsdUJBQXBCLEdBQThDLHNCQUZsRDtBQUFBLGdCQUtHRjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7R0FqQlFGLE07O0tBQUFBLE07QUFtQlQsK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRU8sSUFBTU0sWUFBWSxnQkFBR0Msb0RBQWEsRUFBbEM7O0FBRVAsU0FBU0MsYUFBVCxPQUFzRDtBQUFBOztBQUFBLE1BQTVCUCxhQUE0QixRQUE1QkEsYUFBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBRXJCQywrQ0FBUSxDQUFFRixhQUFGLENBRmE7QUFBQSxNQUUxQ0csS0FGMEM7QUFBQSxNQUVsQ0MsUUFGa0M7O0FBSWxELHNCQUNJLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFDeEI7QUFBRUEsY0FBUSxFQUFSQSxRQUFGO0FBQWFELFdBQUssRUFBTEE7QUFBYixLQURKO0FBQUEsY0FHT0Y7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7R0FaUU0sYTs7S0FBQUEsYTtBQWNUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhmZGM0Yjg4NzBjMjNlZTdjODZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCIgO1xyXG5pbXBvcnQge1RoZW1lQ29udGV4dCAsIFRoZW1lUHJvdmlkZXJ9IGZyb20gXCIuLi9jb250ZXh0L1RoZW1lQ29udGV4dFwiIDtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTGF5b3V0KCB7c3RhcnRpbmdUaGVtZSwgY2hpbGRyZW59ICl7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShzdGFydGluZ1RoZW1lKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7XHJcbiAgICAgICAgICB7IHNldFRoZW1lICwgdGhlbWUsIH1cclxuICAgICAgICB9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImNvbnRhaW5lci1mbHVpZCBsaWdodFwiIDogXCJjb250YWluZXItZmx1aWQgZGFya1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCA7IiwiaW1wb3J0IFJlYWN0ICwgeyBjcmVhdGVDb250ZXh0ICwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiIDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCkgOyBcclxuXHJcbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoIHsgc3RhcnRpbmdUaGVtZSAsIGNoaWxkcmVuIH0gKXtcclxuXHJcbiAgICBjb25zdCBbIHRoZW1lICwgc2V0VGhlbWUgXSA9IHVzZVN0YXRlKCBzdGFydGluZ1RoZW1lICkgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHtcclxuICAgICAgICAgICAgeyBzZXRUaGVtZSAsIHRoZW1lLCB9XHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn0gICAgICAgICAgICBcclxuICAgICAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKSA7XHJcblxyXG59XHJcblxyXG5leHBvcnQge1RoZW1lUHJvdmlkZXJ9IDsiXSwic291cmNlUm9vdCI6IiJ9