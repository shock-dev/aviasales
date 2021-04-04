import { TicketsActionTypes, TicketsState, TicketsAction } from './types';

const initialState: TicketsState = {
    data: [],
    loading: false,
    errors: undefined
};

const tickets = (state = initialState, action: TicketsAction): TicketsState => {
    switch (action.type) {
        case TicketsActionTypes.FETCH_REQUEST:
            return { ...state, loading: true };
        case TicketsActionTypes.FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case TicketsActionTypes.FETCH_ERROR:
            return { ...state, loading: false, errors: action.payload };
        default:
            return state;
    }
};

export default tickets;
