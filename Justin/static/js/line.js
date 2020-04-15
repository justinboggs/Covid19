d3.csv("data/merged_data_modified.csv").then(function(covidData) {

    console.log(covidData);

    var trace1 = {
        x: [covidData.days_gt_100],
        y: [covidData.cases],
        type: 'scatter'
    };

    var data = [trace1];

    Plotly.newPlot('line', data);

});