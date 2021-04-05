import React, { useEffect } from 'react';
import Logo from './components/Logo';
import Filters from './components/Filters';
import Tabs from './components/Tabs';
import TicketList from './components/TicketList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from './store/tickets/actions';
import { ApplicationState } from './store';

const App = () => {
    const dispatch = useDispatch();
    const { loading, errors, data }: any = useSelector<ApplicationState>(state => state.tickets);

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
                    <TicketList
                        loading={loading}
                        data={data}
                        errors={errors}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
