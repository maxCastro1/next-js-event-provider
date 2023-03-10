"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/events/[cat]/[id]";
exports.ids = ["pages/events/[cat]/[id]"];
exports.modules = {

/***/ "./pages/events/[cat]/[id].js":
/*!************************************!*\
  !*** ./pages/events/[cat]/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_events_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/events/event-page */ \"./src/components/events/event-page.js\");\n\n\nconst EventPage = ({ data  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_events_event_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        event: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\pages\\\\events\\\\[cat]\\\\[id].js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, undefined);\n};\nasync function getStaticPaths() {\n    const { allEvents  } = await __webpack_require__.e(/*! import() */ \"data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../../../../../data/data.json */ \"./data/data.json\", 19));\n    const allSingleEvent = allEvents.map((event)=>{\n        return {\n            params: {\n                cat: event.city,\n                id: event.id\n            }\n        };\n    });\n    return {\n        paths: allSingleEvent,\n        fallback: false\n    };\n}\nasync function getStaticProps(context) {\n    const { allEvents  } = await __webpack_require__.e(/*! import() */ \"data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../../../../../data/data.json */ \"./data/data.json\", 19));\n    const id = context.params.id;\n    const events = allEvents.find((item)=>item.id === id);\n    return {\n        props: {\n            data: events\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2NhdF0vW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2tFO0FBQ2xFLE1BQU1DLFlBQVksQ0FBQyxFQUFDQyxLQUFJLEVBQUMsR0FBSztJQUUzQixxQkFDRyw4REFBQ0YseUVBQVVBO1FBQUNHLE9BQU9EOzs7Ozs7QUFFckI7QUFFRyxlQUFlRSxpQkFBaUI7SUFDcEMsTUFBTSxFQUFFQyxVQUFTLEVBQUUsR0FBRyxNQUFNLG1MQUFPO0lBQ25DLE1BQU1DLGlCQUFpQkQsVUFBVUUsR0FBRyxDQUFDLENBQUNKLFFBQVE7UUFDM0MsT0FBTTtZQUNISyxRQUFPO2dCQUNKQyxLQUFJTixNQUFNTyxJQUFJO2dCQUNiQyxJQUFJUixNQUFNUSxFQUFFO1lBQ2I7UUFDTjtJQUNIO0lBQ0EsT0FBTztRQUNIQyxPQUFPTjtRQUNQTyxVQUFVLEtBQUs7SUFDbkI7QUFDSCxDQUFDO0FBQ00sZUFBZUMsZUFBZUMsT0FBTyxFQUFFO0lBQzNDLE1BQU0sRUFBRVYsVUFBUyxFQUFFLEdBQUcsTUFBTSxtTEFBTztJQUNuQyxNQUFNTSxLQUFLSSxRQUFRUCxNQUFNLENBQUNHLEVBQUU7SUFDNUIsTUFBTUssU0FBU1gsVUFBVVksSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtQLEVBQUUsS0FBS0E7SUFDcEQsT0FBTztRQUNIUSxPQUFPO1lBQUVqQixNQUFNYztRQUFPO0lBQzFCO0FBQ0gsQ0FBQztBQUNELGlFQUFlZixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXZlbnRzL1tjYXRdL1tpZF0uanM/YzA4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEV2ZW50UGFnZXMgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LXBhZ2UnXHJcbmNvbnN0IEV2ZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuXHJcbiAgIHJldHVybihcclxuICAgICAgPEV2ZW50UGFnZXMgZXZlbnQ9e2RhdGF9ICAvPlxyXG5cclxuICAgKX1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgY29uc3QgeyBhbGxFdmVudHMgfSA9IGF3YWl0IGltcG9ydCgnL2RhdGEvZGF0YS5qc29uJyk7XHJcbiAgIGNvbnN0IGFsbFNpbmdsZUV2ZW50ID0gYWxsRXZlbnRzLm1hcCgoZXZlbnQpPT57XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgY2F0OmV2ZW50LmNpdHksXHJcbiAgICAgICAgICAgICBpZDogZXZlbnQuaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgIH0gICAgICAgICAgICAgXHJcbiAgIH0pXHJcbiAgIHJldHVybiB7XHJcbiAgICAgICBwYXRoczogYWxsU2luZ2xlRXZlbnQsXHJcbiAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICBjb25zdCB7IGFsbEV2ZW50cyB9ID0gYXdhaXQgaW1wb3J0KCcvZGF0YS9kYXRhLmpzb24nKTtcclxuICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZFxyXG4gICBjb25zdCBldmVudHMgPSBhbGxFdmVudHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcbiAgIHJldHVybiB7XHJcbiAgICAgICBwcm9wczogeyBkYXRhOiBldmVudHMgfVxyXG4gICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRQYWdlOyJdLCJuYW1lcyI6WyJFdmVudFBhZ2VzIiwiRXZlbnRQYWdlIiwiZGF0YSIsImV2ZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJhbGxFdmVudHMiLCJhbGxTaW5nbGVFdmVudCIsIm1hcCIsInBhcmFtcyIsImNhdCIsImNpdHkiLCJpZCIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJldmVudHMiLCJmaW5kIiwiaXRlbSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[cat]/[id].js\n");

/***/ }),

/***/ "./src/components/events/event-page.js":
/*!*********************************************!*\
  !*** ./src/components/events/event-page.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst EventPages = ({ event  })=>{\n    const inputEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(inputEmail);\n        const emailValue = inputEmail.current.value;\n        const eventId = router?.query.id;\n        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\n        if (!emailValue.match(validRegex)) {\n            setMessage(\"Please introduce a correct email address\");\n        }\n        try {\n            const response = await fetch(\"/api/email-registration\", {\n                method: \"POST\",\n                headers: {\n                    \"content-Type\": \"aplication/json\"\n                },\n                body: JSON.stringify({\n                    email: emailValue,\n                    eventId: eventId\n                })\n            });\n            if (!response.ok) throw new Error(`Error:${response.status}`);\n            const data = await response.json();\n            setMessage(data.message);\n            inputEmail.current.value = \"\";\n        } catch (e) {\n            console.log(\"ERROR\", e);\n            setMessage(\"this email has already been registered\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cont3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: event.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: event.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: event.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                    children: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Get Registered for this event!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"submit-email\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputEmail,\n                        type: \"email\",\n                        id: \"email\",\n                        placeholder: \"please insert your email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n                lineNumber: 55,\n                columnNumber: 8\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cococe ltd\\\\Desktop\\\\x\\\\study\\\\Nextjs\\\\redo\\\\src\\\\components\\\\events\\\\event-page.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventPages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHMvZXZlbnQtcGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QztBQUNMO0FBQ3hDLE1BQU1JLGFBQWEsQ0FBQyxFQUFFQyxNQUFLLEVBQUUsR0FBSztJQUVoQyxNQUFNQyxhQUFhSiw2Q0FBTUE7SUFDekIsTUFBTUssU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxlQUFlLE9BQU1DLElBQU07UUFDL0JBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDWixNQUFNUyxhQUFhVCxXQUFXVSxPQUFPLENBQUNDLEtBQUs7UUFDM0MsTUFBTUMsVUFBVVgsUUFBUVksTUFBTUMsRUFBRTtRQUVoQyxNQUFNQyxhQUFhO1FBRW5CLElBQUksQ0FBQ04sV0FBV08sS0FBSyxDQUFDRCxhQUFhO1lBQ2pDWixXQUFXO1FBQ2IsQ0FBQztRQUVELElBQUk7WUFDRixNQUFNYyxXQUFXLE1BQU1DLE1BQU0sMkJBQTBCO2dCQUNyREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLE9BQU9mO29CQUFZRyxTQUFRQTtnQkFBUTtZQUM1RDtZQUNBLElBQUcsQ0FBQ0ssU0FBU1EsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxDQUFDLE1BQU0sRUFBRVQsU0FBU1UsTUFBTSxDQUFDLENBQUMsRUFBQztZQUU1RCxNQUFNQyxPQUFPLE1BQU1YLFNBQVNZLElBQUk7WUFDaEMxQixXQUFXeUIsS0FBSzFCLE9BQU87WUFDdkJGLFdBQVdVLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1FBQzdCLEVBQUUsT0FBT04sR0FBRztZQUNWRSxRQUFRQyxHQUFHLENBQUMsU0FBU0g7WUFDckJGLFdBQVc7UUFDYjtJQUNGO0lBQ0EscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUlqQyxNQUFNa0MsS0FBSzs7Ozs7OzBCQUNoQiw4REFBQ0M7Z0JBQUlDLEtBQUtwQyxNQUFNcUMsS0FBSzs7Ozs7OzBCQUNyQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUd2QyxNQUFNd0MsV0FBVzs7Ozs7OzBCQUNyQiw4REFBQ0M7MEJBQUssNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7OzswQkFDVCw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQUtaLFdBQVU7Z0JBQWVhLFVBQVV4Qzs7a0NBQ3ZDLDhEQUFDeUM7d0JBQ0FDLEtBQUs5Qzt3QkFDSitDLE1BQUs7d0JBQ0xqQyxJQUFHO3dCQUNIa0MsYUFBWTs7Ozs7O2tDQUNkLDhEQUFDQzt3QkFBT0YsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ1Q7MEJBQUdwQzs7Ozs7Ozs7Ozs7O0FBR1g7QUFDQSxpRUFBZUosVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1wYWdlLmpzP2ZhMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IEV2ZW50UGFnZXMgPSAoeyBldmVudCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGlucHV0RW1haWwgPSB1c2VSZWYoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0RW1haWwpXHJcbiAgICBjb25zdCBlbWFpbFZhbHVlID0gaW5wdXRFbWFpbC5jdXJyZW50LnZhbHVlXHJcbiAgICBjb25zdCBldmVudElkID0gcm91dGVyPy5xdWVyeS5pZFxyXG5cclxuICAgIGNvbnN0IHZhbGlkUmVnZXggPSAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLztcclxuXHJcbiAgICBpZiAoIWVtYWlsVmFsdWUubWF0Y2godmFsaWRSZWdleCkpIHtcclxuICAgICAgc2V0TWVzc2FnZSgnUGxlYXNlIGludHJvZHVjZSBhIGNvcnJlY3QgZW1haWwgYWRkcmVzcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZW1haWwtcmVnaXN0cmF0aW9uJyx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtVHlwZSc6ICdhcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBlbWFpbFZhbHVlLCBldmVudElkOmV2ZW50SWQgfSlcclxuICAgICAgfSlcclxuICAgICAgaWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgIGlucHV0RW1haWwuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnRVJST1InLCBlKTtcclxuICAgICAgc2V0TWVzc2FnZShcInRoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250M1wiPlxyXG4gICAgICA8aDE+e2V2ZW50LnRpdGxlfTwvaDE+XHJcbiAgICAgIDxpbWcgc3JjPXtldmVudC5pbWFnZX0gLz5cclxuICAgICAgPGg1PkRlc2NyaXB0aW9uPC9oNT5cclxuICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPHNwYW4+PHU+Q29udGFjdCBVczwvdT48L3NwYW4+XHJcbiAgICAgIDxsYWJlbD5HZXQgUmVnaXN0ZXJlZCBmb3IgdGhpcyBldmVudCE8L2xhYmVsPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzdWJtaXQtZW1haWxcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgcmVmPXtpbnB1dEVtYWlsfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsZWFzZSBpbnNlcnQgeW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFBhZ2VzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiRXZlbnRQYWdlcyIsImV2ZW50IiwiaW5wdXRFbWFpbCIsInJvdXRlciIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImVtYWlsVmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJldmVudElkIiwicXVlcnkiLCJpZCIsInZhbGlkUmVnZXgiLCJtYXRjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImg1IiwicCIsImRlc2NyaXB0aW9uIiwic3BhbiIsInUiLCJsYWJlbCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVmIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/events/event-page.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/events/[cat]/[id].js"));
module.exports = __webpack_exports__;

})();