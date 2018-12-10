import { categories, baseData } from '../resources/data';


const Place = function (data){
  this.name = ko.observable(data.name)
  this.info = ko.observable(data.clickCount)
  this.website = ko.observable(data.imgSrc)
  this.rating = ko.observable(data.rating)
  this.address = ko.observable(data.address)
  this.location = ko.observable(data.location)
  this.type = ko.observable(data.type)
}

const database = []
baseData.forEach((item) => {database.push(new Place(item))})

let viewModel = function(){
  this.categoryList = ko.observableArray(categories);
  this.listData = ko.observableArray(database);

  this.filterList = function(object, event) {
    let type = event.originalTarget.value;
    console.log(type);
    let newList = database.filter((item) => {return item.type() === type })
    this.listData = ko.observableArray(newList)
  }


};


ko.applyBindings(new viewModel());
