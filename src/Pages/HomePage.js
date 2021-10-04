import React from 'react';

//GlobalContext
import { withGlobalContext } from '../Context/GlobalContextProvider';

//components
import TimeTakenComponent from '../Components/TimeTakenComponent';
import EntityBlockComponent from '../Components/EntityBlockComponent/EntityBlockComponent';
import FindFalcone from '../Components/FindFalconeComponent';
//utils
import { DESTINATION_COUNT } from '../Utils/Utils'
import {Row, Col,Container} from 'reactstrap';
//styles
import './HomePage.css';


const destinations = Array.from(Array(DESTINATION_COUNT).keys())
/**
 * @function {function} HomePage 
 * 
 * @param {Object} props 
 * @returns a dropdown menu and timetaken component on to UI
 */
function HomePage(props) {
    return (
        <div>

            <div>
                <Container className="mt-4">
                    <Row className="destinationsMenu">
                        <h5>Select Planets you want to search in: </h5>
                        {destinations.map((index) => <Col><EntityBlockComponent key={index} /></Col>)}
                        <Col><TimeTakenComponent /></Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-10">
                <FindFalcone {...props} />
            </div>
        </div>
    )
}


export default withGlobalContext(HomePage);
