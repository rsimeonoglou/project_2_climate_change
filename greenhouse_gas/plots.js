var trace1 = {
  x: data_ghg.map(row => row.year),
  y: data_ghg.map(row => row.amount),
  name: "Greenhouse Gas",
  type: "scatter"
};

var trace2 = {
    x: data_co2.map(row => row.year),
    y: data_co2.map(row => row.amount),
    name: "CO2",
    type: "scatter"
  };

  var trace3 = {
    x: data_hcf.map(row => row.year),
    y: data_hcf.map(row => row.amount),
    name: "Hydrofluorocarbon",
    type: "scatter"
  };

  var trace4 = {
    x: data_nh4.map(row => row.year),
    y: data_nh4.map(row => row.amount),
    name: "Metan",
    type: "scatter"
  };

  var trace5 = {
    x: data_ntf.map(row => row.year),
    y: data_ntf.map(row => row.amount),
    name: "Nitrogen Trifluoride",
    type: "scatter"
  };

  var trace6 = {
    x: data_nox.map(row => row.year),
    y: data_nox.map(row => row.amount),
    name: "Nitrous Oxide",
    type: "scatter"
  };

  var trace7 = {
    x: data_pfc.map(row => row.year),
    y: data_pfc.map(row => row.amount),
    name: "Perfluorocarbons",
    type: "scatter"
  };

  var trace8 = {
    x: data_shf.map(row => row.year),
    y: data_shf.map(row => row.amount),
    name: "Sulphur Hexafluoride",
    type: "scatter"
  };


  
  var data1=[trace1,trace2]
  var data2=[trace3,trace4,trace5,trace6,trace7,trace8]

  var layout = {
    title: "Average Amount of Greenhouse Gas ",
    barmode: "group"
  };

  Plotly.newPlot("plot1",data1)
  Plotly.newPlot("plot2",data2)