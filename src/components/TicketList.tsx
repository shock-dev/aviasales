import React, { useState } from 'react';
import Ticket from './Ticket';
import Loader from './Loader';
import Error from './Error';
import declension from '../utils/declension';

interface TicketListProps {
  readonly data: any
  readonly loading: boolean
  readonly error?: string
}

const TicketList = ({ data, loading, error }: TicketListProps) => {
  const step = 5;
  const [availableCount, setAvailableCount] = useState(5);
  const slicedTickets = [...data].slice(0, availableCount);

  const clickBtnHandler = () => {
    setAvailableCount((state) => state + step);
  };

  const generateBtnText = () => {
    return `Показать еще ${step} ${declension(step, ['билет', 'билета', 'билетов'])}!`;
  };

  if (error) {
    return (
      <Error message={error} />
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
        {slicedTickets.map((ticket, index: number) =>
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
