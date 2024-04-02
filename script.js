const apiKey = "9758aac32ac433422d1a53d7075218b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button"); 




async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    const data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "м/с";   

    
    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "src/images/clouds.png"
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "src/images/clear.png"
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "src/images/drizzle.png"
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "src/images/drizzle.png"
    } else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "src/images/mist.png"
    } else if(data.weather[0].main === "Snow") {
        weatherIcon.src = "src/images/snow.png"
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

  
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
});

searchBox.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        checkWeather(searchBox.value)
    }
})

 