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
        console.log(this.lat);
        console.log(this.long);
        }

    errorLocation(err){
        console.log(err);
    }
    
    
    

    GetWeatherData(){
        let url = //connect with weather api;
        fetch(url).then(response =>{
           return response.json();
        }).then(data =>{
            //get weather data and display temp 

            //compare temp with plannet on STAR WARS API

            //display picture of plannet 
        })
        .catch(err =>{
            console.log(err);
        });
    }

}

let app =  new App();