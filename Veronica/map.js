// * * *
// 
// 
// *


// Load icons that will appear when map user zooms far enough to reveal individual locations

// Paw icon, place-holder image for pets with no photo available
var pawImage = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Flight-gray%2Fpaw-256.jpg&imgrefurl=https%3A%2F%2Fwww.iconsdb.com%2Flight-gray-icons%2Fpaw-icon.html&tbnid=hc3-an4vkDeUvM&vet=12ahUKEwirgP_B_aXuAhVDoFsKHZDsCDEQMygJegUIARCVAQ..i&docid=BgYVLonhXFDHmM&w=256&h=256&q=gray%20paw%20icon&ved=2ahUKEwirgP_B_aXuAhVDoFsKHZDsCDEQMygJegUIARCVAQ";
var catImage = "pet_icons/catIcon.png";
var dogImage = "pet_icons/dogIcon.png";
var horseImage = "pet_icons/horseIcon.png";
var rabbitImage = "pet_icons/rabbitIcon.png";
var birdImage = "pet_icons/birdIcon.png";
var smallFurryImage = "pet_icons/smallFurryIcon.png";
var scalesFinsOtherImage = "pet_icons/fishIcon.png";

// Declares a function to loop through photo data for each pet to check that at least one photo is available.
// If no photo is available, a paw icon is inserted as a place-holder that will appear in the map pop-up.
function buildPhotoArray(dataTest) {
  var photos = []
  // Extract photos property of each object and store as array
  var photosToCheck = dataTest.map(x =>x.photos);

  for (var i = 0; i < photosToCheck.length; i++) {
    // Check if a picture exists.
    if (photosToCheck[i] == undefined || photosToCheck[i].small == undefined) {
      photos.push(pawImage);
    }
    else {
      photos.push(photosToCheck[i].small);
    }
  } // close for loop
  return photos;
} // close function declaration

// Declares function to select marker icon based on pet type
function getIcon(animalType)
{
    return animalType == "Cat"                  ? catImage :
           animalType == "Dog"                  ? dogImage :
           animalType == "Horse"                ? horseImage :
           animalType == "Rabbit"               ? rabbitImage :
           animalType == "Bird"                 ? birdImage :
           animalType == "Small & Furry"        ? smallFurryImage :
           animalType == "Scales, Fins & Other" ? scalesFinsOtherImage :
                                                 pawImage; // default return value
}

// Reads in coordinate look-up table
d3.json("location_lookup.json", function(lookupTable) {

// Reads in data and parses arrays of interest for markers
d3.json("data/Horse_data.json", function(data) {
  // Parse arrays of interest from json
  var street = data.map(x => x.contact.address.address1)
  var city = data.map(x =>x.contact.address.city)
  var state = data.map(x => x.contact.address.state)
  var types = data.map(x => x.type);
  var names = data.map(x => x.name);
  var photos = buildPhotoArray(data);
  var urls = data.map(x => x.url);
  
  // Loop through street, city, and state arrays to concatenate and format address components into one array of addresses
  var addresses = [];
  for (i = 0; i < state.length; i++) {
    var address = `${street[i]}, ${city[i]}, ${state[i]}`;
    addresses.push(address);
  } // close for loop

  // Pass address array to getCoordinates function to retrieve corresponding lat/longs and build locations array
  var coordinates = [];
  for (i = 0; i < addresses.length; i++) {
    try {
      var lat = lookupTable[addresses[i]][0];
      var lon = lookupTable[addresses[i]][1];
      //Append lat and long to coordinates array
      var coordinatePair = [lat, lon];
      coordinates.push(coordinatePair);
    }
    catch(err) {}
  }
createMarkers();

// Function create markers and assign design and pop-up from data
function createMarkers() 
{   
    // Creates marker cluster group to aggregate markers neatly when map user zooms out
    var markerClusters = L.markerClusterGroup();

    // Loops through data arrays
    for (var i = 0; i < 11; i++) 
    {
      // Declares string variable to hold icon URLs
      var icon = "";
      // Extract attributes needed to define markers
      var lat = coordinates[i][1];
      var lon = coordinates[i][0];
      var type = types[i];
      var name = names[i];
      var photo = photos[i];
      var url = urls[i];
      // calls getIcon() to select icon based on pet type
      iconURL = getIcon(type);

      var pawIcon = L.icon({
        iconUrl: iconURL,
        iconSize: [60, 50]
      });

      // Adds a new marker to the cluster group and binds a pop-up
      markerClusters.addLayer(L.marker([lat, lon], {icon: pawIcon})
                    .bindPopup(`<img src=${photo} width="300" height="250"<br><br><br><center><strong><a style="font-size: 20px" href=${url} target="_blank">Meet ${name}</a></strong></center>`));
    } // close for loop

    // Calls createMap function, passing in the marker layer group.
    createMap(markerClusters);
  }
  }); // Closes d3.json to read in pet data
}); // Closes d3.json to read in look-up table

  function createMap(markerClusters)
  {
    // Uses Stadia Maps base map (available at https://leaflet-extras.github.io/leaflet-providers/preview/)
    var basemap = L.tileLayer("https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; <a>Stadia Maps</a>, &copy; <a>OpenMapTiles</a> &copy; <a>OpenStreetMap</a> contributors",
      maxZoom: 15
    });
  
    // Creates an object to hold the basemap. This will be passed to the layer control.
    var baseMapChoices = {
      "Base map": basemap
    };
  
    // Creates an object to hold the layer group. This will be passed to the layer control.
    var overlayChoices = {
      "Markers": markerClusters
    };
  
    // Creates the map object, centered over California on page load
    L.map("map", {
        center: [37.5, -120],
        zoom: 7,
        layers: [basemap, markerClusters]
    })
}; // Close createMap()
