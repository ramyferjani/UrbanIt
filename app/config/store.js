import {createStore, compose, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from '../reducers/root.reducer';
import { navigationMiddleware } from './AppNavigator';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});
const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware, navigationMiddleware), ...enhancerList);

// const initStore = () => createStore(pReducer, composedEnhancer);

export const store = createStore(pReducer, composedEnhancer);

export const persistor = persistStore(store);

// export default () => {
//   let store = createStore(pReducer, composedEnhancer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// module.exports = {
//   initStore
// };