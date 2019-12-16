let instance = null;

export default class BrowserApi {
  constructor() {
    if (instance === null) {
      instance = this;
    }
    return instance;
  }

  getTabs(queryInfo) {
    throw new Error('method is not implemented');
  }

  removeTab(tabId) {
    throw new Error('method is not implemented');
  }

  moveTab(tabId, index) {
    throw new Error('method is not implemented');
  }

  onTabCreated(handler) {
    throw new Error('method is not implemented');
  }

  onTabAttached(handler) {
    throw new Error('method is not implemented');
  }

  onTabRemoved(handler) {
    throw new Error('method is not implemented');
  }

  onTabDetached(handler) {
    throw new Error('method is not implemented');
  }
}
