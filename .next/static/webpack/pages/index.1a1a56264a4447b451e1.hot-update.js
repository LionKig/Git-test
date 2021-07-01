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



function useTheme(_ref) {
  _s();

  var _ref$startingTheme = _ref.startingTheme,
      startingTheme = _ref$startingTheme === void 0 ? "light" : _ref$startingTheme;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  function validationTheme(theme) {
    if (theme === "dark") {
      setTheme("dark");
    } else if (theme === "light") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlVGhlbWUuanMiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidmFsaWRhdGlvblRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxRQUFULE9BQTRDO0FBQUE7O0FBQUEsZ0NBQXpCQyxhQUF5QjtBQUFBLE1BQXpCQSxhQUF5QixtQ0FBVCxPQUFTOztBQUFBLGtCQUVaQywrQ0FBUSxDQUFDRCxhQUFELENBRkk7QUFBQSxNQUVqQ0UsS0FGaUM7QUFBQSxNQUV6QkMsUUFGeUI7O0FBSXhDLFdBQVNDLGVBQVQsQ0FBeUJGLEtBQXpCLEVBQStCO0FBQzNCLFFBQUlBLEtBQUssS0FBSyxNQUFkLEVBQXFCO0FBQ2pCQyxjQUFRLENBQUUsTUFBRixDQUFSO0FBQ0gsS0FGRCxNQUVNLElBQUlELEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQ3pCQyxjQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0g7QUFDSjs7QUFFRCxTQUFPO0FBQ0hELFNBQUssRUFBTEEsS0FERztBQUNLQyxZQUFRLEVBQUdDO0FBRGhCLEdBQVA7QUFHSDs7R0FmUUwsUTs7QUFpQlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWExYTU2MjY0YTQ0NDdiNDUxZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gdXNlVGhlbWUoe3N0YXJ0aW5nVGhlbWUgPSBcImxpZ2h0XCJ9KXtcclxuXHJcbiAgICBjb25zdCBbdGhlbWUgLCBzZXRUaGVtZSBdID0gdXNlU3RhdGUoc3RhcnRpbmdUaGVtZSkgO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb25UaGVtZSh0aGVtZSl7XHJcbiAgICAgICAgaWYoIHRoZW1lID09PSBcImRhcmtcIil7XHJcbiAgICAgICAgICAgIHNldFRoZW1lIChcImRhcmtcIiApO1xyXG4gICAgICAgIH1lbHNlIGlmKCB0aGVtZSA9PT0gXCJsaWdodFwiICl7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIikgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoZW1lICwgc2V0VGhlbWUgOiB2YWxpZGF0aW9uVGhlbWUsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZSA7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9