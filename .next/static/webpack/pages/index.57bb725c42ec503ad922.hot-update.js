self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/context/SpeakerFilterContext.js":
/*!*********************************************!*\
  !*** ./src/context/SpeakerFilterContext.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerFilterContext": function() { return /* binding */ SpeakerFilterContext; },
/* harmony export */   "SpeakerFilterProvider": function() { return /* binding */ SpeakerFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hook_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useSpeakerFilter */ "./src/hook/useSpeakerFilter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\context\\SpeakerFilterContext.js",
    _s = $RefreshSig$();



var SpeakerFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function SpeakerFilterProvider(_ref) {
  _s();

  var children = _ref.children,
      _ref$startingShowSess = _ref.startingShowSessions,
      startingShowSessions = _ref$startingShowSess === void 0 ? false : _ref$startingShowSess;

  var _useSpeakerFilter = (0,_hook_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowSessions),
      showSession = _useSpeakerFilter.showSession,
      setShowSessions = _useSpeakerFilter.setShowSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFilterContext.Provider, {
    value: {
      showSession: showSession,
      setShowSession: setShowSession
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_s(SpeakerFilterProvider, "tRSXTDutiQJJS/4NtCOKWeMaSmw=", false, function () {
  return [_hook_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = SpeakerFilterProvider;


var _c;

$RefreshReg$(_c, "SpeakerFilterProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU3BlYWtlckZpbHRlckNvbnRleHQuanMiXSwibmFtZXMiOlsiU3BlYWtlckZpbHRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3BlYWtlckZpbHRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGFydGluZ1Nob3dTZXNzaW9ucyIsInVzZVNwZWFrZXJGaWx0ZXIiLCJzaG93U2Vzc2lvbiIsInNldFNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixnQkFBR0Msb0RBQWEsRUFBMUM7O0FBRUEsU0FBU0MscUJBQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQUEsbUNBQTVCQyxvQkFBNEI7QUFBQSxNQUE1QkEsb0JBQTRCLHNDQUFQLEtBQU87O0FBQUEsMEJBRTNCQywrREFBZ0IsQ0FBQ0Qsb0JBQUQsQ0FGVztBQUFBLE1BRTVERSxXQUY0RCxxQkFFNURBLFdBRjREO0FBQUEsTUFFOUNDLGVBRjhDLHFCQUU5Q0EsZUFGOEM7O0FBSW5FLHNCQUNJLDhEQUFDLG9CQUFELENBQXNCLFFBQXRCO0FBQStCLFNBQUssRUFDaEM7QUFBQ0QsaUJBQVcsRUFBWEEsV0FBRDtBQUFlRSxvQkFBYyxFQUFkQTtBQUFmLEtBREo7QUFBQSxjQUdLTDtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztHQVhRRCxxQjtVQUVtQ0csMkQ7OztLQUZuQ0gscUI7QUFhVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41N2JiNzI1YzQyZWM1MDNhZDkyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSBcIi4uL2hvb2svdXNlU3BlYWtlckZpbHRlclwiO1xyXG5cclxuY29uc3QgU3BlYWtlckZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCkgO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckZpbHRlclByb3ZpZGVyKHtjaGlsZHJlbiAsIHN0YXJ0aW5nU2hvd1Nlc3Npb25zPWZhbHNlfSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHtzaG93U2Vzc2lvbiAsIHNldFNob3dTZXNzaW9uc30gPSB1c2VTcGVha2VyRmlsdGVyKHN0YXJ0aW5nU2hvd1Nlc3Npb25zKSA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1xyXG4gICAgICAgICAgICB7c2hvd1Nlc3Npb24gLCBzZXRTaG93U2Vzc2lvbn1cclxuICAgICAgICB9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICkgO1xyXG59XHJcblxyXG5leHBvcnQge1NwZWFrZXJGaWx0ZXJDb250ZXh0LCBTcGVha2VyRmlsdGVyUHJvdmlkZXJ9IDsiXSwic291cmNlUm9vdCI6IiJ9