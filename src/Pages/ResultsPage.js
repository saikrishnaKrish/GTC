import React, { Component, useState, useEffect } from 'react';
import { Redirect, withRouter } from "react-router-dom";

//GlobalContext 
import { withGlobalContext } from '../Context/GlobalContextProvider';
//Components
import TimeTakenComponent from '../Components/TimeTakenComponent';
//utils
import Utils from '../Utils/Utils';
//styles
import './ResultsPage.css';

/**
 * @function {function} LoadingText
 * 
 * @returns a loading text is shown
 */
function LoadingText() {
    const loadingString = 'Loading';
    const [text, setText] = useState(loadingString);
    useEffect(() => {
        const interval = setInterval(() => {
            setText(t => t.length < 11 ? t + '.' : loadingString);
        }, 200);
        return () => clearInterval(interval);
    }, []);
    return <div><span className={'loadingText'}>{text}</span></div>;
}

/**
 * @function {function} ErrorMessage
 * 
 * @param {Object} props 
 * @returns failure error message
 */
function ErrorMessage(props) {
    return props.error ? <div className={'failureMessage'}>{props.error}</div> : null;
}

/**
 * @function {function} SuccessMessage
 * 
 * @param {Object} props 
 * @returns the success message with the planet name and time taken 
 */
function SuccessMessage(props) {
    return (
        <div className={'successMessage'}>
            <div>
                <h5>Success! Congratulations on Finding Falcone. King Shah is mighty pleased.</h5>
                <div><TimeTakenComponent /></div>
                <h5> Planet Found: {props.planet}</h5>
            </div>
        </div>
    );
}

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: '',
            isRedirected: false
        };

        this.startAgainHandler = this.startAgainHandler.bind(this);
    }

    startAgainHandler() {
        const { vehicles, contextActions } = this.props;
        vehicles.forEach(v => { delete v.availble_no });
        contextActions.updateGlobalState({ selectedDataObj: {}, vehicles });
        this.setState({ isRedirected: true });
    }

    async componentDidMount() {

        const { selectedDataObj, token } = this.props;

        const body = JSON.stringify({
            token,
            planet_names: Object.keys(selectedDataObj),
            vehicle_names: Object.values(selectedDataObj)
        });
        const options = { method: 'post', headers: Utils.requestHeadersForJsonContent(), body };
        const searchResultsResponse = await fetch(Utils.BASE_URL + 'find', options);
        const searchResults = await searchResultsResponse.json();
        this.setState({ isLoading: false, ...searchResults });
    }

    render() {
        const { planet_name, status, error, isLoading, isRedirected } = this.state;
        if (isRedirected) {
            return <Redirect to={'/'} key={'home'} />;
        }
        const result = isLoading ? <LoadingText /> : (status === 'success' ?
            <SuccessMessage planet={planet_name} /> : <ErrorMessage error={
                status === 'false' ? 'Unable to find Falcone.Try again !!' : error} />);
        return (
            <div className={'resultsContainer'}>
                {result}
                <div className={'startAgain'} >
                    <button onClick={this.startAgainHandler} disabled={isLoading}> Start Again </button>
                </div>
            </div>
        );
    }
}

export default withGlobalContext(withRouter(ResultsPage));
