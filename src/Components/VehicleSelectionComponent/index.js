import React from "react";
import { RadioGroup, Radio } from "react-radio-group";

//importing GlobalContext for accessing props
import { withGlobalContext } from "../../Context/GlobalContextProvider";
//styles
import "./VehicleSelectionComponentStyle.css";

/**
 * @function {function} SelectVehicle
 *
 * @param {Object} props
 * @returns Selected Vehicle from available vehicles
 */
function SelectVehicle(props) {
  const { className, name, isDisabled, availableVehicleCount, totalVehicles } =
    props;

  return (
    <div className={className} key={name}>
      <Radio value={name} disabled={isDisabled} /> {name} (
      {availableVehicleCount}/{totalVehicles})
    </div>
  );
}

/**
 * @function {function} VehicleSelectionComponent
 *
 * @param {Object} props
 * @returns the available vehicles menu
 */
function VehicleSelectionComponent(props) {
  const { vehicles, planet, vehicleChangeHandler, distance } = props;
  const radioOptions = (planet != null ? vehicles : []).map((vehicle) => {
    const name = vehicle.name;
    const totalVehicles = vehicle.total_no;
    const availableVehicleCount =
      vehicle.availble_no !== undefined ? vehicle.availble_no : totalVehicles;
    const isDisabled =
      distance > vehicle.max_distance || availableVehicleCount === 0;
    const className = isDisabled ? "disabledLabel" : "";

    return (
      <SelectVehicle
        className={className}
        key={name}
        name={name}
        isDisabled={isDisabled}
        availableVehicleCount={availableVehicleCount}
        totalVehicles={totalVehicles}
      />
    );
  });

  return (
    <div>
      <RadioGroup
        name={planet}
        onChange={vehicleChangeHandler}
        id="vehiclesMenu"
      >
        {radioOptions}
      </RadioGroup>
    </div>
  );
}

export default withGlobalContext(VehicleSelectionComponent);
