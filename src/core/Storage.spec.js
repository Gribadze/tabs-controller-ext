const Storage = require('./Storage');

describe('Storage tests', () => {
  let storage;

  beforeEach(() => {
    storage = new Storage();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set value by key and notify subscribers', () => {
    const key = 1;
    const value = 2;
    const mockHandler = jest.fn();
    storage.subscribe(mockHandler);
    storage.set(key, value);
    const returnedValue = storage.get(key);
    expect(returnedValue).toBe(value);
    expect(mockHandler).toBeCalled();
  });

  it('should return empty array if key not exists', () => {
    const key = 1;
    const values = storage.get(key);
    expect(values).toBeInstanceOf(Array);
    expect(values).toHaveLength(0);
  });
});
