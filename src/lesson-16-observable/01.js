const button = {
    _subscribers: {
        'click': [],
        'focus': []
    },
    click() {
        this._subscribers["click"].forEach(e => e())
    },
    focus() {},
    addEventListener(evenName, subscriber) {
        this._subscribers[evenName].push(subscriber)
    },
    removeEventListener(evenName, subscriber) {
        this._subscribers[evenName] = this._subscribers[evenName].filter(sub => sub !== subscriber)
    }
}