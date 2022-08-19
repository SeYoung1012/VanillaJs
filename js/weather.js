const API_KEY = "4d4bb590a6ceb3d90dbf57c5fe642e97";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

//success함수는 geolocation position object를 하나만 입력 받음

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

       

      });
  }

function onGeoError(){
    alert("Can't find you. No weather for you.");

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



