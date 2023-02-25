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
const priority = document.querySelector("#priority");
const dueDate = document.querySelector("#dueDate");
const inputs = document.querySelectorAll(".inputs");
let todoForm = document.querySelector("#todoForm");
let todoDisplay = document.querySelector("#todoDisplay");
// Code
let todoProjects = [];
let todoList = [];
const isTrue = (currentTruth) => currentTruth === true; //MDN .every();

function addTodo() {
    let newTodo = new Todos(title.value, description.value, dueDate.value, priority.value);
    todoList.push(newTodo);
    let newTodoDiv = document.createElement("div");
    displayTodo(newTodo).forEach(value => {
        let currentValue = document.createElement("p");
        currentValue.innerText = value;
        newTodoDiv.appendChild(currentValue);
        newTodoDiv.classList.add(".todo");
    });
    mainContent.appendChild(newTodoDiv);
}
createTodoBtn.addEventListener("click", () => {
    todoForm.classList.replace("form-hide", "form-display"); 
})

cancelButton.addEventListener("click", () => {
    title.value = description.value = dueDate.value = "";
    todoForm.classList.replace("form-display", "form-hide");
    //submitButton.removeAttribute("disabled", "");
})

submitButton.addEventListener("click", () =>  {
    let arrayOfTruths = [];
    inputs.forEach(input => {
        arrayOfTruths.push(input.validity.valid)
    });
    if (arrayOfTruths.every(isTrue)) {
        addTodo();
        title.value = description.value = dueDate.value = "";
        todoForm.classList.replace("form-display", "form-hide");
    } else {
        console.log("not working");
    }
})


function createTodo(a, b, c, d) {
    return new Todos(a, b, c, d);
}