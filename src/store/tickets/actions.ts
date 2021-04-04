import { Ticket, TicketsActionTypes } from './types';
import axios from 'axios';

export const fetchTickets = () => async (dispatch: any) => {
    try {
        dispatch(fetchRequest());
        const { data: { tickets } } = await axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=412f9');
        dispatch(fetchSuccess(tickets));
    } catch (e) {
        dispatch(fetchError('Something went wrong'));
    }
};

export const fetchRequest = () => ({
    type: TicketsActionTypes.FETCH_REQUEST
});

export const fetchSuccess = (data: Ticket[]) => ({
    type: TicketsActionTypes.FETCH_SUCCESS,
    payload: data
});

export const fetchError = (message: string) => ({
    type: TicketsActionTypes.FETCH_ERROR,
    errors: message
});
