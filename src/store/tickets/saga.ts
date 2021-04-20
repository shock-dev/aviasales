import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { TicketsActionType } from './types/actions';
import TicketsApi from '../../services/api/tickets.api';
import { setTickets, setTicketsLoadingState } from './actions';
import { LoadingStatus } from '../types';

function* fetchTickets(): SagaIterator {
  try {
    const tickets = yield call(TicketsApi.fetchTickets);
    yield put(setTickets(tickets));
  } catch (e) {
    yield put(setTicketsLoadingState(LoadingStatus.ERROR));
  }
}

function* ticketsSaga() {
  yield takeEvery(TicketsActionType.FETCH_ITEMS, fetchTickets);
}

export default ticketsSaga;
