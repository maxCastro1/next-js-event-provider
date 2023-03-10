"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[cat]/[id]",{

/***/ "./src/components/events/event-page.js":
/*!*********************************************!*\
  !*** ./src/components/events/event-page.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst EventPages = (param)=>{\n    let { event  } = param;\n    _s();\n    const inputEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(inputEmail);\n        const emailValue = inputEmail.current.value;\n        const eventId = router === null || router === void 0 ? void 0 : router.query.id;\n        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\n        if (!emailValue.match(validRegex)) {\n            setMessage(\"Please introduce a correct email address\");\n        }\n        try {\n            const response = await fetch(\"/api/email-registration\", {\n                method: \"POST\",\n                headers: {\n                    \"content-Type\": \"aplication/json\"\n                },\n                body: JSON.stringify({\n                    email: emailValue,\n                    eventId: eventId\n                })\n            });\n            if (!response.ok) throw new Error(\"Error:\".concat(response.status));\n            const data = await response.json();\n            setMessage(data.message);\n            inputEmail.current.value = \"\";\n            console.log(data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cont3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: event.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: event.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: event.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                    children: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Get Registered for this event!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"submit-email\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputEmail,\n                        type: \"email\",\n                        id: \"email\",\n                        placeholder: \"please insert your email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EventPages, \"omUtbQdH9QD2Yho2N8VkTJkIVqo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EventPages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPages);\nvar _c;\n$RefreshReg$(_c, \"EventPages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHMvZXZlbnQtcGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUN4QyxNQUFNSSxhQUFhLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7O0lBRTNCLE1BQU1DLGFBQWFKLDZDQUFNQTtJQUN6QixNQUFNSyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTUssZUFBZSxPQUFNQyxJQUFNO1FBQy9CQSxFQUFFQyxjQUFjO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUNOO1FBQ1osTUFBTU8sYUFBYVAsV0FBV1EsT0FBTyxDQUFDQyxLQUFLO1FBQzNDLE1BQU1DLFVBQVVULG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUVUsS0FBSyxDQUFDQyxFQUFFO1FBRWhDLE1BQU1DLGFBQWE7UUFFbkIsSUFBSSxDQUFDTixXQUFXTyxLQUFLLENBQUNELGFBQWE7WUFDakNFLFdBQVc7UUFDYixDQUFDO1FBRUQsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwyQkFBMEI7Z0JBQ3JEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsT0FBT2hCO29CQUFZRyxTQUFRQTtnQkFBUTtZQUM1RDtZQUNBLElBQUcsQ0FBQ00sU0FBU1EsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxTQUF5QixPQUFoQlQsU0FBU1UsTUFBTSxHQUFHO1lBRTVELE1BQU1DLE9BQU8sTUFBTVgsU0FBU1ksSUFBSTtZQUNoQ2IsV0FBV1ksS0FBS0UsT0FBTztZQUN2QjdCLFdBQVdRLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1lBQzNCSixRQUFRQyxHQUFHLENBQUNxQjtRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkekIsUUFBUUMsR0FBRyxDQUFDd0I7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBSWxDLE1BQU1tQyxLQUFLOzs7Ozs7MEJBQ2hCLDhEQUFDQztnQkFBSUMsS0FBS3JDLE1BQU1zQyxLQUFLOzs7Ozs7MEJBQ3JCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBR3hDLE1BQU15QyxXQUFXOzs7Ozs7MEJBQ3JCLDhEQUFDQzswQkFBSyw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUNULDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBS1osV0FBVTtnQkFBZWEsVUFBVTNDOztrQ0FDdkMsOERBQUM0Qzt3QkFDQUMsS0FBSy9DO3dCQUNKZ0QsTUFBSzt3QkFDTHBDLElBQUc7d0JBQ0hxQyxhQUFZOzs7Ozs7a0NBQ2QsOERBQUNDO3dCQUFPRixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0F0RE1sRDs7UUFHV0Qsa0RBQVNBOzs7S0FIcEJDO0FBdUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1wYWdlLmpzP2ZhMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IEV2ZW50UGFnZXMgPSAoeyBldmVudCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGlucHV0RW1haWwgPSB1c2VSZWYoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coaW5wdXRFbWFpbClcclxuICAgIGNvbnN0IGVtYWlsVmFsdWUgPSBpbnB1dEVtYWlsLmN1cnJlbnQudmFsdWVcclxuICAgIGNvbnN0IGV2ZW50SWQgPSByb3V0ZXI/LnF1ZXJ5LmlkXHJcblxyXG4gICAgY29uc3QgdmFsaWRSZWdleCA9IC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xyXG5cclxuICAgIGlmICghZW1haWxWYWx1ZS5tYXRjaCh2YWxpZFJlZ2V4KSkge1xyXG4gICAgICBzZXRNZXNzYWdlKCdQbGVhc2UgaW50cm9kdWNlIGEgY29ycmVjdCBlbWFpbCBhZGRyZXNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9lbWFpbC1yZWdpc3RyYXRpb24nLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnY29udGVudC1UeXBlJzogJ2FwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsVmFsdWUsIGV2ZW50SWQ6ZXZlbnRJZCB9KVxyXG4gICAgICB9KVxyXG4gICAgICBpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgRXJyb3I6JHtyZXNwb25zZS5zdGF0dXN9YClcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgaW5wdXRFbWFpbC5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udDNcIj5cclxuICAgICAgPGgxPntldmVudC50aXRsZX08L2gxPlxyXG4gICAgICA8aW1nIHNyYz17ZXZlbnQuaW1hZ2V9IC8+XHJcbiAgICAgIDxoNT5EZXNjcmlwdGlvbjwvaDU+XHJcbiAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxzcGFuPjx1PkNvbnRhY3QgVXM8L3U+PC9zcGFuPlxyXG4gICAgICA8bGFiZWw+R2V0IFJlZ2lzdGVyZWQgZm9yIHRoaXMgZXZlbnQhPC9sYWJlbD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3VibWl0LWVtYWlsXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgIHJlZj17aW5wdXRFbWFpbH1cclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGVhc2UgaW5zZXJ0IHlvdXIgZW1haWxcIiAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGFnZXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJFdmVudFBhZ2VzIiwiZXZlbnQiLCJpbnB1dEVtYWlsIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImVtYWlsVmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJldmVudElkIiwicXVlcnkiLCJpZCIsInZhbGlkUmVnZXgiLCJtYXRjaCIsInNldE1lc3NhZ2UiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJoNSIsInAiLCJkZXNjcmlwdGlvbiIsInNwYW4iLCJ1IiwibGFiZWwiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/events/event-page.js\n"));

/***/ })

});