Plotly.d3.csv('static/data/six-dem_mod.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

       var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'ctr'),
            z: unpack(rows, 'idv'),
            text: unpack(rows, 'country'),
            colorscale: [
                [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
                [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
                [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
            autocolorscale: false,
            reversescale: true,
            marker: {
                line: {
                    color: 'rgb(180,180,180)',
                    width: 0.5
                }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
                autotic: false,
                tickprefix: '',
                title: 'Individualism Value'
            }
      }];

      var layout = {
          title: 'Individualism World Map',
          width: 1200,
          height: 1000,
          geo:{
              width: 1000,
              showframe: true,
              showcoastlines: true,
              projection:{
                  type: 'mercator'
              }
          }
      };
      Plotly.newPlot("choropleth", data, layout, {showLink: false});
});