// Imports
import "./style.css";
import {Todos} from "./todos.js";
// DOM selectors
const createTodoBtn = document.querySelector("#createTodoBtn");
const mainContent = document.querySelector("main");
let todoForm = document.querySelector("#todoForm");
// Code
let todoList = [];
createTodoBtn.addEventListener("click", () => {
    todoForm.classList.replace("form-hide", "form-display");
    
})

function createTodo(a, b, c, d) {
    return new Todos(a, b, c, d);
}
export {createTodo};