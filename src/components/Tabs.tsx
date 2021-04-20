import React from 'react';
import classNames from 'classnames';
import { TabInterface } from '../resources/tabs';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortBy } from '../store/filters/selectors';
import { setSortBy } from '../store/filters/actions';

interface TabsProps {
  readonly data: TabInterface[]
}

const Tabs = ({ data }: TabsProps) => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const clickTabHandler = (val: string) => {
    if (val !== sortBy) {
      dispatch(setSortBy(val));
    }
  };

  return (
    <div className="tabs">
      {data.map(({ id, name, val }) =>
        <div
          key={id}
          className={classNames('tabs__item', { active: sortBy === val })}
          onClick={() => clickTabHandler(val)}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default Tabs;
