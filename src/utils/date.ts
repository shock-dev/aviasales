import moment from 'moment';

export const departureTime = (date: string) => {
    return moment(date).format('hh:mm');
};

export const destinationTime = (current: string, duration: number): string => {
    return moment(current).add(duration, 'minutes').format('HH:mm');
};

export const travelTime = (duration: number): string => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
};
