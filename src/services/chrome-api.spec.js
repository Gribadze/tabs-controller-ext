import ChromeApi from './chrome-api';
import BrowserApi from './browser-api';

describe('ChromeApi tests', () => {
  let api;
  const mockMethod = jest.fn();
  const mockEvent = {
    addListener: jest.fn(),
  };
  global.chrome = {
    tabs: {
      query: mockMethod,
      move: mockMethod,
      remove: mockMethod,
      onAttached: mockEvent,
      onCreated: mockEvent,
      onDetached: mockEvent,
      onRemoved: mockEvent,
    },
  };
  beforeEach(() => {
    api = new ChromeApi();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('getTabs should call chrome.tabs.query', () => {
    api.getTabs({});
    expect(mockMethod).toBeCalled();
  });
  it('moveTab should call chrome.tabs.move', () => {
    api.moveTab();
    expect(mockMethod).toBeCalled();
  });
  it('removeTab should call chrome.tabs.remove', () => {
    api.removeTab();
    expect(mockMethod).toBeCalled();
  });
  it('should not throw error when methods are used', () => {
    const api = new ChromeApi();
    expect(() => api.getTabs()).not.toThrow();
    expect(() => api.moveTab()).not.toThrow();
    expect(() => api.removeTab()).not.toThrow();
    expect(() => api.onTabRemoved()).not.toThrow();
    expect(() => api.onTabDetached()).not.toThrow();
    expect(() => api.onTabCreated()).not.toThrow();
    expect(() => api.onTabAttached()).not.toThrow();
  });
});
