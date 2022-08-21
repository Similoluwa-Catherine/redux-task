import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import dataReducer from './data.reducer';

const loggerMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({collapsed: true});
    return [logger];
  }
  return [];
};

const configureStore = () => {
  const composedEnhancers = composeWithDevTools(applyMiddleware(thunk, ...loggerMiddleware()));
  return createStore(dataReducer, composedEnhancers); 
};

export default configureStore;