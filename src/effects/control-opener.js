import BaseEffect from './base-effect';

export default class ControlOpenerEffect extends BaseEffect {
  constructor(callback) {
    super();
    this.callback = callback;
  }

  apply(data, action) {
    const {
      payload: { tab },
    } = action;
    if (!tab.openerTabId) {
      this.callback(action);
    }
  }
}
