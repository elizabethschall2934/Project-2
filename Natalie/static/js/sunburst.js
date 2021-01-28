d3.json("/getPetData").then(function(data) {
  // Parse arrays of interest from json
  var species = data.map(x => x.species)

  // Loops through street, city, and state arrays to concatenate and format address components into one array of addresses
  var addresses = [];
  for (i = 0; i < state.length; i++) {
    var address = `${street[i]}, ${city[i]}, ${state[i]}`;
    addresses.push(address);
  } // closes for loop

  // Passes address array to getCoordinates function to retrieve corresponding lat/longs and build locations array
  var coordinates = [];
  for (i = 0; i < addresses.length; i++) {
    try {
      var lat = lookupTable[addresses[i]][0];
      var lon = lookupTable[addresses[i]][1];
      //Appends lat and long to coordinates array
      var coordinatePair = [lat, lon];
      coordinates.push(coordinatePair);
    }
    catch (err) { }
  }

  createMarkers();
