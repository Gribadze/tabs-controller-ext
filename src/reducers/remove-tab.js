export default function removeTabReducer(data, action) {
  const {
    payload: { windowId, tabId },
  } = action;
  const windowTabs = data[windowId];
  return Object.assign({}, data, { [windowId]: windowTabs.filter((tab) => tab.id !== tabId) });
}
