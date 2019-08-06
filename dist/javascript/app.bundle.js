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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/components/Title.js":
/*!********************************************!*\
  !*** ./src/javascript/components/Title.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//IMPORTS\n// EXAMPLE\nvar Title =\n/*#__PURE__*/\nfunction () {\n  function Title() {\n    _classCallCheck(this, Title);\n  }\n\n  _createClass(Title, [{\n    key: \"createTitle\",\n    value: function createTitle(content) {\n      var div = document.createElement(\"div\");\n      div.innerHTML = content;\n      div.style.position = \"absolute\";\n      div.style.left = \"50%\";\n      div.style.top = \"50%\";\n      div.style.transform = \"translate(-50%, -50%)\";\n      document.body.appendChild(div);\n    }\n  }]);\n\n  return Title;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Title());\n\n//# sourceURL=webpack:///./src/javascript/components/Title.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Title.js */ \"./src/javascript/components/Title.js\");\n//IMPORTS\n\nvar logMessageStyles = ['background: linear-gradient(#8BA3FF, #5BBAFF)', 'border-radius: 15px 15px', 'color: white', 'display: block', 'font-family: arial', 'font-size: 14px', 'padding: 12px 11px', 'margin: 10px 0 20px 0', 'text-align: center'].join(';');\nvar logEmojiStyles1 = ['padding: 20px 20px', 'background:url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/potato_1f954.png) no-repeat', 'background-size: 100%', 'background-position: center'].join(';');\nvar logEmojiStyles2 = ['display: block', 'padding: 15px 20px', 'background:url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/white-smiling-face_263a.png) no-repeat', 'background-size: 100%', 'background-position: center'].join(';');\nvar logisWriting = ['display: block', 'padding: 15px 30px', 'background:url(https://media1.tenor.com/images/a931cb6641ce46279cb84d4d65dcaf6a/tenor.gif?itemid=14397514) no-repeat', 'background-size: cover', 'background-position: center'].join(';');\nvar loged = false;\nwindow.addEventListener('resize', listenConsole);\n\nfunction listenConsole() {\n  if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {\n    if (loged == true) return;\n    loged = true;\n    setTimeout(function () {\n      console.log(\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\");\n      console.log('%c ', logisWriting);\n    }, 1000);\n    setTimeout(function () {\n      console.log(\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\");\n      console.log('%c Hello Purée Maison, Bon décorticage...', logMessageStyles);\n    }, 3000);\n    setTimeout(function () {\n      console.log('%c ', logEmojiStyles1);\n    }, 4000);\n    setTimeout(function () {\n      console.log('%c ', logEmojiStyles2);\n    }, 3500);\n  } else {\n    console.clear();\n    console.log(\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\");\n    loged = false;\n  }\n}\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ })

/******/ });