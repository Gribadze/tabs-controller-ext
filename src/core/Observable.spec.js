import Observable from './Observable';

describe('Observable tests', () => {
  let ob;
  const mockHandler = jest.fn();
  const testArgs = 1;

  beforeEach(() => {
    ob = new Observable();
  });

  it('should call subscribed handlers and return unsubscribe', () => {
    const unsubscribe = ob.subscribe(mockHandler);
    expect(unsubscribe).toBeInstanceOf(Function);
    ob.notify(testArgs);
    expect(mockHandler).toBeCalled();
    expect(mockHandler).toBeCalledWith(testArgs);
    jest.clearAllMocks();
    unsubscribe();
    ob.notify(testArgs);
    expect(mockHandler).not.toBeCalled();
  });
});
