import "./style.css";
import {Todos} from "./todos.js";

let a = new Todos("a", "b", "c", "d");

function createTodo(a, b, c, d) {
    return new Todos(a, b, c, d);
}

/* function returnSomething() {
    alert("this works");
}
returnSomething(); */
//export {returnSomething};

function returnSomething() {
    alert("this works");
}
//returnSomething();
let todoItem = createTodo("a", "b", "c", "d");
document.getElementById("main").append(todoItem);
export {createTodo, returnSomething, todoItem};