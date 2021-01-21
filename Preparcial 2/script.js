let LastClickColor = "";
let LastCardColor = "";
let puntaje = 0;

class CardGame extends HTMLElement{
    
    constructor(){
        super();
    };

    connectedCallback(){
        this.setAttribute("class", "casilla snake");
        this.addEventListener("click", this.changeCard);
    };

    changeCard(){
        LastClickColor = this.style.backgroundColor;
        if(LastClickColor == LastCardColor){
            puntaje += 1;
            this.style.backgroundColor = "lawngreen";
        }
        else{
            puntaje = 0;
            this.style.backgroundColor = "red";
        }
        this.style.backgroundImage = "none";

        document.getElementById("puntaje").innerText = "Puntaje: " + puntaje;
        setTimeout(() => {
            this.style.opacity = 0.7;
            this.style.backgroundColor = "white";
        }, 200);
    };

    attributeChangedCallback(attri, old_att, new_att){
        if(attri == "color"){
            this.style.backgroundColor = new_att;
        }
        else if(attri == "tipo"){
            this.style.backgroundImage = new_att;
        }
        else if(attri == "opacidad"){
            this.style.opacity = new_att;
        };
    };

    static get observedAttributes(){
        return ["color", "tipo", "opacidad"];
    }

};


// Crear Clase

window.customElements.define("casilla-snake", CardGame);

let tablero = document.querySelector("#tab");

let snakes = {
    c1: {
        color: "amarillo",
        color_hex: "#FFE600",
        url: "parada",
        tipo: "cara"
    },

    c2: {
        color: "azul",
        color_hex: "#009EFF",
        url: "parada",
        tipo: "cara"
    },

    c3: {
        color: "verde",
        color_hex: "#1AE274",
        url: "parada",
        tipo: "cara"
    },

    c4: {
        color: "rojo",
        color_hex: "#EF6C00",
        url: "parada",
        tipo: "cara"
    },

    c5: {
        color: "amarillo",
        color_hex: "#FFE600",
        url: "acostada",
        tipo: "cara"
    },

    c6: {
        color: "azul",
        color_hex: "#009EFF",
        url: "acostada",
        tipo: "cara"
    },

    c7: {
        color: "verde",
        color_hex: "#1AE274",
        url: "acostada",
        tipo: "cara"
    },

    c8: {
        color: "rojo",
        color_hex: "#EF6C00",
        url: "acostada",
        tipo: "cara"
    },

    c9: {
        color: "neutro",
        color_hex: "#ffffff",
        url: "none",
        tipo: "neutro"
    }
};


// Llenar Tablero

let n = 64;
for(i = 0; i < n; i++){
    let casilla = document.createElement("casilla-snake");
    tablero.appendChild(casilla);
};


// Cambiar Tarjetas

function aparecer_card(){
    
    let cas = Math.ceil(Math.random() * (n - 1));
    let n_card = Math.ceil(Math.random() * (Object.keys(snakes).length - 2));
    let cards = document.querySelectorAll("casilla-snake");
    console.log(cas);
    console.log(n_card);
    console.log();
    let color_t = snakes[Object.keys(snakes)[n_card]].color_hex;
    let url_t = snakes[Object.keys(snakes)[n_card]].url;

    cards[cas].setAttribute("color", color_t);
    cards[cas].setAttribute("opacidad", 1);

    if(url_t == "none"){
        cards[cas].setAttribute("tipo", "none");
    }
    else{
        cards[cas].setAttribute("tipo", `url(${url_t}.png)`)
    };

    setTimeout(()=>{
        cards[cas].setAttribute("color", snakes.c9.color_hex);
        cards[cas].setAttribute("tipo", snakes.c9.url);
        cards[cas].setAttribute("opacidad", 0.7);
    }, 2000)

};

function start(round){
    setTimeout(() => {
        round++;
        for(let i = 0; i < 5; i++){
            aparecer_card();
        };
        start(round);
    }, 2000);
};

start(0);


// Cambiar Carta de Referencia

let referenceCard = document.querySelector("#reference-card");

function renderCard(){
    let num = Math.ceil(Math.random() * (Object.keys(snakes).length - 2));
    let color_num_hex = snakes[Object.keys(snakes)[num]].color_hex;
    referenceCard.style.backgroundColor = color_num_hex;
    referenceCard.style.opacity = 1;
    LastCardColor = referenceCard.style.backgroundColor;
};

function renderCards(counter){
    setTimeout(() => {
        counter++;
        renderCard();
        renderCards(counter);
    }, 2000);
};

renderCards(0);
