import addTabReducer from './add-tab';

describe('addTabReducer tests', () => {
  it('should add tab to storage data', () => {
    const windowId = 0;
    const tab = 1;
    const action = {
      payload: {
        windowId,
        tab,
      },
    };
    expect(addTabReducer({}, action)).toStrictEqual({ [windowId]: [tab] });
  });
});
