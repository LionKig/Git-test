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
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder/lib */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hook_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useRequestSpeakers */ "./src/hook/useRequestSpeakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();





function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestSpeakers = (0,_hook_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__.default)(2000),
      speakerData = _useRequestSpeakers.speakerData,
      isloading = _useRequestSpeakers.isloading,
      hasErrored = _useRequestSpeakers.hasErrored,
      error = _useRequestSpeakers.error,
      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle;

  if (hasErrored === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Speaker Delayed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  } // if( isloading === true ) return <div>LOADING.......</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_2__.default, {
      type: "media",
      rows: 25,
      className: "speakerslist-placeholder",
      ready: isloading === false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle() {
              _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "CPrHthYPvYBGMqxLsL0TbHeU0qw=", false, function () {
  return [_hook_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__.default];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInVzZVJlcXVlc3RTcGVha2VycyIsInNwZWFrZXJEYXRhIiwiaXNsb2FkaW5nIiwiaGFzRXJyb3JlZCIsImVycm9yIiwib25GYXZvcml0ZVRvZ2dsZSIsInNwZWFrZXJzRGF0YSIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLDRCQUVxQ0MsaUVBQWtCLENBQUMsSUFBRCxDQUZ2RDtBQUFBLE1BRS9CQyxXQUYrQix1QkFFL0JBLFdBRitCO0FBQUEsTUFFakJDLFNBRmlCLHVCQUVqQkEsU0FGaUI7QUFBQSxNQUVOQyxVQUZNLHVCQUVOQSxVQUZNO0FBQUEsTUFFTUMsS0FGTix1QkFFTUEsS0FGTjtBQUFBLE1BRWNDLGlCQUZkLHVCQUVjQSxnQkFGZDs7QUFJdEMsTUFBSUYsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCLHdCQUNFO0FBQUssZUFBUyxFQUFHLGFBQWpCO0FBQUEsMENBQ1U7QUFBQSwrQ0FBNEJDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0QsR0FWcUMsQ0FZdkM7OztBQUVDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFBa0IsVUFBSSxFQUFHLE9BQXpCO0FBQWlDLFVBQUksRUFBSSxFQUF6QztBQUE2QyxlQUFTLEVBQUMsMEJBQXZEO0FBQ0MsV0FBSyxFQUFFRixTQUFTLEtBQUcsS0FEcEI7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUVHSSxZQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyw4QkFDRSw4REFBQyw2Q0FBRDtBQUVFLG1CQUFPLEVBQUVBLE9BRlg7QUFHRSx3QkFBWSxFQUFFVCxZQUhoQjtBQUlFLDRCQUFnQixFQUFFLDRCQUFNO0FBQ3RCTSwrQkFBZ0IsQ0FBQ0csT0FBTyxDQUFDQyxFQUFULENBQWhCO0FBQ0Q7QUFOSCxhQUNPRCxPQUFPLENBQUNDLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVVELFNBWEE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0FwQ1FYLFk7VUFFb0VFLDZEOzs7S0FGcEVGLFk7QUFzQ1QsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWIwYzlhZDQzNGI4M2Q1MDQ0MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlci9saWJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0U3BlYWtlcnMgZnJvbSBcIi4uL2hvb2svdXNlUmVxdWVzdFNwZWFrZXJzXCIgO1xuXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoeyBzaG93U2Vzc2lvbnMgfSkge1xuXG4gIGNvbnN0IHtzcGVha2VyRGF0YSAsIGlzbG9hZGluZywgaGFzRXJyb3JlZCAsZXJyb3IgLCBvbkZhdm9yaXRlVG9nZ2xlICwgfSA9IHVzZVJlcXVlc3RTcGVha2VycygyMDAwKSA7XG4gXG4gIGlmKCBoYXNFcnJvcmVkID09PSB0cnVlICl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICBFUlJPUiA6IDxiPmxvYWRpbmcgU3BlYWtlciBEZWxheWVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApIDtcbiAgfVxuXG4gLy8gaWYoIGlzbG9hZGluZyA9PT0gdHJ1ZSApIHJldHVybiA8ZGl2PkxPQURJTkcuLi4uLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8UmVhY3RQbGFjZWhvbGRlciB0eXBlID0gXCJtZWRpYVwiIHJvd3MgPSB7MjV9IGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgcmVhZHk9e2lzbG9hZGluZz09PWZhbHNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgXG4gICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX0gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==