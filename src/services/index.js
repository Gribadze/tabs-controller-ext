import ChromeApi from './chrome-api';

export default function getBrowserApi(browserName) {
  switch (browserName) {
    case 'chrome':
      return new ChromeApi();
    default:
      throw new Error(`Extension is not implemented for ${browserName}`);
  }
}
