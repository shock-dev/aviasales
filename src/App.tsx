import React from 'react';
import Logo from './components/Logo';
import Filters from './components/Filters';
import Tabs from './components/Tabs';
import TicketList from './components/TicketList';
import { tabs } from './resources/tabs';
import { filters } from './resources/filters';

const App = () => {
    return (
        <div className="app">
            <Logo />
            <div className="container main">
                <Filters data={filters} />
                <div className="main__inner">
                    <Tabs data={tabs} />
                    <TicketList
                        loading={false}
                        data={[]}
                        error="Что-то пошло не так"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
