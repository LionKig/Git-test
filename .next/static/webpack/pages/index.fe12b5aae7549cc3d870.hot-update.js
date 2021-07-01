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
      return "dark";
    } else if (theme === "light") {
      return "light";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlVGhlbWUuanMiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidmFsaWRhdGlvblRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxRQUFULE9BQTRDO0FBQUE7O0FBQUEsZ0NBQXpCQyxhQUF5QjtBQUFBLE1BQXpCQSxhQUF5QixtQ0FBVCxPQUFTOztBQUFBLGtCQUVaQywrQ0FBUSxDQUFDRCxhQUFELENBRkk7QUFBQSxNQUVqQ0UsS0FGaUM7QUFBQSxNQUV6QkMsUUFGeUI7O0FBSXhDLFdBQVNDLGVBQVQsQ0FBeUJGLEtBQXpCLEVBQStCO0FBQzNCLFFBQUlBLEtBQUssS0FBSyxNQUFkLEVBQXFCO0FBQ2pCLGFBQU8sTUFBUDtBQUNILEtBRkQsTUFFTSxJQUFJQSxLQUFLLEtBQUssT0FBZCxFQUF1QjtBQUN6QixhQUFPLE9BQVA7QUFDSDtBQUNKOztBQUVELFNBQU87QUFDSEEsU0FBSyxFQUFMQSxLQURHO0FBQ0tDLFlBQVEsRUFBR0M7QUFEaEIsR0FBUDtBQUdIOztHQWZRTCxROztBQWlCVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZTEyYjVhYWU3NTQ5Y2MzZDg3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZSh7c3RhcnRpbmdUaGVtZSA9IFwibGlnaHRcIn0pe1xyXG5cclxuICAgIGNvbnN0IFt0aGVtZSAsIHNldFRoZW1lIF0gPSB1c2VTdGF0ZShzdGFydGluZ1RoZW1lKSA7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGlvblRoZW1lKHRoZW1lKXtcclxuICAgICAgICBpZiggdGhlbWUgPT09IFwiZGFya1wiKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZGFya1wiIDtcclxuICAgICAgICB9ZWxzZSBpZiggdGhlbWUgPT09IFwibGlnaHRcIiApe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJsaWdodFwiIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGVtZSAsIHNldFRoZW1lIDogdmFsaWRhdGlvblRoZW1lLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWUgO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==