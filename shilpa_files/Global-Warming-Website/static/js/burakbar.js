var trace1 = {
    x: data_co2.map(row => row.year),
    y: data_co2.map(row => row.amount),
    name: "CO2",
    type: "bar"
  };
  
  // Trace 2 for the Roman Data
  var trace2 = {
    x: data_ghg.map(row => row.year),
    y: data_ghg.map(row => row.amount),
    name: "Greenhouse Gas",
    type: "bar"
  };

  var trace2a = {
    x: data_ghg_co2.map(row => row.year),
    y: data_ghg_co2.map(row => row.amount),
    name: "Greenhouse Gas with indirect C02",
    type: "bar"
  };

  var trace3 = {
    x: data_hcf.map(row => row.year),
    y: data_hcf.map(row => row.amount),
    name: "Hydrofluorocarbon",
    type: "bar"
  };

  var trace4 = {
    x: data_nh4.map(row => row.year),
    y: data_nh4.map(row => row.amount),
    name: "Metan",
    type: "bar"
  };

  var trace5 = {
    x: data_ntf.map(row => row.year),
    y: data_ntf.map(row => row.amount),
    name: "Nitrogen Trifluoride",
    type: "bar"
  };

  var trace6 = {
    x: data_nox.map(row => row.year),
    y: data_nox.map(row => row.amount),
    name: "Nitrous Oxide",
    type: "bar"
  };

  var trace7 = {
    x: data_pfc.map(row => row.year),
    y: data_pfc.map(row => row.amount),
    name: "Perfluorocarbons",
    type: "bar"
  };

  var trace8 = {
    x: data_shf.map(row => row.year),
    y: data_shf.map(row => row.amount),
    name: "Sulphur Hexafluoride",
    type: "bar"
  };
  
  // Combining both traces
  var traceData1 = [trace1, trace2,trace2a];
  var traceData2=[trace3,trace4,trace6]

  
  // Apply the group barmode to the layout
  var layout1 = {
    title: "Average Amount of C02 and Greenhouse Gas ",
    barmode: "group",
    xaxis: {
        type: 'log',
        autorange: true
      }
  };

  var layout2 = {
    title: "Average Amount of Other Greenhouses ",
    barmode: "group",
    xaxis: {
        type: 'log',
        autorange: true
      }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("myChart1", traceData1, layout1);
  Plotly.newPlot("myChart2", traceData2, layout2);