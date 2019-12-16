import BrowserApi from './browser-api';

describe('BrowserApi tests', () => {
  it('should throw error when base methods are used', () => {
    const api = new BrowserApi();
    const methodNotImplemented = 'method is not implemented';
    expect(() => api.getTabs()).toThrow(methodNotImplemented);
    expect(() => api.moveTab()).toThrow(methodNotImplemented);
    expect(() => api.removeTab()).toThrow(methodNotImplemented);
    expect(() => api.onTabRemoved()).toThrow(methodNotImplemented);
    expect(() => api.onTabDetached()).toThrow(methodNotImplemented);
    expect(() => api.onTabCreated()).toThrow(methodNotImplemented);
    expect(() => api.onTabAttached()).toThrow(methodNotImplemented);
  });
});
