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
 extension enabled, something like *this*  or *that*


This project was to take a framework (KnockoutJS) and use it to make a Single Page
Application that would do the following:
1) Load a map service (I have chosen Google)
2) Have a minimum of 5 markers (last count was around 15)
3) Have the markers animate when interacted with (the start empty and fill with colour
  when you click on them or the name in the list of options)
4) Display information through DOM element or InfoWindow (I have InfoWindows)
5) Implement a manner of filtering the list of items and markers (I have
  implemented a dropdown which filters by type)
6) Ensure responsive design for a phone, tablet and desktop (I have set two basic
  modes, phones/tablets and desktops)
7) Runs error free (I have tested in Chrome, Safari and Firefox, which uncovered
  more accidental features than anticipated)
8) Displays all markers by default (Done)
9) Make requests to at least one other third-party API to provide additional
location information (I have chosen Dark Sky for a weather request which
  populates in the InfoWindow)
10) Handle errors (I have handled as many errors as I have seen, if more turn up
  I shall handle them with as much grace as possible)
11) Functionality is provided in an error free and usable manner (Done)
12) Code comments to make code readable (I have opted for simplicity of inline
  commenting as the functions stay quite simple)

Now that we are here, how to start it all.

You will need to have already installed the following things:
1) NodeJS
2) A web browser
3) A CORS enabling extension for your selected browser such as:
  FireFox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/
  Chrome: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en

Steps to open project:
1) Clone the Repository
2) Run an "npm install" at the top level directory
3) Run the command "npm run build"
4) Open the index.html file in your browser of choice.


Responsiveness:
Given the very simple UI on this SPA, I have decided that devices in portrait
would give me coverage of the thinner aspects of responsiveness. Following this
I have implemented only truly 1 breakpoint. Below this, is thin or small devices
and I hide the aside and show a button for retrieving it, above this everything
is visible and can be enjoyed.


Desired Additions:
- Include a server that runs when on an "npm start" which serves the page
- More styling
- More information/markers, etc
