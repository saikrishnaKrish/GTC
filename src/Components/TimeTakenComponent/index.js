import React from "react";

//importing GlobalContext for accessing props
import { withGlobalContext } from "../../Context/GlobalContextProvider";
//importing Utils
import Utils from "../../Utils/Utils";

const { getPlanetDistance, getVehicleSpeed } = Utils;
/**
 * @function {function} TimeTakenComponent
 *
 * @param {Object} props
 * @returns Timetaken based on the selected vehicles and planets
 */
function TimeTakenComponent(props) {
  const { selectedDataObj, planets, vehicles } = props;

  let timeTaken = 0;
  for (const planet in selectedDataObj) {
    const vehicle = selectedDataObj[planet];
    const distance = getPlanetDistance(planets, planet);
    const speed = getVehicleSpeed(vehicles, vehicle);
    timeTaken = timeTaken + (speed !== 0 ? distance / speed : 0);
  }
  return <div>Time Taken : {timeTaken}</div>;
}

export default withGlobalContext(TimeTakenComponent);
