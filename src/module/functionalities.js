const todos = document.querySelector('#todo-list');
const reArrange = (list) => {
  if (!Array.isArray(list)) {
    return;
  }
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
