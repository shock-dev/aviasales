import React, { useState } from 'react';
import Ticket from './Ticket';
import { TicketInterface } from '../store/tickets/types';
import Loader from './Loader';
import Error from './Error';
import declension from '../utils/declension';

interface TicketListProps {
    readonly data: TicketInterface[]
    readonly loading: boolean
    readonly errors?: string
}

const TicketList = ({ data, loading, errors }: TicketListProps) => {
    const step = 5;
    const [availableCount, setAvailableCount] = useState<number>(5);
    const filteredTickets = [...data].slice(0, availableCount);

    const clickBtnHandler = () => {
        setAvailableCount(state => state + step);
    };

    const generateBtnText = () => {
        return `Показать еще ${step} ${declension(step, ['билет', 'билета', 'билетов'])}!`;
    };

    if (errors) {
        return (
            <Error message={errors} />
        );
    }

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="tickets">
            <div className="tickets__list">
                {filteredTickets.map((ticket: TicketInterface, index: number) =>
                    <Ticket
                        key={index}
                        {...ticket}
                    />
                )}
            </div>
            <button
                className="tickets__btn"
                onClick={clickBtnHandler}
            >
                {generateBtnText()}
            </button>
        </div>
    );
};

export default TicketList;
