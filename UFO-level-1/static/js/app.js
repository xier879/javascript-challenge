// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//practice classwork 14-03-03
//get a reference to the table body 
var tbody = d3.select("tbody");
//loop through data and console 
tableData.forEach(function(alients){
    console.log(alients);
    var row = tbody.append("tr");
    Object.entries(alients).forEach(function([key,value]){
        console.log(key,value);
        //append a cell to the row for each value
        //in the alients object 
        var cell=row.append("td");
        cell.text(value);
    });
});
//event listener 
//14-03-04
//14-03-09
//get a reference to the button on the page with the id property set to "find a date"

var button =  d3.select("#filter-btn");

//triger when the button is clicked 
//function handleClick(){
//    console.log("A button was clicked")
//    console.log(d3.event.target);
//}
//// `on` function in d3 to attach an event to the handler function
//button.on("click",handleClick);

button.on("click", function(){
    //getting a reference to the input element on the page with the id property set to input field
    var inputElement = d3.select("#datetime"); 
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //console.log(tableData);
    //tableData.filter(function (alient){return alient.datetime===inputValue});
    var filterData = tableData.filter(alient=>alient.datetime===inputValue);
    console.log(filterData);

    filterData.forEach(function(alientdata){
        console.log(alientdata);
        var row = tbody.append("tr");
        Object.entries(alientdata).forEach(function([key,value]){
            console.log(key,value);
            //append a cell to the row for each value
            //in the alients object 
            var cell=row.append("td");
            cell.text(value);
        });
    });
});