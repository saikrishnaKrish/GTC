import React from 'react'
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom'

import { withGlobalContext } from '../../Context/GlobalContextProvider';
import HomePage from '../../Pages/HomePage';
import ResultsPage from '../../Pages/ResultsPage';


function RoutingComponent() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/results" component={ResultsPage}/>
                </Switch>
        </Router>
    )
}

export default withGlobalContext(RoutingComponent);