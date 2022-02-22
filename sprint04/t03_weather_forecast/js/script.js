let key = 'e4acaa3e67f468cd41d52cfb8fa91923';
let image = "http://openweathermap.org/img/wn/";

let query = "Kharkiv";

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&APPID=${key}`)
.then(weather => { return weather.json(); }).then(display);

let foredate = document.getElementsByClassName("date");
let temp = document.getElementsByClassName("temperature");
let icon = document.getElementsByClassName("icon");
let city = document.getElementsByClassName("text");

function display(data) {
    city[0].innerHTML = data.city.name;
    let forecast = [0, 8, 16, 24, 32, 39];
    console.log(data);
    for (let i = 0; i < forecast.length; i++) {
        let now = new Date(data.list[forecast[i]].dt_txt);
        foredate[i].innerHTML = dateBuilder(now);
        temp[i].innerHTML = `${Math.round(data.list[forecast[i]].main.temp)}°C`;
        icon[i].src = `${image}${data.list[forecast[i]].weather[0].icon}@2x.png`;
    }

}

function dateBuilder(now) { 
    let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  
    let date = now.getDate();
    let month = months[ now.getMonth()];
  
    return `${date}.${month}`;
}