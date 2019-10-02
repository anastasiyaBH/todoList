import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducers/reducers'

const composeEnhancers = compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducer, enhancer);

export default store;