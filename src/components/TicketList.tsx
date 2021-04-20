import React, { useState } from 'react';
import Ticket from './Ticket';
import Loader from './Loader';
import Error from './Error';
import { useSelector } from 'react-redux';
import { selectErrorTickets, selectIsLoadingTickets, selectTicketsItems } from '../store/tickets/selectors';
import declension from '../utils/declension';
import sorting from '../utils/sorting';
import { selectSortBy } from '../store/filters/selectors';

const TicketList = () => {
  const error = useSelector(selectErrorTickets);
  const loading = useSelector(selectIsLoadingTickets);
  const tickets = useSelector(selectTicketsItems);
  const sortBy = useSelector(selectSortBy);

  const step = 5;
  const [availableTickets, setAvailableTickets] = useState(step);

  const sortingTickets = sorting(tickets, sortBy);
  const data = [...sortingTickets].splice(0, availableTickets);

  const generateBtnText = () => {
    return `Показать еще ${step} ${declension(step, ['билет', 'билета', 'билетов'])}!`;
  };

  const clickBtnHandler = () => {
    setAvailableTickets((state) => state + step);
  };

  if (error) {
    return (
      <Error />
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
        {data.map((ticket, index) =>
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
