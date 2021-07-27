/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar order_service_1 = __webpack_require__(/*! ./services/order.service */ \"./build/services/order.service.js\");\r\nfunction main() {\r\n    var orderService = new order_service_1.OrderService();\r\n    console.log(orderService.findAll());\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack://tsapps/./build/index.js?");

/***/ }),

/***/ "./build/mock-data/order.mock.js":
/*!***************************************!*\
  !*** ./build/mock-data/order.mock.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ORDERS = void 0;\r\nexports.ORDERS = [\r\n    { id: 1, value: 100 },\r\n    { id: 2, value: 200 }\r\n];\r\n\n\n//# sourceURL=webpack://tsapps/./build/mock-data/order.mock.js?");

/***/ }),

/***/ "./build/services/order.service.js":
/*!*****************************************!*\
  !*** ./build/services/order.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.OrderService = void 0;\r\nvar order_mock_1 = __webpack_require__(/*! ../mock-data/order.mock */ \"./build/mock-data/order.mock.js\");\r\nvar OrderService = /** @class */ (function () {\r\n    function OrderService() {\r\n    }\r\n    OrderService.prototype.findAll = function () {\r\n        return order_mock_1.ORDERS;\r\n    };\r\n    return OrderService;\r\n}());\r\nexports.OrderService = OrderService;\r\n\n\n//# sourceURL=webpack://tsapps/./build/services/order.service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./build/index.js");
/******/ 	
/******/ })()
;