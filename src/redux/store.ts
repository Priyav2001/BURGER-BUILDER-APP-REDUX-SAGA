import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers";
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// const store = createStore(reducer);
sagaMiddleware.run(rootSaga);
export default store;
