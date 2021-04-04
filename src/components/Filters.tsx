import React from 'react';
import Checkbox from './Checkbox';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import classNames from 'classnames';

const filterList = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки'
];

const Filters = () => {
    const { loading }: any = useSelector<ApplicationState>(state => state.tickets);

    return (
        <div className="filters">
            <h3 className="filters__head">
                Количество пересадок
            </h3>
            <ul className="filters__list">
                {filterList.map((name, index) =>
                    <li
                        key={index}
                        className={classNames('filters__item', { disabled: loading })}
                    >
                        <Checkbox
                            name={name}
                            loading={loading}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Filters;
