import initializeReducer from './initialize';

describe('initializeReducer tests', () => {
  it('should fill storage data', () => {
    const windowId1 = 0;
    const windowId2 = 1;
    const action = {
      payload: {
        tabs: [{ windowId: windowId1 }, { windowId: windowId2 }],
      },
    };
    const data = initializeReducer({}, action);
    expect(data).toHaveProperty(windowId1.toString());
    expect(data).toHaveProperty(windowId2.toString());
  });
});
