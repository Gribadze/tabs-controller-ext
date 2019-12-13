class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(handler) {
    this.subscribers.push(handler);
    return () => {
      this.subscribers = this.subscribers.filter((subscriber) => subscriber !== handler);
    };
  }

  notify(...args) {
    this.subscribers.forEach((handler) => handler(...args));
  }
}

module.exports = Observable;
