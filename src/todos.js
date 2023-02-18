class Projects {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
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
    let values = Object.values(todo);
    values.forEach(todoValue => {
        return document.createElement("p").innerText = todoValue.value;

    });
}

export {Todos, displayTodo};