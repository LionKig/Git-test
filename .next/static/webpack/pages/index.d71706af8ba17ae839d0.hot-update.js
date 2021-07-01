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


/***/ }),

/***/ "./src/hook/useRequestSpeakers.js":
/*!****************************************!*\
  !*** ./src/hook/useRequestSpeakers.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRequestSpeakers": function() { return /* binding */ useRequestSpeakers; }
/* harmony export */ });
/* harmony import */ var E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function useRequestSpeakers() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      isloading = _useState2[0],
      setIsloading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      hasErrored = _useState4[0],
      setHasErrored = _useState4[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return E_Tutorial_for_sample_Mytutorial_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                setIsloading(false);
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setIsloading(false);
                setError(_context.t0);
                setHasErrored(true);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  });

  function onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return {
    speakerData: speakerData,
    isloading: isloading
  };
}

_s(useRequestSpeakers, "teQ47w2GbIV/WYfzzMoLyZCAfp4=");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvaG9vay91c2VSZXF1ZXN0U3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwic3BlYWtlckRhdGEiLCJpc2xvYWRpbmciLCJoYXNFcnJvcmVkIiwiZXJyb3IiLCJvbkZhdm9yaXRlVG9nZ2xlIiwic3BlYWtlcnNEYXRhIiwibWFwIiwic3BlYWtlciIsImlkIiwiZGVsYXlUaW1lIiwidXNlU3RhdGUiLCJzZXRTcGVha2Vyc0RhdGEiLCJzZXRJc2xvYWRpbmciLCJzZXRFcnJvciIsInNldEhhc0Vycm9yZWQiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiZGVsYXlGdW5jIiwiZGF0YSIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFBQSw0QkFFcUNDLDRFQUFrQixDQUFDLElBQUQsQ0FGdkQ7QUFBQSxNQUUvQkMsV0FGK0IsdUJBRS9CQSxXQUYrQjtBQUFBLE1BRWpCQyxTQUZpQix1QkFFakJBLFNBRmlCO0FBQUEsTUFFTkMsVUFGTSx1QkFFTkEsVUFGTTtBQUFBLE1BRU1DLEtBRk4sdUJBRU1BLEtBRk47QUFBQSxNQUVjQyxpQkFGZCx1QkFFY0EsZ0JBRmQ7O0FBSXRDLE1BQUlGLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2Qix3QkFDRTtBQUFLLGVBQVMsRUFB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S0FGMkIsQ0FBNUI7O0FBR0EsUUFBTWtCLGlCQUFpQixtQ0FDaEJILG1CQURnQjtBQUVuQkksY0FBUSxFQUFFLENBQUNKLG1CQUFtQixDQUFDSTtBQUZaLE1BQXZCOztBQUlBLFFBQU1DLGVBQWUsR0FBR3ZCLFlBQVksQ0FBQ0MsR0FBYixDQUFpQixVQUFVbUIsR0FBVixFQUFlO0FBQ3BELGFBQU9BLEdBQUcsQ0FBQ2pCLEVBQUosS0FBV0EsRUFBWCxHQUFnQmtCLGlCQUFoQixHQUFvQ0QsR0FBM0M7QUFDSCxLQUZ1QixDQUF4QjtBQUlBZCxtQkFBZSxDQUFDaUIsZUFBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBTztBQUFFNUIsZUFBVyxFQUFYQSxXQUFGO0FBQWdCQyxhQUFTLEVBQVRBO0FBQWhCLEdBQVA7QUFDSDs7R0F4Q1FGLGtCOztBQTBDVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNzE3MDZhZjhiYTE3YWU4MzlkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlci9saWJcIjtcbmltcG9ydCB7dXNlUmVxdWVzdFNwZWFrZXJzfSBmcm9tIFwiLi4vaG9vay91c2VSZXF1ZXN0U3BlYWtlcnNcIlxuXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoeyBzaG93U2Vzc2lvbnMgfSkge1xuXG4gIGNvbnN0IHtzcGVha2VyRGF0YSAsIGlzbG9hZGluZywgaGFzRXJyb3JlZCAsZXJyb3IgLCBvbkZhdm9yaXRlVG9nZ2xlICwgfSA9IHVzZVJlcXVlc3RTcGVha2VycygyMDAwKSA7XG4gXG4gIGlmKCBoYXNFcnJvcmVkID09PSB0cnVlICl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICBFUlJPUiA6IDxiPmxvYWRpbmcgU3BlYWtlciBEZWxheWVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApIDtcbiAgfVxuXG4gLy8gaWYoIGlzbG9hZGluZyA9PT0gdHJ1ZSApIHJldHVybiA8ZGl2PkxPQURJTkcuLi4uLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8UmVhY3RQbGFjZWhvbGRlciB0eXBlID0gXCJtZWRpYVwiIHJvd3MgPSB7MjV9IGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgcmVhZHk9e2lzbG9hZGluZz09PWZhbHNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgXG4gICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX0gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3RTcGVha2VycyhkZWxheVRpbWU9MTAwMCl7XHJcblxyXG4gICAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc2xvYWRpbmcgLCBzZXRJc2xvYWRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICkgO1xyXG4gICAgY29uc3QgW2Vycm9yICwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIikgO1xyXG4gICAgY29uc3QgW2hhc0Vycm9yZWQgLCBzZXRIYXNFcnJvcmVkXSA9IHVzZVN0YXRlKGZhbHNlKSA7XHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUgLCBtcyApKSA7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpIDsgICAgICAgIFxyXG4gICAgICAgIHNldElzbG9hZGluZyggZmFsc2UgKSA7XHJcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKGRhdGEpIDtcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgc2V0SXNsb2FkaW5nKCBmYWxzZSApIDtcclxuICAgICAgICBzZXRFcnJvcihlKSA7XHJcbiAgICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKSA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jKCkgO1xyXG4gICAgfSkgO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcclxuICAgICAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcclxuICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHNwZWFrZXJEYXRhICwgaXNsb2FkaW5nIH1cclxufVxyXG5cclxuZXhwb3J0IHt1c2VSZXF1ZXN0U3BlYWtlcnN9IDsiXSwic291cmNlUm9vdCI6IiJ9