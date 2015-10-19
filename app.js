// d3.tsv("TTtestData.tsv", function(d) {
//   console.log(d);
//   return {
//     userId: +d.userId,
//     date: d.date,
//     distance: +d.distance,
//     dwDistance: +d.dwDistance
//     type: d.type,
//     dayPart: d.dayPart
//   };
// }, function(error, data) {
//   console.log(data);
// });

var margin = { top: 50, right: 0, bottom: 100, left: 30 },
    width = 960 - margin.left - margin.right,
    height = 430 - margin.top - margin.bottom,
    gridSize = Math.floor(width / 38),
    legendElementWidth = gridSize*5,
    colors = ["#D500F9","#FFD600","#FF1744","#651FFF","#00B8D4","#64DD17","#FF6D00"], // alternatively colorbrewer.YlGnBu[9]
    days = ["M", "T", "W", "T", "F"],
    weeks = ["A", "", "S", "", "", "", "O", "", "", "", "N", "", "", "", "D", "", "", "", "J", "", "", "", "F", "", "", "", "M", "", "", "", "A", "", "", "", "M", "", "", ""];

d3.tsv("TTtestData.tsv",
  function(d) {
    console.log(d)
    day = moment(d.date, "MM/DD/YYYY").day()
    week = moment(d.date, "MM/DD/YYYY").week()
    console.log(day);
    console.log(week);
    return {
      day: day,
      week: week,
      type: d.type
    };
  },
  function(error, data) {
    var colorScale = d3.scale.ordinal()
        .domain(['carpool', 'school bus', 'rtd', 'drive and drop', 'walk', 'bike', 'skate/scoot'])
        .range(colors);

    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "svg-chart")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var dayLabels = svg.selectAll(".dayLabel")
        .data(days)
        .enter().append("text")
          .text(function (d) { return d; })
          .attr("x", 0)
          .attr("y", function (d, i) { return i * gridSize; })
          .style("text-anchor", "end")
          .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
          .attr("class", "mono");
          // .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

    var timeLabels = svg.selectAll(".weekLabel")
        .data(weeks)
        .enter().append("text")
          .text(function(d) { return d; })
          .attr("x", function(d, i) { return i * gridSize; })
          .attr("y", 0)
          .style("text-anchor", "middle")
          .attr("transform", "translate(" + gridSize / 2 + ", -6)")
          .attr("class", "mono");
          // .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "weekLabel mono axis axis-week" : "weekLabel mono axis"); });

    var heatMap = svg.selectAll(".week")
        .data(data)
        .enter().append("rect")
        .attr("x", function(d) { return (d.week - 1) * gridSize; })
        .attr("y", function(d) { return (d.day - 1) * gridSize; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "week bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("fill", colors[0]);

    heatMap.transition().duration(1000)
        .style("fill", function(d) { return colorScale(d.type); })
        .style("fill-opacity", "50%");

    heatMap.append("title").text(function(d) { return d.type; });

    var legend = svg.selectAll(".legend")
        .data(colorScale.domain(), function(d) { return d; })
        .enter().append("g")
        .attr("class", "legend");

    legend.append("rect")
      .attr("x", function(d, i) { return legendElementWidth * i; })
      .attr("y", height)
      .attr("width", legendElementWidth)
      .attr("height", gridSize)
      // .attr("text", function(d) {return d.type})
      .attr("class", "bordered")
      .attr("rx", 4)
      .attr("ry", 4)
      .style("fill", function(d, i) { return colors[i]; })
      .style("fill-opacity", "50%");

    legend.append("text")
      .attr("class", "mono")
      .text(function(d) { return d; })
      .attr("x", function(d, i) { return (legendElementWidth * i) + 10; })
      .attr("y", height + (gridSize/1.5 ));
});
