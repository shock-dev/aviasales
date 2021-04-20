import { all } from 'redux-saga/effects';
import ticketsSaga from './tickets/saga';

export default function* rootSaga() {
  yield all([
    ticketsSaga()
  ]);
}
