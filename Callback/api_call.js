function fetchDataFromServer(callback){
    console.log("Fetching data....")

    setTimeout(() => {
        let data = {id: 1, name: 'Hotel Reservation', status: 'confirm'};
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Data recieved: ", data);
}

fetchDataFromServer(processData);