// Imports
import "./style.css";
import {Todos, Projects, displayTodo, displayProject} from "./todos.js";
// DOM selectors
const createTodoBtn = document.querySelector("#createTodoBtn");
const addProjectBtn = document.querySelector("#addProjectBtn");
const createProjectBtn = document.querySelector("#createProjectBtn");
let sidebarProjects = document.querySelector("#sidebarMenu");
const projectName = document.querySelector("#projectName");
const projectCreator = document.querySelector("#projectCreator");
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
let todoProjects = [new Projects("Cooking", [])];
let todoList = [new Todos("aa", "aa", "2023-1-1", "Normal")];
let currentSelectedProject = null;
const isTrue = (currentTruth) => currentTruth === true; //MDN .every();

// Run once at start
let newProjectDiv = document.createElement("div");
for (let i = 0; i < todoProjects.length; i++) {
    let currentTitle = displayProject(todoProjects[i]);
    newProjectDiv.innerHTML = currentTitle[0];
}
sidebarProjects.appendChild(newProjectDiv);

let newTodoDiv = document.createElement("div");
for (let i = 0; i < todoList.length; i++) {
    displayTodo(todoList[i]).forEach(value => {
        let currentValue = document.createElement("p");
        currentValue.innerText = value;
        newTodoDiv.appendChild(currentValue);
        newTodoDiv.classList.add(".todo");
    });
}
todoDisplay.appendChild(newTodoDiv);

function addTodo() {
    let newTodo = new Todos(title.value, description.value, dueDate.value, priority.value);
    todoList.push(newTodo);
    while (todoDisplay.firstChild) {
        todoDisplay.removeChild(todoDisplay.firstChild);
    }
}

function addProject() {
    let newProject = new Projects(projectName.value, []);
    todoProjects.push(newProject);
    while (sidebarProjects.firstChild) {
        sidebarProjects.removeChild(sidebarProjects.firstChild);
    }
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
        let newTodoDiv = document.createElement("div");
        for (let i = 0; i < todoList.length; i++) {
            displayTodo(todoList[i]).forEach(value => {
                let currentValue = document.createElement("p");
                currentValue.innerText = value;
                newTodoDiv.appendChild(currentValue);
                newTodoDiv.classList.add(".todo");
            });
        }
        todoDisplay.appendChild(newTodoDiv);
        title.value = description.value = dueDate.value = "";
        todoForm.classList.replace("form-display", "form-hide");
    } else {
        console.log("not working");
    }
})

addProjectBtn.addEventListener("click", ()=> {
    projectCreator.classList.remove("form-hide");
    projectCreator.style.display = "grid";
})

createProjectBtn.addEventListener("click", ()=> {
    if (projectName.value != "") {
        addProject();
        //console.log(newProject);
        console.log(todoProjects);
        for (let i = 0; i < todoProjects.length; i++) {
            let newProjectDiv = document.createElement("div");
            let currentTitle = displayProject(todoProjects[i]);
            newProjectDiv.innerHTML = currentTitle[0];
            sidebarProjects.appendChild(newProjectDiv);
        }
        projectCreator.style.display = "none";
        projectName.value = "";
    }
})

sidebarProjects.addEventListener("click", (e) => {
    let sidebarProjectsNodes = document.querySelectorAll("#sidebarMenu > div");
    for (const divNode of sidebarProjectsNodes) {
        divNode.style.backgroundColor = null;
    }
       e.target.style.backgroundColor = "red";
    
    console.log(e.target.innerHTML);
})