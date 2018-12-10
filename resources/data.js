// This has been placed in the resources rather than the JS folder
// because its contents are not functional JS, but rather a large
// JSON-like collection which represents what I might be storing in a
// database or collecting from an API
export { categories, baseData };

const categories = ["Everything", "Cafe", "Restaurants", "Markets", "Shopping", "Classes"]

const baseData = [
  {
    name: "Fortitude Coffee",
    location: {lat: 55.955760, lng: -3.192489},
    address: "3C York Pl, Edinburgh EH1 3EB",
    rating: 3.5,
    website: "http://www.fortitudecoffee.com/",
    info: "Great coffee, great beans to buy, but small space, " +
          " not buggy accessible",
    type: "cafe"
  },
  {
    name: "Chocolate Tree",
    location: {lat: 55.936699, lng: -3.207364},
    address: "123 Bruntsfield Pl, Edinburgh EH10 4EQ",
    rating: 3.5,
    website: "https://www.choctree.co.uk/",
    info: "Best hot chocolate in town, cosy, so book in advance!",
    type: "cafe"
  },
  {
    name: "Machina Espresso",
    location: {lat: 55.942678, lng: -3.201071},
    address: "2 Brougham Pl, Tollcross, Edinburgh EH3 9HW",
    rating: 4,
    website: "machina-coffee.co.uk",
    info: "A wonderful cafe which also supplies beans, grounds and machines " +
          "to make it all with.",
    type: "cafe"
  },
  {
    name: "The Walnut",
    location: {lat: 55.961781, lng: -3.180504},
    address: "9 Croall Pl, Edinburgh EH7 4LT",
    rating: 4,
    website: "https://www.facebook.com/TheWalnutEdinburgh/",
    info: "Great food, great space, staff are hit and miss though",
    type: "restaurants"
  },
  {
    name: "Three Birds",
    location: {lat: 55.936815, lng: -3.208061},
    address: "3-5 Viewforth, Edinburgh EH10 4JD",
    rating: 5,
    website: "http://www.threebirds.co.uk/",
    info: "Great food, great space, great people. Booking is essential",
    type: "restaurants"
  },
  {
    name: "TimberYard",
    location: {lat: 55.946408, lng: -3.201740},
    address: "10 Lady Lawson St, Edinburgh EH3 9DS",
    rating: 3.5,
    website: "timberyard.co",
    info: "Creative menu of locally-sourced artisanal produce in hip," +
          " industrial-chic former warehouse space.",
    type: "restaurants"
  },
  {
    name: "Gardener's Cottage",
    location: {lat: 55.957480, lng: -3.180655},
    address: "1 Royal Terrace Gardens, London Rd, Edinburgh EH7 5DX",
    rating: 3.5,
    website: "https://www.thegardenerscottage.co/",
    info: "Stone cottage in terraced gardens offering a communal set menu" +
          " made using sustainable local produce.",
    type: "restaurants"
  },
  {
    name: "Wizard Drops",
    location: {lat: 55.960858, lng: -3.180615},
    address: "105 Brunswick St, Edinburgh EH7 5HR",
    rating: 4,
    website: "https://www.facebook.com/Wizardrops-752335164807445/",
    info: "Aromatherapy, soaps, shampoos, cleaners, all natural, all here.",
    type: "shopping"
  },
  {
    name: "Stockbridge Markets",
    location: {lat: 55.957522, lng: -3.208316},
    address: "Saunders St, Edinburgh EH3 6TQ",
    rating: 4.5,
    website: "http://www.stockbridgemarket.com/",
    info: "Great markets, open Sundays 10am-5pm.",
    type: "markets"
  },
  {
    name: "Castle Terrace Markets",
    location: {lat: 55.947750, lng: -3.203305},
    address: "Castle Terrace, Edinburgh EH1 2EN",
    rating: 4,
    website: "http://www.edinburghfarmersmarket.co.uk/",
    info: "Great variety of produce, open Saturday 9am-2pm.",
    type: "markets"
  },
  {
    name: "Cat's Miaou",
    location: {lat: 55.959683, lng: -3.182499},
    address: "36 Elm Row, Edinburgh EH7 4AH",
    rating: 3.5,
    website: "http://www.thecatsmiaou.co.uk/",
    info: "Quirky and unusual, cards, gifts and more",
    type: "shopping"
  },
  {
    name: "Kuk Sool Won",
    location: {lat: 55.970849, lng: -3.175714},
    address: "82 Jane St, Edinburgh EH6 5HG",
    rating: 4,
    website: "http://www.martialarts-ksw.co.uk/",
    info: "Learn this Korean Martial Art here in Edinburgh!",
    type: "classes"
  },
  {
    name: "Rick Young's Black Belt Academy",
    location: {lat: 55.970587, lng: -3.171149},
    address: "9A Duke St, Edinburgh EH6 8HG",
    rating: 4,
    website: "http://www.rick-young.co.uk/",
    info: "Professional level classes in a variety of Martial arts.",
    type: "classes"
  },
  {
    name: "Santosa Yoga",
    location: {lat: 55.962470, lng: -3.176879},
    address: "21 Albert St, Edinburgh EH7 5LH",
    rating: 4,
    website: "https://studio.santosa.co.uk/",
    info: "A community centre that runs a variety of classes, therapies " +
          "and a cafe full of delicious sweeties!",
    type: "classes"
  },
  {
    name: "Gathering Essence",
    location: {lat: 55.957443, lng: -3.187744},
    address: "14A Broughton St Ln, Edinburgh EH1 3LY",
    rating: 4,
    website: "http://www.gatheringessence.com/",
    info: "Learn how to understand yourself and experience life rather than" +
          " just running through it.",
    type: "classes"
  }
]
