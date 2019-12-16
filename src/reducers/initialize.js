export default function initializeReducer(data, action) {
  const {
    payload: { tabs },
  } = action;
  return tabs.reduce(
    (data, tab) =>
      Object.assign({}, data, { [tab.windowId]: (data[tab.windowId] || []).concat(tab) }),
    {},
  );
}
