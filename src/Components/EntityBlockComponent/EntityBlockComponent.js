import React, { Component } from 'react'

//Components
import PlanetSelectionComponent from '../PlanetSelectionComponent'
import VehicleSelectionComponent from '../VehicleSelectionComponent'
//GlobalConext Provider
import { withGlobalContext } from '../../Context/GlobalContextProvider'
//utils
import Utils from '../../Utils/Utils';


function DetailsRow(props){
    const {label,value,className} = props;
    const classes = (className ? className + ' ' : '') + 'label';
    return (
        <div className={classes}><span>{label}:</span>{value} </div>
    );
}

function PlanetDetailsPanel(props) {
    const { distance } = props;
    return distance ? <DetailsRow label={'Distance'} value={distance} classNames={'borderBottomLogoGreen'}/>
        : null;
}

function VehicleDetailsPanel(props) {
    const { vehicle } = props;
    if(!vehicle)
        return null;

    const {name, max_distance, speed} = vehicle;
    return (<div className={'subDetailsPanel'}>
        <DetailsRow label={'Name'} value={name} classNames={'borderTopLogoGreen'}/>
        <DetailsRow label={'Max Distance'} value={max_distance}/>
        <DetailsRow label={'Speed'} value={speed}/>
    </div>);
}

export class EntityBlockComponent extends Component {
constructor(props) {
    super(props)

    this.state = {};
    this.selectPlanet = this.selectPlanet.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
}


selectPlanet(chosenOption,prevOption){
    const {selectedDataObj,planets,contextActions,vehicles} =this.props;
    const selectedPlanet = chosenOption.value;
    const distance = Utils.getPlanetDistance(planets,selectedPlanet);
    selectedDataObj[selectedPlanet] = undefined;
    if(prevOption){
        delete selectedDataObj[prevOption.value];
    }

    this.recalculateVehicleAvailability(selectedDataObj,vehicles);
    contextActions.updateGlobalState({selectedDataObj,vehicles})
    this.setState({selectedPlanet,distance,selectedVehicle:undefined});
}

selectVehicle(selectedVehicle){
    console.log(selectedVehicle);
    console.log(this.props)
    const {contextActions,selectedDataObj,vehicles}= this.props;
    const {selectedPlanet } =this.state;
    selectedDataObj[selectedPlanet]= selectedVehicle;
    this.recalculateVehicleAvailability(selectedDataObj,vehicles);
    this.setState({selectedVehicle:Utils.findByName(vehicles,selectedVehicle)});
    contextActions.updateGlobalState({selectedDataObj,vehicles});
}

recalculateVehicleAvailability=(selectedObj,vehicles)=>{
        const vehiclesSelected = Object.values(selectedObj);

        return  vehicles.map((vehicle) => {
            const totalSelected = Utils.size(Utils.filterByValue(vehiclesSelected,vehicle.name));
            vehicle.availble_no = vehicle.total_no - (totalSelected ?totalSelected :0);
            return vehicle;
        })
    }

    render() {
        const {selectedPlanet, distance, selectedVehicle} = this.state;

        return (
            <div className={'entitySelectionPanel'}>
            <PlanetSelectionComponent {...this.props} planetChangeHandler={this.selectPlanet}/>
            <PlanetDetailsPanel distance={distance}/>
            <VehicleSelectionComponent {...this.props}
                distance={distance}
                planet={selectedPlanet}
                key={selectedPlanet}
                vehicleChangeHandler={this.selectVehicle}/>
            <VehicleDetailsPanel vehicle={selectedVehicle} />
        </div>
        )
    }
}

export default withGlobalContext(EntityBlockComponent)
