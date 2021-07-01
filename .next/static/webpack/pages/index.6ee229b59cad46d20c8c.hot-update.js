self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hook_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook/useRequestDelay */ "./src/hook/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Tutorial for sample\\Mytutorial\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SpeakersList() {
  _s();

  var _useRequestDelay = (0,_hook_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord;

  if (requestStatus === _hook_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hook_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle(doneCallback) {
              updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
                favorite: !speaker.favorite
              }), doneCallback);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "ajEMaqAQL8DpDYU34gufSbWFm1M=", false, function () {
  return [_hook_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInVzZVJlcXVlc3REZWxheSIsImRhdGEiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJSRVFVRVNUX1NUQVRVUyIsIm1hcCIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiLCJkb25lQ2FsbGJhY2siLCJmYXZvcml0ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLHlCQU9sQkMsOERBQWUsQ0FBQyxJQUFELEVBQU9DLDhDQUFQLENBUEc7QUFBQSxNQUdkQyxZQUhjLG9CQUdwQkQsSUFIb0I7QUFBQSxNQUlwQkUsYUFKb0Isb0JBSXBCQSxhQUpvQjtBQUFBLE1BS3BCQyxLQUxvQixvQkFLcEJBLEtBTG9CO0FBQUEsTUFNcEJDLFlBTm9CLG9CQU1wQkEsWUFOb0I7O0FBU3RCLE1BQUlGLGFBQWEsS0FBS0cseUVBQXRCLEVBQThDO0FBQzVDLHdCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDUztBQUFBLG1EQUFnQ0YsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRCxHQWZxQixDQWlCdEI7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsZUFBUyxFQUFDLDBCQUhaO0FBSUUsV0FBSyxFQUFFRCxhQUFhLEtBQUtHLHlFQUozQjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dKLFlBQVksQ0FBQ0ssR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ25DLDhCQUNFLDhEQUFDLDZDQUFEO0FBRUUsbUJBQU8sRUFBRUEsT0FGWDtBQUdFLHdCQUFZLEVBQUVDLFlBSGhCO0FBSUUsNEJBQWdCLEVBQUUsMEJBQUNDLFlBQUQsRUFBa0I7QUFDbENMLDBCQUFZLGlDQUVMRyxPQUZLO0FBR1JHLHdCQUFRLEVBQUUsQ0FBQ0gsT0FBTyxDQUFDRztBQUhYLGtCQUtWRCxZQUxVLENBQVo7QUFPRDtBQVpILGFBQ09GLE9BQU8sQ0FBQ0ksRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBZ0JELFNBakJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBbERRYixZO1VBT0hDLDBEOzs7S0FQR0QsWTtBQW9EVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZWUyMjliNTljYWQ0NmQyMGM4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2svdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcblxuICBjb25zdCB7XG4gICAgZGF0YTogc3BlYWtlcnNEYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICB9ID0gdXNlUmVxdWVzdERlbGF5KDIwMDAsIGRhdGEpO1xuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vaWYgKGlzTG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgcm93cz17MTV9XG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eyhkb25lQ2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9