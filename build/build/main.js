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

eval("const input = document.querySelector(\"#input\");\nconst form = document.querySelector(\"#form\");\nconst todos = document.querySelector(\"#todo-list\");\nconst clearbtn = document.querySelector(\".clear-btn\");\n\nconst createElement = (tag, className, dataset = \"\", text = \"\") => {\n  const element = document.createElement(tag);\n  element.className = className;\n  className === \"check-btn\" && element.setAttribute(\"type\", \"checkbox\");\n  element.dataset.id = dataset;\n  element.textContent = text;\n  return element;\n};\n\nconst reArrange = (list) => {\n  if (!Array.isArray(list)) {\n    return;\n  }\n  let newList = [];\n  list.forEach((item, index) => {\n    newList.push({ id: index, text: item.text, completed: item.completed });\n  });\n  localStorage.setItem(\"list\", JSON.stringify(newList));\n};\n\nconst Save = (text) => {\n  let list = [];\n  if (localStorage.getItem(\"list\")) {\n    list = JSON.parse(localStorage.getItem(\"list\"));\n  }\n  list.push({ id: list.length, text: text, completed: false });\n  localStorage.setItem(\"list\", JSON.stringify(list));\n  return list;\n};\n\nconst checkTodo = (e) => {\n  const id = e.target.dataset.id;\n  const list = JSON.parse(localStorage.getItem(\"list\"));\n  const item = list.find((item) => item.id == id);\n  item.completed = !item.completed;\n  localStorage.setItem(\"list\", JSON.stringify(list));\n  reArrange(todos);\n  select = document.querySelector(`[data-id=\"${id}\"]`);\n  select.classList.toggle(\"completed\");\n};\n\nconst addTodo = (e) => {\n  e.preventDefault();\n  if (input.value === \"\") {\n    input.classList.add(\"error\");\n    input.classList.add(\"shake\");\n    setTimeout(() => {\n      input.classList.remove(\"error\");\n      input.classList.remove(\"shake\");\n    }, 1000);\n\n    return;\n    return;\n  }\n  Save(input.value);\n  loadTodos();\n  input.value = \"\";\n};\n\nconst deleteTodo = (e) => {\n  //delete from local storage if delete button is clicked\n  const id = e.target.dataset.id;\n  const list = JSON.parse(localStorage.getItem(\"list\"));\n  list.splice(id, 1);\n  localStorage.setItem(\"list\", JSON.stringify(list));\n  loadTodos();\n};\n\nconst loadTodos = () => {\n  todos.innerHTML = \"\";\n  if (localStorage.getItem(\"list\")) {\n    const list = JSON.parse(localStorage.getItem(\"list\"));\n    reArrange(list);\n    const newList = JSON.parse(localStorage.getItem(\"list\"));\n\n    newList.forEach((item) => {\n      const todo = createElement(\"li\", \"todo\", item.id, \"\");\n\n      const checkBox = createElement(\"input\", \"check-btn\", item.id, \"\");\n      checkBox.addEventListener(\"change\", (e) => checkTodo(e));\n      todo.appendChild(checkBox);\n      const text = createElement(\"span\", \"todo-text\", item.id, item.text);\n      todo.appendChild(text);\n      const deleteBtn = createElement(\"i\", \"fa fa-trash\", item.id, \"\");\n      deleteBtn.addEventListener(\"click\", (e) => deleteTodo(e));\n      todo.appendChild(deleteBtn);\n\n      todos.appendChild(todo);\n      if (item.completed) {\n        todo.classList.add(\"completed\");\n        checkBox.checked = true;\n      }\n    });\n  }\n};\n\n//clear all todos\nclearbtn.addEventListener(\"click\", () => {\n  if (!localStorage.getItem(\"list\")) {\n    return;\n  }\n  let list = JSON.parse(localStorage.getItem(\"list\"));\n  const filteredList = list.filter((item) => item.completed === false);\n  localStorage.setItem(\"list\", JSON.stringify(filteredList));\n  loadTodos();\n});\n\nform.addEventListener(\"submit\", (e) => addTodo(e));\n\ndocument.querySelector(\".reload\").addEventListener(\"click\", () => loadTodos());\n\nconst init = () => {\n  console.log(\"App is running\");\n  loadTodos();\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", init);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);