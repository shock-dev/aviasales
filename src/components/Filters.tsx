import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { FilterDataInterface } from '../resources/filters';

interface FiltersProps {
    readonly data: FilterDataInterface[]
}

const Filters = ({ data }: FiltersProps) => {
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
                        loading={false}
                        {...item}
                    />
                )}
            </ul>
        </div>
    );
};

export default Filters;
