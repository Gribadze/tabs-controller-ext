import getBrowserApi from './index';
import ChromeApi from './chrome-api';

describe('getBrowserApi tests', () => {
  it('should return ChromeApi instance if browser type is "chrome"', () => {
    expect(getBrowserApi('chrome')).toBeInstanceOf(ChromeApi);
  });
  it('should throw if browser type is not implemented', () => {
    expect(() => getBrowserApi('unknown')).toThrow();
  });
});
