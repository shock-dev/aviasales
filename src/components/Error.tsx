import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTickets } from '../store/tickets/actions';

interface ErrorProps {
    message: string
}

const Error = ({ message }: ErrorProps) => {
    const dispatch = useDispatch();

    const clickBtnHandler = () => {
        dispatch(fetchTickets());
    };

    return (
        <div className="error">
            <p className="error__text">{message}</p>
            <button
                className="error__btn"
                onClick={clickBtnHandler}
            >
                Попробовать снова
            </button>
        </div>
    );
};

export default Error;
