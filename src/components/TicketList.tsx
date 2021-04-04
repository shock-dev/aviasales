import React from 'react';
import Ticket from './Ticket';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { TicketInterface } from '../store/tickets/types';
import Loader from './Loader';

const TicketList = () => {
    const { loading, data }: any = useSelector<ApplicationState>(state => state.tickets);

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="tickets">
            <div className="tickets__list">
                {data.map((ticket: TicketInterface, index: number) =>
                    <Ticket
                        key={index}
                        {...ticket}
                    />
                )}
            </div>
            <button className="tickets__btn">
                Показать еще 5 билетов!
            </button>
        </div>
    );
};

export default TicketList;
