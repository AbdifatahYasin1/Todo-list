
const TodoFunction = require('./practice');
let array = [];
describe('Testing', () => {
  test('add test', () => {
    expect(TodoFunction.addTodo('', array)).toHaveLength(0);
    array = TodoFunction.addTodo('test1', array);
    expect(array).toHaveLength(1);
    array = TodoFunction.addTodo('test2', array);
    expect(array).toHaveLength(2);
  });

  test('delete test', () => {
    array = [
      { id: 0, text: 'test', completed: false },
      { id: 1, text: 'test2', completed: false },
      { id: 1, text: 'test2', completed: false },
    ];
    expect(TodoFunction.deleteTodo('', array)).toHaveLength(3);
    array = TodoFunction.deleteTodo(1, array);
    expect(array).toHaveLength(2);
  });
});
