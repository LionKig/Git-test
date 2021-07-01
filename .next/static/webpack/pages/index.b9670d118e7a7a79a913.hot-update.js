self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hook/useRequestSpeakers.js":
/*!****************************************!*\
  !*** ./src/hook/useRequestSpeakers.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    speakersData: speakersData,
    isloading: isloading,
    hasErrored: hasErrored,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestSpeakers, "teQ47w2GbIV/WYfzzMoLyZCAfp4=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestSpeakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlUmVxdWVzdFNwZWFrZXJzLmpzIl0sIm5hbWVzIjpbInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsInVzZVN0YXRlIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwiaXNsb2FkaW5nIiwic2V0SXNsb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhc0Vycm9yZWQiLCJzZXRIYXNFcnJvcmVkIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLGtCQUFULEdBQTJDO0FBQUE7O0FBQUEsTUFBZkMsU0FBZSx1RUFBTCxJQUFLOztBQUFBLGtCQUVDQywrQ0FBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRWhDQyxZQUZnQztBQUFBLE1BRWxCQyxlQUZrQjs7QUFBQSxtQkFHSEYsK0NBQVEsQ0FBRSxJQUFGLENBSEw7QUFBQSxNQUdoQ0csU0FIZ0M7QUFBQSxNQUdwQkMsWUFIb0I7O0FBQUEsbUJBSVpKLCtDQUFRLENBQUMsRUFBRCxDQUpJO0FBQUEsTUFJaENLLEtBSmdDO0FBQUEsTUFJeEJDLFFBSndCOztBQUFBLG1CQUtGTiwrQ0FBUSxDQUFDLEtBQUQsQ0FMTjtBQUFBLE1BS2hDTyxVQUxnQztBQUFBLE1BS25CQyxhQUxtQjs7QUFPdkMsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBV0YsRUFBWCxDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0RDLFNBREM7QUFBQTtBQUFBOztBQUFBO0FBQUEsdVJBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRVVOLEtBQUssQ0FBQ1YsU0FBRCxDQUZmOztBQUFBO0FBR0lLLDRCQUFZLENBQUUsS0FBRixDQUFaO0FBQ0FGLCtCQUFlLENBQUNjLDhDQUFELENBQWY7QUFKSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1JWiw0QkFBWSxDQUFFLEtBQUYsQ0FBWjtBQUNBRSx3QkFBUSxhQUFSO0FBQ0FFLDZCQUFhLENBQUMsSUFBRCxDQUFiOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGdCO0FBQUE7QUFBQTs7QUFZaEJPLGFBQVM7QUFDUixHQWJRLENBQVQ7O0FBZUEsV0FBU0UsZ0JBQVQsQ0FBMEJDLEVBQTFCLEVBQThCO0FBQzFCLFFBQU1DLG1CQUFtQixHQUFHbEIsWUFBWSxDQUFDbUIsSUFBYixDQUFrQixVQUFVQyxHQUFWLEVBQWU7QUFDekQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQWxCO0FBQ0gsS0FGMkIsQ0FBNUI7O0FBR0EsUUFBTUksaUJBQWlCLG1DQUNoQkgsbUJBRGdCO0FBRW5CSSxjQUFRLEVBQUUsQ0FBQ0osbUJBQW1CLENBQUNJO0FBRlosTUFBdkI7O0FBSUEsUUFBTUMsZUFBZSxHQUFHdkIsWUFBWSxDQUFDd0IsR0FBYixDQUFpQixVQUFVSixHQUFWLEVBQWU7QUFDcEQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGlCQUFoQixHQUFvQ0QsR0FBM0M7QUFDSCxLQUZ1QixDQUF4QjtBQUlBbkIsbUJBQWUsQ0FBQ3NCLGVBQUQsQ0FBZjtBQUNIOztBQUVELFNBQU87QUFBRXZCLGdCQUFZLEVBQVpBLFlBQUY7QUFBaUJFLGFBQVMsRUFBVEEsU0FBakI7QUFBNkJJLGNBQVUsRUFBVkEsVUFBN0I7QUFBMENGLFNBQUssRUFBTEEsS0FBMUM7QUFBa0RZLG9CQUFnQixFQUFoQkE7QUFBbEQsR0FBUDtBQUNIOztHQXhDUW5CLGtCOztBQTBDVCwrREFBZUEsa0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjk2NzBkMTE4ZTdhN2E3OWE5MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZT0xMDAwKXtcblxuICAgIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2lzbG9hZGluZyAsIHNldElzbG9hZGluZyBdID0gdXNlU3RhdGUoIHRydWUgKSA7XG4gICAgY29uc3QgW2Vycm9yICwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIikgO1xuICAgIGNvbnN0IFtoYXNFcnJvcmVkICwgc2V0SGFzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSkgO1xuXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUgLCBtcyApKSA7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpe1xuICAgICAgICB0cnl7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSkgOyAgICAgICAgXG4gICAgICAgIHNldElzbG9hZGluZyggZmFsc2UgKSA7XG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKSA7XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgc2V0SXNsb2FkaW5nKCBmYWxzZSApIDtcbiAgICAgICAgc2V0RXJyb3IoZSkgO1xuICAgICAgICBzZXRIYXNFcnJvcmVkKHRydWUpIDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxheUZ1bmMoKSA7XG4gICAgfSkgO1xuXG4gICAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xuICAgICAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgICAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3BlYWtlcnNEYXRhICwgaXNsb2FkaW5nICwgaGFzRXJyb3JlZCAsIGVycm9yICwgb25GYXZvcml0ZVRvZ2dsZSB9IDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFNwZWFrZXJzIDsiXSwic291cmNlUm9vdCI6IiJ9