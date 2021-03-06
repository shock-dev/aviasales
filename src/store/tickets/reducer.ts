import produce from 'immer';
import { TicketsState } from './types/state';
import { LoadingStatus } from '../types';
import { TicketsAction, TicketsActionType } from './types/actions';

const initialTicketsState: TicketsState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER
};

const tickets = produce((draft, action: TicketsAction) => {
  switch (action.type) {
    case TicketsActionType.FETCH_ITEMS:
      draft.items = [];
      draft.loadingStatus = LoadingStatus.LOADING;
      break;

    case TicketsActionType.SET_ITEMS:
      draft.items = action.payload;
      draft.loadingStatus = LoadingStatus.SUCCESS;
      break;

    case TicketsActionType.SET_LOADING_STATUS:
      draft.loadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialTicketsState);

export default tickets;
