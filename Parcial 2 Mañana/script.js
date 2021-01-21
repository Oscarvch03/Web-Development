let alive = true;
let LastClickColor = "";
let LastCardColor = "";
let puntuation = 0;
let audio = document.createElement("audio")
let source = document.createElement("source")
source.setAttribute("src", "NorbertoSong.mp3")
document.body.appendChild(audio)
audio.appendChild(source)
audio.loop = true;
audio.play()

let ismuted = true;

class CardGame extends HTMLElement{
    constructor(){
        super();
        this.status = 0;
    }

    connectedCallback(){
        this.setAttribute("class", "casilla gatito");
        this.addEventListener("click", this.changeCard);
        // console.log("alive:", alive);
    }

    attributeChangedCallback(atri, oldatri, newatri){
        if(alive){
            if(atri == "color"){
                this.style.backgroundColor = newatri
            }
            if(atri == "tipo"){
                this.style.backgroundImage = newatri;
            }
            if(atri == "opacidad"){
                this.style.opacity = newatri;
            }
        }
    }

    changeCard(){
        LastClickColor = this.style.backgroundColor;
        console.log("LastClickColor:", LastClickColor);
        if(LastClickColor == LastCardColor){
            puntuation = puntuation + 1;
            this.style.backgroundColor = "#00ff88";
            this.style.backgroundImage = "none"
        }else{
            puntuation = 0;
            this.style.backgroundColor = "#ff0000";
            this.style.backgroundImage = "none"
        }
        document.querySelector("#puntuacion").innerText = "Puntuación : " + puntuation
        setTimeout(()=>
        {
            this.style.opacity = 0.7
            this.style.backgroundColor = "#ffffff"},
        300)
    }

    static get observedAttributes(){
        return ["color", "tipo", "opacidad"]
    }

}

window.customElements.define("casilla-gatito", CardGame);

let tablero = document.querySelector("#tablero");


/////////////////////////////////////////////////////////
let arriba = document.querySelector("#arriba");
arriba.appendChild(document.createElement("casilla-gatito"));
let abajo = document.querySelector("#abajo");
/////////////////////////////////////////////////////////


let gatos = {
    g1: {
        color: "amarillo",
        color_hex: "#FFE600",
        url: "gatitocara_amarillo",
        tipo: "cara"
    },
    g2: {
        color: "azul",
        color_hex: "#009EFF",
        url: "gatitocara_azul",
        tipo: "cara"
    },
    g3: {
        color: "verde",
        color_hex: "#1AE274",
        url: "gatitocara_verde",
        tipo: "cara"
    },
    g4: {
        color: "rojo",
        color_hex: "#EF6C00",
        url: "gatitocara_rojo",
        tipo: "cara"
    },
    g5: {
        color: "amarillo",
        color_hex: "#FFE600",
        url: "gatitocola_amarillo",
        tipo: "cara"
    },
    g6: {
        color: "azul",
        color_hex: "#009EFF",
        url: "gatitocola_azul",
        tipo: "cara"
    },
    g7: {
        color: "verde",
        color_hex: "#1AE274",
        url: "gatitocola_verde",
        tipo: "cara"
    },
    g8: {
        color: "rojo",
        color_hex: "#EF6C00",
        url: "gatitocola_rojo",
        tipo: "cara"
    },
    g9: {
        color: "neutro",
        color_hex: "#ffffff",
        url: "none",
        tipo: "neutro"
    }
}

// LLenando el tablerito
let ncas = 64;

for(let i = 0; i < ncas; i++){
    let temp = document.createElement("casilla-gatito");
    tablero.appendChild(temp);
}


/////////////////////////////////////////////////////////

let m = 8;
for(let j = 0; j < m; j++){
    let aux = document.createElement("casilla-gatito");
    abajo.appendChild(aux);
};

/////////////////////////////////////////////////////////


// Seleccionamos quién es el que vamos a crear

function aparecer(){

    let tempCas = Math.ceil((Math.random() *(ncas - 1) + m));
    let newCas = Math.ceil(Math.random()*(Object.keys(gatos).length-2));
    let cards = document.querySelectorAll("casilla-gatito");
    // console.log(Object.keys(cards));
    // let cards = cards_aux.slice(m, cards_aux.length);

    // console.log(Object.keys(gatos)[newCas]);
    // console.log(newCas)
    // console.log(gatos[Object.keys(gatos)[newCas]].color_hex);
    let nat_color = gatos[Object.keys(gatos)[newCas]].color_hex;
    let nat_url = gatos[Object.keys(gatos)[newCas]].url;
    cards[tempCas].setAttribute("color", nat_color);
    cards[tempCas].setAttribute("opacidad", 1);
    if(nat_url == "none"){
        cards[tempCas].setAttribute("tipo", "none");
    }else{
        cards[tempCas].setAttribute("tipo", `url(${nat_url}.png)`);
    }

    setTimeout(()=>{
        cards[tempCas].setAttribute("color", gatos.g9.color_hex);
        cards[tempCas].setAttribute("tipo", gatos.g9.url);
        cards[tempCas].setAttribute("opacidad", 0.7);
    }, 2000)
}


//////////////////////////////////////////////////////////

function aparecer2(){
    let tempCas = Math.ceil((Math.random() * (m-1)));
    let newCas = Math.ceil(Math.random()*(Object.keys(gatos).length-2));
    let cards = document.querySelectorAll("casilla-gatito");

    let nat_color = gatos[Object.keys(gatos)[newCas]].color_hex;
    let nat_url = gatos[Object.keys(gatos)[newCas]].url;
    cards[tempCas].setAttribute("color", nat_color);
    cards[tempCas].setAttribute("opacidad", 1);
    if(nat_url == "none"){
        cards[tempCas].setAttribute("tipo", "none");
    }else{
        cards[tempCas].setAttribute("tipo", `url(${nat_url}.png)`);
    }

    setTimeout(()=>{
        cards[tempCas].setAttribute("color", gatos.g9.color_hex);
        cards[tempCas].setAttribute("tipo", gatos.g9.url);
        cards[tempCas].setAttribute("opacidad", 0.7);
    }, 2000);
};

//////////////////////////////////////////////////////////


alive = true;

function start(counter){
    if(alive){
      setTimeout(function(){
        counter++;
        for(let i = 0; i < 5; i++){
            aparecer();
        }
        // console.log(counter);
        start(counter);
      }, 2000);
    }
  }
  start(0);


//////////////////////////////////////////////////////////

function start2(counter){
    if(alive){
        setTimeout(function(){
          counter++;
          for(let i = 0; i < 3; i++){
              aparecer2();
          }
          // console.log(counter);
          start2(counter);
        }, 2000);
      }
};
start2(0);

//////////////////////////////////////////////////////////


let referenceCard = document.querySelector("#reference-card");
let tarjeta = document.querySelectorAll("casilla-gatito")[0];

function renderCardResponse(){
    let tempColor = Math.ceil(Math.random()*(Object.keys(gatos).length-2));
    let tempColorHex = gatos[Object.keys(gatos)[tempColor]].color_hex;
    referenceCard.style.backgroundColor = tempColorHex;
    referenceCard.style.opacity = 1;
    // console.log(tempColorHex);
    LastCardColor = referenceCard.style.backgroundColor;
    // console.log("LastCardColor: ", LastCardColor);
    // setTimeout(()=>{console.log("Color:", tempColorHex)}, 3000)
}


///////////////////////////////////////////////////////////

function renderCardResponse2(){
    let tempColor = Math.ceil(Math.random()*(Object.keys(gatos).length-2));
    let tempColorHex = gatos[Object.keys(gatos)[tempColor]].color_hex;
    let tempImage = gatos[Object.keys(gatos)[tempColor]].url;
    // referenceCard.style.backgroundColor = tempColorHex;
    // referenceCard.style.opacity = 1;
    tarjeta.setAttribute("color", tempColorHex);
    tarjeta.setAttribute("tipo", `url(${tempImage}.png)`)
    tarjeta.setAttribute("opacidad", 1);
    // console.log(tempColorHex);
    LastCardColor = referenceCard.style.backgroundColor;
};

///////////////////////////////////////////////////////////


function renderCardResponseTime(counter1){
    if(alive){
      setTimeout(function(){
        counter1++;
        renderCardResponse();
        // console.log(counter1);
        renderCardResponseTime(counter1);
      }, 2000);
    }
}




//////////////////////////////////////////////////////////

function renderCardResponseTime2(counter1){
    if(alive){
      setTimeout(function(){
        counter1++;
        renderCardResponse2();
        // console.log(counter1);
        renderCardResponseTime2(counter1);
      }, 2000);
    }
}

renderCardResponseTime2(0);

//////////////////////////////////////////////////////////


audiobutton = document.querySelector("#audio")
audiobutton.addEventListener("click", stopSong)

function stopSong(){
    console.log("Aqui");
    if(ismuted){
        audio.play();
        audiobutton.style.backgroundImage = "url('MuteOn.png')";
        ismuted = false;   
    }else{
        audio.pause();
        audiobutton.style.backgroundImage = "url('muteOff.png')";
        ismuted = true;
    }
}

renderCardResponseTime(0);
