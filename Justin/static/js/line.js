<<<<<<< HEAD
=======
function draw_line(c, data){
    console.log(c);  
    var lineGen = d3.svg.line()
        .x(function(d) {
            return xScale(d.date);
        })
        .y(function(d) {
            console.log(d[c]);
            return yScale(d[c]);
        })
        .interpolate("basis");
    return lineGen(data); 
};

var data = d3.csv("new_test2.csv", function(data) {
    vis.append('svg:path')
    .attr('d', draw_line('A', data))
    .attr('stroke', 'green')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    vis.append('svg:path')
    .attr('d', draw_line('B', data))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
});
>>>>>>> f7ad199650f715b38837ea8cfeff68efa383558e
