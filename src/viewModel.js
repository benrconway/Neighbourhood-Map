import { categories, baseData } from '../resources/data';

let map;

let listData;

let markers = []

  // start with a view that is populated with all the information
  function init() {
    initMap();
    renderList(baseData);
    renderFilter();
  }

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 55.9517044, lng: -3.1949283},
      zoom: 15
    });
  }

  function renderList(listOfItems) {
    let list = document.getElementById("places-list");
    while(list.firstChild){list.removeChild(list.firstChild)};
    // iterate over the listOfItems supplied and render the list.
    listOfItems.forEach((item, index) => {
      let div = document.createElement("div");
      let p = document.createElement("p")
      div.className = "list-item";
      div.id = `list-item-${index}`;
      div.addEventListener("click", function(){
        console.log(this.id);
      })
      p.innerText = item.name;
      div.appendChild(p);
      list.appendChild(div);
    })
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
      renderList(baseData);
    } else {
    // or filter the list as is appropriate
      let newList = baseData.filter(item => item.type === type);
      renderList(newList);
    }
  }

  // have a function that returns the filtered information

  // also have one that returns all the information

  // have a click even listener for clicking on an entry on the list

  // have a listener that is called when clicking on the marker


window.addEventListener("DOMContentLoaded", init);
