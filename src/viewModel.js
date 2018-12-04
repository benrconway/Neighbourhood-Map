import { categories, baseData } from '../resources/data';

let map;

let listData = baseData;

let markers = [];

let infowindows = [];

// start with a view that is populated with all the information
function init() {
  initMap();
  renderList(listData);
  renderFilter();
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 55.9517044, lng: -3.1949283},
    zoom: 15
  });
}

function renderList(listOfItems) {
  // before rendering, clear all the markers from the map
  clearMarkers();
  let bounds = new google.maps.LatLngBounds();
  let list = document.getElementById("places-list");
  while(list.firstChild){list.removeChild(list.firstChild)};
  // iterate over the listOfItems supplied and render the list.
  listOfItems.forEach((item, index) => {
    let div = document.createElement("div");
    let p = document.createElement("p")
    div.className = "list-item";
    div.id = `list-item-${index}`;
    // If the div is clicked, toggle the marker.
    div.addEventListener("click", function(){
      toggleMarker(div.id)
    })
    p.innerText = item.name;
    div.appendChild(p);
    list.appendChild(div);
    bounds.extend(item.location)
  })
  // populate markers for the listOfItems
  listOfItems.forEach(renderMarker)
  map.fitBounds(bounds)
}

// Renders the list of filter options for the drop down.
function renderFilter() {
  let filter = document.getElementById("filter-options");
  for (let item of categories) {
    let option = document.createElement("option");
    option.value = item.toLowerCase();
    option.innerText = item;
    filter.appendChild(option);
  }
  filter.addEventListener("change", filterList);
}

// filters the list
function filterList() {
  let type = this.value;
  // if the type is all, return the whole list
  if (type === "all") {
    listData = baseData;
    renderList(listData);
  } else {
  // or filter the list as is appropriate
    let listData = baseData.filter(item => item.type === type);
    renderList(listData);
  }
}

// Creates markers for a given array of values.
function renderMarker(item, index) {
  let marker = new google.maps.Marker({
    position: item.location,
    title: item.name,
    id: `list-item-${index}`,
    icon: `../resources/images/icons/${item.type}-off.png`
  });
  marker.setMap(map);
  // change icon to indicate which has been nominated.
  marker.addListener("click", ()=> {
    toggleMarker(marker.id)
  })
  // info window stuff.
  let infowindow = new google.maps.InfoWindow()

  markers.push(marker);
}

function clearMarkers(){
  markers.forEach((marker) => {marker.setMap(null);})
  markers = [];
}

// Toggles a given marker by its ID
function toggleMarker(id){
  let marker = markers.find((item) => {return item.id === id});
  let array = marker.icon.split('-');
  if(array[1] === "off.png"){
    marker.setIcon(array[0] + "-on.png");
    displayInfoWindow(id, marker);
  } else {
    marker.setIcon(array[0] + "-off.png");
  }
}

function displayInfoWindow(id, marker) {
  let infowindow = new google.maps.InfoWindow();
  let source = listData[id.split("-")[2]];
  infowindow.open(map, marker);
}

window.addEventListener("DOMContentLoaded", init);
