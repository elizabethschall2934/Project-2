const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
function createMap(data) {
console.log(data);
//code here for Map
var types = ["","","","","","","","",""];
types = types.concat(data.map(x => x.type));
var uniqueTypes = types.filter(unique);
var uniqueTypes2 = data.map(x => x.type).filter(unique);
var breeds = uniqueTypes.filter(x => x === 0 || x);
breeds = breeds.concat(data.map(x => x.breeds.primary));
var species = data.map(x => x.species);
var uniqueSpecies = species.filter(unique);
var colors = data.map(x => x.colors.primary);
var age = data.map(x => x.age);
var gender = data.map(x => x.gender);
var sizes = data.map(x => {
    if (x.size=="Small") {
        return 1
    }
    else if (x.size=="Medium") {
        return 2
    }
    else if (x.size=="Large") {
        return 3
    }
    else if (x.size=="Extra Large") {
        return 4
    }
    else {
        return 0
    }
});
console.log(types);
console.log(uniqueTypes);
console.log(breeds);

var data1 = [{
    type: "sunburst",
    labels: breeds,
    parents: types,
    values: sizes,
    outsidetextfont: {size: 20, color: "#377eb8"},
    leaf: {opacity: 0.4},
    marker: {line: {width: 2}},
}];

var layout = {
    margin: {l: 0, r: 0, b: 0, t: 0},
    width: 500,
    height: 500
};

Plotly.newPlot('graph', data1, layout);
}