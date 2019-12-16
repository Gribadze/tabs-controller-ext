import * as Types from './types';
import * as Actions from './index';

describe('Actions tests', () => {
  it('initialize', () => {
    const tabs = 1;
    const action = Actions.initialize(tabs);
    expect(action).toHaveProperty('type', Types.initializeType);
    expect(action).toHaveProperty('payload', { tabs });
  });

  it('addTabToWindow', () => {
    const tab = 1;
    const windowId = 2;
    const action = Actions.addTabToWindow(windowId, tab);
    expect(action).toHaveProperty('type', Types.addTabToWindowType);
    expect(action).toHaveProperty('payload', { windowId, tab });
  });

  it('removeTabFromWindow', () => {
    const tabId = 1;
    const windowId = 2;
    const action = Actions.removeTabFromWindow(windowId, tabId);
    expect(action).toHaveProperty('type', Types.removeTabFromWindowType);
    expect(action).toHaveProperty('payload', { windowId, tabId });
  });
});
