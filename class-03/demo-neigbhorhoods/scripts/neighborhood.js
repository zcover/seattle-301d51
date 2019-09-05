'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
// Example:
  // body: "<p>This is example text to show you how <strong>HTML</strong> can be escaped using <em>Handlebars</em>.</p>"
  // city: "Seattle"
  // founded: "1820"
  // name: "Fremont"
  // population: "23,566"


function Neighborhood (rawDataObject){
  this.body = rawDataObject.body;
  this.city = rawDataObject.city;
  this.founded = rawDataObject.founded;
  this.name = rawDataObject.name;
  this.population = rawDataObject.population;
}

// function Neighborhood (rawDataObject) {
//   for (let key in rawDataObject) {
//     this[key] = rawDataObject[key];
//   }
// }

// create a prototype that makes a template out of the handlebars script html
// complies that template
// returns that template
Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  let template = $('#neighborhood-template').html();
  // 2. Use Handlebars to "compile" the HTML
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

// neighborhoodDataSet comes from the dataSet.js file - global variable
// uses that JSON to make an array of neighborhood objects
neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

// loop through global array
// run the .toHtml on each object to creates the handlebars template
// append each template section in the main
neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});