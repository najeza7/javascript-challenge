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
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state")
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
      
    // Get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");

    var filteredDate = tableData.filter(tableData => tableData.datetime === dateValue);
    var filteredCity = filteredDate.filter(filteredDate => filteredDate.city === cityValue);
    var filteredState = filteredCity.filter(filteredCity => filteredCity.state === stateValue);
    var filteredCountry = filteredState.filter(filteredState => filteredState.country === countryValue);
    var filteredShape = filteredCountry.filter(filteredCountry => filteredCountry.shape === shapeValue);


    tbody.html("");

    filteredShape.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

  };
