import ControlOpenerEffect from './control-opener';

describe('ControlOpenerEffect tests', () => {
  it('should call callback function if openerTabId is undefined', () => {
    const mockCallback = jest.fn();
    const action = {
      payload: {
        tab: 1,
      },
    };
    const data = 2;
    const effect = new ControlOpenerEffect(mockCallback);
    effect.apply(data, action);
    expect(mockCallback).toBeCalledWith(action);
  });

  it('should not call callback if openerTabId is defined', () => {
    const mockCallback = jest.fn();
    const action = {
      payload: {
        tab: {
          openerTabId: 1,
        },
      },
    };
    const data = 2;
    const effect = new ControlOpenerEffect(mockCallback);
    effect.apply(data, action);
    expect(mockCallback).not.toBeCalled();
  });
});
