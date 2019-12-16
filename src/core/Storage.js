import Observable from './Observable';

export default class Storage extends Observable {
  constructor() {
    super();
    this.data = {};
    this.actionHandlers = {};
    this.reducers = {};
  }

  subscribe(actionType, handler) {
    if (!this.actionHandlers[actionType]) {
      this.actionHandlers[actionType] = new Observable();
    }
    return this.actionHandlers[actionType].subscribe(handler);
  }

  addReducer(actionType, handler) {
    this.reducers[actionType] = handler;
  }

  reduce(action) {
    const { type } = action;
    if (this.reducers[type]) {
      this.data = this.reducers[type](this.data, action);
    }
  }

  dispatch(action) {
    const { type } = action;
    this.reduce(action);
    if (this.actionHandlers[type]) {
      this.actionHandlers[type].notify(this.data, action);
    }
  }
}
