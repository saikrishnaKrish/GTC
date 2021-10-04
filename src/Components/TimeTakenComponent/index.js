import React from 'react'

import { withGlobalContext } from '../../Context/GlobalContextProvider';
import Utils from '../../Utils/Utils';
const {getPlanetDistance,getVehicleSpeed} =Utils;


function TimeTakenComponent(props) {
    console.log("TimeTaken component")
    console.log(props)
    const {selectedDataObj,planets,vehicles} = props;
 
    let timeTaken = 0;
    for (const planet in selectedDataObj){
        const vehicle = selectedDataObj[planet];
        const distance = getPlanetDistance(planets,planet);
        const speed= getVehicleSpeed(vehicles,vehicle);
        timeTaken = timeTaken + (speed !== 0 ? (distance/speed):0);
    }
    return (
        <div>
            Time Taken : {timeTaken}
        </div>
    )
}

export default withGlobalContext(TimeTakenComponent)