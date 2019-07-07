/***************************External NPM Module************************/
const config = require('config');

/***************************Internal Module***************************/
const { algorithm } = require('./helper');

module.exports =
  /**
   * Find the userIDs in ascending order with given distance and coordinates defined in config.
   * 
   * @param {Object} listOfGuests Contain object of list of all guests
   * 
   * @returns List of guest with userIds sorted within given distance. 
   */
  (listOfGuests) => {
    if (typeof (listOfGuests) === "object") {
      let sourceLatitude = config.get("General").lat;
      let sourceLongitude = config.get("General").lon;
      let distance = config.get("General").distance;

      let closeRelatives = listOfGuests.filter(value => {
        let distanceBtwPoints = algorithm.getDistanceFromLatLonInKm(sourceLatitude, sourceLongitude, value.latitude, value.longitude);
        if (distanceBtwPoints <= distance) {
          return true;
        }
      });
      closeRelatives.sort((a, b) => {
        return a.user_id > b.user_id;
      })
      let finalResponse = closeRelatives.map(value => {
        delete value.longitude;
        delete value.latitude;
        return value;
      })

      return finalResponse;
    } else {
      throw Error("Function param needs to be object type");
    }
  }