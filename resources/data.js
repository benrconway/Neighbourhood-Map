// This has been placed in the resources rather than the JS folder
// because its contents are not functional JS, but rather a large
// JSON-like collection which represents what I might be storing in a
// database or collecting from an API
export { categories, baseData };

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
  { // Kuk Sool Won 55.970814,-3.1762435
    name: "Kuk Sool Won",
    location: {lat: 55.970848, lng: -3.1779271},
    address: "82 Jane St, Edinburgh EH6 5HG",
    rating: 4,
    website: "http://www.martialarts-ksw.co.uk/",
    info: "Learn this Korean Martial Art here in Edinburgh!",
    type: "classes"
  },
  { // rick young 55.970577,-3.173358
    name: "Rick Young's Black Belt Academy",
    location: {lat: 55.9705895, lng: -3.1733582},
    address: "9A Duke St, Edinburgh EH6 8HG",
    rating: 4,
    website: "http://www.rick-young.co.uk/",
    info: "Professional level classes in a variety of Martial arts.",
    type: "classes"
  },
  { // santosa yoga 55.962491,-3.1774705
    name: "Santosa Yoga",
    location: {lat: 55.962491, lng: -3.1774705},
    address: "21 Albert St, Edinburgh EH7 5LH",
    rating: 4,
    website: "https://studio.santosa.co.uk/",
    info: "A community centre that runs a variety of classes, therapies " +
          "and a cafe full of delicious sweeties!",
    type: "classes"
  },
  { // Gathering Essence 55.957347,-3.1882825
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
