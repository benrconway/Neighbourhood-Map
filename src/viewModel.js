import { categories, baseData } from '../resources/data';
import knockout from '../resources/knockout-3.4.2';

let map;

let listData = baseData;

let markers = [];

let infowindows = [];

// start with a view that is populated with all the information
function init() {
  initMap();
  renderList();
  renderFilter();
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 55.9517044, lng: -3.1949283},
    zoom: 15
  });
}

function renderList() {
  // before rendering, clear all the markers from the map
  clearMarkers();
  clearInfoWindows();
  let bounds = new google.maps.LatLngBounds();
  let list = document.getElementById("places-list");
  while(list.firstChild){list.removeChild(list.firstChild)};
  // iterate over the listOfItems supplied and render the list.
  listData.forEach((item, index) => {
    let div = document.createElement("div");
    let p = document.createElement("p")
    div.className = "list-item";
    div.id = `list-item-${index}`;
    // If the div is clicked, toggle the marker.
    div.addEventListener("click", function(){
      toggleInfo(div.id)
    })
    p.innerText = item.name;
    div.appendChild(p);
    list.appendChild(div);
    bounds.extend(item.location)
  })
  // populate markers for the listOfItems
  listData.forEach(renderMarker)
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
    renderList();
  } else {
  // or filter the list as is appropriate
    listData = baseData.filter(item => item.type === type);
    renderList();
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
    toggleInfo(marker.id)
  })
  // info window stuff.
  let infowindow = createInfoWindow(item, index);
  infowindows.push(infowindow)
  markers.push(marker);
}

function createInfoWindow(item) {
  let index = listData.indexOf(item);
  let content = `<a href="${item.website}" target="_blank"><h3>` +
  `${item.name}</h3></a><p>${item.info}<br> `+
  `<div><span>Current Weather:</span><canvas id="weather-info-${index}"` +
  ` width="32" height="32"></canvas></div>` +
  `Rating:${item.rating}/5</p>`
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

// Toggles a given marker by its ID
function toggleInfo(id){
  let marker = markers.find((item) => {return item.id === id});
  let array = marker.icon.split('-');
  let index = id.split('-')[2];
  if(array[1] === "off.png"){
    marker.setIcon(array[0] + "-on.png");
    openInfoWindow(index, marker);
    toggleDiv(id);
  } else {
    marker.setIcon(array[0] + "-off.png");
    closeInfoWindow(index);
    toggleDiv(id);
  }
}

function toggleDiv(id) {
  let div = document.getElementById(id);
  let classes = div.className;
  if (div.className.includes("activeDiv")){
    div.className = "list-item";
  } else {
    div.className += " activeDiv";
  }
}

function openInfoWindow(index, marker) {
  let source = listData[index];
  let infowindow = infowindows[index]
  infowindow.open(map, marker);
  google.maps.event.addListener(infowindow, 'domready', function(){
    weatherWindow(index);
  })
}

function closeInfoWindow(index) {
  let infowindow = infowindows[index];
  infowindow.close();
}

function weatherWindow(index) {
  let item = listData[index];
  let canvas = document.getElementById(`weather-info-${index}`)
  let url = "https://api.darksky.net/forecast/35b1bbf5c2aa447a6ed43ceb0caadc28/"
  url += `${item.location.lat},${item.location.lng}`
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onerror = function(){
    alert("An error occured retrieving weather information.")
  }

  xhr.addEventListener('load', function () {
    let jsonString = xhr.responseText
    let data = JSON.parse(jsonString)
    let icon = data.currently.icon
    setSkycon(icon, canvas)
  })
  xhr.send()
}

function setSkycon(weatherType, canvas) {
  let skycons = new Skycons({ 'color': 'black' })
  let skycon = null
  switch (weatherType) {
    case 'clear-day':
      skycon = Skycons.CLEAR_DAY
      break
    case 'clear-night':
      skycon = Skycons.CLEAR_NIGHT
      break
    case 'rain':
      skycon = Skycons.RAIN
      break
    case 'snow':
      skycon = Skycons.SNOW
      break
    case 'sleet':
      skycon = Skycons.SLEET
      break
    case 'wind':
      skycon = Skycons.WIND
      break
    case 'fog':
      skycon = Skycons.FOG
      break
    case 'cloudy':
      skycon = Skycons.CLOUDY
      break
    case 'partly-cloudy-day':
      skycon = Skycons.PARTLY_CLOUDY_DAY
      break
    case 'partly-cloudy-night':
      skycon = Skycons.PARTLY_CLOUDY_NIGHT
      break
  }
  skycons.set(canvas, skycon)
  skycons.play()
}



window.addEventListener("DOMContentLoaded", init);
