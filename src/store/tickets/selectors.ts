import { LoadingStatus, RootState } from '../types';

export const selectTicketsState = (state: RootState) => state.tickets;

export const selectErrorTickets = (state: RootState) => selectTicketsState(state).loadingStatus === LoadingStatus.ERROR;

export const selectIsLoadingTickets = (state: RootState) => selectTicketsState(state).loadingStatus === LoadingStatus.LOADING;

export const selectTicketsItems = (state: RootState) => selectTicketsState(state).items;
