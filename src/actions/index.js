import * as Types from './types';

export const initialize = (tabs) => ({
  type: Types.initializeType,
  payload: { tabs },
});

export const addTabToWindow = (windowId, tab) => ({
  type: Types.addTabToWindowType,
  payload: {
    windowId,
    tab,
  },
});

export const removeTabFromWindow = (windowId, tabId) => ({
  type: Types.removeTabFromWindowType,
  payload: {
    windowId,
    tabId,
  },
});
