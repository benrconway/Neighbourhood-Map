# Udacity Project 5: Neighbourhood Map

## What is this..?

This project was to take a framework (KnockoutJS) and use it to make a Single Page
Application (SPA) that would do the following:
1) Load a map service (I have chosen Google)
2) Have a minimum of 5 markers (last count was around 15)
3) Have the markers animate when interacted with (they start empty and fill with colour
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

## How to get it running:

You will need to have already installed the following things:
1) NodeJS
2) A web browser
3) A CORS enabling extension for your selected browser such as:
  FireFox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/
  Chrome: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en

Steps to run project:
1) Clone the Repository
2) Run an "npm install" at the top level directory
3) Run the command "npm run build"
4) Open the index.html file in your browser of choice and ensure CORS extension is enabled.


##### Responsiveness:
Given the very simple interface on this SPA, I have decided that devices in portrait
would give me coverage of the thinner aspects of responsiveness. Following this
I have implemented only truly 1 breakpoint. Below this, is thin or small devices
and I hide the aside and show a button for retrieving it, above this everything
is visible and can be enjoyed.


###### Desired Additions:
- Include a server that runs when on an "npm start" which serves the page
- More styling
- More information/markers, etc
