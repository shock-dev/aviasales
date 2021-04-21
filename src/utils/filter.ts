import { ITicket } from '../store/tickets/types/state';

const getStops = (segment: ITicket['segments'][0] | ITicket['segments'][1]) => {
  return segment.stops.length;
};

const filter = (tickets: ITicket[], filters: (number | string)[]): ITicket[] => {
  let items = [...tickets];

  if (!filters.includes('all')) {
    items = items.filter((item) => {
      const { segments } = item;
      let flag = false;

      filters.some((count) => {
        if (flag) {
          return;
        }

        if (count === 0) {
          flag = getStops(segments[0]) + getStops(segments[1]) === count;
        } else {
          flag = getStops(segments[0]) === count || getStops(segments[1]) === count;
        }
      });

      return flag;
    });
  }

  return items;
};

export default filter;
