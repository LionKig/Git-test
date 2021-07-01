self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakersToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakersToolbar */ "./src/components/SpeakersToolbar.js");
/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersList */ "./src/components/SpeakersList.js");
/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ "./src/context/SpeakerFilterContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\components\\Speakers.js";




function Speakers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterProvider, {
    startingShowSession: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersToolbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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
      setShowSession = _useSpeakerFilter.setShowSession;

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

_s(SpeakerFilterProvider, "RVhopip2mmfv+azGhjEaAAfjWFY=", false, function () {
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


/***/ }),

/***/ "./src/hook/useSpeakerFilter.js":
/*!**************************************!*\
  !*** ./src/hook/useSpeakerFilter.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



function useSpeakerFilter(startingSessions) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingSessions),
      showSession = _useState[0],
      setShowSession = _useState[1];

  return {
    showSession: showSession,
    setShowSession: setShowSession
  };
}

_s(useSpeakerFilter, "grzblGcmIT8XI7jQBiTHKIIS1JQ=");

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerFilter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvaG9vay91c2VTcGVha2VyRmlsdGVyLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3BlYWtlckZpbHRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGFydGluZ1Nob3dTZXNzaW9ucyIsInVzZVNwZWFrZXJGaWx0ZXIiLCJzaG93U2Vzc2lvbiIsInNldFNob3dTZXNzaW9uIiwic3RhcnRpbmdTZXNzaW9ucyIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUVsQixzQkFDRSw4REFBQyxnRkFBRDtBQUF1Qix1QkFBbUIsRUFBRSxLQUE1QztBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztLQVJRQSxRO0FBVVQsK0RBQWVBLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQSxJQUFNQyxvQkFBb0IsZ0JBQUdDLG9EQUFhLEVBQTFDOztBQUVBLFNBQVNDLHFCQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLG1DQUE1QkMsb0JBQTRCO0FBQUEsTUFBNUJBLG9CQUE0QixzQ0FBUCxLQUFPOztBQUFBLDBCQUU1QkMsK0RBQWdCLENBQUNELG9CQUFELENBRlk7QUFBQSxNQUU1REUsV0FGNEQscUJBRTVEQSxXQUY0RDtBQUFBLE1BRTlDQyxjQUY4QyxxQkFFOUNBLGNBRjhDOztBQUluRSxzQkFDSSw4REFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixTQUFLLEVBQ2hDO0FBQUNELGlCQUFXLEVBQVhBLFdBQUQ7QUFBZUMsb0JBQWMsRUFBZEE7QUFBZixLQURKO0FBQUEsY0FHS0o7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7R0FYUUQscUI7VUFFa0NHLDJEOzs7S0FGbENILHFCO0FBYVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBLFNBQVNHLGdCQUFULENBQTBCRyxnQkFBMUIsRUFBMkM7QUFBQTs7QUFBQSxrQkFDQUMsK0NBQVEsQ0FBRUQsZ0JBQUYsQ0FEUjtBQUFBLE1BQ2hDRixXQURnQztBQUFBLE1BQ2xCQyxjQURrQjs7QUFHdkMsU0FBTztBQUNIRCxlQUFXLEVBQVhBLFdBREc7QUFDV0Msa0JBQWMsRUFBZEE7QUFEWCxHQUFQO0FBR0g7O0dBTlFGLGdCOztBQVFULCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NTI3ODRjMzdkN2QyZGM1NTdhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJzVG9vbGJhciBmcm9tIFwiLi9TcGVha2Vyc1Rvb2xiYXJcIjtcbmltcG9ydCBTcGVha2Vyc0xpc3QgZnJvbSBcIi4vU3BlYWtlcnNMaXN0XCI7XG5pbXBvcnQge1NwZWFrZXJGaWx0ZXJQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvU3BlYWtlckZpbHRlckNvbnRleHRcIlxuXG5mdW5jdGlvbiBTcGVha2VycygpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPFNwZWFrZXJGaWx0ZXJQcm92aWRlciBzdGFydGluZ1Nob3dTZXNzaW9uPXtmYWxzZX0+XG4gICAgICA8U3BlYWtlcnNUb29sYmFyIC8+XG4gICAgICA8U3BlYWtlcnNMaXN0IC8+XG4gICAgPC9TcGVha2VyRmlsdGVyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSBcIi4uL2hvb2svdXNlU3BlYWtlckZpbHRlclwiO1xyXG5cclxuY29uc3QgU3BlYWtlckZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCkgO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckZpbHRlclByb3ZpZGVyKHtjaGlsZHJlbiAsIHN0YXJ0aW5nU2hvd1Nlc3Npb25zPWZhbHNlfSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHtzaG93U2Vzc2lvbiAsIHNldFNob3dTZXNzaW9ufSA9IHVzZVNwZWFrZXJGaWx0ZXIoc3RhcnRpbmdTaG93U2Vzc2lvbnMpIDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17XHJcbiAgICAgICAgICAgIHtzaG93U2Vzc2lvbiAsIHNldFNob3dTZXNzaW9ufVxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NwZWFrZXJGaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKSA7XHJcbn1cclxuXHJcbmV4cG9ydCB7U3BlYWtlckZpbHRlckNvbnRleHQsIFNwZWFrZXJGaWx0ZXJQcm92aWRlcn0gOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VTcGVha2VyRmlsdGVyKHN0YXJ0aW5nU2Vzc2lvbnMpe1xyXG4gICAgY29uc3QgW3Nob3dTZXNzaW9uICwgc2V0U2hvd1Nlc3Npb25dID0gdXNlU3RhdGUoIHN0YXJ0aW5nU2Vzc2lvbnMpIDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dTZXNzaW9uICwgc2V0U2hvd1Nlc3Npb24gLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRmlsdGVyIDsiXSwic291cmNlUm9vdCI6IiJ9