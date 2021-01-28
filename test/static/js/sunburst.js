// And for a doughnut chart
function builddonut (data) {
  var Chart = require('chart.js');
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data.primary
}); 