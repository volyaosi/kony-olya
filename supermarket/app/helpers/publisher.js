export default class Publisher {
    listeners = {};
    
    subscribe = (eventName, listener) => {
        this.getListeners(eventName).push(listener);
    }

    unsubscribe = (eventName, listener) => {
        const arr = this.getListeners(eventName);
        this.getListeners(eventName) = arr.filter(func => func != listener);
    }

    notify = (eventName, data) => {
        this.getListeners(eventName).forEach(listener => listener(data));
    }

    getListeners = eventName => {
        if (!this.listeners[eventName]){
            this.listeners[eventName] = [];
        }

        return this.listeners[eventName];
    }

    // get methods(){
    //     return {
    //         subscribe : this._subscribe,
    //         unsubscribe : this._unsubscribe,
    //         notify : this._notify,
    //     }
    // }
}