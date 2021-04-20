import { Action } from 'redux';
import { TicketsState } from './state';
import { LoadingStatus } from '../../types';

export enum TicketsActionType {
  FETCH_ITEMS = 'tickets/FETCH_ITEMS',
  SET_ITEMS = 'tickets/SET_ITEMS',
  SET_LOADING_STATUS = 'tickets/SET_LOADING_STATUS'
}

export interface FetchTicketsAction extends Action {
  type: TicketsActionType.FETCH_ITEMS
}

export interface SetTicketsAction extends Action {
  type: TicketsActionType.SET_ITEMS,
  payload: TicketsState['items']
}

export interface SetTicketsLoadingStatusAction extends Action {
  type: TicketsActionType.SET_LOADING_STATUS,
  payload: LoadingStatus
}
