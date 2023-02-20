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
    let todoValues = Object.values(todo);
    let todoValueString = [];
    todoValues.forEach((todoValue) => {
        todoValueString.push(String(todoValue));
        console.log(todoValueString);
    });
    return todoValueString;
}

export {Todos, displayTodo};