let todoIndex: number = 0;

export interface ItemModel {
    title: string,
    completed: boolean
}

export class TodoItemModel {
    public id: number;
    public title: string;
    public completed: boolean;

    constructor(itemModel: ItemModel) {
        this.id = todoIndex++;
        this.title = itemModel.title;
        this.completed = itemModel.completed;
    }
}