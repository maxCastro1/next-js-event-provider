"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[cat]",{

/***/ "./src/components/events/CatEvent.js":
/*!*******************************************!*\
  !*** ./src/components/events/CatEvent.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CatEvent = (param)=>{\n    let { data , pageName  } = param;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Events in \".concat(pageName)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cont\",\n                children: data.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/events/\".concat(pageName, \"/\").concat(item.id),\n                        className: \"event_cont2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image,\n                                className: \"event_img2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                                lineNumber: 16,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"event-cont-cat\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 41\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 41\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                                lineNumber: 17,\n                                columnNumber: 37\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                        lineNumber: 14,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\CatEvent.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = CatEvent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatEvent);\nvar _c;\n$RefreshReg$(_c, \"CatEvent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHMvQ2F0RXZlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDRztBQUM3QixNQUFNRSxXQUFXLFNBQXNCO1FBQXJCLEVBQUNDLEtBQUksRUFBRUMsU0FBUSxFQUFDO0lBQzlCQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1oscUJBQ087OzBCQUNBLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDViw0RUFBQ0M7OEJBQUksYUFBc0IsT0FBVEw7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBRVBMLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO29CQUNmLHFCQUNJLDhEQUFDVixrREFBSUE7d0JBQUNXLE1BQU0sV0FBdUJELE9BQVpQLFVBQVMsS0FBVyxPQUFSTyxLQUFLRSxFQUFFO3dCQUFtQkwsV0FBVTs7MENBRS9ELDhEQUFDTTtnQ0FBSUMsS0FBS0osS0FBS0ssS0FBSztnQ0FBRVIsV0FBVTs7Ozs7OzBDQUNoQyw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDUztrREFBSU4sS0FBS08sS0FBSzs7Ozs7O2tEQUNmLDhEQUFDQztrREFBR1IsS0FBS1MsV0FBVzs7Ozs7Ozs7Ozs7Ozt1QkFMbUJULEtBQUtFLEVBQUU7Ozs7O2dCQVVsRTs7Ozs7Ozs7QUFLcEI7S0ExQk1YO0FBNEJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V2ZW50cy9DYXRFdmVudC5qcz84MGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBDYXRFdmVudCA9ICh7ZGF0YSwgcGFnZU5hbWV9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICA8PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPntgRXZlbnRzIGluICR7cGFnZU5hbWV9YH08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzLyR7cGFnZU5hbWV9LyR7aXRlbS5pZH1gfSBrZXk9e2l0ZW0uaWR9ICBjbGFzc05hbWU9XCJldmVudF9jb250MlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cImV2ZW50X2ltZzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWNvbnQtY2F0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRFdmVudCJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJDYXRFdmVudCIsImRhdGEiLCJwYWdlTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsIml0ZW0iLCJocmVmIiwiaWQiLCJpbWciLCJzcmMiLCJpbWFnZSIsImgzIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/events/CatEvent.js\n"));

/***/ })

});