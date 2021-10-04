import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { withGlobalContext } from '../../Context/GlobalContextProvider';
import HomePage from '../../Pages/HomePage';
import ResultsPage from '../../Pages/ResultsPage';

import HeaderComponent from '../HeaderComponent';
import SubHeader from '../HeaderComponent/SubHeader';
import FooterComponent from '../FooterComponent';
import GlobalContextProvider from '../../Context/GlobalContextProvider';

function RoutingComponent() {
    return (
        <Router>
            <GlobalContextProvider>
                <HeaderComponent />
                <SubHeader />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/results" component={ResultsPage} />
                </Switch>
                <FooterComponent />
            </GlobalContextProvider>
        </Router>
    )
}

export default withGlobalContext(RoutingComponent);