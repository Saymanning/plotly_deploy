function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
            .append("option")
            .text(sample)
            .property("value", sample);
      });
    });
  };
  
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  };
  
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      // Pull all the metadata from the JSON.
      var metadata = data.metadata;
      // Return only the data with the matching ID number.
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // Pull the object from the array.
      var result = resultArray[0];
      // Find the div with the matching id.
      var PANEL = d3.select("#sample-metadata");
  
      // Clear anything that is in the div already.
      PANEL.html("");
      // Append h6 elements with the metadata.
      PANEL.append("h5").text("ID: " + result.id);
      PANEL.append("h5").text("ETHNICITY: " + result.ethnicity);
      PANEL.append("h5").text("GENDER: " + result.gender);
      PANEL.append("h5").text("AGE: " + result.age);
      PANEL.append("h5").text("LOCATION: " + result.location);
      PANEL.append("h5").text("BBTYPE: " + result.bbtype);
      PANEL.append("h5").text("WFREQ: " + result.wfreq);
    });
  };
  
  init();