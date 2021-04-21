import React, { ChangeEvent } from 'react';
import Checkbox from './Checkbox';
import { filters } from '../resources/filters';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingTickets } from '../store/tickets/selectors';
import { selectFilterList } from '../store/filters/selectors';
import { clearFilter, setFilter } from '../store/filters/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(selectFilterList);
  const isLoading = useSelector(selectIsLoadingTickets);

  const changeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>, val: number | string) => {
    const isChecked = e.target.checked;

    if (val === 'all' && isChecked) {
      return dispatch(clearFilter());
    }

    if (val === 'all' && !isChecked) {
      return dispatch(setFilter([0]));
    }

    const clone = [...filterList];
    const index = clone.indexOf('all');

    index !== -1 && clone.splice(index, 1);

    if (e.target.checked) {
      clone.push(val);
    } else {
      clone.splice(clone.indexOf(val), 1);

      if (!clone.length) {
        return dispatch(clearFilter());
      }
    }

    dispatch(setFilter(clone));
  };

  return (
    <div className="filters">
      <h3 className="filters__head">
        Количество пересадок
      </h3>
      <ul className="filters__list">
        {filters.map((item) =>
          <Checkbox
            key={item.id}
            name={item.name}
            val={item.val}
            checked={filterList.includes(item.val)}
            loading={isLoading}
            onChange={(e) => changeCheckboxHandler(e, item.val)}
          />
        )}
      </ul>
    </div>
  );
};

export default Filters;
