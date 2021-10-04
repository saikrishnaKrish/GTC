import React, { Component } from 'react';

import HeaderComponent from '../Components/HeaderComponent';
import SubHeader from '../Components/HeaderComponent/SubHeader';
import FooterComponent from '../Components/FooterComponent';
import MainComponent from '../Components/MainComponent'

import GlobalContextProvider from '../Context/GlobalContextProvider';


export class HomePage extends Component {
    render() {
        return (
            <GlobalContextProvider>
                <HeaderComponent />
                <SubHeader />
                <MainComponent/>
                <FooterComponent />
            </GlobalContextProvider>
        )
    }
}

export default HomePage
