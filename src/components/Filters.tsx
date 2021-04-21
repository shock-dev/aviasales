import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { FilterDataInterface } from '../resources/filters';
import { useSelector } from 'react-redux';
import { selectIsLoadingTickets } from '../store/tickets/selectors';

interface FiltersProps {
  readonly data: FilterDataInterface[]
}

const Filters = ({ data }: FiltersProps) => {
  const isLoading = useSelector(selectIsLoadingTickets);
  const [filters] = useState<FilterDataInterface[]>(data);

  return (
    <div className="filters">
      <h3 className="filters__head">
        Количество пересадок
      </h3>
      <ul className="filters__list">
        {filters.map((item) =>
          <Checkbox
            key={item.id}
            loading={isLoading}
            {...item}
          />
        )}
      </ul>
    </div>
  );
};

export default Filters;
