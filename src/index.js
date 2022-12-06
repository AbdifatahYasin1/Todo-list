import _ from "lodash";
import "./style.css";

const list = document.createElement("ul");
const container = document.querySelector(".container");
const header = document.createElement("h1");
const btn = document.createElement("btn");

btn.innerHTML = "All completed";
header.innerHTML = "Today's todo";
header.classList = "header";
list.classList = "list";

const input = (document.createElement("input").placeholder =
  "Add to your list");
const todo = [
  {
    description: "reading books",
    completed: true,
    index: Number,
  },
  {
    description: "reading books",
    completed: true,
    index: Number,
  },
  {
    description: "reading books",
    completed: true,
    index: Number,
  },
  {
    description: "reading books",
    completed: true,
    index: Number,
  },
  {
    description: "reading books",
    completed: true,
    index: Number,
  },
];
const displayData = () => {
  todo.forEach((item, index) => {
    list.innerHTML += `
    <li>${item.description}<li>
    <hr>
    <li>${index}<li>
    
    `;
    container.appendChild(list);
  });
  container.prepend(input);
  container.prepend(header);
};

displayData();
