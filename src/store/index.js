import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers =
  typeof
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


export default store