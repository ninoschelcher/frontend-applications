import { fetchEndpoints } from './fetchEndpoints.js'
import { parkingSpecifications, geoLocations, row, cityCode } from '../helpers/dataEndpoints';
import { getSpecificLocation } from './specificLocation.js'
import { combineDataSets } from './combineData.js'

export default async function fetchData () {
  const parkingSpotSpecification = await fetchEndpoints(parkingSpecifications);
  const geoLocation = await fetchEndpoints(geoLocations);
  const specificLocations = getSpecificLocation(
    parkingSpotSpecification,
    row,
    cityCode
  );
  const combinedData = combineDataSets(specificLocations, geoLocation);
  console.log("Raw output data",combinedData);
  return combinedData;
}
