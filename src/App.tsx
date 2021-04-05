import React, { useEffect } from 'react';
import Logo from './components/Logo';
import Filters from './components/Filters';
import Tabs from './components/Tabs';
import TicketList from './components/TicketList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from './store/tickets/actions';
import { ApplicationState } from './store';
import { tabs } from './resources/tabs';
import { filters } from './resources/filters';
import { setSortBy } from './store/filters/actions';
import sorting from './utils/sorting';

const App = () => {
    const dispatch = useDispatch();
    const { loading, errors, data }: any = useSelector<ApplicationState>(state => state.tickets);
    const { sortBy }: any = useSelector<ApplicationState>(state => state.filters);

    const clickTabHandler = (val: string) => {
        dispatch(setSortBy(val));
    };

    useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch]);

    return (
        <div className="app">
            <Logo />
            <div className="container main">
                <Filters data={filters} />
                <div className="main__inner">
                    <Tabs
                        data={tabs}
                        activeTab={sortBy}
                        onClickTab={clickTabHandler}
                    />
                    <TicketList
                        loading={loading}
                        data={sorting(data, sortBy)}
                        errors={errors}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
