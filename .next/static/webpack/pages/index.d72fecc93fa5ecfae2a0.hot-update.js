self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Tutorial for sample\\New folder\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();





function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions,
      _onFavoriteToggle = _ref.onFavoriteToggle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data),
      speakerData = _useState[0],
      setSpeakerData = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: speakerData.map(function (speaker) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
          speaker: speaker,
          showSessions: showSessions,
          onFavoriteToggle: function onFavoriteToggle() {
            _onFavoriteToggle(speaker.id);
          }
        }, speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "H6iwNyI6LbdP6Bc83xMKmQmcdfE=");

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwibWFwIiwic3BlYWtlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBMEQ7QUFBQTs7QUFBQSxNQUFsQ0MsWUFBa0MsUUFBbENBLFlBQWtDO0FBQUEsTUFBbkJDLGlCQUFtQixRQUFuQkEsZ0JBQW1COztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBRUMsOENBQUYsQ0FGVTtBQUFBLE1BRWpEQyxXQUZpRDtBQUFBLE1BRXBDQyxjQUZvQzs7QUFJeEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0dELFdBQVcsQ0FBQ0UsR0FBWixDQUFnQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2xDLDRCQUNFLDhEQUFDLDZDQUFEO0FBRUUsaUJBQU8sRUFBRUEsT0FGWDtBQUdFLHNCQUFZLEVBQUVQLFlBSGhCO0FBSUUsMEJBQWdCLEVBQUksNEJBQU07QUFDeEJDLDZCQUFnQixDQUFDTSxPQUFPLENBQUNDLEVBQVQsQ0FBaEI7QUFDRDtBQU5ILFdBQ09ELE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBVUQsT0FYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBdEJRVCxZOztLQUFBQSxZO0FBd0JULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3MmZlY2M5M2ZhNWVjZmFlMmEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiIDtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiIDtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zICwgb25GYXZvcml0ZVRvZ2dsZX0pIHtcblxuICBjb25zdCBbc3BlYWtlckRhdGEsIHNldFNwZWFrZXJEYXRhXSA9IHVzZVN0YXRlKCBkYXRhICkgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge3NwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlID0geygpID0+IHtcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpIDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==