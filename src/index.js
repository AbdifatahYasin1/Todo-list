import "./style.css";

const list = document.createElement("div");
const addNew = document.querySelector(".addNew");
const container = document.querySelector(".container");
container.classList = "container";
list.classList = "list";
///
const save = (title) => {
  let books = [];
  if (localStorage.getItem("book") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("book"));
  }
  let todo = { text1: description, text2: completed, text3: index };
  books.push(todo);
  localStorage.setItem("book", JSON.stringify(books));
};
///

class Todo {
  constructor(description, completed, index) {
    (description = this.description),
      (completed = this.completed),
      (index = this.index);
  }
}

const Add = (description, completed, index) => {
  const newTodo = new Todo();
  newTodo.forEach((item, index) => {
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

addNew.addEventListener("click", Add);
// function hello(e) {
//   {
//     console.log(e.target);
//   }
// }
