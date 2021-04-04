import React from 'react';
import { CheckboxInterface } from '../types/checkbox';

const Checkbox = ({ name }: CheckboxInterface) => {
    return (
        <label className="filters__item-label checkbox">
            <input
                className="checkbox__real"
                type="checkbox"
            />
            <span className="checkbox__fake" />
            <span className="checkbox__text">
                {name}
            </span>
        </label>
    );
};

export default Checkbox;
