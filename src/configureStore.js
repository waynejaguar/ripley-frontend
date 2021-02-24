import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import userSaga from './users/saga';

const composeEnhancers = composeWithDevTools({});
const initialSagaMiddleware = createSagaMiddleware();
const initialState = {
    user: {},
};

const configureStore = () => {
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(initialSagaMiddleware)));
    initialSagaMiddleware.run(userSaga);
    return store;
};

export default configureStore;
