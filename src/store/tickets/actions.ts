import { TicketsState } from './types/state';
import { FetchTicketsAction, SetTicketsAction, SetTicketsLoadingStatusAction, TicketsActionType } from './types/actions';
import { LoadingStatus } from '../types';

export const setTickets = (payload: TicketsState['items']): SetTicketsAction => ({
  type: TicketsActionType.SET_ITEMS,
  payload
});

export const fetchTickets = (): FetchTicketsAction => ({
  type: TicketsActionType.FETCH_ITEMS
});

export const setTicketsLoadingState = (payload: LoadingStatus): SetTicketsLoadingStatusAction => ({
  type: TicketsActionType.SET_LOADING_STATUS,
  payload
});
