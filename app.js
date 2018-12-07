// function buildMetadata(sample) {

//   // @TODO: Complete the following function that builds the metadata panel

//   // Use `d3.json` to fetch the metadata for a sample
//   // function sampleMetaData(value){
//     var panelinfo = d3.select(`#sample-metadata`) 
//     // d3.select(`#sample-metadata`) 
//     // Use d3 to select the panel with id of `#sample-metadata`

//     // Use `.html("") to clear any existing metadata
// panelinfo.html(" ")
//     // Use `Object.entries` to add each key and value pair to the panel
    
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
// sample.forEach(function(panelmetadata){
// var  title1 = panelinfo.append("h6");
// var  value1 = Object.entries(panelmetadata);
// panelmetadata.forEach(())

// }) 


//     // BONUS: Build the Gauge Chart
//     // buildGauge(data.WFREQ);
// }

// function buildCharts(sample) {


//   // @TODO: Use `d3.json` to fetch the sample data for the plots
//   d3.json("/metadata/${sample}").then(function(data)
//     // @TODO: Build a Bubble Chart using the sample data

//     // @TODO: Build a Pie Chart
//     // HINT: You will need to use slice() to grab the top 10 sample_values,
//     // otu_ids, and labels (10 each).


// //     function init() {
// //   var data = [{
// //     values: [19, 26, 55, 88],
// //     labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
// //     type: "pie"
// //   }];

// //   var layout = {
// //     height: 600,
// //     width: 800
// //   };

// //   Plotly.plot("pie", data, layout);
// // }

// // function updatePlotly(newdata) {
// //   var PIE = document.getElementById("pie");
// //   Plotly.restyle(PIE, "values", [newdata]);
// // }

// // function getData(dataset) {
// //   var data = [];
// //   switch (dataset) {
// //   case "dataset1":
// //     data = [1, 2, 3, 39];
// //     break;
// //   case "dataset2":
// //     data = [10, 20, 30, 37];
// //     break;
// //   case "dataset3":
// //     data = [100, 200, 300, 23];
// //     break;
// //   default:
// //     data = [30, 30, 30, 11];
// //   }
// //   updatePlotly(data);
// // }

// // init();

// //  }

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names", function(sampleNames)  {

    //   // console.log(error);
    //  console.log(sampleNames);
    //     sampleNames.forEach(function (sample) {
    //     var option = selector.append("option");
    //     option.text(sample);
    //     option.attr("value", sample);
    // });
    
    d3.json("/names").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });

    // Use the first sample from the list to build the initial plots
    // const firstSample = sampleNames[0];
  //       selector.property("value", sampleNames[0]);
  //       selector.on("change")();
  //   // /buildCharts(firstSample);
  //   // buildMetadata(firstSample);
  // });
  // selector.on("change",function()
  // {
  //   var newSample = d3.select("#selDataset").node().value; 
  // buildCharts(newSample);
  // buildMetadata(newSample);
   });
});

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init()};
