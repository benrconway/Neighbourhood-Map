import { categories, baseData } from '../resources/data';
  // start with a view that is populated with all the information
  function init() {
    initMap();
    renderList(baseData);
    renderFilter();
  }

  function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: 55.9517044, lng: -3.1949283},
            zoom: 15
          });
  }

  function renderList(listOfItems) {
    let list = document.getElementById("places-list");
    while(list.firstChild){list.removeChild(list.firstChild)};
    for (let item of listOfItems) {
      list.innerHTML += `<div><p>${item.name}</p></div>`;
    }
  }

  function renderFilter() {
    let filter = document.getElementById("filter-options");
    for (let item of categories) {
      let option = document.createElement("option");
      option.value = item.toLowerCase();
      option.innerText = item;
      filter.appendChild(option);
    }
  }
  // populate the drop-down with the different filters that
  // can be applied

  // have a function that returns the filtered information

  // also have one that returns all the information

  // have a click even listener for clicking on an entry on the list

  // have a listener that is called when clicking on the marker

  //

window.addEventListener("DOMContentLoaded", init);
