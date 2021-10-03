import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authenticationReducer } from './reducers/authentications';
import thunk from 'redux-thunk'

const reducers = combineReducers({
    authentication: authenticationReducer,
});

export default createStore(
    reducers,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);