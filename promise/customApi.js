// Simulated weather data
const weatherDatabase = {
    Delhi: { temp: 32, humidity: 60 },
    Mumbai: { temp: 29, humidity: 75 },
    Jaipur: { temp: 35, humidity: 40 }
};

function getWeather(city) {
    return new Promise(function(resolve, reject) {
        console.log("Fetching weather for:", city);

        setTimeout(function() {
            if (weatherDatabase[city]) {
                resolve(weatherDatabase[city]);
            } else {
                reject("City not found");
            }
        }, 1000);
    });
}


getWeather("Jaipur")
    .then(function(data) {
        console.log("Data received:", data);
        return data.temp;
    })
    .then(function(temp) {
        console.log("Temperature is:", temp + "°C");
        return temp;
    })
    .then(function(temp) {
        if (temp > 30) {
            console.log("It's hot today.");
        } else {
            console.log("Weather is pleasant.");
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
