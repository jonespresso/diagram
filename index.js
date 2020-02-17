let data = [4, 8, 15, 16, 23, 42];

// width of the viewport
let height = 420;
// height of the bar
let barWidth = 20;
// mapping from data to bar length (width)
let barHeight = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, height]);
// initialize svg viewport
let chart = d3.select(".chart")
    .attr("height", height)
    .attr("width", barWidth * data.length);

let bar = chart.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (d, i) => "translate(" + i * barWidth + ", 0)");

bar.append("rect")
    .attr("y", d => barTop(height, barHeight(d)))
    .attr("height", barHeight)
    .attr("width", barWidth - 1);

bar.append("text")
    .attr("y", d => barTextTop(height, barHeight(d)))
    .attr("x", barWidth / 2)
    .attr("dy", ".75em")
    .text(d => d);

function barTop(viewHeight, barHeight)
{
    return viewHeight - barHeight;
}

function barTextTop(viewHeight, barHeight)
{
    return barTop(viewHeight, barHeight) + 3;
}