// get data from data.js
var globaltemp = data1.data;

// select the table body
var tbody = d3.select("tbody");

// select the user input form field for start-year
var yearstartselect = d3.select("#startyear");

// retrieve the form select field for end-year
var yearendselect = d3.select("#endyear");

// select the 'Filter Table' button
var filterButton = d3.select("#filter-btn");

// select the 'Reset Table' button
var resetButton = d3.select("#reset-btn");

// function to clear the table body to prepare for new data display
function clearTable() {
    tbody.html("");
};

// create a function to reset the table to default
function resetTable() {

    // clear the current data
    clearTable();
    
    // use forEach and Object.values to populate the initial table
    globaltemp.forEach((yearrow) => {
        var row = tbody.append("tr");
        Object.values(yearrow).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
            cell.attr("class", "table-style");
        }); // close second forEach
    }); // close first forEach
}; // close function resetTable()


// create a function to update table according to the date input by the user
function filterTable() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // get the user input for filtering 
    var begYear = yearstartselect.property("value")
    var endYear = yearendselect.property("value")

    // make a copy of the data for filtering
    var filteredData = globaltemp;

    // if there is a date input, filter the table according to the date
    if (yearstartselect) {
        filteredData = filteredData.filter(vyear => vyear[0]>= begYear && vyear[0]<= endYear);
    }

    // reset the table
    clearTable();

    // if the filteredData array is empty
    if (filteredData.length == 0) {
        var row = tbody.text("There is no data for your chosen filters.");
    }

    // use forEach and Object.values to populate the tbody with filtered data
    filteredData.forEach((yearrow) => {
        var row = tbody.append("tr");
        Object.values(yearrow).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
            cell.attr("class", "table-style");
        }); // close second forEach
    }); // close first forEach
}; // close function resetTable()

function myFunction()
{
    tbody = d3.select("tbody");
     yearstartselect = d3.select("#startyear");

// retrieve the form select field for city
  yearendselect = d3.select("#endyear");

// select the 'Filter Table' button
 filterButton = d3.select("#filter-btn");

// select the 'Reset Table' button
 resetButton = d3.select("#reset-btn");
 filterButton.on("click", filterTable);

// use the `on` function in d3 to attach a 'click' event to the handler function for resetButton
resetButton.on("click", resetTable);
 resetTable();
}


// use the `on` function in d3 to attach a click event to the handler function for filterButton
filterButton.on("click", filterTable);

// use the `on` function in d3 to attach a click event to the handler function for resetButton
resetButton.on("click", resetTable);

// initially populate the table by default
resetTable();

function routepop(){
    d3.json("/api/v1.0/population", function(data) {
        console.log(data);
    });

}

