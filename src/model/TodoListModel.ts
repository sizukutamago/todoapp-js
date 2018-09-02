import {EventEmitter} from "../EventEmitter";
import {TodoItemModel} from "./TodoItemModel";

export class TodoListModel extends EventEmitter{
    private items: TodoItemModel[];

    constructor(items = []) {
        super();
        this.items = items;
    }

    getTotalCount(): number {
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

    addTodo(todoItem: TodoItemModel) {
        this.items.push(todoItem);
        this.emitChange();
    }

    updateTodo(itemModel: TodoItemModel) {
        const todoItem: TodoItemModel = this.items.find(todo => todo.id === itemModel.id);
        if (!todoItem) return;
        todoItem.completed = itemModel.completed;
        this.emitChange();
    }

    deleteTodo({id}) {
        this.items = this.items.filter(todo => {
            return todo.id !== id;
        });
        this.emitChange();
    }
}
