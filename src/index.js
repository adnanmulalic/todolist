// Imports
import "./style.css";
import {Todos} from "./todos.js";
// DOM selectors
const createTodoBtn = document.querySelector("#createTodoBtn");
const mainContent = document.querySelector("main");
// Code
createTodoBtn.addEventListener("click", () => {
    let a = new Todos("a", "b", "c", "d");
    console.log(a);
    
})

function createTodo(a, b, c, d) {
    return new Todos(a, b, c, d);
}
export {createTodo};