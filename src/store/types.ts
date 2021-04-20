import { TicketsState } from './tickets/types/state';
import { FiltersState } from './filters/types/state';

export enum LoadingStatus {
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING'
}

export interface RootState {
  tickets: TicketsState
  filters: FiltersState
}
