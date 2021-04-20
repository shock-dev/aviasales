import { takeEvery } from 'redux-saga/effects';

function* fetchTickets() {
  try {
    console.log('test');
  } catch (e) {
    console.log(e);
  }
}

function* ticketsSaga() {
  yield takeEvery('FETCH_TICKETS', fetchTickets);
}

export default ticketsSaga;
