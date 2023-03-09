class Projects {
    constructor(title, todos = []) {
        this.title = title;
        this.todos = todos;
    }
}

function displayProject(project) {
    let projectValues = Object.values(project);
    let projectValueString = [];
    projectValues.forEach((projectValue) => {
        projectValueString.push(String(projectValue));
    });
    return projectValueString;
}

class Todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function displayTodo(todo) {
    let todoValues = Object.values(todo);
    let todoValueString = [];
    todoValues.forEach((todoValue) => {
        todoValueString.push(String(todoValue));
    });
    return todoValueString;
}

export {Todos, Projects, displayTodo, displayProject};