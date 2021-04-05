import { TicketInterface } from '../store/tickets/types';

const TotalDuration = (segment: any): number => {
    return segment[0].duration + segment[1].duration;
}

const TotalStops = (segment: any): number => {
    return segment[0].stops.length + segment[1].stops.length;
}

const sorting = (items: TicketInterface[], sortBy: string): TicketInterface[] => {
    if (sortBy === 'cheap') {
        return items.sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'fast') {
        return items.sort((a, b) => TotalDuration(a.segments) - TotalDuration(b.segments));
    }

    if (sortBy === 'optimal') {
        return items.sort((a, b) => TotalStops(a.segments) - TotalStops(b.segments))
    }

    return items;
}

export default sorting;
