import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as CountReducer } from "./Counter/reducer";
import { reducer as TodoReducer } from "./Todos/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";


const customMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch);
    }
    return next(action);
}


const rootReducer = combineReducers({ CountReducer, TodoReducer, AuthReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(customMiddleware)));

export { store };