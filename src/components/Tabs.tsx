import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { TabInterface } from '../resources/tabs';

interface TabsProps {
    readonly data: TabInterface[]
    readonly activeTab: string
    readonly onClickTab: (val: string) => void
}

const Tabs = ({ data, activeTab, onClickTab }: TabsProps) => {
    const { loading }: any = useSelector<ApplicationState>(state => state.tickets);

    const clickTabHandler = (val: string): void => {
        if (activeTab !== val && !loading) {
            onClickTab(val);
        }
    };

    return (
        <div className="tabs">
            {data.map(({ id, name, val }) =>
                <div
                    key={id}
                    className={classNames('tabs__item', { active: activeTab === val, disabled: loading })}
                    onClick={clickTabHandler.bind(null, val)}
                >
                    {name}
                </div>
            )}
        </div>
    );
};

export default Tabs;
