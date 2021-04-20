import React from 'react';
import classNames from 'classnames';
import { TabInterface } from '../resources/tabs';

interface TabsProps {
    readonly data: TabInterface[]
}

const Tabs = ({ data }: TabsProps) => {
    return (
        <div className="tabs">
            {data.map(({ id, name, val }) =>
                <div
                    key={id}
                    className={classNames('tabs__item')}
                >
                    {name}
                </div>
            )}
        </div>
    );
};

export default Tabs;
