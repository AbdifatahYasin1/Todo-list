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
  for (let i = 0; i < array.length; i++) {
    array[i].id = i;
  }
  return array;
}
module.exports = { addTodo, deleteTodo };
