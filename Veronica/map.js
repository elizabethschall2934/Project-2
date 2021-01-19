// * * *
// 
// 
// *

// Paw icon, place-holder image for pets with no photo available
var pawIconURL = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Flight-gray%2Fpaw-256.jpg&imgrefurl=https%3A%2F%2Fwww.iconsdb.com%2Flight-gray-icons%2Fpaw-icon.html&tbnid=hc3-an4vkDeUvM&vet=12ahUKEwirgP_B_aXuAhVDoFsKHZDsCDEQMygJegUIARCVAQ..i&docid=BgYVLonhXFDHmM&w=256&h=256&q=gray%20paw%20icon&ved=2ahUKEwirgP_B_aXuAhVDoFsKHZDsCDEQMygJegUIARCVAQ";

// Declares a function to loop through photo data for each pet to check that at least one photo is available.
// If no photo is available, a paw icon is inserted as a place-holder that will appear in the map pop-up.
function buildPhotoArray(dataTest) {
  var photos = []
  // Extract photos property of each object and store as array
  var photosToCheck = dataTest.map(x =>x.photos);

  for (var i = 0; i < photosToCheck.length; i++) {
    // Check if a picture exists.
    if (photosToCheck[i] == undefined || photosToCheck[i].small == undefined) {
      photos.push(pawIconURL);
    }
    else {
      photos.push(photosToCheck[i].small);
    }
  } // close for loop
  return photos;
} // close function declaration

d3.json("data-for-map.json", function(data) {
  // Parse arrays of interest from json
  var locations = data.map(x => x.coordinates);
  var types = data.map(x => x.type);
  var names = data.map(x => x.name);
  var photos = buildPhotoArray(data);
  var urls = data.map(x => x.url);
});



// function createMarkers(response) 
// {

  
//     // Initializes an array to hold circle symbols to represent earthquake events
//     var icons = [];
  
//     // Loops through the array of geoJSON features
//     for (var i = 0; i < pets.length; i++) {
//       var pet = pets[i];

//       // For each feature, extract attributes
//       var lat = earthquake.geometry.coordinates[1];
//       var lon = earthquake.geometry.coordinates[0];
//       var depth = earthquake.geometry.coordinates[2];
//       var symbolSize = earthquake.properties.mag*100000; // Circle radius is measured in meters so a large factor is required to make the circles visible at a global scale.
//       var description = earthquake.properties.title;
//       var date = new Date(earthquake.properties.time);

//       // calls getColor to get color associated with depth
//       color = getColor(depth);

//       // For each feature (earthquake event), creates a circle with radius proportional to earthquake magnitude
//       // and color proportional to earthquake depth. Binds a popup with the earthquake location description and magnitude
//       circle = L.circle([lat, lon], {
//           fillOpacity: 0.5,
//           fillColor: color,
//           color: color,
//           radius: symbolSize
//       }).bindPopup("<center><p>Earthquake Details<hr>"+description+"<br>"+date+"</center>");
    
//       // Adds the circle to the circles array
//       circles.push(circle);
//     }
//     // Stores circles in layer group
//     circleLayerGroup = L.layerGroup(circles);

//     // Calls createMap function, passing in the marker layer group.
//     createMap(circleLayerGroup, earthquake, circles);
//   }
  
//   function createMap(circleLayerGroup, earthquake, circles) 
//   {
//     // Creates the tile layer that will be the background of our map
//     var basemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "dark-v10",
//       accessToken: API_KEY
//     });
  
//     // Creates an object to hold the basemap. This will be passed to the layer control.
//     var baseMapChoices = {
//       "Base map": basemap
//     };
  
//     // Creates an object to hold the layer group. This will be passed to the layer control.
//     var overlayChoices = {
//       "Circles": circleLayerGroup
//     };
  
//     // Creates the map object with default parameters
//     var map = L.map("map", {
//         center: [25, 0],
//         zoom: 3,
//         layers: [basemap, circleLayerGroup]
//     }).on("zoomend", function() {
//         circleLayerGroup.eachLayer(function(layer) {
//             layer.setRadius(20000);
//         });
//     });

//     // Creates a layer control object, passes in the base map and overlay choices. Add the layer control to the map.
//     L.control.layers(baseMapChoices, overlayChoices, {
//       collapsed: false
//     }).addTo(map);
//   }

//   // Declares function to select color based on depth of earthquake event
//   function getColor(depth) {
//       return depth < 0 ? "#ff3399":
//              depth < 50 ? "#d92626":
//              depth < 100 ? "#b94646":
//              depth < 150 ? "#996666":
//              depth < 500 ? "#808080":
//                        "#000000"
//   };
  
// Read in API data, then call createMarkers function, passing API response. 
//d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", createMarkers);
