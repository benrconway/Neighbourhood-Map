export class Place {
  constructor(data){
    this.name = ko.observable(data.name)
    this.info = ko.observable(data.clickCount)
    this.website = ko.observable(data.imgSrc)
    this.rating = ko.observable(data.rating)
    this.address = ko.observable(data.address)
    this.location = ko.observable(data.location)
    this.type = ko.observable(data.type)
  }

}
