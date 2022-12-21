import './style.css';
// import { reArrange, checkTodo, editTodo } from './module/functionalities';

const input = document.querySelector('#input');
const form = document.querySelector('#form');
const todos = document.querySelector('#todo-list');
const clearbtn = document.querySelector('.clear-btn');
const createElement = (tag, className, dataset = '', text = '') => {
  const element = document.createElement(tag);
  element.className = className;
  className = 'check-btn' && element.setAttribute('type', 'checkbox');
  element.dataset.id = dataset;
  element.textContent = text;
  return element;
};

const reArrange = (list) => {
  if (!Array.isArray(list)) {
    return;
  }
  9;
  const newList = [];
  list.forEach((item, index) => {
    newList.push({ id: index, text: item.text, completed: item.completed });
  });
  localStorage.setItem('list', JSON.stringify(newList));
};
const checkTodo = (e) => {
  const { id } = e.target.dataset;
  const list = JSON.parse(localStorage.getItem('list'));
  const item = list.find((item) => `${item.id}` === id);
  item.completed = !item.completed;
  localStorage.setItem('list', JSON.stringify(list));
  reArrange(todos);
  const select = document.querySelector(`[data-id="${id}"]`);
  select.classList.toggle('completed');
};
const editTodo = (e) => {
  const { id } = e.target.dataset;
  const taskText = e.target.value;
  const currentState = JSON.parse(localStorage.getItem('list'));
  currentState.forEach((el) => {
    if (`${el.id}` === id) {
      el.text = taskText;
    }
  });
  localStorage.setItem('list', JSON.stringify(currentState));
};

const Save = (text) => {
  let list = [];
  if (localStorage.getItem('list')) {
    list = JSON.parse(localStorage.getItem('list'));
  }
  list.push({ id: list.length, text, completed: false });
  localStorage.setItem('list', JSON.stringify(list));
  return list;
};
const loadTodos = () => {
  const deleteTodo = (e) => {
    // delete from local storage if delete button is clicked
    const { id } = e.target.dataset;
    const list = JSON.parse(localStorage.getItem('list'));
    list.splice(id, 1);
    localStorage.setItem('list', JSON.stringify(list));
    loadTodos();
  };
  todos.innerHTML = '';
  if (localStorage.getItem('list')) {
    const list = JSON.parse(localStorage.getItem('list'));
    reArrange(list);
    const newList = JSON.parse(localStorage.getItem('list'));
    newList.forEach((item) => {
      const todo = createElement('li', 'todo', item.id, '');
      const checkBox = createElement('input', 'check-btn', item.id, '');
      checkBox.addEventListener('change', (e) => checkTodo(e));
      todo.appendChild(checkBox);
      const text = createElement('textArea', 'todo-text', item.id, item.text);
      text.addEventListener('change', (e) => editTodo(e));
      todo.appendChild(text);
      const deleteBtn = createElement('i', 'fa fa-trash', item.id, '');
      deleteBtn.addEventListener('click', (e) => deleteTodo(e));
      todo.appendChild(deleteBtn);
      todos.appendChild(todo);
      if (item.completed) {
        todo.classList.add('completed');
        checkBox.checked = true;
      }
    });
  }
};
const addTodo = (e) => {
  e.preventDefault();
  if (input.value === '') {
    input.classList.add('error');
    input.classList.add('shake');
    setTimeout(() => {
      input.classList.remove('error');
      input.classList.remove('shake');
    }, 1000);
    return;
  }
  Save(input.value);
  loadTodos();
  input.value = '';
};
// clear all todos
clearbtn.addEventListener('click', () => {
  if (!localStorage.getItem('list')) {
    return;
  }
  const list = JSON.parse(localStorage.getItem('list'));
  const filteredList = list.filter((item) => item.completed === false);
  localStorage.setItem('list', JSON.stringify(filteredList));
  loadTodos();
});
form.addEventListener('submit', (e) => addTodo(e));
document.querySelector('.reload').addEventListener('click', () => loadTodos());
const init = () => {
  // console.log("App is running");
  loadTodos();
};
document.addEventListener('DOMContentLoaded', init);
