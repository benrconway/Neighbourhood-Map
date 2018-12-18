# Udacity Project 5: Neighbourhood Map

Using a mix of APIs create a single page application (SPA) that will show
users a grouping of markers with information about a given neighbourhood.
1) We must have a minimum of 5 markers
2) There must be a mechanism by which the list of places can be filtered
3) It must be designed responsively for users on different devices
4) Markers should load content of their information in an infowindow or DOM
 element, and animate when activated.
5) Code is a proper use of Knockout best practices and the MVVM (Model, View,
  View Model) pattern and avoid updating the DOM with JQuery or JS
6) Supply further location data from another third-party API
7) Incorporate graceful error handling
8) The user interface should be intuitive

As part of this project we were required to use a third party api to collect
information relative to all the different locales we chose to display.

Seeing as my information was covering many different types of place and re-use
of Google's Api's was not allowed, I opted to use the Dark Sky weather API and
I make individual calls when the infowindow is opened and I present an animated
weather icon to alert the user to the current weather in that location.

To run all functionality of this application, you will need to have a CORS
 extension enabled, something like *this* or *that*
