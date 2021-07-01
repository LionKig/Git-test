self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hook/useTheme.js":
/*!******************************!*\
  !*** ./src/hook/useTheme.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



function useTheme() {
  _s();

  var startingTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "light";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  function validationTheme(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else if (themeValue === "light") {
      setTheme("light");
    }
  }

  return {
    theme: theme,
    setTheme: validationTheme
  };
}

_s(useTheme, "hTAHeuwkTzQ+vT7n2615oDaJXkQ=");

/* harmony default export */ __webpack_exports__["default"] = (useTheme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlVGhlbWUuanMiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidmFsaWRhdGlvblRoZW1lIiwidGhlbWVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsU0FBU0EsUUFBVCxHQUEwQztBQUFBOztBQUFBLE1BQXhCQyxhQUF3Qix1RUFBUixPQUFROztBQUFBLGtCQUVWQywrQ0FBUSxDQUFDRCxhQUFELENBRkU7QUFBQSxNQUUvQkUsS0FGK0I7QUFBQSxNQUV2QkMsUUFGdUI7O0FBSXRDLFdBQVNDLGVBQVQsQ0FBeUJDLFVBQXpCLEVBQW9DO0FBQ2hDLFFBQUlBLFVBQVUsS0FBSyxNQUFuQixFQUEwQjtBQUN0QkYsY0FBUSxDQUFFLE1BQUYsQ0FBUjtBQUNILEtBRkQsTUFFTSxJQUFJRSxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDOUJGLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDSDtBQUNKOztBQUVELFNBQU87QUFDSEQsU0FBSyxFQUFMQSxLQURHO0FBQ0tDLFlBQVEsRUFBR0M7QUFEaEIsR0FBUDtBQUdIOztHQWZRTCxROztBQWlCVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTA0NzZhMDE2YTNlYjA4Y2FkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lID0gXCJsaWdodFwiKXtcclxuXHJcbiAgICBjb25zdCBbdGhlbWUgLCBzZXRUaGVtZSBdID0gdXNlU3RhdGUoc3RhcnRpbmdUaGVtZSkgO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb25UaGVtZSh0aGVtZVZhbHVlKXtcclxuICAgICAgICBpZiggdGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICBzZXRUaGVtZSAoXCJkYXJrXCIgKTtcclxuICAgICAgICB9ZWxzZSBpZiggdGhlbWVWYWx1ZSA9PT0gXCJsaWdodFwiICl7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIikgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoZW1lICwgc2V0VGhlbWUgOiB2YWxpZGF0aW9uVGhlbWUsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZSA7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9