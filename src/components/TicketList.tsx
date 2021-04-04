import React from 'react';
import Ticket from './Ticket';

const TicketList = () => {
    return (
        <div className="tickets">
            <div className="tickets__list">
                <Ticket />
            </div>
        </div>
    );
};

export default TicketList;
