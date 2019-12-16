export default function addTabReducer(data, action) {
  const {
    payload: { windowId, tab },
  } = action;
  const windowTabs = data[windowId] || [];
  return Object.assign({}, data, { [windowId]: windowTabs.concat(tab) });
}
