import { TicketsState } from './tickets/types/state';

export enum LoadingStatus {
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING'
}

export interface RootState {
  tickets: TicketsState
}
