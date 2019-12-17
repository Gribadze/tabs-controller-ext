import ControlTabsCountEffect from './control-tabs-count';
import { extension } from '../config';

describe('ControlOpenerEffect tests', () => {
  it('should not call callback if max tabs count not exceeded', () => {
    const mockCallback = jest.fn();
    const windowId = 0;
    const tab = 1;
    const action = {
      payload: {
        windowId,
        tab,
      },
    };
    const effect = new ControlTabsCountEffect(mockCallback);
    effect.apply({}, action);
    expect(mockCallback).not.toBeCalled();
  });
  it('should call callback if max tabs count exceeded', () => {
    const mockCallback = jest.fn();
    const windowId = 0;
    const tab = 1;
    const action = {
      payload: {
        windowId,
        tab,
      },
    };
    const data = { [windowId]: Array(extension.maxTabsCount).concat(tab) };
    const effect = new ControlTabsCountEffect(mockCallback);
    effect.apply(data, action);
    expect(mockCallback).toBeCalledWith(action);
  });
});
