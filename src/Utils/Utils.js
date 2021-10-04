export const BASE_URL="https://findfalcone.herokuapp.com/";
export const DESTINATION_COUNT=4;


function requestHeadersForJsonContent() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

function isValidObject(object, length) {
    const isValidArray  = (arr) => size(filterByValue(arr)) === 0 && size(arr) === length;
    return (!object || !length || (isValidArray(Object.keys(object)) && isValidArray(Object.values(object))) );
}

function findByName(objectArray, name) {
    return (objectArray || []).find(obj=>obj.name === name);
}

function getValueByKey(object, key, defaultValue) {
    return object && key && object[key] ? object[key] : defaultValue;
}

function filterByValue(valueArray, value) {
    if(!valueArray) return [];
    return valueArray.filter(v => v === value);
}

function size(arrayObject) {
    return !arrayObject ? 0 : arrayObject.length;
}

function getPlanetDistance(planetsArray, planet, defaultValue=0) {
    return getValueByKey(findByName(planetsArray, planet), 'distance', defaultValue);
}

function getVehicleSpeed(vehiclesArray, vehicle, defaultValue=0) {
    return getValueByKey(findByName(vehiclesArray, vehicle), 'speed', defaultValue);
}

export default {
    BASE_URL,
    DESTINATION_COUNT,
    isValidObject,
    findByName,
    filterByValue,
    getValueByKey,
    size,
    requestHeadersForJsonContent,
    getPlanetDistance,
    getVehicleSpeed
}


