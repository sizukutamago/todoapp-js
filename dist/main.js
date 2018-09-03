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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ \"./src/App.ts\");\n\n\nconst app = new _src_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.mount();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_TodoListModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/TodoListModel */ \"./src/model/TodoListModel.ts\");\n/* harmony import */ var _model_TodoItemModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/TodoItemModel */ \"./src/model/TodoItemModel.ts\");\n/* harmony import */ var _view_html_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/html-util */ \"./src/view/html-util.ts\");\n/* harmony import */ var _view_TodoListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/TodoListView */ \"./src/view/TodoListView.ts\");\n\n\n\n\nvar App = /** @class */ (function () {\n    function App() {\n        this.todoListView = new _view_TodoListView__WEBPACK_IMPORTED_MODULE_3__[\"TodoListView\"]();\n        this.todoListModel = new _model_TodoListModel__WEBPACK_IMPORTED_MODULE_0__[\"TodoListModel\"]();\n    }\n    App.prototype.handleAdd = function (title) {\n        this.todoListModel.addTodo(new _model_TodoItemModel__WEBPACK_IMPORTED_MODULE_1__[\"TodoItemModel\"]({ title: title, completed: false }));\n    };\n    App.prototype.handleUpdate = function (itemModel) {\n        this.todoListModel.updateTodo(itemModel);\n    };\n    App.prototype.handleDelete = function (id) {\n        this.todoListModel.deleteTodo(id);\n    };\n    App.prototype.mount = function () {\n        var _this = this;\n        var formElement = document.querySelector(\"#js-form\");\n        var inputElement = document.getElementById(\"js-form-input\");\n        var containerElement = document.getElementById(\"js-todo-list\");\n        var todoItemCountElement = document.querySelector(\"#js-todo-count\");\n        this.todoListModel.onChange(function () {\n            var todoItems = _this.todoListModel.getTodoItems();\n            // todoItemsに対応するTodoListViewを作成する\n            var todoListElement = _this.todoListView.createElement(todoItems, {\n                // Todoアイテムが更新イベントが発生したときによばれるリスナー関数\n                onUpdateTodo: function (itemModel) {\n                    _this.handleUpdate(itemModel);\n                },\n                // Todoアイテムが削除イベントが発生したときによばれるリスナー関数\n                onDeleteTodo: function (_a) {\n                    var id = _a.id;\n                    _this.handleDelete({ id: id });\n                }\n            });\n            Object(_view_html_util__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(todoListElement, containerElement);\n            todoItemCountElement.textContent = \"Todo\\u30A2\\u30A4\\u30C6\\u30E0\\u6570\\\" \" + _this.todoListModel.getTotalCount();\n        });\n        formElement.addEventListener(\"submit\", function (event) {\n            event.preventDefault();\n            _this.handleAdd(inputElement.value);\n            inputElement.value = \"\";\n        });\n    };\n    return App;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/EventEmitter.ts":
/*!*****************************!*\
  !*** ./src/EventEmitter.ts ***!
  \*****************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\nvar EventEmitter = /** @class */ (function () {\n    function EventEmitter() {\n        this._listeners = new Map();\n    }\n    /**\n     *\n     * @param {string} type イベント名\n     * @param {Function} listener イベントリスナー\n     */\n    EventEmitter.prototype.addEventLisner = function (type, listener) {\n        if (!this._listeners.has(type)) {\n            this._listeners.set(type, new Set());\n        }\n        var listenerSet = this._listeners.get(type);\n        listenerSet.add(listener);\n    };\n    EventEmitter.prototype.emit = function (type) {\n        var _this = this;\n        var listenerSet = this._listeners.get(type);\n        if (!listenerSet) {\n            return;\n        }\n        listenerSet.forEach(function (listener) {\n            listener.call(_this);\n        });\n    };\n    EventEmitter.prototype.removeEventLisner = function (type, listener) {\n        var listenerSet = this._listeners.get(type);\n        if (!listenerSet) {\n            return;\n        }\n        listenerSet.forEach(function (ownListener) {\n            if (ownListener === listener) {\n                listenerSet.delete(listener);\n            }\n        });\n    };\n    return EventEmitter;\n}());\n\n\n\n//# sourceURL=webpack:///./src/EventEmitter.ts?");

/***/ }),

/***/ "./src/model/TodoItemModel.ts":
/*!************************************!*\
  !*** ./src/model/TodoItemModel.ts ***!
  \************************************/
/*! exports provided: TodoItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoItemModel\", function() { return TodoItemModel; });\nvar todoIndex = 0;\nvar TodoItemModel = /** @class */ (function () {\n    function TodoItemModel(itemModel) {\n        this.id = todoIndex++;\n        this.title = itemModel.title;\n        this.completed = itemModel.completed;\n    }\n    return TodoItemModel;\n}());\n\n\n\n//# sourceURL=webpack:///./src/model/TodoItemModel.ts?");

/***/ }),

/***/ "./src/model/TodoListModel.ts":
/*!************************************!*\
  !*** ./src/model/TodoListModel.ts ***!
  \************************************/
/*! exports provided: TodoListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListModel\", function() { return TodoListModel; });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventEmitter */ \"./src/EventEmitter.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar TodoListModel = /** @class */ (function (_super) {\n    __extends(TodoListModel, _super);\n    function TodoListModel(items) {\n        if (items === void 0) { items = []; }\n        var _this = _super.call(this) || this;\n        _this.items = items;\n        return _this;\n    }\n    TodoListModel.prototype.getTotalCount = function () {\n        return this.items.length;\n    };\n    TodoListModel.prototype.getTodoItems = function () {\n        return this.items;\n    };\n    TodoListModel.prototype.onChange = function (listener) {\n        var _this = this;\n        this.addEventLisner(\"change\", listener);\n        return function () {\n            _this.removeEventLisner(\"change\", listener);\n        };\n    };\n    TodoListModel.prototype.emitChange = function () {\n        this.emit('change');\n    };\n    TodoListModel.prototype.addTodo = function (todoItem) {\n        this.items.push(todoItem);\n        this.emitChange();\n    };\n    TodoListModel.prototype.updateTodo = function (itemModel) {\n        var todoItem = this.items.find(function (todo) { return todo.id === itemModel.id; });\n        if (!todoItem)\n            return;\n        todoItem.completed = itemModel.completed;\n        this.emitChange();\n    };\n    TodoListModel.prototype.deleteTodo = function (_a) {\n        var id = _a.id;\n        this.items = this.items.filter(function (todo) {\n            return todo.id !== id;\n        });\n        this.emitChange();\n    };\n    return TodoListModel;\n}(_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]));\n\n\n\n//# sourceURL=webpack:///./src/model/TodoListModel.ts?");

/***/ }),

/***/ "./src/view/TodoItemView.ts":
/*!**********************************!*\
  !*** ./src/view/TodoItemView.ts ***!
  \**********************************/
/*! exports provided: TodoItemView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoItemView\", function() { return TodoItemView; });\n/* harmony import */ var _html_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-util */ \"./src/view/html-util.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\n\nvar TodoItemView = /** @class */ (function () {\n    function TodoItemView() {\n    }\n    TodoItemView.prototype.createElement = function (todoItem, _a) {\n        var onUpdateTodo = _a.onUpdateTodo, onDeleteTodo = _a.onDeleteTodo;\n        var todoItemElement = todoItem.completed\n            ? Object(_html_util__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"<li><input type=\\\"checkbox\\\" class=\\\"checkbox\\\" checked>\\n                      <s>\", \"</s>\\n                      <button class=\\\"delete\\\">x</button>\\n                      </input></li>\"], [\"<li><input type=\\\"checkbox\\\" class=\\\"checkbox\\\" checked>\\n                      <s>\", \"</s>\\n                      <button class=\\\"delete\\\">x</button>\\n                      </input></li>\"])), todoItem.title) : Object(_html_util__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"<li><input type=\\\"checkbox\\\" class=\\\"checkbox\\\">\\n                      \", \"\\n                      <button class=\\\"delete\\\">x</button>\\n                      </input></li>\"], [\"<li><input type=\\\"checkbox\\\" class=\\\"checkbox\\\">\\n                      \", \"\\n                      <button class=\\\"delete\\\">x</button>\\n                      </input></li>\"])), todoItem.title);\n        var inputCheckboxElement = todoItemElement.querySelector(\".checkbox\");\n        inputCheckboxElement.addEventListener(\"change\", function () {\n            onUpdateTodo({\n                id: todoItem.id,\n                completed: !todoItem.completed,\n            });\n        });\n        var deleteButtonElement = todoItemElement.querySelector(\".delete\");\n        deleteButtonElement.addEventListener(\"click\", function () {\n            // コールバック関数に変更\n            onDeleteTodo({\n                id: todoItem.id\n            });\n        });\n        // 作成したTodoアイテムのHTML要素を返す\n        return todoItemElement;\n    };\n    return TodoItemView;\n}());\n\nvar templateObject_1, templateObject_2;\n\n\n//# sourceURL=webpack:///./src/view/TodoItemView.ts?");

/***/ }),

/***/ "./src/view/TodoListView.ts":
/*!**********************************!*\
  !*** ./src/view/TodoListView.ts ***!
  \**********************************/
/*! exports provided: TodoListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListView\", function() { return TodoListView; });\n/* harmony import */ var _html_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-util */ \"./src/view/html-util.ts\");\n/* harmony import */ var _TodoItemView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItemView */ \"./src/view/TodoItemView.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\n\n\nvar TodoListView = /** @class */ (function () {\n    function TodoListView() {\n    }\n    TodoListView.prototype.createElement = function (todoItems, _a) {\n        var onUpdateTodo = _a.onUpdateTodo, onDeleteTodo = _a.onDeleteTodo;\n        var todoListElement = Object(_html_util__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"<ul />\"], [\"<ul />\"])));\n        todoItems.forEach(function (todoItem) {\n            var todoItemView = new _TodoItemView__WEBPACK_IMPORTED_MODULE_1__[\"TodoItemView\"]();\n            var todoItemElement = todoItemView.createElement(todoItem, {\n                onDeleteTodo: onDeleteTodo,\n                onUpdateTodo: onUpdateTodo\n            });\n            todoListElement.appendChild(todoItemElement);\n        });\n        return todoListElement;\n    };\n    return TodoListView;\n}());\n\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/view/TodoListView.ts?");

/***/ }),

/***/ "./src/view/html-util.ts":
/*!*******************************!*\
  !*** ./src/view/html-util.ts ***!
  \*******************************/
/*! exports provided: escapeSpecialChars, htmlToElement, element, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeSpecialChars\", function() { return escapeSpecialChars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlToElement\", function() { return htmlToElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction escapeSpecialChars(str) {\n    return str\n        .replace(/&/g, \"&amp;\")\n        .replace(/</g, \"&lt;\")\n        .replace(/>/g, \"&gt;\")\n        .replace(/\"/g, \"&quot;\")\n        .replace(/'/g, \"&#039;\");\n}\nfunction htmlToElement(html) {\n    var template = document.createElement(\"template\");\n    template.innerHTML = html;\n    return template.content.firstElementChild;\n}\n/**\n * HTML文字列からDOM Nodeを作成して返す\n * @return {HTMLElement}\n */\nfunction element(strings) {\n    var values = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        values[_i - 1] = arguments[_i];\n    }\n    var htmlString = strings.reduce(function (result, string, i) {\n        var value = values[i - 1];\n        if (typeof value === \"string\") {\n            return result + escapeSpecialChars(value) + string;\n        }\n        else {\n            return result + String(value) + string;\n        }\n    });\n    return htmlToElement(htmlString);\n}\n/**\n * コンテナ要素の中身をbodyElementで上書きする\n * @param {HTMLElement} bodyElement コンテナ要素の中身となる要素\n * @param {HTMLElement} containerElement コンテナ要素\n */\nfunction render(bodyElement, containerElement) {\n    // rootElementの中身を空にする\n    containerElement.innerHTML = \"\";\n    // rootElementの直下にbodyElementを追加する\n    containerElement.appendChild(bodyElement);\n}\n\n\n//# sourceURL=webpack:///./src/view/html-util.ts?");

/***/ })

/******/ });