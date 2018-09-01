import TodoListModel from "./model/TodoListModel.js";
import TodoItemModel from "./model/TodoItemModel.js";
import { render } from "./view/html-util";
import { TodoListView } from './view/TodoListView';

class App {
    private todoListView: TodoListView;
    private todoListModel: TodoListModel;

    constructor() {
        this.todoListView = new TodoListView();
        this.todoListModel = new TodoListModel();
    }

    handleAdd(title) {
        this.todoListModel.addTodo(new TodoItemModel({title, completed: false}));
    }

    handleUpdate({id, completed}) {
        this.todoListModel.updateTodo({id, completed});
    }

    handleDelete({id}) {
        this.todoListModel.deleteTodo({id});
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("#js-form-input");
        const containerElement: HTMLInputElement = <HTMLInputElement>document.getElementById("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        this.todoListModel.onChange(() => {
            const todoItems = this.todoListModel.getTodoItems();
            // todoItemsに対応するTodoListViewを作成する
            const todoListElement = this.todoListView.createElement(todoItems, {
                // Todoアイテムが更新イベントが発生したときによばれるリスナー関数
                onUpdateTodo: ({ id, completed }) => {
                    this.handleUpdate({id, completed});
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

const app = new App();
app.mount();