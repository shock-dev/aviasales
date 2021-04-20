import { applyMiddleware, createStore } from 'redux';
import root from './reducer.root';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga.root';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
