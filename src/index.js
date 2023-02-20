// Imports
import "./style.css";
import {Todos, displayTodo} from "./todos.js";
// DOM selectors
const createTodoBtn = document.querySelector("#createTodoBtn");
const cancelButton = document.querySelector("#cancelButton");
const submitButton = document.querySelector("#submitButton");
const mainContent = document.querySelector("main");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const urgent = document.querySelector("#urgent");
const dueDate = document.querySelector("#dueDate");
let todoForm = document.querySelector("#todoForm");
// Code
let todoProjects = [];
let todoList = [];
createTodoBtn.addEventListener("click", () => {
    todoForm.classList.replace("form-hide", "form-display"); 
})

cancelButton.addEventListener("click", () => {
    title.value = description.value = dueDate.value = ""; urgent.checked = false;
    todoForm.classList.replace("form-display", "form-hide");
    //submitButton.removeAttribute("disabled", "");
})

submitButton.addEventListener("click", () =>  {
    let newTodo = new Todos(title.value, description.value, urgent.value, dueDate.value)
    todoList.push(newTodo);
    let newTodoDiv = document.createElement("div");
    newTodoDiv.appendChild(displayTodo(newTodo));
    mainContent.appendChild(newTodoDiv);
})


function createTodo(a, b, c, d) {
    return new Todos(a, b, c, d);
}