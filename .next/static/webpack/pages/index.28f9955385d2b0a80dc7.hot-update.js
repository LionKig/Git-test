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

  function validateTheme(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return {
    theme: theme,
    setTheme: validateTheme
  };
}

_s(useTheme, "7D3nJYxe783JeXHORkFR9pg9dCU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlVGhlbWUuanMiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidmFsaWRhdGVUaGVtZSIsInRoZW1lVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBMkM7QUFBQTs7QUFBQSxNQUF6QkMsYUFBeUIsdUVBQVQsT0FBUzs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQ0QsYUFBRCxDQURPO0FBQUEsTUFDbENFLEtBRGtDO0FBQUEsTUFDM0JDLFFBRDJCOztBQUd6QyxXQUFTQyxhQUFULENBQXVCQyxVQUF2QixFQUFtQztBQUNqQyxRQUFJQSxVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDekJGLGNBQVEsQ0FBQyxNQUFELENBQVI7QUFDRCxLQUZELE1BRU87QUFDTEEsY0FBUSxDQUFDLE9BQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTztBQUNMRCxTQUFLLEVBQUxBLEtBREs7QUFFTEMsWUFBUSxFQUFFQztBQUZMLEdBQVA7QUFJRDs7R0FmUUwsUTs7QUFpQlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjhmOTk1NTM4NWQyYjBhODBkYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lID0gXCJsaWdodFwiKSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShzdGFydGluZ1RoZW1lKTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVUaGVtZSh0aGVtZVZhbHVlKSB7XHJcbiAgICBpZiAodGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgc2V0VGhlbWUoXCJkYXJrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0aGVtZSxcclxuICAgIHNldFRoZW1lOiB2YWxpZGF0ZVRoZW1lLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9