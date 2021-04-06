import React, { ChangeEvent, useState } from 'react';
import Checkbox from './Checkbox';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { FilterDataInterface } from '../resources/filters';

interface FiltersProps {
    readonly data: FilterDataInterface[]
}

const Filters = ({ data }: FiltersProps) => {
    const { loading }: any = useSelector<ApplicationState>(state => state.tickets);
    const [filters, setFilters] = useState<FilterDataInterface[]>(data);

    const clickCheckboxHandler = (e: ChangeEvent<HTMLInputElement>, id: number): void => {
        const clone = [...filters];
        const findIndex = clone.findIndex(item => item.id === id);
        clone[findIndex].checked = e.target.checked;
        setFilters(clone);
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
                        loading={loading}
                        onClickCheckbox={(e) => clickCheckboxHandler(e, item.id)}
                        {...item}
                    />
                )}
            </ul>
        </div>
    );
};

export default Filters;
