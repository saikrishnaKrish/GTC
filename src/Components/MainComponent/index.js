import React from 'react'
import './style.css'

//GlobalContext
import {withGlobalContext} from '../../Context/GlobalContextProvider'

//components
import TimeTakenComponent from '../TimeTakenComponent'
import EntityBlockComponent from '../EntityBlockComponent/EntityBlockComponent'
import FindFalcone from '../FindFalconeComponent'
//utils
import {DESTINATION_COUNT} from '../../Utils/Utils'


const destinations = Array.from(Array(DESTINATION_COUNT).keys())
function MainComponent(props) { 
    return (
        <div>
            <TimeTakenComponent/>
            <div className="dropdownMenu">
            {destinations.map((index) => <EntityBlockComponent key= {index}/>)}
            </div>
            <FindFalcone {...props}/>
        </div>
    )
}


export default withGlobalContext(MainComponent);
