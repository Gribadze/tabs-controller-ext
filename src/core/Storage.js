const Observable = require('./Observable');

class Storage extends Observable {
  constructor() {
    super();
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
    this.notify(this.data);
  }

  get(key) {
    if (!this.data[key]) {
      this.data[key] = [];
    }
    return this.data[key];
  }
}

module.exports = Storage;
