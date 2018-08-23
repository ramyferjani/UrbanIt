import {createStore, compose, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from '../reducers/root.reducer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});
const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const initialState = {
  counter: 14
};

const composedEnhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware), ...enhancerList);

const initStore = () => createStore(rootReducer, composedEnhancer);

module.exports = {
  initStore
};