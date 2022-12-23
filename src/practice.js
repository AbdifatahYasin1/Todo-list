const { filter } = require('lodash');

function addTodo(input, array) {
  if (input !== '') {
    array.push({
      id: array.length,
      text: input,
      completed: false,
    });
  }
  return array;
}
function deleteTodo(input, array) {
  if (input === '') {
    return array;
  }
  array.splice(input, 1);
  for (let i = 0; i < array.length; i += 1) {
    array[i].id = i;
  }
  return array;
}

function clearAll(array) {
  const filteredArray = array.filter((item) => item.completed === false);
  for (let i = 0; i < filteredArray.length; i += 1) {
    filteredArray[i].id = i;
  }
  return filteredArray;
}

function editTodo(id, text, array) {
  const updatedArray = [];
  array.forEach((item) => {
    if (item.id === id) {
      item.text = text;
    }

    updatedArray.push(item);
  });
  return updatedArray;
}

function checkTodo(id, array) {
  const updatedArray = [];
  array.forEach((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }

    updatedArray.push(item);
  });
  return updatedArray;
}

module.exports = {
  addTodo, deleteTodo, clearAll, editTodo, checkTodo,
};
