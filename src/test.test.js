const TodoFunction = require('./practice');

let array = [];
describe('Testing Todos function', () => {
  test('should add test', () => {
    expect(TodoFunction.addTodo('', array)).toHaveLength(0);
    array = TodoFunction.addTodo('test1', array);
    expect(array).toHaveLength(1);
    array = TodoFunction.addTodo('test2', array);
    expect(array).toHaveLength(2);
  });

  test('delete test function', () => {
    array = [
      { id: 0, text: 'test', completed: false },
      { id: 1, text: 'test2', completed: false },
      { id: 1, text: 'test2', completed: false },
    ];
    expect(TodoFunction.deleteTodo('', array)).toHaveLength(3);
    array = TodoFunction.deleteTodo(1, array);
    expect(array).toHaveLength(2);
  });

  test('Clear All test function', () => {
    array = [
      { id: 0, text: 'test', completed: false },
      { id: 1, text: 'test2', completed: true },
      { id: 1, text: 'test2', completed: false },
    ];
    expect(TodoFunction.clearAll(array)).toHaveLength(2);
  });
  test('should edit todo taskes', () => {
    array = [
      { id: 0, text: 'test', completed: false },
      { id: 1, text: 'test2', completed: false },
    ];

    array = TodoFunction.editTodo(0, 'changed', array);
    // change text tobe changed
    expect(array.find((item) => item.id === 0).text).toBe('changed');
  });
  test('should Check todo taskes', () => {
    array = [
      { id: 0, text: 'test', completed: false },
      { id: 1, text: 'test2', completed: false },
    ];

    array = TodoFunction.checkTodo(0, array);
    expect(array.find((item) => item.id === 0).completed).toBe(true);
  });
});
