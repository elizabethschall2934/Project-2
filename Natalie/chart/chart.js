var myJson = '{"species":{"0":"Cat","1":"Chicken","2":"Chinchilla","3":"Dog","4":"Donkey","5":"Dove","6":"Duck","7":"Finch","8":"Fish","9":"Goat","10":"Guinea Pig","11":"Hamster","12":"Horse","13":"Miniature Horse","14":"Mouse","15":"Parakeet","16":"Parrot","17":"Pig","18":"Pot Bellied","19":"Rabbit","20":"Rat","21":"Reptile","22":"Sheep","23":"Snake","24":"Turtle"},"count":{"0":4891,"1":48,"2":12,"3":5803,"4":2,"5":187,"6":4,"7":2,"8":4,"9":13,"10":159,"11":80,"12":1,"13":34,"14":17,"15":2,"16":24,"17":19,"18":19,"19":820,"20":18,"21":6,"22":2,"23":9,"24":39}}';
var figure = JSON.parse(myJson);

species = figure.species
count = figure.count

var trace1 = {
    x: species,
    y: count,
    type: 'bar'
};

var data = [trace1];

var layout = {
  title: "Popular Pets"
};

Plotly.newPlot("plot", data, layout);
