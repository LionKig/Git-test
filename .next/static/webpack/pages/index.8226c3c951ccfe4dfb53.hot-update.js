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
    speakerData: speakerData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlUmVxdWVzdFNwZWFrZXJzLmpzIl0sIm5hbWVzIjpbInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsInVzZVN0YXRlIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwiaXNsb2FkaW5nIiwic2V0SXNsb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhc0Vycm9yZWQiLCJzZXRIYXNFcnJvcmVkIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0Esa0JBQVQsR0FBMkM7QUFBQTs7QUFBQSxNQUFmQyxTQUFlLHVFQUFMLElBQUs7O0FBQUEsa0JBRUNDLCtDQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFaENDLFlBRmdDO0FBQUEsTUFFbEJDLGVBRmtCOztBQUFBLG1CQUdIRiwrQ0FBUSxDQUFFLElBQUYsQ0FITDtBQUFBLE1BR2hDRyxTQUhnQztBQUFBLE1BR3BCQyxZQUhvQjs7QUFBQSxtQkFJWkosK0NBQVEsQ0FBQyxFQUFELENBSkk7QUFBQSxNQUloQ0ssS0FKZ0M7QUFBQSxNQUl4QkMsUUFKd0I7O0FBQUEsbUJBS0ZOLCtDQUFRLENBQUMsS0FBRCxDQUxOO0FBQUEsTUFLaENPLFVBTGdDO0FBQUEsTUFLbkJDLGFBTG1COztBQU92QyxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFXRixFQUFYLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFFQUksa0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDREMsU0FEQztBQUFBO0FBQUE7O0FBQUE7QUFBQSx1UkFDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFVU4sS0FBSyxDQUFDVixTQUFELENBRmY7O0FBQUE7QUFHSUssNEJBQVksQ0FBRSxLQUFGLENBQVo7QUFDQUYsK0JBQWUsQ0FBQ2MsOENBQUQsQ0FBZjtBQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUlaLDRCQUFZLENBQUUsS0FBRixDQUFaO0FBQ0FFLHdCQUFRLGFBQVI7QUFDQUUsNkJBQWEsQ0FBQyxJQUFELENBQWI7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEZ0I7QUFBQTtBQUFBOztBQVloQk8sYUFBUztBQUNSLEdBYlEsQ0FBVDs7QUFlQSxXQUFTRSxnQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUIsUUFBTUMsbUJBQW1CLEdBQUdsQixZQUFZLENBQUNtQixJQUFiLENBQWtCLFVBQVVDLEdBQVYsRUFBZTtBQUN6RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBbEI7QUFDSCxLQUYyQixDQUE1Qjs7QUFHQSxRQUFNSSxpQkFBaUIsbUNBQ2hCSCxtQkFEZ0I7QUFFbkJJLGNBQVEsRUFBRSxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGWixNQUF2Qjs7QUFJQSxRQUFNQyxlQUFlLEdBQUd2QixZQUFZLENBQUN3QixHQUFiLENBQWlCLFVBQVVKLEdBQVYsRUFBZTtBQUNwRCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBWCxHQUFnQkksaUJBQWhCLEdBQW9DRCxHQUEzQztBQUNILEtBRnVCLENBQXhCO0FBSUFuQixtQkFBZSxDQUFDc0IsZUFBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBTztBQUFFRSxlQUFXLEVBQVhBLFdBQUY7QUFBZ0J2QixhQUFTLEVBQVRBLFNBQWhCO0FBQTRCSSxjQUFVLEVBQVZBLFVBQTVCO0FBQXlDRixTQUFLLEVBQUxBLEtBQXpDO0FBQWlEWSxvQkFBZ0IsRUFBaEJBO0FBQWpELEdBQVA7QUFDSDs7R0F4Q1FuQixrQjs7QUEwQ1QsK0RBQWVBLGtCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgyMjZjM2M5NTFjY2ZlNGRmYjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZT0xMDAwKXtcclxuXHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lzbG9hZGluZyAsIHNldElzbG9hZGluZyBdID0gdXNlU3RhdGUoIHRydWUgKSA7XHJcbiAgICBjb25zdCBbZXJyb3IgLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKSA7XHJcbiAgICBjb25zdCBbaGFzRXJyb3JlZCAsIHNldEhhc0Vycm9yZWRdID0gdXNlU3RhdGUoZmFsc2UpIDtcclxuXHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSAsIG1zICkpIDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSkgOyAgICAgICAgXHJcbiAgICAgICAgc2V0SXNsb2FkaW5nKCBmYWxzZSApIDtcclxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoZGF0YSkgO1xyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICBzZXRJc2xvYWRpbmcoIGZhbHNlICkgO1xyXG4gICAgICAgIHNldEVycm9yKGUpIDtcclxuICAgICAgICBzZXRIYXNFcnJvcmVkKHRydWUpIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmMoKSA7XHJcbiAgICB9KSA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3BlYWtlckRhdGEgLCBpc2xvYWRpbmcgLCBoYXNFcnJvcmVkICwgZXJyb3IgLCBvbkZhdm9yaXRlVG9nZ2xlIH0gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0U3BlYWtlcnMgOyJdLCJzb3VyY2VSb290IjoiIn0=