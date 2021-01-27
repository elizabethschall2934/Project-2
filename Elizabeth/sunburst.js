d3.json("horse_data.json").then(function(data) {
  var types = data.map(x => x.type)
  var breeds = data.map(x =>x.breeds.primary)
  var species = data.map(x => x.species);
  var colors = data.map(x => x.colors.primary);
  var age = data.map(x => x.age);
  var gender = data.map(x => x.gender);

  console.log(gender);

  var newArray = [...new Set(data.map(({gender}) => gender))];

  console.log(newArray);

  var newArray2 = [...new Set(data.map(({type}) => type))];

  console.log(newArray2);

  var newArray3 = [...new Set(data.map(({species}) => species))];
  newArray3.shift(); 

  console.log(newArray3);

  // data.forEach(function(data1) {
  //   data1.type = +data1.type;
  //   data1.breeds  = +data1.breeds.primary;
  //   data1.species = +data1.species;
  //   data1.colors = +data1.colors.primary;
  //   data1.age = +data1.age;
  //   data1.gender = +data1.gender;

  //   console.log(data1.species);

//   data.forEach(function(alldata) {
//     var types = alldata.map(x => x.type);
//     var breeds = alldata.map(x => x.breeds.primary);
//     var species = alldata.map(x => x.species);
//     var colors = alldata.map(x => x.colors.primary);
//     var age = alldata.map(x => x.age);
//     var gender = alldata.map(x => x.gender);

//     console.log(species);
  
  // var allspecies = [];
  // for (i = 0; i < species.length; i++) {
  //   var allspecies = `${species[i]}`;
  //   allspecies.push(allspecies);



//   var alltypes = [];
//   for (i = 0; i < types.length; i++) {
//     var alltypes = `${types[i]}`;
//     alltypes.push(alltypes);
// }

//   var allbreeds = [];
//   for (i = 0; i < breeds.length; i++) {
//     var allbreeds = `${breeds[i]}`;
//     allbreeds.push(allbreeds);
// }

  // var myArray = gender;
//   for (i = 0; i < gender.length; i++) {
//     var allgenders = `${gender[i]}`;
//     .push(allgenders);
// }

var data1 = [{
    type: "sunburst",
    labels: newArray3,
    parents: newArray2,
    // values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
    outsidetextfont: {size: 20, color: "#377eb8"},
    leaf: {opacity: 0.4},
    marker: {line: {width: 2}}
}];

var layout = {
    margin: {l: 0, r: 0, b: 0, t: 0},
    width: 500,
    height: 500
};

Plotly.newPlot('myDiv', data1, layout);
});