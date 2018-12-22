import { categories, baseData } from './resources/data';
import { Place } from './models/places';
import { weatherRequest } from './helpers/weatherHelper'

let map;
let markers = [];
let infowindows = [];

let viewModel = function() {
  let self = this;
  this.categoryList = ko.observableArray(categories);
  this.listData = ko.observableArray();
  this.listOpen = ko.observable(false);

  // This will filter the list
  this.filterList = function(object, event) {
    let type = event.srcElement.selectedOptions[0].value;
    if(type === "everything"){
      this.refreshList(baseData);
      renderMapElements(this.listData());
    } else {
      let newList = baseData.filter((item) => {return item.type === type});
      this.refreshList(newList);
      renderMapElements(this.listData());
    }
  }

  // Underlying function which replaces the observableArray to make DRY code
  this.refreshList = function(newList) {
    this.listData.removeAll();
    newList.forEach((item, index) => {
      this.listData.push(new Place(item, index))
    });
  }

  // Called when a list item is clicked
  this.clickDiv = function() {
    self.toggleDiv(this.id);
    toggleInfo(this.id);
  }

  // Activates the boolean attached for styles change on the list item
  this.toggleDiv = function(index) {
    if (this.listData()[index].active()) {
      this.listData()[index].active(false);
    } else {
      this.listData()[index].active(true);
    }
  }

  this.openList = function() {
    this.listOpen(!this.listOpen());
  }
};

// Create an instance of the viewModel and give it a full list of data
let vm = new viewModel();
vm.refreshList(baseData);

// Map related functions.
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 55.9517044, lng: -3.1949283},
    zoom: 15
  });
}

// Create and store elements for rendering on the map
function renderMapElements(listData) {
  // before rendering, clear all the markers from the map
  clearMarkers();
  clearInfoWindows();
  // setup bounds so that the map can change on each render
  let bounds = new google.maps.LatLngBounds();

  listData.forEach((item, index) => {
    bounds.extend(item.location());
    renderMarker(item, index);
    }
  )
  map.fitBounds(bounds)
}

// Creates markers for a given location.
function renderMarker(item, index) {
  let marker = new google.maps.Marker({
    position: item.location(),
    title: item.name(),
    id: index,
    icon: `../src/resources/images/icons/${item.type()}-off.png`
  });
  marker.setMap(map);
  // toggle the div and marker when the marker is clicked
  marker.addListener("click", () => {
    toggleInfo(marker.id);
    vm.toggleDiv(marker.id);
  })
  // Create and populate an infowindow for this list item
  let infowindow = createInfoWindow(item, index);
  infowindows.push(infowindow);
  markers.push(marker);
}

// Takes in a list item and its index and returns a google maps InfoWindow
function createInfoWindow(item, index) {
  let content = `<a href="${item.website()}" target="_blank"><h3>` +
  `${item.name()}</h3></a><p>${item.info()}<br> `+
  `<div><span>Current Weather:</span><canvas id="weather-info-${index}"` +
  ` width="32" height="32"></canvas></div>` +
  `Rating:${item.rating()}/5</p>`;
  return new google.maps.InfoWindow({
    content: content
  })
}

// Clears the array of google markers
function clearMarkers(){
  markers.forEach((marker) => {marker.setMap(null);});
  markers = [];
}

// Clears array of InfoWindows
function clearInfoWindows() {
  infowindows.forEach((infowindow) => {infowindow.close();});
  infowindows = [];
}

// Takes an id for a marker and changes its icon and opens/closes associated
// infowindow
function toggleInfo(id){
  let marker = markers.find((item) => {return item.id === id});
  let array = marker.icon.split('-');
  if(array[1] === "off.png"){
    marker.setIcon(array[0] + "-on.png");
    openInfoWindow(id, marker);
  } else {
    marker.setIcon(array[0] + "-off.png");
    closeInfoWindow(id);
  }
}

// Toggles open an infowindow when a marker or list item is clicked
function openInfoWindow(index, marker) {
  let infowindow = infowindows[index];
  infowindow.open(map, marker);
  google.maps.event.addListener(infowindow, 'domready', function(){
    weatherRequest(vm.listData()[index], index);
  })
}

// Closes an InfoWindow when the marker is toggled off
function closeInfoWindow(index) {
  let infowindow = infowindows[index];
  infowindow.close();
}

// Initiates the map and creates markers and other elements from the viewModel
function init() {
  initMap();
  renderMapElements(vm.listData());
}

init()
ko.applyBindings(vm);
