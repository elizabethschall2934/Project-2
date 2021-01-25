d3.json("cats_data.json", function(data) {
  var types = data.map(x => x.type)
  var breeds = data.map(x =>x.breeds.primary)
  var species = data.map(x => x.species);
  var colors = data.map(x => x.colors.primary);
  var age = data.map(x => x.age);
  var gender = data.map(x => x.gender);
  
  var allspecies = [];
  for (i = 0; i < species.length; i++) {
    var aspecies = `${species[i]}`;
    allspecies.push(aspecies);
}

  var alltypes = [];
  for (i = 0; i < types.length; i++) {
    var atype = `${types[i]}`;
    alltypes.push(atype);
}

  var allbreeds = [];
  for (i = 0; i < breeds.length; i++) {
    var abreed = `${breeds[i]}`;
    allbreeds.push(abreed);
}

  var allcolors = [];
  for (i = 0; i < colors.length; i++) {
    var acolor = `${colors[i]}`;
    allcolors.push(acolor);
}

var data1 = [{
    type: "sunburst",
    labels: [atype],
    parents: [abreed],
    values: [acolor],
    outsidetextfont: {size: 20, color: "#377eb8"},
    leaf: {opacity: 0.4},
    marker: {line: {width: 2}},
}];

var layout = {
    margin: {l: 0, r: 0, b: 0, t: 0},
    width: 500,
    height: 500
};

Plotly.newPlot('myDiv', data1, layout);
}) 