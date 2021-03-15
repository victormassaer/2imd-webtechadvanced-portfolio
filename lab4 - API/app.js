class App{
    constructor() {
        //this.getPersons();
        this.person;
    }

    getPersons(){
        let url = 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/';
        fetch(url).then(response =>{
           return response.json();
        }).then(data =>{
            this.person = data.results;
            this.person.forEach(function (arrayItem) {
                var name = arrayItem.name;
                document.querySelector('.ad__list').innerHTML = "<li>" + name + "</li>";
            });
        })
        .catch(err =>{
            console.log(err);
        });
    }

}

let app =  new App();