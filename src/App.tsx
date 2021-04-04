import React, { useEffect } from 'react';
import Logo from './components/Logo';
import Filters from './components/Filters';
import Tabs from './components/Tabs';
import TicketList from './components/TicketList';
import { useDispatch } from 'react-redux';
import { fetchTickets } from './store/tickets/actions';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch]);

    return (
        <div className="app">
            <Logo />
            <div className="container main">
                <Filters/>
                <div className="main__inner">
                    <Tabs />
                    <TicketList />
                </div>
            </div>
        </div>
    );
};

export default App;
