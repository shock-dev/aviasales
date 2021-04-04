import { TicketInterface, TicketsActionTypes } from './types';
import axios from 'axios';

export const fetchTickets = () => async (dispatch: any): Promise<void> => {
    try {
        dispatch(fetchRequest());
        const { data: { searchId } } = await axios.get(`https://front-test.beta.aviasales.ru/search`);
        const { data: { tickets } } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        dispatch(fetchSuccess(tickets));
    } catch (e) {
        dispatch(fetchError('Something went wrong'));
    }
};

export const fetchRequest = () => ({
    type: TicketsActionTypes.FETCH_REQUEST
});

export const fetchSuccess = (data: TicketInterface[]) => ({
    type: TicketsActionTypes.FETCH_SUCCESS,
    payload: data
});

export const fetchError = (message: string) => ({
    type: TicketsActionTypes.FETCH_ERROR,
    errors: message
});
