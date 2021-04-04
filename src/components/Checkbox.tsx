import React from 'react';

interface CheckboxInterface {
    readonly name: string
    readonly loading: boolean
}

const Checkbox = ({ name, loading }: CheckboxInterface) => {
    return (
        <label className="filters__item-label checkbox">
            <input
                className="checkbox__real"
                type="checkbox"
                disabled={loading}
            />
            <span className="checkbox__fake" />
            <span className="checkbox__text">
                {name}
            </span>
        </label>
    );
};

export default Checkbox;
