import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'

import { withGlobalContext } from '../../Context/GlobalContextProvider';

function SelectVehicle(props){
    const {className, name, isDisabled, availableVehicleCount, totalVehicles} = props;
    return( <div className={className} key={name}>
        <Radio value={name} disabled={isDisabled}/>  {name} ({availableVehicleCount}/{totalVehicles})            
        </div>
        )
}

function VehicleSelectionComponent(props) {
    const { vehicles, planet, vehicleChangeHandler, distance } = props;
    const radioOptions = (planet != null ? vehicles : []).map( vehicle => {
        const name =  vehicle.name;
        const totalVehicles =  vehicle.total_no;
        const availableVehicleCount =  vehicle.availble_no !== undefined ?  vehicle.availble_no : totalVehicles;
        const isDisabled = distance >  vehicle.max_distance || availableVehicleCount === 0 ;
        const className = isDisabled ? 'disabledLabel' : '';
        return <SelectVehicle className={className}
                     key={name} name={name}
                     isDisabled={isDisabled}
                     availableVehicleCount={availableVehicleCount}
                     totalVehicles={totalVehicles}/>;

    });
    return (
        <div>
            <RadioGroup name={planet} onChange={vehicleChangeHandler}>
                {radioOptions}
            </RadioGroup>
        </div>
    )
}


export default withGlobalContext(VehicleSelectionComponent)
