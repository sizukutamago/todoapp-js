let todoIndex = 0;

class TodoItemModel {
    constructor({title, completed}) {
        this.id = todoIndex++;
        this.title = title;
        this.completed = completed;
    }
}

export default TodoItemModel;