import React from 'react';
import Checkbox from './Checkbox';

const filterList = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки'
];

const Filters = () => {
    return (
        <div className="filters">
            <h3 className="filters__head">
                Количество пересадок
            </h3>
            <ul className="filters__list">
                {filterList.map(name =>
                    <li className="filters__item">
                        <Checkbox name={name} />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Filters;
