import React from 'react'
import './style.css'

//GlobalContext
import { withGlobalContext } from '../../Context/GlobalContextProvider'

//components
import TimeTakenComponent from '../TimeTakenComponent'
import EntityBlockComponent from '../EntityBlockComponent/EntityBlockComponent'
import FindFalcone from '../FindFalconeComponent'
//utils
import { DESTINATION_COUNT } from '../../Utils/Utils'


import {Row, Col,Container} from 'reactstrap';


const destinations = Array.from(Array(DESTINATION_COUNT).keys())
function MainComponent(props) {
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


export default withGlobalContext(MainComponent);
