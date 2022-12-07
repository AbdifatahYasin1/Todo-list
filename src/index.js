import './style.css';

const todo = [
  {
    description: 'reading books',
    completed: true,
    index: 1,
  },
  {
    description: 'reading books',
    completed: true,
    index: 2,
  },
  {
    description: 'reading books',
    completed: true,
    index: 3,
  },
  {
    description: 'reading books',
    completed: true,
    index: 4,
  },
  {
    description: 'reading books',
    completed: true,
    index: 5,
  },
];
const displayData = (todo) => {
  const list = document.createElement('div');
  const container = document.querySelector('.container');
  container.classList = 'container';
  list.classList = 'list';

  todo.forEach((item, index) => {
    list.innerHTML += `
    <div class="items">
    <div class="item">
   
    <input type="checkbox" id="checkbox" name="name" value="todo">
   
    <li >${item.description}<li>
    <li class="display">${index}<li>
    </div>
    <div class="icon">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
 
</div>
    
    

   
    `;

    container.appendChild(list);
  });
};
console.log(todo);
displayData(todo);
