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
  /*function validationTheme(theme){
      if( theme === "dark"){
          setTheme ("dark" );
      }else if( theme === "light" ){
          setTheme("light") ;
      }
  }*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlVGhlbWUuanMiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidmFsaWRhdGlvblRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxRQUFULE9BQTRDO0FBQUE7O0FBQUEsZ0NBQXpCQyxhQUF5QjtBQUFBLE1BQXpCQSxhQUF5QixtQ0FBVCxPQUFTOztBQUFBLGtCQUVaQywrQ0FBUSxDQUFDRCxhQUFELENBRkk7QUFBQSxNQUVqQ0UsS0FGaUM7QUFBQSxNQUV6QkMsUUFGeUI7QUFJeEM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVJLFNBQU87QUFDSEQsU0FBSyxFQUFMQSxLQURHO0FBQ0tDLFlBQVEsRUFBR0M7QUFEaEIsR0FBUDtBQUdIOztHQWZRTCxROztBQWlCVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWE1ODc1YTMxN2MwYTcwMTcwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZSh7c3RhcnRpbmdUaGVtZSA9IFwibGlnaHRcIn0pe1xyXG5cclxuICAgIGNvbnN0IFt0aGVtZSAsIHNldFRoZW1lIF0gPSB1c2VTdGF0ZShzdGFydGluZ1RoZW1lKSA7XHJcblxyXG4gICAgLypmdW5jdGlvbiB2YWxpZGF0aW9uVGhlbWUodGhlbWUpe1xyXG4gICAgICAgIGlmKCB0aGVtZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICBzZXRUaGVtZSAoXCJkYXJrXCIgKTtcclxuICAgICAgICB9ZWxzZSBpZiggdGhlbWUgPT09IFwibGlnaHRcIiApe1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImxpZ2h0XCIpIDtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoZW1lICwgc2V0VGhlbWUgOiB2YWxpZGF0aW9uVGhlbWUsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZSA7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9