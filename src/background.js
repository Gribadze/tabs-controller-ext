import * as Types from './actions/types';
import { addTabToWindow, initialize, removeTabFromWindow } from './actions';
import ControlTabsCountEffect from './effects/control-tabs-count';
import ControlOpenerEffect from './effects/control-opener';
import getBrowserApi from './services';
import storage from './storage';

const browserApi = getBrowserApi('chrome');
// Storage config

storage.subscribe(
  Types.addTabToWindowType,
  new ControlTabsCountEffect((action) => {
    const {
      payload: { tab },
    } = action;
    browserApi.removeTab(tab.id);
  }).apply,
);

storage.subscribe(
  Types.addTabToWindowType,
  new ControlOpenerEffect((action) => {
    const {
      payload: { tab },
    } = action;
    browserApi.moveTab(tab.id, 0);
  }).apply,
);

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
