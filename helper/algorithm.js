module.exports = {

  /**
   * Convert degree value to radian.
   * 
   * @param {Number} deg Degree value.
   * 
   * @returns {Number} Radian value.
   */
  deg2rad: (deg) => {
    return deg * (Math.PI / 180)
  },

  /**
   * Used to find the distance between two coordinates using `Haversine formula`.
   * 
   * @param {Number} lat1 Latitude of point 1.
   * @param {Number} lon1 Longitude of point 1.
   * @param {Number} lat2 Latitude of point 2.
   * @param {Number} lon2 Longitude of point 2.
   * 
   * @returns {Number} Distance between both point in km.
   */
  getDistanceFromLatLonInKm: (lat1, lon1, lat2, lon2) => {

    let R = 6371; // Radius of the earth in km
    let dLat = module.exports.deg2rad(lat2 - lat1);  // deg2rad conversion
    let dLon = module.exports.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(module.exports.deg2rad(lat1)) * Math.cos(module.exports.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    let d = R * c; // Distance in km
    return d;
  },
};