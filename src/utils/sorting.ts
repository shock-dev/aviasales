const TotalDuration = (segment: any): number => {
  return segment[0].duration + segment[1].duration;
}

const TotalStops = (segment: any): number => {
  return segment[0].stops.length + segment[1].stops.length;
}

const sorting = (items: any, sortBy: string) => {
  if (sortBy === 'cheap') {
    return items.sort((a: any, b: any) => a.price - b.price);
  }

  if (sortBy === 'fast') {
    return items.sort((a: any, b: any) => TotalDuration(a.segments) - TotalDuration(b.segments));
  }

  if (sortBy === 'optimal') {
    return items.sort((a: any, b: any) => TotalStops(a.segments) - TotalStops(b.segments))
  }

  return items;
}

export default sorting;
