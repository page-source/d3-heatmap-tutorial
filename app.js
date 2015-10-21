// set up your variables
var margin = { top: 30, right: 10, bottom: 30, left: 30 },
    width = 1000 - margin.left - margin.right,
    gridSize = Math.floor(width / 53),
    height = (gridSize * 10) - margin.top - margin.bottom,
    // legendElementWidth = gridSize * 3,
    days = ["M", "T", "W", "T", "F"],
    weeks = ["", "J", "", "", "", "F", "", "", "", "M", "", "", "", "", "A", "", "", "", "M", "", "", "", "J", "", "", "", "", "J", "", "", "", "A", "", "", "", "S", "", "", "", "", "O", "", "", "", "N", "", "", "", "D", "", "", "", "" ],
    values = ['hike', 'bike', 'swim', 'run', 'stretch', 'climb', 'lift'],
    colors = ["#D500F9", "#651FFF", "#00B8D4", "#64DD17", "#FFD600", "#FF6D00", "#FF1744"];

// d3.tsv("heat-map-sample-data.tsv", // Data parsing! Your data here: ('path', callback(), callback())
//   function(d) { // in the first cb you construct your data object
//     day = moment(d.date, "MM/DD/YYYY").day()
//     week = moment(d.date, "MM/DD/YYYY").week()
//     return {
//       date: d.date,
//       day: day,
//       week: week,
//       type: d.type
//     };
//   },
//   function(error, data) { // this is the meat of your graphic

    // var newValues = [] // find color domain
    // // make an object first
    // var valueObj = data.reduce(function (obj, key) {
    //   obj[key.type] = 0
    //   return obj
    // }, {})
    // for (key in valueObj) {
    //   newValues.push(key)
    // }
    // newValues.sort()
    // console.log(newValues);

    // var colorScale = d3.scale.ordinal()
    //     .domain(values)
    //     .range(colors);

    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // var dayLabels = svg.selectAll(".day")
    //     .data(days)
    //     .enter().append("text")
    //       .text(function (d) { return d; })
    //       .attr("x", 0)
    //       .attr("y", function (d, i) { return i * gridSize; })
    //       .style("text-anchor", "end")
    //       .attr("transform", "translate(-6," + gridSize / 1.3 + ")")
    //       .attr("class", "mono");

    // var weekLabels = svg.selectAll(".week")
    //     .data(weeks)
    //     .enter().append("text")
    //       .text(function(d) { return d; })
    //       .attr("x", function(d, i) { return i * gridSize; })
    //       .attr("y", 0)
    //       .style("text-anchor", "middle")
    //       .attr("transform", "translate(" + gridSize / 2 + ", -6)")
    //       .attr("class", "mono");

    var heatMap = svg.selectAll(".grid")
        .data([1])
        .enter().append("rect")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .attr("x", function(d) { return (d.week - 1) * gridSize; })
        .attr("y", function(d) { return (d.day - 1) * gridSize; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "bordered")
        // .style("fill", function(d) { return colorScale(d.type);})
        .style("fill", colors[0]);

//     heatMap.transition().duration(1000)
//         .style("fill", function(d) { return colorScale(d.type); })
//         .style("fill-opacity", "60%");
//
//     heatMap.append("title").text(function(d) {
//       var title = d.type + ' ' + d.date
//       return title; });
//
//     var legend = svg.selectAll(".legend")
//         .data(colorScale.domain(), function(d) { return d; })
//         .enter().append("g")
//         .attr("class", "legend");
//
//     legend.append("rect")
//       .attr("x", function(d, i) { return legendElementWidth * i; })
//       .attr("y", gridSize * 6)
//       .attr("width", legendElementWidth)
//       .attr("height", gridSize)
//       .attr("class", "bordered")
//       .attr("rx", 4)
//       .attr("ry", 4)
//       .style("fill", function(d, i) { return colors[i]; })
//       .style("fill-opacity", "60%");
//
//
//     legend.append("text")
//       .attr("class", "mono")
//       .text(function(d) { return d; })
//       .attr("x", function(d, i) { return (legendElementWidth * i) + legendElementWidth/2; })
//       .attr("y", (gridSize * 6) + (gridSize/1.4))
//       .style("text-anchor", "middle");
//
// });
