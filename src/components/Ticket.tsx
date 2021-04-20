import React from 'react';
import declension from '../utils/declension';
import { departureTime, destinationTime, travelTime } from '../utils/date';

interface SegmentInterface {
  origin: string
  destination: string
  date: string
  stops: string[],
  duration: number
}

interface TicketProps {
  price: number
  carrier: string
  segments: SegmentInterface[]
}

const Ticket = ({price, carrier, segments}: TicketProps) => {

  const getCountOfStops = (count: number) => {
    if (count === 0) {
      return 'Без пересадок';
    }

    return count + ' ' + declension(count, ['пересадка', 'пересадки', 'пересадок']);
  };

  return (
    <div className="tickets__item ticket">
      <div className="ticket__head">
        <div className="ticket__price">
          {price} Р
        </div>
        <div className="ticket__img">
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier} ticket`} />
        </div>
      </div>
      <div className="ticket__info info">
        {segments.map(({origin, destination, stops, date, duration}, index) =>
          <div className="ticket__info-row info__row" key={index}>
            <div className="info__col">
              <div className="info__col-head">
                {origin} – {destination}
              </div>
              <div className="info__col-val">
                {departureTime(date)} – {destinationTime(date, duration)}
              </div>
            </div>
            <div className="info__col">
              <div className="info__col-head">
                В пути
              </div>
              <div className="info__col-val">
                {travelTime(duration)}
              </div>
            </div>
            <div className="info__col">
              <div className="info__col-head">
                {getCountOfStops(stops.length)}
              </div>
              <div className="info__col-val">
                {stops.length ? stops.join(', ') : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
