export class EventEmitter {
    private _listeners;

    constructor() {
        this._listeners = new Map();
    }

    /**
     *
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     */
    addEventLisner(type: string, listener: Function) {
        if (!this._listeners.has(type)) {
            this._listeners.set(type, new Set());
        }
        const listenerSet = this._listeners.get(type);
        listenerSet.add(listener);
    }

    emit(type: string) {
        const listenerSet = this._listeners.get(type);
        if (!listenerSet) {
            return;
        }
        listenerSet.forEach(listener => {
            listener.call(this);
        })
    }

    removeEventLisner(type: string, listener: Function) {
        const listenerSet = this._listeners.get(type);
        if (!listenerSet) {
            return;
        }
        listenerSet.forEach(ownListener => {
            if (ownListener === listener) {
                listenerSet.delete(listener);
            }
        })
    }
}