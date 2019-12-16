import BrowserApi from './browser-api';

export default class ChromeApi extends BrowserApi {
  getTabs(queryInfo) {
    return new Promise((resolve) => {
      chrome.tabs.query(queryInfo, resolve);
    });
  }

  removeTab(tabId) {
    return new Promise((resolve) => {
      chrome.tabs.remove(tabId, resolve);
    });
  }

  moveTab(tabId, index) {
    return new Promise((resolve) => {
      chrome.tabs.move(tabId, { index }, resolve);
    });
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
