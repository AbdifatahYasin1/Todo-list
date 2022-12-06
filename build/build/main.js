/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const list = document.createElement(\"ul\");\r\nconst container = document.querySelector(\".container\");\r\nconst header = document.createElement(\"h1\");\r\nconst btn = document.createElement(\"btn\");\r\n\r\nbtn.innerHTML = \"All completed\";\r\nheader.innerHTML = \"Today's todo\";\r\nheader.classList = \"header\";\r\nlist.classList = \"list\";\r\n\r\nconst input = (document.createElement(\"input\").placeholder =\r\n  \"Add to your list\");\r\nconst todo = [\r\n  {\r\n    description: \"reading books\",\r\n    completed: true,\r\n    index: Number,\r\n  },\r\n  {\r\n    description: \"reading books\",\r\n    completed: true,\r\n    index: Number,\r\n  },\r\n  {\r\n    description: \"reading books\",\r\n    completed: true,\r\n    index: Number,\r\n  },\r\n  {\r\n    description: \"reading books\",\r\n    completed: true,\r\n    index: Number,\r\n  },\r\n  {\r\n    description: \"reading books\",\r\n    completed: true,\r\n    index: Number,\r\n  },\r\n];\r\nconst displayData = () => {\r\n  todo.forEach((item, index) => {\r\n    list.innerHTML += `\r\n    <li>${item.description}<li>\r\n    <hr>\r\n    <li>${index}<li>\r\n    \r\n    `;\r\n    container.appendChild(list);\r\n  });\r\n  container.prepend(input);\r\n  container.prepend(header);\r\n};\r\n\r\ndisplayData();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);