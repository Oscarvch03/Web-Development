let request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function(){
    let datos = JSON.parse(this.response);
    datos.forEach(element => {
        // console.log(element);
        let card = document.createElement("div");
        let title = document.createElement("h1");
        let description = document.createElement("p");
        let root = document.querySelector("#root");
        root.appendChild(card);
        card.appendChild(title);
        card.appendChild(description);
    }); 
};
request.send();