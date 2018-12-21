export function weatherRequest(item, index) {
  let canvas = document.getElementById(`weather-info-${index}`);
  let url = "https://api.darksky.net/forecast/35b1bbf5c2aa447a6ed43ceb0caadc28";
  url += `/${item.location().lat},${item.location().lng}`;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onerror = function(){
    alert("An error occured retrieving weather information.");
  }

  xhr.addEventListener('load', function () {
    let jsonString = xhr.responseText;
    // During testing an error was missed by XHR.onerror, I have added
    // this try/catch block.
    try {
      let data = JSON.parse(jsonString);
      let icon = data.currently.icon;
    }
    catch(error) {
      alert(jsonString);
    }
    setSkycon(icon, canvas);
  })

  xhr.send();
};

// This function applies the correct Skycon for a given weather type.
function setSkycon(weatherType, canvas) {
  let skycons = new Skycons({ 'color': 'black' });
  let skycon = null;
  switch (weatherType) {
    case 'clear-day':
      skycon = Skycons.CLEAR_DAY;
      break;
    case 'clear-night':
      skycon = Skycons.CLEAR_NIGHT;
      break;
    case 'rain':
      skycon = Skycons.RAIN;
      break;
    case 'snow':
      skycon = Skycons.SNOW;
      break;
    case 'sleet':
      skycon = Skycons.SLEET;
      break;
    case 'wind':
      skycon = Skycons.WIND;
      break;
    case 'fog':
      skycon = Skycons.FOG;
      break;
    case 'cloudy':
      skycon = Skycons.CLOUDY;
      break;
    case 'partly-cloudy-day':
      skycon = Skycons.PARTLY_CLOUDY_DAY;
      break;
    case 'partly-cloudy-night':
      skycon = Skycons.PARTLY_CLOUDY_NIGHT;
      break;
    }
  skycons.set(canvas, skycon);
  skycons.play();
};
