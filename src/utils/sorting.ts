import { ITicket } from '../store/tickets/types/state';

const totalDuration = (segment: ITicket['segments']): number => {
  return segment[0].duration + segment[1].duration;
};

const totalStops = (segment: ITicket['segments']): number => {
  return segment[0].stops.length + segment[1].stops.length;
};

const sorting = (items: ITicket[], sortBy: string) => {
  if (sortBy === 'cheap') {
    return items.slice().sort((a, b) => +a.price - +b.price);
  }

  if (sortBy === 'fast') {
    return items.slice().sort((a, b) => totalDuration(a.segments) - totalDuration(b.segments));
  }

  if (sortBy === 'optimal') {
    return items.slice().sort((a, b) => totalStops(a.segments) - totalStops(b.segments));
  }

  return items;
};

export default sorting;
