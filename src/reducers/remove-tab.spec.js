import removeTabReducer from './remove-tab';

describe('removeTabReducer tests', () => {
  it('should remove tab from data', () => {
    const tabId = 0;
    const windowId = 1;
    const tab = { id: tabId, windowId };
    const action = {
      payload: { windowId, tabId },
    };
    const data = { [windowId]: [tab] };
    expect(removeTabReducer(data, action)).toStrictEqual({ [windowId]: [] });
  });
});
