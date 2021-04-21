import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

interface CheckboxInterface {
  readonly name: string
  readonly val: number | string
  readonly checked: boolean
  readonly loading: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ name, checked, loading, onChange }: CheckboxInterface) => {
  return (
    <li className={classNames('filters__item', { disabled: loading })}>
      <label className="filters__item-label checkbox">
        <input
          className="checkbox__real"
          type="checkbox"
          onChange={(e) => onChange(e)}
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
