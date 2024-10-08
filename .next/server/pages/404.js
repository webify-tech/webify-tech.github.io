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
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./lib/languageDetector.js":
/*!*********************************!*\
  !*** ./lib/languageDetector.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-language-detector */ \"next-language-detector\");\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_language_detector__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_language_detector__WEBPACK_IMPORTED_MODULE_0___default()({\n  fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),\n  supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxpRUFBZUEsNkRBQWdCLENBQUM7QUFDOUJFLEVBQUFBLFdBQVcsRUFBRUQsZ0ZBRGlCO0FBRTlCSSxFQUFBQSxhQUFhLEVBQUVKLDBFQUEwQks7QUFGWCxDQUFELENBQS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fhcy10aGVtZS8uL2xpYi9sYW5ndWFnZURldGVjdG9yLmpzPzZhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnbmV4dC1sYW5ndWFnZS1kZXRlY3Rvcic7XG5pbXBvcnQgaTE4bmV4dENvbmZpZyBmcm9tICcuLi9uZXh0LWkxOG5leHQuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2VEZXRlY3Rvcih7XG4gIGZhbGxiYWNrTG5nOiBpMThuZXh0Q29uZmlnLmkxOG4uZGVmYXVsdExvY2FsZSxcbiAgc3VwcG9ydGVkTG5nczogaTE4bmV4dENvbmZpZy5pMThuLmxvY2FsZXMsXG59KTtcbiJdLCJuYW1lcyI6WyJsYW5ndWFnZURldGVjdG9yIiwiaTE4bmV4dENvbmZpZyIsImZhbGxiYWNrTG5nIiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJzdXBwb3J0ZWRMbmdzIiwibG9jYWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/languageDetector.js\n");

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useRedirect\": () => (/* binding */ useRedirect),\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"getRedirect\": () => (/* binding */ getRedirect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\n\n\n\nconst useRedirect = go => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const to = go || router.asPath; // language detection\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_2__.default.detect();\n\n    if (to.startsWith('/' + detectedLng) && router.route === '/404') {\n      // prevent endless loop\n      router.replace('/' + detectedLng + router.route);\n      return;\n    }\n\n    _languageDetector__WEBPACK_IMPORTED_MODULE_2__.default.cache(detectedLng);\n    router.replace('/' + detectedLng + to);\n  });\n  return null;\n};\nconst Redirect = () => {\n  useRedirect();\n  return null;\n}; // eslint-disable-next-line react/display-name\n\nconst getRedirect = to => () => {\n  useRedirect(to);\n  return null;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNRyxXQUFXLEdBQUlDLEVBQUQsSUFBUTtBQUNqQyxRQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUssRUFBRSxHQUFHRixFQUFFLElBQUlDLE1BQU0sQ0FBQ0UsTUFBeEIsQ0FGaUMsQ0FJakM7O0FBQ0FQLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1RLFdBQVcsR0FBR04sNkRBQUEsRUFBcEI7O0FBQ0EsUUFBSUksRUFBRSxDQUFDSSxVQUFILENBQWMsTUFBTUYsV0FBcEIsS0FBb0NILE1BQU0sQ0FBQ00sS0FBUCxLQUFpQixNQUF6RCxFQUFpRTtBQUFFO0FBQ2pFTixNQUFBQSxNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFNSixXQUFOLEdBQW9CSCxNQUFNLENBQUNNLEtBQTFDO0FBQ0E7QUFDRDs7QUFFRFQsSUFBQUEsNERBQUEsQ0FBdUJNLFdBQXZCO0FBQ0FILElBQUFBLE1BQU0sQ0FBQ08sT0FBUCxDQUFlLE1BQU1KLFdBQU4sR0FBb0JGLEVBQW5DO0FBQ0QsR0FUUSxDQUFUO0FBV0EsU0FBTyxJQUFQO0FBQ0QsQ0FqQk07QUFtQkEsTUFBTVEsUUFBUSxHQUFHLE1BQU07QUFDNUJYLEVBQUFBLFdBQVc7QUFDWCxTQUFPLElBQVA7QUFDRCxDQUhNLEVBS1A7O0FBQ08sTUFBTVksV0FBVyxHQUFJVCxFQUFELElBQVEsTUFBTTtBQUN2Q0gsRUFBQUEsV0FBVyxDQUFDRyxFQUFELENBQVg7QUFDQSxTQUFPLElBQVA7QUFDRCxDQUhNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fhcy10aGVtZS8uL2xpYi9yZWRpcmVjdC5qcz84NWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBsYW5ndWFnZURldGVjdG9yIGZyb20gJy4vbGFuZ3VhZ2VEZXRlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCB1c2VSZWRpcmVjdCA9IChnbykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdG8gPSBnbyB8fCByb3V0ZXIuYXNQYXRoO1xuXG4gIC8vIGxhbmd1YWdlIGRldGVjdGlvblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRldGVjdGVkTG5nID0gbGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKTtcbiAgICBpZiAodG8uc3RhcnRzV2l0aCgnLycgKyBkZXRlY3RlZExuZykgJiYgcm91dGVyLnJvdXRlID09PSAnLzQwNCcpIHsgLy8gcHJldmVudCBlbmRsZXNzIGxvb3BcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyArIGRldGVjdGVkTG5nICsgcm91dGVyLnJvdXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsYW5ndWFnZURldGVjdG9yLmNhY2hlKGRldGVjdGVkTG5nKTtcbiAgICByb3V0ZXIucmVwbGFjZSgnLycgKyBkZXRlY3RlZExuZyArIHRvKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgUmVkaXJlY3QgPSAoKSA9PiB7XG4gIHVzZVJlZGlyZWN0KCk7XG4gIHJldHVybiBudWxsO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuZXhwb3J0IGNvbnN0IGdldFJlZGlyZWN0ID0gKHRvKSA9PiAoKSA9PiB7XG4gIHVzZVJlZGlyZWN0KHRvKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImxhbmd1YWdlRGV0ZWN0b3IiLCJ1c2VSZWRpcmVjdCIsImdvIiwicm91dGVyIiwidG8iLCJhc1BhdGgiLCJkZXRlY3RlZExuZyIsImRldGVjdCIsInN0YXJ0c1dpdGgiLCJyb3V0ZSIsInJlcGxhY2UiLCJjYWNoZSIsIlJlZGlyZWN0IiwiZ2V0UmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redirect.js\n");

/***/ }),

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\n  i18n: {\n    defaultLocale: 'ar',\n    locales: ['en', 'ar'],\n    fallbackLng: 'ar'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFzLXRoZW1lLy4vbmV4dC1pMThuZXh0LmNvbmZpZy5qcz9iMWM4Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpMThuIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJmYWxsYmFja0xuZyJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsYUFBYSxFQUFFLElBRFg7QUFFSkMsSUFBQUEsT0FBTyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGTDtBQUdKQyxJQUFBQSxXQUFXLEVBQUU7QUFIVDtBQURTLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGkxOG46IHtcbiAgICBkZWZhdWx0TG9jYWxlOiAnYXInLFxuICAgIGxvY2FsZXM6IFsnZW4nLCAnYXInXSxcbiAgICBmYWxsYmFja0xuZzogJ2FyJyxcbiAgfVxufTtcbiJdLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./lib/redirect.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGlFQUFlQSxtREFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXMtdGhlbWUvLi9wYWdlcy80MDQuanM/YjhkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJy4uL2xpYi9yZWRpcmVjdCc7XG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdDtcbiJdLCJuYW1lcyI6WyJSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next-language-detector":
/*!*****************************************!*\
  !*** external "next-language-detector" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-language-detector");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();