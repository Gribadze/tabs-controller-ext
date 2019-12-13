const Storage = require('./core/Storage');

const storage = new Storage();

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get({ color: '#3aa757' }, function() {
    console.log('The color is green.');
  });
});

chrome.tabs.query({}, function(tabs) {
  console.log('tabs.query', tabs);
  tabs.forEach((tab) => {
    const { windowId } = tab;
    const windowTabs = storage.get(windowId);
    storage.set(windowId, windowTabs.concat(tab));
  });
});

chrome.tabs.onCreated.addListener(function(tab) {
  console.log('tabs.onCreated.listener', tab);
  const { windowId } = tab;
  const windowTabs = storage.get(windowId);
  storage.set(windowId, windowTabs.concat(tab));
});

chrome.tabs.onAttached.addListener(function(tabId, attachInfo) {
  console.log('tabs.onAttached.listener', { tabId, attachInfo });
});

storage.subscribe((data) => console.log(data));
