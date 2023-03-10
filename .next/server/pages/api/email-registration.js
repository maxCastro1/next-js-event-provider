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
exports.id = "pages/api/email-registration";
exports.ids = ["pages/api/email-registration"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/email-registration.js":
/*!*****************************************!*\
  !*** ./pages/api/email-registration.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildPath() {\n    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\", \"data.json\");\n}\nfunction extractData(Path) {\n    if (!(path__WEBPACK_IMPORTED_MODULE_0___default())) {\n        return console.log(\"no path\");\n    }\n    try {\n        const jsonData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(Path);\n        const data = JSON.parse(jsonData);\n        return data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nconst filePath = buildPath();\nconst { events_categories , allEvents  } = extractData(filePath);\nasync function handler(req, res) {\n    let modified = false;\n    const { method  } = req;\n    if (!events_categories && !allEvents) {\n        return res.status(404).send(\"no data\");\n    }\n    if (method === \"POST\") {\n        const { email , eventId  } = JSON.parse(req.body);\n        if (!email | !email.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address\"\n            });\n        }\n        const newAllevents = allEvents.map((ev)=>{\n            if (ev.id === eventId) {\n                if (ev.emails_registered.includes(email)) {\n                    res.status(409).json({\n                        message: \"this email has already been registered\"\n                    });\n                    return ev;\n                }\n                modified = true;\n                return {\n                    ...ev,\n                    emails_registered: [\n                        ...ev.emails_registered,\n                        email\n                    ]\n                };\n            }\n            return ev;\n        });\n        if (modified) {\n            fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, JSON.stringify({\n                events_categories,\n                allEvents: newAllevents\n            }));\n            res.status(201).json({\n                message: `succeful, ${email} you have been suceefull registered for  ${eventId}`\n            });\n            modified = false;\n        }\n    }\n} // -----------my way ----------\n // const jsonDirectory = path.join(process.cwd(), 'json');\n // const fileContents = await fs.readFile(jsonDirectory + '../../data/data.json', 'utf8');\n // // res.status(200).json(fileContents);\n // console.log(JSON.parse(fileContents).events_categories)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwtcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdCO0FBQ0Y7QUFFdEIsU0FBU0UsWUFBWTtJQUNqQixPQUFPRixnREFBUyxDQUFDSSxRQUFRQyxHQUFHLElBQUksUUFBUTtBQUM1QztBQUNBLFNBQVNDLFlBQWFDLElBQUksRUFBRTtJQUN4QixJQUFHLENBQUNQLDZDQUFJQSxFQUFDO1FBQ04sT0FBT1EsUUFBUUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJO1FBQ0EsTUFBTUMsV0FBV1Qsc0RBQWUsQ0FBQ007UUFDakMsTUFBTUssT0FBT0MsS0FBS0MsS0FBSyxDQUFDSjtRQUN2QixPQUFPRTtJQUNaLEVBQUUsT0FBT0csT0FBTztRQUNaUCxRQUFRQyxHQUFHLENBQUNNO0lBQ2hCO0FBRUo7QUFDQSxNQUFNQyxXQUFXZDtBQUNqQixNQUFNLEVBQUNlLGtCQUFpQixFQUFFQyxVQUFTLEVBQUMsR0FBR1osWUFBWVU7QUFHcEMsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUMsV0FBVyxLQUFLO0lBQ3BCLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdIO0lBQ25CLElBQUksQ0FBQ0gscUJBQXFCLENBQUNDLFdBQVk7UUFDbkMsT0FBT0csSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSUYsV0FBVyxRQUFRO1FBQ25CLE1BQU0sRUFBRUcsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR2QsS0FBS0MsS0FBSyxDQUFDTSxJQUFJUSxJQUFJO1FBRWxELElBQUksQ0FBQ0YsUUFBUSxDQUFDQSxNQUFNRyxRQUFRLENBQUMsTUFBTTtZQUMvQlIsSUFBSUcsTUFBTSxDQUFDLEtBQUtNLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF3QjtRQUMxRCxDQUFDO1FBRUMsTUFBTUMsZUFBZWQsVUFBVWUsR0FBRyxDQUFDQyxDQUFBQSxLQUFNO1lBQ3JDLElBQUdBLEdBQUdDLEVBQUUsS0FBS1IsU0FBUztnQkFDbEIsSUFBR08sR0FBR0UsaUJBQWlCLENBQUNQLFFBQVEsQ0FBQ0gsUUFBTztvQkFDcENMLElBQUlHLE1BQU0sQ0FBQyxLQUFLTSxJQUFJLENBQUM7d0JBQUNDLFNBQVM7b0JBQXdDO29CQUN2RSxPQUFPRztnQkFDWCxDQUFDO2dCQUNJWixXQUFXLElBQUk7Z0JBQ2hCLE9BQU87b0JBQ1AsR0FBR1ksRUFBRTtvQkFBRUUsbUJBQWtCOzJCQUFJRixHQUFHRSxpQkFBaUI7d0JBQUVWO3FCQUFNO2dCQUU3RDtZQUNKLENBQUM7WUFDRCxPQUFPUTtRQUNYO1FBRUEsSUFBR1osVUFBUztZQUNSckIsdURBQWdCLENBQUNlLFVBQVVILEtBQUt5QixTQUFTLENBQUM7Z0JBQUNyQjtnQkFBbUJDLFdBQVdjO1lBQVk7WUFDckZYLElBQUlHLE1BQU0sQ0FBQyxLQUFLTSxJQUFJLENBQUM7Z0JBQ2pCQyxTQUFTLENBQUMsVUFBVSxFQUFFTCxNQUFNLHlDQUF5QyxFQUFFQyxRQUFRLENBQUM7WUFDcEY7WUFDQUwsV0FBVyxLQUFLO1FBRXBCLENBQUM7SUFHTCxDQUFDO0FBRUwsQ0FBQyxDQUVELCtCQUErQjtDQUUvQiwwREFBMEQ7Q0FDMUQsMEZBQTBGO0NBQzFGLHlDQUF5QztDQUN6QywwREFBMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZW1haWwtcmVnaXN0cmF0aW9uLmpzP2E1OWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAgZnMgIGZyb20gJ2ZzJztcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUGF0aCgpIHtcclxuICAgIHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAnZGF0YS5qc29uJylcclxufVxyXG5mdW5jdGlvbiBleHRyYWN0RGF0YSAoUGF0aCkge1xyXG4gICAgaWYoIXBhdGgpe1xyXG4gICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwibm8gcGF0aFwiKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhQYXRoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSlcclxuICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gXHJcbn1cclxuY29uc3QgZmlsZVBhdGggPSBidWlsZFBhdGgoKTtcclxuY29uc3Qge2V2ZW50c19jYXRlZ29yaWVzLCBhbGxFdmVudHN9ID0gZXh0cmFjdERhdGEoZmlsZVBhdGgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGxldCBtb2RpZmllZCA9IGZhbHNlXHJcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG4gICAgaWYgKCFldmVudHNfY2F0ZWdvcmllcyAmJiAhYWxsRXZlbnRzICkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZChcIm5vIGRhdGFcIilcclxuICAgIH1cclxuICAgIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgZXZlbnRJZCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuICAgICAgICBcclxuICAgIGlmICghZW1haWwgfCAhZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycgfSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICBjb25zdCBuZXdBbGxldmVudHMgPSBhbGxFdmVudHMubWFwKGV2ID0+IHtcclxuICAgICAgICAgICAgaWYoZXYuaWQgPT09IGV2ZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKGV2LmVtYWlsc19yZWdpc3RlcmVkLmluY2x1ZGVzKGVtYWlsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDkpLmpzb24oe21lc3NhZ2U6ICd0aGlzIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmV2LCBlbWFpbHNfcmVnaXN0ZXJlZDpbLi4uZXYuZW1haWxzX3JlZ2lzdGVyZWQsIGVtYWlsXVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXZcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZihtb2RpZmllZCl7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHtldmVudHNfY2F0ZWdvcmllcywgYWxsRXZlbnRzOiBuZXdBbGxldmVudHN9KSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYHN1Y2NlZnVsLCAke2VtYWlsfSB5b3UgaGF2ZSBiZWVuIHN1Y2VlZnVsbCByZWdpc3RlcmVkIGZvciAgJHtldmVudElkfWBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1vZGlmaWVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS1teSB3YXkgLS0tLS0tLS0tLVxyXG5cclxuLy8gY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnanNvbicpO1xyXG4vLyBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy4uLy4uL2RhdGEvZGF0YS5qc29uJywgJ3V0ZjgnKTtcclxuLy8gLy8gcmVzLnN0YXR1cygyMDApLmpzb24oZmlsZUNvbnRlbnRzKTtcclxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShmaWxlQ29udGVudHMpLmV2ZW50c19jYXRlZ29yaWVzKSJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJidWlsZFBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3REYXRhIiwiUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJqc29uRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImZpbGVQYXRoIiwiZXZlbnRzX2NhdGVnb3JpZXMiLCJhbGxFdmVudHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibW9kaWZpZWQiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiZW1haWwiLCJldmVudElkIiwiYm9keSIsImluY2x1ZGVzIiwianNvbiIsIm1lc3NhZ2UiLCJuZXdBbGxldmVudHMiLCJtYXAiLCJldiIsImlkIiwiZW1haWxzX3JlZ2lzdGVyZWQiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/email-registration.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/email-registration.js"));
module.exports = __webpack_exports__;

})();