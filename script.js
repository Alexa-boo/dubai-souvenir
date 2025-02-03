document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "88b195350591f5c55fd453d8e7dfe1ac";  // Get an API key from https://openweathermap.org/
    const city = "Dubai";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
            document.getElementById("description").textContent = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById("weather-icon").src = icon;
            document.getElementById("weather-icon").style.display = "block";
        })
        .catch(error => {
            document.getElementById("temperature").textContent = "Error loading weather data";
            console.error("Weather data fetch error:", error);
        });
});
