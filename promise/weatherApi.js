function getWeather(city) {
    const apiKey = '2d3ca96f23da8c1d32aec39d49bf7d98';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Step 1: Wrap fetch inside a custom Promise
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(new Error('City not found or network error!'));
                } else {
                    return response.json();
                }
            })
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
    });
}


getWeather('Delhi')
    .then(data => {
        console.log(data)
        console.log(`City: ${data.name}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
        return data.coord;
    })
    .then(coord => {
        console.log(`Coordinates: lat=${coord.lat}, lon=${coord.lon}`);
        // Optionally return another fetch or value here
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
 