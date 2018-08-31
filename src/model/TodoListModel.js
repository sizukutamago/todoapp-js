import EventEmitter from "../EventEmitter.js";

class TodoListModel extends EventEmitter{
    constructor(items = []) {
        super();
        this.items = items;
    }

    getTotalCount() {
        return this.items.length;
    }

    getTodoItems() {
        return this.items;
    }

    onChange(listener) {
        this.addEventLisner("change", listener);
        return () => {
            this.removeEventLisner("change", listener);
        }
    }

    emitChange() {
        this.emit('change');
    }

    addTodo(todoItem) {
        this.items.push(todoItem);
        this.emitChange();
    }
}

export default TodoListModel;