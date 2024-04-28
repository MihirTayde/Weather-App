function getWeather() {
    const apiKey = '8380760008c6386e60a6ab361c77b63a'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const city = document.getElementById('Input_box').value.trim();

    if (!city) {
        alert("Please enter a city");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            document.getElementById('temp').innerHTML = `${temperature}&deg;C`;
            document.getElementById('weather_description').textContent = weatherDescription;

            // Update weather icon
            const weatherIconElement = document.getElementById('weather_img');
            weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
            weatherIconElement.alt = weatherDescription;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
