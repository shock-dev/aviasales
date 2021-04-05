import { TicketInterface, TicketsActionTypes } from './types';
import axios from 'axios';

const API = 'https://front-test.beta.aviasales.ru'

export const fetchTickets = () => async (dispatch: any): Promise<void> => {
    try {
        dispatch(fetchRequest());
        const { data: { searchId } } = await axios.get(`${API}/search`);
        const { data: { tickets } } = await axios.get(`${API}/tickets?searchId=${searchId}`);
        dispatch(fetchSuccess(tickets));
    } catch (e) {
        dispatch(fetchError('Что-то пошло не так.'));
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
    payload: message
});
