// from data.js
var tableData = data;

//Define variables
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Append table to web page
data.forEach(function(tableData) {
    //console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      //console.log(key, value);
      /// Add new rows for each UFO sighting
      var cell = row.append("td");
      cell.text(value);
    });
});


// Attach an event to detect changes to the input field.
button.on("click", function(handleClick){
    d3.event.preventDefault();
    tbody.html("");
//Search through the date/time column to find rows that match user input.
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
var filteredTable = tableData.filter(d => d.datetime === inputValue);

//Append filtered table
filteredTable.forEach(function(filteredDate){
    var row = tbody.append("tr");
    Object.entries(filteredDate).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);

    });
});

console.log(filteredTable)
});



