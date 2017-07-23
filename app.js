// first, initialize the variables that are independent of the data
var margin = { top: 30, right: 10, bottom: 30, left: 30 },
    margin2 = { top: 50, right: 30, bottom: 50, left: 50 },
    width = 500 - margin.left - margin.right,
    gridSize = Math.floor(width / 53),
    height = (gridSize * 10) - margin.top - margin.bottom,

    days = ["M", "T", "W", "T", "F"],
    weeks = ["", "J", "", "", "", "F", "", "", "", "M", "", "", "", "", "A", "", "", "", "M", "", "", "", "J", "", "", "", "", "J", "", "", "", "A", "", "", "", "S", "", "", "", "", "O", "", "", "", "N", "", "", "", "D", "", "", "", "" ],
    values = ['hike', 'bike', 'swim', 'run', 'stretch', 'climb', 'lift'],
    colors = ["#D500F9", "#651FFF", "#00B8D4", "#64DD17", "#FFD600", "#FF6D00", "#FF1744" , 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', '#800000', 'yellow', "#D500F9", "#651FFF", "#00B8D4", "#64DD17", "#FFD600", "#FF6D00", "#FF1744" , 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', '#800000', 'yellow',"#D500F9", "#651FFF", "#00B8D4", "#64DD17", "#FFD600", "#FF6D00", "#FF1744" , 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', '#800000', 'yellow',"#D500F9", "#651FFF", "#00B8D4", "#64DD17", "#FFD600", "#FF6D00", "#FF1744" , 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', '#800000', 'yellow'];


    var tooltip = d3.select("body")
    .append("div")
    .style("width",  "150px")
    .style("height", "100px")
    .style("position", "absolute")
    .style("background-color", "#CCF5F0")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text(ajaxRealTimedata());

    function ajaxRealTimedata(){
        return "Hi, I am the tooltip and this is the corresponding data of this square"
    }


 d3.tsv("heat-map-sample-data.tsv", function(data) {
        var svg=[];
        data.forEach(function(d,index,arr) {
            
            svg[index] = d3.select("#chart").append("svg") // attach chart to the DOM and center it within an svg element based on margins
                .attr("width",  d.duration*100)
                .attr("height", d.duration*100)
                .append("g"); // an svg "group", similar to an html "div"
                //.attr("transform", "translate(" + 5 + "," + 5+ ")");

                heatMap = svg[index].selectAll(".grid") // make heatMap with data, data can be a hard coded array or an array of objects brought in through another file
                    .data([index]) // play with this, but later change this it to the data that is passed in on line 24
                    .enter().append("rect")
                    .attr("width", d.duration*100)
                    .attr("height", d.duration*100)
                    .style("fill", colors[index]) // use this line as a default OR if you are using the transition() to new color
                    .on("mouseover", function(){return tooltip.style("visibility", "visible");})
                    .on("mousemove", function(){return tooltip.style("top",
                    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
                    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
        });
    });
