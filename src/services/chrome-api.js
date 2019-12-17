import BrowserApi from './browser-api';

export default class ChromeApi extends BrowserApi {
  getTabs(queryInfo) {
    return new Promise((resolve) => {
      chrome.tabs.query(queryInfo, resolve);
    });
  }

  removeTab(tabId) {
    return new Promise((resolve) => {
      const remove = () => chrome.tabs.remove(tabId, this.withRetries(remove, resolve));
      remove();
    });
  }

  moveTab(tabId, index) {
    return new Promise((resolve) => {
      const move = () => chrome.tabs.move(tabId, { index }, this.withRetries(move, resolve));
      move();
    });
  }

  // case when try to modify tab while it is dragged
  withRetries(fn, onSuccess) {
    return (...data) => {
      if (chrome.runtime.lastError) {
        return setTimeout(fn, 1000);
      }
      onSuccess(...data);
    };
  }

  onTabAttached(handler) {
    return chrome.tabs.onAttached.addListener(handler);
  }

  onTabCreated(handler) {
    return chrome.tabs.onCreated.addListener(handler);
  }

  onTabDetached(handler) {
    return chrome.tabs.onDetached.addListener(handler);
  }

  onTabRemoved(handler) {
    return chrome.tabs.onRemoved.addListener(handler);
  }
}
