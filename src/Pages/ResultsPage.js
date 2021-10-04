import React, { Component,useState, useEffect } from 'react';
import {Redirect, withRouter} from "react-router-dom";

import TimeTakenComponent from '../Components/TimeTakenComponent';
import Utils from '../Utils/Utils';

import { withGlobalContext } from '../Context/GlobalContextProvider';

function LoadingText() {
    const loadingString = 'Loading';
    const [text, setText] = useState(loadingString);
    useEffect(() => {
        const interval = setInterval(() => {
            setText(t=> t.length < 11 ? t+'.' : loadingString);
        }, 200);
        return () => clearInterval(interval);
    }, []);
    return <div><span className={'loadingText'}>{text}</span></div>;
}

function ErrorMessage(props) {
    return props.error ? <div className={'failureMessage'}>{props.error}</div> : null;
}

function SuccessMessage(props) {
    return (
        <div className={'successMessage'}>
            <div>
                Found Falcone in {props.planet}
                <div><TimeTakenComponent /></div>
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
        console.log(props)
        this.startAgainHandler = this.startAgainHandler.bind(this);
    }

    startAgainHandler() {
        const { vehicles, contextActions } = this.props;
        vehicles.forEach(v=>{delete v.availble_no});
        contextActions.updateGlobalState({selectedDataObj: {}, vehicles});
        this.setState({isRedirected: true});
    }
    async componentDidMount() {
        console.log(this.props)
        // const { selectedDataObj, token } = this.props;
        // console.log(selectedDataObj)
        // const body = JSON.stringify({
        //     token,
        //     planet_names: Object.keys(selectedDataObj),
        //     vehicle_names: Object.values(selectedDataObj)
        // });
        // const options = { method: 'post', headers: Utils.requestHeadersForJsonContent(), body };
        // const searchResultsResponse = await fetch(Utils.BASE_URL + 'find', options);
        // const searchResults = await searchResultsResponse.json();
        // this.setState({isLoading: false, ...searchResults});
    }

    render() {
        const {planet_name, status, error, isLoading, isRedirected} = this.state;
        if(isRedirected) {
            return <Redirect to={'/'} key={'home'}/> ;
        }
        const result = isLoading ? <LoadingText /> : (status === 'success' ?
                <SuccessMessage planet={planet_name}/> : <ErrorMessage error={
                    status === 'false' ? 'Unable to find Falcone. Sorry!!' : error}/>);
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
