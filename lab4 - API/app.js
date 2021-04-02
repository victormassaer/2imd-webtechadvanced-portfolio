class App{
    constructor() {
        this.Location();
        this.lat;
        this.long;
    }

    Location(){
        navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this ));

    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.long = result.coords.longitude;
        this.GetWeatherData(this.lat, this.long);
        }

    errorLocation(err){
        console.log(err);
    }
    
    
    

    GetWeatherData(lat, long){
        const weatherKey = 'd94d748308cba7980299e4a2294f6cd9';
        const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${weatherKey}`;
        fetch(url).then(response =>{
            console.log(response);
            return response.json();
        }).then(data =>{
            //get weather data and display temp
            let temp = data.main.temp;
            document.querySelector(".ad__temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".ad__sum").innerHTML = data.weather[0].description;
            //compare temp with plannet on STAR WARS API
            this.getPlanet(this.checkTemp(temp));
            //display picture of plannet 
        })
        .catch(err =>{
            console.log(err);
        });
    }



}

let app =  new App();