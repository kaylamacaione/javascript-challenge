// from data.js
var tableData = data;

//Define variables
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// YOUR CODE HERE!
// Append table to web page
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      /// Add new rows for each UFO sighting
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Attach an event to detect changes to the input field.
button.on("click", handleClick);
form.on("submit",handleClick);


  //Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
  function handleClick(tableData) {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredTable = tableData.filter(d => {
        return d.datetime === inputElement.property("value")
      })
    //var filteredTable = tableData.filter(d => d.datetime === inputElement.property("value"));
    console.log(filteredTable);
};


