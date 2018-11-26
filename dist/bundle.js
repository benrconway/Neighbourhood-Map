/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  // start with a view that is populated with all the information
  function init() {
    initMap();
    renderList(_resources_data__WEBPACK_IMPORTED_MODULE_0__["baseData"]);
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
    for (let item of _resources_data__WEBPACK_IMPORTED_MODULE_0__["categories"]) {
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseData", function() { return baseData; });
// This has been placed in the resources rather than the JS folder
// because its contents are not functional JS, but rather a large
// JSON-like collection which represents what I might be storing in a
// database or collecting from an API


const categories = ["Cafe", "Restaurants", "Food", "Shopping", "Classes"]

const baseData = [
  {
    name: "Fortitude Coffee",
    location: {lat: 55.9557693, lng: -3.1946877},
    address: "3C York Pl, Edinburgh EH1 3EB",
    rating: 3.5,
    website: "http://www.fortitudecoffee.com/",
    info: "Great coffee, great beans to buy, but small space, " +
          " not buggy accessible",
    type: "cafe"
  },
  { //Chocolate Tree
    name: "Chocolate Tree",
    location: {lat: 55.9367107, lng: -3.2095956},
    address: "123 Bruntsfield Pl, Edinburgh EH10 4EQ",
    rating: 3.5,
    website: "https://www.choctree.co.uk/",
    info: "Best hot chocolate in town, cosy, so book in advance!",
    type: "cafe"
  },
  { // machina espresso
    name: "Machina Espresso",
    location: {lat:55.9426817, lng:-3.203282},
    address: "2 Brougham Pl, Tollcross, Edinburgh EH3 9HW",
    rating: 4,
    website: "machina-coffee.co.uk",
    info: "A wonderful cafe which also supplies beans, grounds and machines " +
          "to make it all with.",
    type: "cafe"
  },
  { // The Walnut
    name: "The Walnut",
    location: {lat: 55.9617824, lng: -3.1827168},
    address: "9 Croall Pl, Edinburgh EH7 4LT",
    rating: 4,
    website: "https://www.facebook.com/TheWalnutEdinburgh/",
    info: "Great food, great space, staff are hit and miss though",
    type: "restaurants"
  },
  { // Three Birds
    name: "Three Birds",
    location: {lat: 55.9368189, lng: -3.2102495},
    address: "3-5 Viewforth, Edinburgh EH10 4JD",
    rating: 5,
    website: "http://www.threebirds.co.uk/",
    info: "Great food, great space, great people. Booking is essential",
    type: "restaurants"
  },
  { // TimberYard
    name: "TimberYard",
    location: {lat: 55.946412, lng:-3.203936},
    address: "10 Lady Lawson St, Edinburgh EH3 9DS",
    rating: 3.5,
    website: "timberyard.co",
    info: "Creative menu of locally-sourced artisanal produce in hip," +
          " industrial-chic former warehouse space.",
    type: "restaurants"
  },
  { // Gardener's Cottage
    name: "Gardener's Cottage",
    location: {lat: 55.9574752, lng: -3.1828547},
    address: "1 Royal Terrace Gardens, London Rd, Edinburgh EH7 5DX",
    rating: 3.5,
    website: "https://www.thegardenerscottage.co/",
    info: "Stone cottage in terraced gardens offering a communal set menu" +
          " made using sustainable local produce.",
    type: "restaurants"
  },
  { // Wizard Drops
    name: "Wizard Drops",
    location: {lat: 55.9608771, lng: -3.182836},
    address: "105 Brunswick St, Edinburgh EH7 5HR",
    rating: 4,
    website: "https://www.facebook.com/Wizardrops-752335164807445/",
    info: "Aromatherapy, soaps, shampoos, cleaners, all natural, all here.",
    type: "shopping"
  },
  { // Stockbridge Markets
    name: "Stockbridge Markets",
    location: {lat: 55.957527, lng: -3.2105223},
    address: "Saunders St, Edinburgh EH3 6TQ",
    rating: 4.5,
    website: "http://www.stockbridgemarket.com/",
    info: "Great markets, open Sundays 10am-5pm.",
    type: "food"
  },
  { // Castle Terrace Markets
    name: "Castle Terrace Markets",
    location: {lat: 55.947786,lng: -3.205703},
    address: "Castle Terrace, Edinburgh EH1 2EN",
    rating: 4,
    website: "http://www.edinburghfarmersmarket.co.uk/",
    info: "Great variety of produce, open Saturday 9am-2pm.",
    type: "food"
  },
  { // Cat's Miaou
    name: "Cat's Miaou",
    location: {lat: 55.959689, lng: -3.184711},
    address: "36 Elm Row, Edinburgh EH7 4AH",
    rating: 3.5,
    website: "http://www.thecatsmiaou.co.uk/",
    info: "Quirky and unusual, cards, gifts and more",
    type: "shopping"
  },
  { // Kuk Sool Won
    name: "Kuk Sool Won",
    location: {lat: 55.970848, lng: -3.1779271},
    address: "82 Jane St, Edinburgh EH6 5HG",
    rating: 4,
    website: "http://www.martialarts-ksw.co.uk/",
    info: "Learn this Korean Martial Art here in Edinburgh!",
    type: "classes"
  },
  { // rick young
    name: "Rick Young's Black Belt Academy",
    location: {lat: 55.9705895, lng: -3.1733582},
    address: "9A Duke St, Edinburgh EH6 8HG",
    rating: 4,
    website: "http://www.rick-young.co.uk/",
    info: "Professional level classes in a variety of Martial arts.",
    type: "classes"
  },
  { // santosa yoga
    name: "Santosa Yoga",
    location: {lat: 55.962478, lng: -3.179075},
    address: "21 Albert St, Edinburgh EH7 5LH",
    rating: 4,
    website: "https://studio.santosa.co.uk/",
    info: "A community centre that runs a variety of classes, therapies " +
          "and a cafe full of delicious sweeties!",
    type: "classes"
  },
  { // Gathering Essence
    name: "Gathering Essence",
    location: {lat: 55.9574466, lng: -3.1899461},
    address: "14A Broughton St Ln, Edinburgh EH1 3LY",
    rating: 4,
    website: "http://www.gatheringessence.com/",
    info: "Learn how to understand yourself and experience life rather than" +
          " just running through it.",
    type: "classes"
  }
]


/***/ })
/******/ ]);