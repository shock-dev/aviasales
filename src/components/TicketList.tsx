import React, { useState } from 'react';
import Ticket from './Ticket';
import Loader from './Loader';
import Error from './Error';
import { useSelector } from 'react-redux';
import { selectErrorTickets, selectIsLoadingTickets, selectTicketsItems } from '../store/tickets/selectors';
import declension from '../utils/declension';
import sorting from '../utils/sorting';
import { selectFilterList, selectSortBy } from '../store/filters/selectors';
import filter from '../utils/filter';

const TicketList = () => {
  const error = useSelector(selectErrorTickets);
  const loading = useSelector(selectIsLoadingTickets);
  const tickets = useSelector(selectTicketsItems);
  const sortBy = useSelector(selectSortBy);
  const filters = useSelector(selectFilterList);

  const step = 5;
  const [availableTickets, setAvailableTickets] = useState(step);

  const filteredItems = filter(tickets, filters);
  const sortingTickets = sorting(filteredItems, sortBy);
  const data = [...sortingTickets].splice(0, availableTickets);

  const calculateLastTickets = () => {
    const difference = filteredItems.length - data.length;
    return difference < step ? difference : step;
  };

  const generateBtnText = () => {
    return `Показать еще ${calculateLastTickets()} ${declension(step, ['билет', 'билета', 'билетов'])}!`;
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
      {calculateLastTickets() !== 0 && (
        <button
          className="tickets__btn"
          onClick={clickBtnHandler}
        >
          {generateBtnText()}
        </button>
      )}
    </div>
  );
};

export default TicketList;
