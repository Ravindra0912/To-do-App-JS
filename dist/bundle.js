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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  font-family: Sans-serif;\\n}\\n.sublist-text-box {\\n  width: 450px;\\n  cursor: text;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.flex {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n/* .main-list-container {\\n} */\\nbody {\\n  background: #c2e0df;\\n}\\n.main-list-items {\\n  margin-top: 18px;\\n  border-radius: 10px;\\n  padding: 5px;\\n  height: 400px;\\n  background: #c2e0df;\\n  overflow: scroll;\\n}\\n.main-list-item {\\n  background-color: #44c6c6;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  padding: 5px;\\n  margin-bottom: 5px;\\n}\\n.main-list-container {\\n  padding: 20px;\\n  background-color: darkcyan;\\n  margin-left: 20px;\\n  height: 500px;\\n  width: 300px;\\n}\\n.main-list-item:hover {\\n  background-color: darkcyan;\\n}\\n.todo-tasks-container {\\n  background-color: #44c6c6;\\n  padding: 20px;\\n  width: 600px;\\n}\\n\\n.task-item {\\n  background-color: #c2e0df;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  padding: 5px;\\n  margin-bottom: 5px;\\n}\\n.sub-task-item {\\n  background-color: #c2e0df;\\n  /* cursor: pointer; */\\n  border-radius: 15px;\\n  padding: 5px;\\n  margin-bottom: 5px;\\n}\\n.flex-button {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n#delete-tasks {\\n  height: 20px;\\n}\\n.active {\\n  background-color: darkcyan;\\n  font-weight: bold;\\n  color: white;\\n}\\n.temp-todo-task-list-holder {\\n  overflow: scroll;\\n  height: 360px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n_eventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setupEventListeners();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listModules_mainlList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listModules/mainlList */ \"./src/listModules/mainlList.js\");\n/* harmony import */ var _listModules_subList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listModules/subList */ \"./src/listModules/subList.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\n\n\n\nclass EventListener {\n  setupEventListeners() {\n    document\n      .querySelector('#list-name-input')\n      .addEventListener('keypress', e => {\n        console.log(e.keyCode);\n        if (e.keyCode === 13) _listModules_mainlList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToMainList();\n      });\n    document.querySelector('#enter_data').addEventListener('click', e => {\n      console.log(e);\n      _listModules_mainlList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToMainList();\n    });\n\n    document.querySelector('.todo-items-container').addEventListener(\n      'keypress',\n      e => {\n        // e.stopPropagation();\n        _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveChanges(e);\n      },\n      false\n    );\n\n    document\n      .querySelector('.todo-tasks-container')\n      .addEventListener('click', e => {\n        console.log('check', e.target.id);\n        if (e.target.id === 'strike-all') {\n          _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].strikeAll(e);\n        } else if (e.target.id === 'delete-all') {\n          _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteAll(e);\n        } else if (e.target.id === 'delete-tasks') {\n          _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteItem(e);\n        } else if (e.target.id === 'strike') {\n          _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].strikeItem(e);\n        } else if (e.target.id === 'save-changes') {\n          _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveChanges(e);\n        }\n      });\n\n    document\n      .querySelector('.main-list-container')\n      .addEventListener('click', e => {\n        console.log('in the top', e);\n      });\n    document.querySelector('#create-task-btn').addEventListener('click', e => {\n      console.log('here');\n      _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToSubList(e);\n    });\n    document.querySelector('#sub-input').addEventListener('keypress', e => {\n      if (e.keyCode === 13) _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToSubList(e);\n    });\n    document.querySelector('.main-list-items').addEventListener('click', e => {\n      console.log('comeshere', e);\n      console.log(/item/.test(e.target.parentNode.id));\n      if (e.toElement.id == 'delete-main-list-item') {\n        _listModules_mainlList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteItem(e);\n      } else if (/item/.test(e.target.id)) {\n        console.log('old state', _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state);\n\n        _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeCurrentSubList(e);\n        _listModules_subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displaySubList(e);\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new EventListener());\n\n\n//# sourceURL=webpack:///./src/eventListeners.js?");

/***/ }),

/***/ "./src/listModules/mainlList.js":
/*!**************************************!*\
  !*** ./src/listModules/mainlList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _subList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subList */ \"./src/listModules/subList.js\");\n\n\n\nclass MainList {\n  deleteItem(e) {\n    console.log('pathId', e.path[1].id, 'globs', _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state);\n    if (e.path[1].id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state && _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state !== null) {\n      let parent = document.querySelector('.list-name-container');\n      let child = document.querySelector('.list-name');\n      parent.removeChild(child);\n    }\n    let element = document.getElementById(e.path[1].id);\n    element && element.parentElement.removeChild(element);\n    if (e.path[1].id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state) {\n      _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state = null;\n      _subList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displaySubList(null);\n    }\n  }\n  addToMainList() {\n    let entry = { sublist: [] };\n    let input = document.querySelector('#list-name-input').value;\n    document.querySelector('#list-name-input').value = '';\n    (entry.id = Date.now() + '-item'),\n      (entry.value = input),\n      _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.push(entry);\n    const markup = `<div class=\"main-list-item flex\"id=\"${\n      _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems[_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.length - 1].id\n    }\"><div>${\n      _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems[_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.length - 1].value\n    }</div><button id=\"delete-main-list-item\">Delete</button></div>`;\n    document\n      .querySelector('.main-list-items')\n      .insertAdjacentHTML('beforeend', markup);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new MainList());\n\n\n//# sourceURL=webpack:///./src/listModules/mainlList.js?");

/***/ }),

/***/ "./src/listModules/subList.js":
/*!************************************!*\
  !*** ./src/listModules/subList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\n\nclass SubList {\n  renderSublist(curr) {\n    let markup;\n    if (curr !== null)\n      markup = this.getSublistItemHTML(curr.id, curr.value, curr.striked);\n    document\n      .querySelector('.temp-todo-task-list-holder')\n      .insertAdjacentHTML('beforeend', markup);\n  }\n  removeCurrentSubList(e) {\n    if (_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state !== null) {\n      let element = document.getElementById(_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state);\n      element.classList.remove('active');\n    }\n    _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state = e.target.id;\n    let parent;\n    let child;\n    if (\n      e.path[1].id !== _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state &&\n      document.querySelector('.list-name')\n    ) {\n      parent = document.querySelector('.list-name-container');\n      child = document.querySelector('.list-name');\n      parent.removeChild(child);\n    }\n    document.querySelector('#sub-input').focus();\n    if (_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state !== null) {\n      document\n        .querySelector('.list-name-container')\n        .insertAdjacentHTML(\n          'beforeend',\n          `<h4 class=\"list-name\">${e.target.firstElementChild.innerHTML}</h4>`\n        );\n    }\n  }\n  getSublistItemHTML(id, value, striked) {\n    if (striked)\n      return `<div id=${id} class = \"sub-task-item flex\" ><input type=\"checkbox\" checked=\"true\" id=\"strike\"><div class=\"sublist-text-box\"><strike>${value}</strike></div><button id=\"delete-tasks\">delete</button></div>`;\n    else\n      return `<div id=${id} class = \"sub-task-item flex\"><input type=\"checkbox\" id=\"strike\"><div class=\"sublist-text-box\" contentEditable=\"true\" >${value}</div> <button id=\"delete-tasks\">delete</button></div>`;\n  }\n  strikeAll(e) {\n    let selectedList = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.find(elem => {\n      return elem.id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state;\n    });\n    selectedList.sublist.forEach(elem => {\n      elem.striked = true;\n    });\n    let parent = document.querySelector('.todo-items-container');\n    let child = document.querySelector('.temp-todo-task-list-holder');\n    parent.removeChild(child);\n    let temp = `<div class=\"temp-todo-task-list-holder\"></div>`;\n    parent.insertAdjacentHTML('beforeend', temp);\n    selectedList.sublist.forEach(elem => this.renderSublist(elem));\n  }\n  deleteAll(e) {\n    let listItemsToBeDeleted = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.find(\n      elem => elem.id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state\n    );\n    console.log(listItemsToBeDeleted);\n    listItemsToBeDeleted.sublist = [];\n    this.displaySubList([]);\n  }\n  strikeItem(e) {\n    let selectedList = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.find(elem => {\n      return elem.id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state;\n    });\n    let currentTask = selectedList.sublist.find(\n      elem => elem.id === e.target.parentElement.id\n    );\n    if (e.target.checked) {\n      e.target.nextElementSibling.contentEditable = 'false';\n\n      currentTask.striked = true;\n      let z = e.target.nextElementSibling.textContent.strike();\n      e.target.nextElementSibling.innerHTML = z;\n      document.querySelector('.sublist-text-box');\n    } else if (!e.target.checked) {\n      e.target.nextElementSibling.contentEditable = 'true';\n      currentTask.striked = false;\n      e.target.nextElementSibling.innerHTML =\n        e.target.nextElementSibling.innerText;\n    }\n  }\n  deleteItem(e) {\n    let temp = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.find(\n      elem => elem.id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state\n    );\n    let i = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.indexOf(temp);\n    _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems[i].sublist.forEach((elem, j, listItems) => {\n      if (elem.id === e.path[1].id) {\n        listItems.splice(j, 1);\n      }\n    });\n\n    let element = document.getElementById(e.path[1].id);\n    element && element.parentElement.removeChild(element);\n  }\n\n  addToSubList() {\n    let subEntry = {};\n    let a = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.filter(elem => elem.id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state);\n    let elem = a[0];\n    let input = document.querySelector('#sub-input').value;\n    document.querySelector('#sub-input').value = '';\n    subEntry.value = input;\n    subEntry.id = Date.now() + '-sub-item';\n    subEntry.striked = false;\n    elem.sublist.push(subEntry);\n    let markup = this.getSublistItemHTML(subEntry.id, input, subEntry.striked);\n    document\n      .querySelector('.temp-todo-task-list-holder')\n      .insertAdjacentHTML('beforeend', markup);\n  }\n\n  saveChanges(e) {\n    let currentListSelected = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.find(\n      elem => elem.id === _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state\n    );\n    let reqdElement = currentListSelected.sublist.find(\n      elem => elem.id === e.target.parentNode.id\n    );\n    reqdElement.value = e.target.innerText;\n  }\n\n  displaySubList(e) {\n    let parent = document.querySelector('.todo-items-container');\n    let child = document.querySelector('.temp-todo-task-list-holder');\n    parent.removeChild(child);\n    let temp = `<div class=\"temp-todo-task-list-holder\"></div>`;\n    parent.insertAdjacentHTML('beforeend', temp);\n\n    let currentElement = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItems.find(elem => {\n      return e.target && elem.id === e.target.id;\n    });\n    if (currentElement) {\n      _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state = currentElement.id;\n    }\n    currentElement &&\n      currentElement.sublist.forEach(elem => this.renderSublist(elem));\n    let element = document.getElementById(_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state);\n    element.classList.add('active');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new SubList());\n\n\n//# sourceURL=webpack:///./src/listModules/subList.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet globalStore = {\n  listItems: [],\n  state: null\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (globalStore);\n\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/app.js ./src/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/app.js */\"./src/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/style.css */\"./src/style.css\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js_./src/style.css?");

/***/ })

/******/ });