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
            return response.json();
        }).then(data =>{
            //get weather data and display temp
            let temp = data.main.temp;
            document.querySelector(".ad__temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".ad__sum").innerHTML = data.weather[0].description;
            //compare temp with plannet on STAR WARS API
            this.getPlanet(this.checkTemp(temp));
            //display picture of plannet 
            this.setBg(this.checkTemp(temp));
            
        })
        .catch(err =>{
            console.log(err);
        });
    }

    checkTemp(temp){
        if(temp<0){
            let num = "4";
            return num;
        }else if(0<=temp<=10){
            let num = "2";
            return num;
        }else if(11<=temp<=15){
            let num = "3";
            return num;
        }else if(21<=temp){
            let num = "1";
            return num;
        }
    }

    setBg(num){
       
        switch (num){
            case "4":
                document.querySelector(".ad").style.backgroundImage = `url(images/Hoth.jpeg)`;
                console.log("hoth");
            break;

            case "2":
                document.querySelector(".ad").style.backgroundImage = "url('images/Alderaan.jpeg')";
                console.log("Alderaan");
            break;

            case "3":
                document.querySelector(".ad").style.backgroundImage = `url(images/Yavin.jpeg)`;
                console.log("Yavin");
            break;

            case "1":
                document.querySelector(".ad").style.backgroundImage = `url(images/Tattooine.jpg)`;
                console.log("Tattooine");
            break;

            default:
                console.log("het werkt niet");
        }
           
    }

    getPlanet(num){
        const url = `https://swapi.dev/api/planets/${num}/`;
        fetch(url).then(response =>{
            return response.json();
        }).then(data =>{
            //get weather data and display temp
            document.querySelector(".ad__planet").innerHTML = "temperatures like on " + data.name;
            document.querySelector(".ad__climate").innerHTML = "where the climate is " + data.climate;
        })
            .catch(err =>{
                console.log(err);
            });
    }



}

let app =  new App();