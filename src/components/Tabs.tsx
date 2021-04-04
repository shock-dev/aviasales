import React, { useState } from 'react';
import classNames from 'classnames';

const tabs = [
    'Самый дешевый',
    'Самый быстрый',
    'Оптимальный'
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const clickTabHandler = (index: number): void => {
        if (activeTab !== index) {
            setActiveTab(index);
        }
    };

    return (
        <div className="tabs">
            {tabs.map((name, index) =>
                <div
                    key={index}
                    className={classNames('tabs__item', { active: activeTab === index })}
                    onClick={clickTabHandler.bind(null, index)}
                >
                    {name}
                </div>
            )}
        </div>
    );
};

export default Tabs;
