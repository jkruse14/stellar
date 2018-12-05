/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, author, license, bugs, homepage, dependencies, devDependencies, jest, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"stellar\",\"version\":\"1.0.0\",\"description\":\"\",\"main\":\"dist/server.js\",\"scripts\":{\"test\":\"./node_modules/jest/bin/jest.js\",\"build\":\" ./node_modules/webpack/bin/webpack.js --config webpack.config.js\",\"build-ts\":\"tsc\",\"start\":\"npm run build && node ./dist/server.js\",\"watch-node\":\"nodemon dist/server.js\",\"watch-ts\":\"tsc -w\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/jkruse14/stellar.git\"},\"author\":\"Justin Kruse\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/jkruse14/stellar/issues\"},\"homepage\":\"https://github.com/jkruse14/stellar#readme\",\"dependencies\":{\"@types/bluebird\":\"^3.5.24\",\"bluebird\":\"^3.5.3\",\"body-parser\":\"^1.18.3\",\"dotenv\":\"^6.1.0\",\"express\":\"^4.16.4\",\"lodash\":\"^4.17.11\",\"typescript\":\"^3.2.1\"},\"devDependencies\":{\"@types/chai\":\"^4.1.7\",\"@types/dotenv\":\"^6.1.0\",\"@types/express\":\"^4.16.0\",\"@types/jest\":\"^23.3.10\",\"@types/supertest\":\"^2.0.7\",\"chai\":\"^4.2.0\",\"jest\":\"^23.6.0\",\"mocha\":\"^5.2.0\",\"nodemon\":\"^1.18.7\",\"supertest\":\"^3.3.0\",\"ts-jest\":\"^23.10.5\",\"ts-loader\":\"^5.3.1\",\"ts-node\":\"^7.0.1\",\"tslint\":\"^5.11.0\",\"webpack\":\"^4.27.0\",\"webpack-cli\":\"^3.1.2\"},\"jest\":{\"globals\":{\"ts-jest\":{\"tsConfigFile\":\"tsconfig.json\"}},\"moduleFileExtensions\":[\"ts\",\"js\",\"json\"],\"moduleDirectories\":[\"node_modules\",\"server\"],\"transform\":{\"^.+\\\\.(ts|tsx)$\":\"./node_modules/ts-jest/preprocessor.js\"},\"testMatch\":[\"**/tests/**/*.tests.(ts|js)\"],\"testEnvironment\":\"node\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/controllers/home-controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/home-controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nPromise = __webpack_require__(/*! bluebird */ \"bluebird\");\nconst pkg = __webpack_require__(/*! ./src/controllers/../../package.json */ \"./package.json\");\nclass HomeController {\n    index(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            res.json({\n                message: 'Welcome to API sekeleton.',\n                version: pkg.version,\n            });\n        });\n    }\n}\nexports.default = new HomeController();\n\n\n//# sourceURL=webpack:///./src/controllers/home-controller.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst home_controller_1 = __webpack_require__(/*! ./controllers/home-controller */ \"./src/controllers/home-controller.ts\");\ndotenv.config();\nconst app = express();\napp.set('port', process.env.PORT || 3000);\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: true }));\napp.get('/', home_controller_1.default.index);\napp.listen(app.get('port'), () => {\n    console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));\n    console.log('Press CTRL-C to stop\\n');\n});\nmodule.exports = app;\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

/******/ });