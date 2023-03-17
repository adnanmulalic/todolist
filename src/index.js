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
let todoProjects = [];
let todoList = [];
let currentSelectedProject = null;
const isTrue = (currentTruth) => currentTruth === true; //MDN .every();

// Run once at start
/* let newProjectDiv = document.createElement("div");
for (let i = 0; i < todoProjects.length; i++) { //try without loop 13.3
    let currentTitle = displayProject(todoProjects[i]);
    let indexNumber = todoProjects.indexOf(todoProjects[i]);
    newProjectDiv.innerHTML = currentTitle[0];
    newProjectDiv.setAttribute("index-number", indexNumber);
    newProjectDiv.setAttribute("selected", true);
}
sidebarProjects.appendChild(newProjectDiv);

let newTodoDiv = document.createElement("div");
for (let i = 0; i < todoList.length; i++) {
    displayTodo(todoList[i]).forEach(value => {
        let currentValue = document.createElement("p");
        currentValue.innerText = value;
        newTodoDiv.appendChild(currentValue);
        newTodoDiv.classList.add("todo");
    });
}
todoDisplay.appendChild(newTodoDiv); */

function addTodo() {
    let newTodo = new Todos(title.value, description.value, dueDate.value, priority.value);
    todoList.push(newTodo);
    while (todoDisplay.firstChild) {
        todoDisplay.removeChild(todoDisplay.firstChild);
    }
}

function addProject() {
    let newProject = new Projects(projectName.value);
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
        for (let i = 0; i < todoList.length; i++) {
            let newTodoDiv = document.createElement("div");
            newTodoDiv.title = todoList[i].title;
            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = "X";
            removeBtn.addEventListener("click", () => {
                let deletedTodoIndex = todoList.findIndex((todo) => todo.title === removeBtn.parentElement.title);
                todoList.splice(deletedTodoIndex, 1);
                removeBtn.parentElement.remove();
            })
            displayTodo(todoList[i]).forEach(value => {
                let currentValue = document.createElement("p");
                currentValue.innerText = value;
                newTodoDiv.appendChild(currentValue);
                newTodoDiv.classList.add("todo");
                newTodoDiv.appendChild(removeBtn);
                todoDisplay.appendChild(newTodoDiv);
            });
        }
        //todoDisplay.appendChild(newTodoDiv);
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

document.querySelector("#cancelProjectCreationBtn").addEventListener("click", ()=> {
    projectCreator.classList.add("form-hide");
    projectCreator.style.display = "none";
})

projectName.addEventListener("keyup", () => {
    for (let i = 0; i < todoProjects.length; i++) {
        if (todoProjects[i].title === projectName.value) {
            document.querySelector("#sameProjectError").classList.remove("form-hide");
            createProjectBtn.setAttribute("disabled", "true");
            break;
        } else {
            document.querySelector("#sameProjectError").classList.add("form-hide");
            createProjectBtn.removeAttribute("disabled", "");
        }   
    }
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
            newProjectDiv.title = todoProjects[i].title;
            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = "X";
            removeBtn.addEventListener("click", (e) => {
                let deletedProjectIndex = todoProjects.findIndex((project) => project.title === removeBtn.parentElement.title);//[removeBtn.parentElement.getAttribute("index-number")];
                todoProjects.splice(deletedProjectIndex, 1);
                removeBtn.parentElement.remove();
                if (todoProjects.length === 0) {
                    createTodoBtn.disabled = true; // continue here 18.3
                }
                e.stopPropagation();
                })
            newProjectDiv.appendChild(removeBtn);
            newProjectDiv.setAttribute("selected", true);
            sidebarProjects.appendChild(newProjectDiv);
            currentSelectedProject = todoProjects[i];
            todoList = currentSelectedProject.todos;
        }
        projectCreator.style.display = "none";
        projectName.value = "";
        projectCreator.classList.add("form-hide");
        createTodoBtn.disabled = false;
        sidebarProjects.lastChild.style.backgroundColor = "red";
    }
})

sidebarProjects.addEventListener("click", (e) => {
    let sidebarProjectsNodes = document.querySelectorAll("#sidebarMenu > div");
    for (const divNode of sidebarProjectsNodes) {
        divNode.style.backgroundColor = null;
        divNode.removeAttribute("selected");
    }
    e.target.style.backgroundColor = "red";
    e.target.setAttribute("selected", true);
    currentSelectedProject = todoProjects.find((project) => project.title === e.target.title);  //currentSelectedProject = todoProjects[e.target.getAttribute("index-number")];
    while (todoDisplay.firstChild) {   
     todoDisplay.removeChild(todoDisplay.firstChild);
    }
    todoList = currentSelectedProject.todos;
    for (let i = 0; i < todoList.length; i++) {
        let newTodoDiv = document.createElement("div");
        newTodoDiv.title = todoList[i].title;
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "X";
        removeBtn.addEventListener("click", () => {
            let deletedTodoIndex = todoList.findIndex((todo) => todo.title === removeBtn.parentElement.title);
            todoList.splice(deletedTodoIndex, 1);
            removeBtn.parentElement.remove();
            console.log(deletedTodoIndex);
            console.log(todoList)
        })
        displayTodo(todoList[i]).forEach(value => {
            let currentValue = document.createElement("p");
            currentValue.innerText = value;
            newTodoDiv.appendChild(currentValue);
            newTodoDiv.classList.add("todo");
            newTodoDiv.appendChild(removeBtn);
            todoDisplay.appendChild(newTodoDiv);
        });
    }
    console.log(e.target.innerHTML);
    console.log(currentSelectedProject.todos);
    console.log(currentSelectedProject.ind);
    console.log(todoProjects);
})