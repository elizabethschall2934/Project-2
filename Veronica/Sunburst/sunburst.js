console.log("Hello prints perfectly fine before d3.json...")

d3.json("testdata.json").then(function(dataset) {
  console.log(dataset);
});

console.log("Done!")


