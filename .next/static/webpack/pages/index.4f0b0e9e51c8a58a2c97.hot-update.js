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
/* harmony import */ var E_Tutorial_for_sample_New_folder_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Tutorial for sample\\New folder\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Tutorial_for_sample_New_folder_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function SpeakersList(_ref) {
  _s();

  var _this = this;

  var showSessions = _ref.showSessions,
      onFavoriteToggle = _ref.onFavoriteToggle;
  return function (_onFavoriteToggle) {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data),
        speakerData = _useState[0],
        setSpeakerData = _useState[1];

    function _onFavoriteToggle(id) {
      var speakersRecPrevious = speakerData.find(function (rec) {
        return rec.id === id;
      });

      var speakerRecUpdate = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
        favorite: !speakersRecPrevious.favorite
      });

      var speakerDataNew = speakerData.map(function (rec) {
        return rec.id === id ? speakerRecUpdate : rec;
      });
      setSpeakerData(speakerDataNew);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container speakers-list",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakerData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle() {
              _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this);
  }(onFavoriteToggle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGUiLCJmYXZvcml0ZSIsInNwZWFrZXJEYXRhTmV3IiwibWFwIiwic3BlYWtlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFUO0FBQUE7O0FBQUE7O0FBQUEsTUFBd0JDLFlBQXhCLFFBQXdCQSxZQUF4QjtBQUFBLE1BQXVDQyxnQkFBdkMsUUFBdUNBLGdCQUF2QztBQUFBLHNDQUEwRDtBQUFBLG9CQUVsQkMsK0NBQVEsQ0FBRUMsOENBQUYsQ0FGVTtBQUFBLFFBRWpEQyxXQUZpRDtBQUFBLFFBRXBDQyxjQUZvQzs7QUFJeEQsYUFBU0osaUJBQVQsQ0FBMEJLLEVBQTFCLEVBQTZCO0FBRTNCLFVBQU1DLG1CQUFtQixHQUFHSCxXQUFXLENBQUNJLElBQVosQ0FBaUIsVUFBVUMsR0FBVixFQUFjO0FBQ3pELGVBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFsQjtBQUNELE9BRjJCLENBQTVCOztBQUlBLFVBQU1JLGdCQUFnQixtQ0FDakJILG1CQURpQjtBQUVwQkksZ0JBQVEsRUFBRyxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGWixRQUF0Qjs7QUFLQSxVQUFNQyxjQUFjLEdBQUdSLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFVSixHQUFWLEVBQWU7QUFDcEQsZUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGdCQUFoQixHQUFtQ0QsR0FBMUM7QUFDRCxPQUZzQixDQUF2QjtBQUlBSixvQkFBYyxDQUFDTyxjQUFELENBQWQ7QUFDRDs7QUFFRCx3QkFDRTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dSLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2xDLDhCQUNFLDhEQUFDLDZDQUFEO0FBRUUsbUJBQU8sRUFBRUEsT0FGWDtBQUdFLHdCQUFZLEVBQUVkLFlBSGhCO0FBSUUsNEJBQWdCLEVBQUksNEJBQU07QUFDeEJDLCtCQUFnQixDQUFDYSxPQUFPLENBQUNSLEVBQVQsQ0FBaEI7QUFDRDtBQU5ILGFBQ09RLE9BQU8sQ0FBQ1IsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBVUQsU0FYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFrQkQsR0F4Q0Q7QUFBQTs7R0FBU1AsWTs7S0FBQUEsWTtBQTBDVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZjBiMGU5ZTUxYzhhNThhMmM5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIiA7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIiA7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7IHNob3dTZXNzaW9ucyAsIG9uRmF2b3JpdGVUb2dnbGV9KSB7XG5cbiAgY29uc3QgW3NwZWFrZXJEYXRhLCBzZXRTcGVha2VyRGF0YV0gPSB1c2VTdGF0ZSggZGF0YSApIDtcblxuICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlKGlkKXtcblxuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpe1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgO1xuICAgIH0pIDtcblxuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGUgPSB7XG4gICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzICxcbiAgICAgIGZhdm9yaXRlIDogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUgLFxuICAgIH07XG5cbiAgICBjb25zdCBzcGVha2VyRGF0YU5ldyA9IHNwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGUgOiByZWMgO1xuICAgIH0pIDtcblxuICAgIHNldFNwZWFrZXJEYXRhKHNwZWFrZXJEYXRhTmV3KSA7ICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7c3BlYWtlckRhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cbiAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9