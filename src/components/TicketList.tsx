import React from 'react';
import Ticket from './Ticket';

const TicketList = () => {
    return (
        <div className="tickets">
            <div className="tickets__list">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
            <button className="tickets__btn">
                Показать еще 5 билетов!
            </button>
        </div>
    );
};

export default TicketList;
