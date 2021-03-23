
// select the user input form field for start-year & end-year
var yearstartselect = d3.select("#startyear");
var yearendselect = d3.select("#endyear");

var startYear = 0;
var endYear = 0;

// select the html elements required using tags or id's
var tbody = d3.select("tbody");
var thead = d3.select("thead");
var resetButton = d3.select("#reset-btn");

// function to clear the table body to prepare for new data display
function clearDataTable() {
    tbody.html("");
    thead.html("");
};

// Reloading the table with changing data-sets or form-filters
function reloadDataTable(data) {
// clear the current data being held in the table if-any
    clearDataTable();
    
    var colrow = thead.append("tr");
    (data.columns).forEach((header)=>{
            var col = colrow.append("th");
            col.text(header);
            col.attr("class", "table-head");
        });

    (data.data).forEach((yearrow)=>{
        var row = tbody.append("tr");
        yearrow.forEach(value => {
            var cell = row.append("td");
            cell.text(value);
            cell.attr("class", "table-style");
        });
    });
};

// Loading filter start-year & end-year depending on the dataset years
function reloadFilter(data){
    startYear = data.years[0]
    endYear = data.years[data.years.length-1]    
    yearstartselect.html("");
    yearendselect.html("");
    // use a forEach to loop over each year in the array data.Year to populate dropdowns with years
    for(var i=0; i<data.years.length; i++){
        var option1 = yearstartselect.append("option");
        option1.text(data.years[i]);
        var option2 = yearendselect.append("option");
        option2.text(data.years[data.years.length -1 -i]).attr("value",data.years[data.years.length- 1- i]);      
    }
}; 
    
    
// Update table according to the date-input by the user
function optionChangedStart(year) {    
    startYear = year
    // make a copy of the data for filtering
    var filteredData =_.clone(appData);   
   
    filteredData.data = filteredData.data.filter(vyear => vyear[0]>= startYear && vyear[0] <= endYear); 

    // if the filteredData array is empty
    if (filteredData.length == 0) {
        var row = tbody.text("There is no data for your chosen filters.");        
    }
    else {
    reloadDataTable(filteredData);
    }
};
    

function optionChangedEnd(yr) {
    var endYear = yr;
    // make a copy of the data for filtering
    var filteredData =_.clone(appData);
   
    filteredData.data = filteredData.data.filter(vyear => vyear[0]>= startYear && vyear[0] <= endYear);
    
    // if filteredData array is empty
    if (filteredData.length == 0) {
        var row = tbody.text("There is no data for your chosen filters.");
    }
    reloadDataTable(filteredData);
}; 

// use the `on-click' event to the handler function for resetButton
resetButton.on("click", function(){
    init()
 });


// initializing table with dataset values
function init() {
    reloadFilter(appData);
    reloadDataTable(appData);
}

// function greenhousegases(){
//     
//         d3.json("/api/v1.0/greenhousegases").then((ghg) => {
//         d3.event.preventDefault()
//         var vyears = ghg.Year
//         console.log(ghg);
//         refreshdash();
//         reloadFilteryears(ghg);
//         resetTables(ghg);
//         plotCharts(ghg);
//         });
// }


// function comparisions(){
// // d3.json("/api/v1.0/comparisions", function(data)
//      d3.json("/api/v1.0/comparisions").then((data) => {
//         d3.event.preventDefault()
//         var vyears = data.Year
//         console.log(data);
//         refreshdash();
//         reloadFilteryears(data);
//         resetTables(data); //Empty the table element and render atleast 4 analysis charts
//         plotCharts(data);
//         });
//     }


// function charts(data){
//     var years = data1.years;
//     var population = data1.data.Rate
//     var trace = {
//         x: unpack(rows, years),
//         y: unpack(rows, population),
//         xaxis: 'x1',
//         yaxis: 'y1',
//         mode: 'lines',
//         line: {width: 2, color: '#9748a1'},
//         name: 'hash-rate-TH/s'
//       }

//     var axis = {
//         showline: true,
//         zeroline: false,
//         showgrid: true,
//         mirror:true,
//         ticklen: years.length,
//         gridcolor: '#ffffff',
//         tickfont: {size: 10},
//         }

//     var axis1 = {domain: [0.5, 1], anchor: 'y1', showticklabels: false}
//     var axis4 = {domain: [0.66, 0.98], anchor: 'x1', hoverformat: '.2f'}

//     // define layout
//   var layout = {
//     title: "Population growth rate - by country",
//     plot_bgcolor: 'rgba(228, 222, 249, 0.65)',
//     showlegend: false,
//     xaxis1: Object.assign(axis1,axis),
//     yaxis1: Object.assign(axis4,axis)
    
//   }

//   Plotly.newPlot('myChart', [trace], layout);

// };
// ==============================================================

init();