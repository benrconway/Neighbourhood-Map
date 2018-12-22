export class Place {
  constructor(data, index) {
    this.id = index;
    this.name = ko.observable(data.name);
    this.info = ko.observable(data.info);
    this.website = ko.observable(data.website);
    this.rating = ko.observable(data.rating);
    this.address = ko.observable(data.address);
    this.location = ko.observable(data.location);
    this.type = ko.observable(data.type);
    this.active = ko.observable(false);
  }
}
