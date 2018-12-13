import { categories, baseData } from '../resources/data';
import { Place } from './models/places';


let viewModel = function() {
  this.categoryList = ko.observableArray(categories);
  this.listData = ko.observableArray();

  this.filterList = function(object, event) {
    let type = event.originalTarget.value;
    if(type === "everything"){
      this.refreshList(baseData);
    } else {
      let newList = baseData.filter((item) => {return item.type === type});
      this.refreshList(newList);
    }
  }

  this.refreshList = function(newList) {
    this.listData.removeAll();
    newList.forEach((item) => {this.listData.push(new Place(item))});
  }

};

let vm = new viewModel();
vm.refreshList(baseData);

let map;
let markers = [];
let infowindows = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 55.9517044, lng: -3.1949283},
    zoom: 15
  });
}

function createElements(listData) {
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

// Creates markers for a given array of values.
function renderMarker(item, index) {
  let marker = new google.maps.Marker({
    position: item.location(),
    title: item.name(),
    id: index,
    icon: `../resources/images/icons/${item.type()}-off.png`
  });
  marker.setMap(map);
  // change icon to indicate which has been nominated.
  marker.addListener("click", ()=> {
    toggleInfo(marker.id)
  })
  // info window stuff.
  let infowindow = createInfoWindow(item, index);
  infowindows.push(infowindow)
  markers.push(marker);
}

function createInfoWindow(item, index) {
  let content = `<a href="${item.website()}" target="_blank"><h3>` +
  `${item.name()}</h3></a><p>${item.info()}<br> `+
  `<div><span>Current Weather:</span><canvas id="weather-info-${index}"` +
  ` width="32" height="32"></canvas></div>` +
  `Rating:${item.rating()}/5</p>`
  return new google.maps.InfoWindow({
    content: content
  })
}

function clearMarkers(){
  markers.forEach((marker) => {marker.setMap(null);});
  markers = [];
}

function clearInfoWindows() {
  infowindows.forEach((infowindow) => {infowindow.close();});
  infowindows = [];
}

function init() {
  initMap();
  createElements(vm.listData());
  // displayElements(markers);
}

init()
ko.applyBindings(vm);
