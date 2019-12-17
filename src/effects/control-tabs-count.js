import { extension } from '../config';
import BaseEffect from './base-effect';

export default class ControlTabsCountEffect extends BaseEffect {
  constructor(callback) {
    super();
    this.callback = callback;
  }

  apply(data, action) {
    const {
      payload: { windowId },
    } = action;
    const windowTabs = data[windowId] || [];
    if (windowTabs.length > extension.maxTabsCount) {
      this.callback(action);
    }
  }
}
