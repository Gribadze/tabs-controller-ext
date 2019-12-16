import Storage from './Storage';

describe('Storage tests', () => {
  let storage;

  beforeEach(() => {
    storage = new Storage();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call action handler according action type', () => {
    const actionType = 1;
    const action = {
      type: actionType,
    };
    const mockHandler = jest.fn();
    storage.subscribe(actionType, mockHandler);
    storage.dispatch(action);
    expect(mockHandler).toBeCalledWith(expect.anything(), action);
  });

  it('should call multiple action handler according action type', () => {
    const actionType = 1;
    const action = {
      type: actionType,
    };
    const mockHandler1 = jest.fn();
    const mockHandler2 = jest.fn();
    storage.subscribe(actionType, mockHandler1);
    storage.subscribe(actionType, mockHandler2);
    storage.dispatch(action);
    expect(mockHandler1).toBeCalledWith(expect.anything(), action);
    expect(mockHandler2).toBeCalledWith(expect.anything(), action);
  });

  it('should not call action handler for other action types', () => {
    const actionType = 1;
    const action = {
      type: actionType + 1,
    };
    const mockHandler = jest.fn();
    storage.subscribe(actionType, mockHandler);
    storage.dispatch(action);
    expect(mockHandler).not.toBeCalled();
  });
});
