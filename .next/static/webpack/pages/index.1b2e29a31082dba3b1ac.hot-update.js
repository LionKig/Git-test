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
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder/lib */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hook_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hook/useRequestSpeakers */ "./src/hook/useRequestSpeakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();







function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestSpeakers = (0,_hook_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_5__.useRequestSpeakers)(2000),
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
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this);
  } // if( isloading === true ) return <div>LOADING.......</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_4__.default, {
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
            lineNumber: 29,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "CPrHthYPvYBGMqxLsL0TbHeU0qw=", false, function () {
  return [_hook_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_5__.useRequestSpeakers];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInVzZVJlcXVlc3RTcGVha2VycyIsInNwZWFrZXJEYXRhIiwiaXNsb2FkaW5nIiwiaGFzRXJyb3JlZCIsImVycm9yIiwib25GYXZvcml0ZVRvZ2dsZSIsInNwZWFrZXJzRGF0YSIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFBQSw0QkFFcUNDLDRFQUFrQixDQUFDLElBQUQsQ0FGdkQ7QUFBQSxNQUUvQkMsV0FGK0IsdUJBRS9CQSxXQUYrQjtBQUFBLE1BRWpCQyxTQUZpQix1QkFFakJBLFNBRmlCO0FBQUEsTUFFTkMsVUFGTSx1QkFFTkEsVUFGTTtBQUFBLE1BRU1DLEtBRk4sdUJBRU1BLEtBRk47QUFBQSxNQUVjQyxpQkFGZCx1QkFFY0EsZ0JBRmQ7O0FBSXRDLE1BQUlGLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2Qix3QkFDRTtBQUFLLGVBQVMsRUFBRyxhQUFqQjtBQUFBLDBDQUNVO0FBQUEsK0NBQTRCQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtELEdBVnFDLENBWXZDOzs7QUFFQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNFLDhEQUFDLDBEQUFEO0FBQWtCLFVBQUksRUFBRyxPQUF6QjtBQUFpQyxVQUFJLEVBQUksRUFBekM7QUFBNkMsZUFBUyxFQUFDLDBCQUF2RDtBQUNDLFdBQUssRUFBRUYsU0FBUyxLQUFHLEtBRHBCO0FBQUEsNkJBRUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFFR0ksWUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDbkMsOEJBQ0UsOERBQUMsNkNBQUQ7QUFFRSxtQkFBTyxFQUFFQSxPQUZYO0FBR0Usd0JBQVksRUFBRVQsWUFIaEI7QUFJRSw0QkFBZ0IsRUFBRSw0QkFBTTtBQUN0Qk0sK0JBQWdCLENBQUNHLE9BQU8sQ0FBQ0MsRUFBVCxDQUFoQjtBQUNEO0FBTkgsYUFDT0QsT0FBTyxDQUFDQyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFVRCxTQVhBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBcENRWCxZO1VBRW9FRSx3RTs7O0tBRnBFRixZO0FBc0NULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFiMmUyOWEzMTA4MmRiYTNiMWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyL2xpYlwiO1xuaW1wb3J0IHt1c2VSZXF1ZXN0U3BlYWtlcnN9IGZyb20gXCIuLi9ob29rL3VzZVJlcXVlc3RTcGVha2Vyc1wiIDtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcblxuICBjb25zdCB7c3BlYWtlckRhdGEgLCBpc2xvYWRpbmcsIGhhc0Vycm9yZWQgLGVycm9yICwgb25GYXZvcml0ZVRvZ2dsZSAsIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMCkgO1xuIFxuICBpZiggaGFzRXJyb3JlZCA9PT0gdHJ1ZSApe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgRVJST1IgOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGVsYXllZCB7ZXJyb3J9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKSA7XG4gIH1cblxuIC8vIGlmKCBpc2xvYWRpbmcgPT09IHRydWUgKSByZXR1cm4gPGRpdj5MT0FESU5HLi4uLi4uLjwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2Vob2xkZXIgdHlwZSA9IFwibWVkaWFcIiByb3dzID0gezI1fSBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxuICAgICAgIHJlYWR5PXtpc2xvYWRpbmc9PT1mYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIFxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9ICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=