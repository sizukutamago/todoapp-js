import {element} from "./html-util";
import {TodoItemModel} from "../model/TodoItemModel";

export class TodoItemView {
    createElement(todoItem: TodoItemModel, {onUpdateTodo, onDeleteTodo}) {
        const todoItemElement = todoItem.completed
            ? element`<li><input type="checkbox" class="checkbox" checked>
                      <s>${todoItem.title}</s>
                      <button class="delete">x</button>
                      </input></li>`
            : element`<li><input type="checkbox" class="checkbox">
                      ${todoItem.title}
                      <button class="delete">x</button>
                      </input></li>`;
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
            onUpdateTodo({
                id: todoItem.id,
                completed: !todoItem.completed,
            });
        });
        const deleteButtonElement = todoItemElement.querySelector(".delete");
        deleteButtonElement.addEventListener("click", () => {
            // コールバック関数に変更
            onDeleteTodo({
                id: todoItem.id
            });
        });
        // 作成したTodoアイテムのHTML要素を返す
        return todoItemElement;
    }
}