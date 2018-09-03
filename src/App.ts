import {TodoListModel} from "./model/TodoListModel";
import {TodoItemModel} from "./model/TodoItemModel";
import { render } from "./view/html-util";
import { TodoListView } from './view/TodoListView';

export default class App {
    private todoListView: TodoListView;
    private todoListModel: TodoListModel;

    constructor() {
        this.todoListView = new TodoListView();
        this.todoListModel = new TodoListModel();
    }

    handleAdd(title: string) {
        this.todoListModel.addTodo(new TodoItemModel({title, completed: false}));
    }

    handleUpdate(itemModel: TodoItemModel) {
        this.todoListModel.updateTodo(itemModel);
    }

    handleDelete(id) {
        this.todoListModel.deleteTodo(id);
    }

    mount() {
        const formElement: HTMLElement = document.querySelector("#js-form");
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("js-form-input");
        const containerElement: HTMLInputElement = <HTMLInputElement>document.getElementById("js-todo-list");
        const todoItemCountElement: HTMLElement = document.querySelector("#js-todo-count");

        this.todoListModel.onChange(() => {
            const todoItems: TodoItemModel[] = this.todoListModel.getTodoItems();
            // todoItemsに対応するTodoListViewを作成する
            const todoListElement = this.todoListView.createElement(todoItems, {
                // Todoアイテムが更新イベントが発生したときによばれるリスナー関数
                onUpdateTodo: (itemModel: TodoItemModel) => {
                    this.handleUpdate(itemModel);
                },
                // Todoアイテムが削除イベントが発生したときによばれるリスナー関数
                onDeleteTodo: ({ id }) => {
                    this.handleDelete({id});
                }
            });
            render(todoListElement, containerElement);
            todoItemCountElement.textContent = `Todoアイテム数" ${this.todoListModel.getTotalCount()}`
        });
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.handleAdd(inputElement.value);
            inputElement.value = "";
        })
    }
}