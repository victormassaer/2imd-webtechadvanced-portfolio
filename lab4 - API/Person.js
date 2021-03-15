class Person{
    construcor(){
        this.item;
        this.poster;
    }
        
    getInfo(){
       this.item =  document.querySelector("li");
       this.item.addEventListener("click", ()=>{
        let url = 'API url';
        fetch(url).then(response =>{
           return response.json();
        }).then(data =>{
            // this.person = data.results;
            // this.person.forEach(function (arrayItem) {
            //     var name = arrayItem.name;
            //     document.querySelector('.ad__list').innerHTML = "<li>" + name + "</li>";
            });
        })
        .catch(err =>{
            console.log(err);
        });
    }
}

let person = new Person();