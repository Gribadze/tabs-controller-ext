import * as Types from './actions/types';
import { addTabToWindow, initialize, removeTabFromWindow } from './actions';
import getBrowserApi from './services';
import storage from './storage';
import { extension } from './config';

const browserApi = getBrowserApi('chrome');

// Effects
storage.subscribe(Types.addTabToWindowType, (data, action) => {
  const {
    payload: { windowId, tab },
  } = action;
  const windowTabs = data[windowId] || [];
  if (windowTabs.length > extension.maxTabsCount) {
    browserApi.removeTab(tab.id);
  }
});

storage.subscribe(Types.addTabToWindowType, (data, action) => {
  const {
    payload: { tab },
  } = action;
  if (!tab.openerTabId) {
    browserApi.moveTab(tab.id, 0);
  }
});

// Browser Api
browserApi.onTabAttached((tabId, attachInfo) => {
  const { newWindowId: windowId } = attachInfo;
  chrome.tabs.get(tabId, (tab) => {
    storage.dispatch(addTabToWindow(windowId, tab));
  });
});

browserApi.onTabCreated((tab) => {
  const { windowId } = tab;
  storage.dispatch(addTabToWindow(windowId, tab));
});

browserApi.onTabDetached((tabId, detachInfo) => {
  const { oldWindowId: windowId } = detachInfo;
  storage.dispatch(removeTabFromWindow(windowId, tabId));
});

browserApi.onTabRemoved((tabId, removeInfo) => {
  const { windowId } = removeInfo;
  storage.dispatch(removeTabFromWindow(windowId, tabId));
});

browserApi.getTabs({}).then((tabs) => {
  storage.dispatch(initialize(tabs));
});
