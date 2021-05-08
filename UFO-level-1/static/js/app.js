// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

////////////////////////////////////////

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

  };
