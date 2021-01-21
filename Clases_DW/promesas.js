
// var x = false;

// Define the promise
// var prom = new Promise(
//     (resolve, reject) => {
//         if(x){
//             resolve("The value is True");
//         } 
//         else {
//             reject("The value is NOT True");
//         }
//     }
// );

// prom.then(
//     res => {
//         console.log("Answer: " + res);
//     }
// ).catch(
//     res => {
//         console.log("Ocurred a Reject: " + res);
//     }
// );



// Other example

// console.log("Number 1: Normal console.log");

// x = 10;
// setTimeout(
//     () => {
//         x = x * x;
//         console.log("Number 2: Asincroned console.log");
//     }
//     , 2000);

// console.log("Number 3: The Value of x is: " + x);

// var promesa = new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 x = x * x;
//                 console.log("Number 2: Asincroned console.log");
//                 resolve(x)
//             }
//             , 2000);
//     }
// );

// promesa.then(
//     res => {
//         console.log("Number 3: The Value of x is: " + x);
//     }
// )

var games = [
    {nombre: "fallaout", puntuacion: 5, tipo: 1, id: 1},
    {nombre: "The Witcher", puntuacion: 10, tipo: 2, id: 2},
    {nombre: "GTA V", puntuacion: 8, tipo: 1, id: 3}
];

var tipos = {
    1: "Accion",
    2: "Aventura"
};

// With Callbacks

function getgames(callback){
    setTimeout(
        () => {
            console.log(games);
        }, 2000
    )
};

// getgames((err, games) => {console.log(games)});


// With Promises

function getgames2(){
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                resolve(games), 2000 
            );
        }
    );
};

// getgames2().then(
//     (res) => console.log(res)
// );

// This history will continue...


// Filtrar by specific id

// With Callbacks
function getgames3(id, callback){
    setTimeout(() => {
        callback(games.filter((game) => game.id === id));
    }, 2000);
};

// getgames3(1, (game) => console.log(game));

// With Promises
function getgames4(id){
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(games.filter((game) => game.id === id))
            }, 2000);
        }
    );
};

// getgames4(2).then((game) => console.log(game));


// Type Specific of game

// With Callbacks
function getTipo(id, callback){
    setTimeout(() => {
        callback(null, tipos[id]);
    }, 2000);
}

getTipo(1, (err, tipo) => console.log(tipo));

// With Promises
function getTipo2(id){
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(tipos[id]);
            }, 2000);
        });
};

getTipo2(1).then((tipo) => console.log(tipo));


