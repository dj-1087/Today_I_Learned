const API_KEY = "04226408fb83e260d5adc928e5df64b1";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { latitude, longitude };
    saveCoords(coordsObj);
}
function handleGeoError() {
    console.log(`Can't access geolocation.`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null) {
        askForCoords();
    }else {
        //getWeather
    }
}

function init() {
    loadCoords();
}

init();