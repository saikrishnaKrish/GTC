import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//importing GlobalContext for accessing props
import { withGlobalContext } from "../../Context/GlobalContextProvider";

//importing Components
import HomePage from "../../Pages/HomePage";
import ResultsPage from "../../Pages/ResultsPage";
import HeaderComponent from "../HeaderComponent";
import SubHeader from "../HeaderComponent/SubHeader";
import FooterComponent from "../FooterComponent";


/**
 *
 * @renders the component based on the url path
 */

function RoutingComponent() {
  return (
    <Router>
        <HeaderComponent/> 
        <SubHeader/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
        <FooterComponent/>
    </Router>
  );
}

export default withGlobalContext(RoutingComponent);
