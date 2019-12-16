import Storage from './core/Storage';
import * as Types from './actions/types';
import addTabReducer from './reducers/add-tab';
import removeTabReducer from './reducers/remove-tab';
import initializeReducer from './reducers/initialize';

const storage = new Storage();

storage.addReducer(Types.addTabToWindowType, addTabReducer);
storage.addReducer(Types.removeTabFromWindowType, removeTabReducer);
storage.addReducer(Types.initializeType, initializeReducer);

export default storage;
