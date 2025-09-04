function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d3ca96f23da8c1d32aec39d49bf7d98&units=metric`;

  return new Promise((resolve, reject) => {
    try {
      // agar yaha koi synchronous error hua to catch kar lenge
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('City not found or network error!'); 
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));  // async error handle
    } catch (error) {
      reject(error); // synchronous error handle
    }
  });
}

getWeather('Pune')
  .then(data => {
    console.log(`City: ${data.name}`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
    return data.coord;
  })
  .then(coord => {
    console.log(`Coordinates: lat=${coord.lat}, lon=${coord.lon}`);
  })
  .catch(error => {
    console.error('Error handled:', error.message);
  });
