import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { TabInterface } from '../resources/tabs';

interface TabsProps {
    readonly data: TabInterface[]
}

const Tabs = ({ data }: TabsProps) => {
    const { loading }: any = useSelector<ApplicationState>(state => state.tickets);
    const [activeTab, setActiveTab] = useState<number>(data[0].id);

    const clickTabHandler = (index: number): void => {
        if (activeTab !== index && !loading) {
            setActiveTab(index);
        }
    };

    return (
        <div className="tabs">
            {data.map(({ id, name }) =>
                <div
                    key={id}
                    className={classNames('tabs__item', { active: activeTab === id, disabled: loading })}
                    onClick={clickTabHandler.bind(null, id)}
                >
                    {name}
                </div>
            )}
        </div>
    );
};

export default Tabs;
