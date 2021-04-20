import React from 'react';
import classNames from 'classnames';

interface CheckboxInterface {
  readonly name: string
  readonly val: string
  readonly checked: boolean
  readonly loading: boolean
}

const Checkbox = ({name, checked, loading}: CheckboxInterface) => {
  return (
    <li className={classNames('filters__item', {disabled: loading})}>
      <label className="filters__item-label checkbox">
        <input
          className="checkbox__real"
          type="checkbox"
          disabled={loading}
          checked={checked}
        />
        <span className="checkbox__fake" />
        <span className="checkbox__text">
                    {name}
                </span>
      </label>
    </li>
  );
};

export default Checkbox;
