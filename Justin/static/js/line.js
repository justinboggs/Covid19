d3.csv("data/merged_data_modified.csv").then(function(covidData) {

    console.log(covidData);

    covidData.forEach(function(data) {
        data.cases = +data.cases;
        data.days_gt_100 = +data.days_gt_100;
        
        var trace1 = {
            x: [data.days_gt_100],
            y: [data.cases],
            type: 'scatter'
        }

        var linedata = [trace1];

        Plotly.newPlot("line", linedata);
    });

    // var trace1 = {
    //     x: [data.days_gt_100],
    //     y: [data.cases],
    //     type: 'scatter'
    // };

    // var data = [trace1];

    // Plotly.newPlot('line', data);

});