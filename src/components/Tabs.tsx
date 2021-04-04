import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';

const tabs = [
    'Самый дешевый',
    'Самый быстрый',
    'Оптимальный'
];

const Tabs = () => {
    const { loading }: any = useSelector<ApplicationState>(state => state.tickets);
    const [activeTab, setActiveTab] = useState<number>(0);

    const clickTabHandler = (index: number): void => {
        if (activeTab !== index && !loading) {
            setActiveTab(index);
        }
    };

    return (
        <div className="tabs">
            {tabs.map((name, index) =>
                <div
                    key={index}
                    className={classNames('tabs__item', { active: activeTab === index, disabled: loading })}
                    onClick={clickTabHandler.bind(null, index)}
                >
                    {name}
                </div>
            )}
        </div>
    );
};

export default Tabs;
