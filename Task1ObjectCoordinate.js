// 21/08/2020
// Oscar Velasco Chiquillo


// Definimos el Objeto Coordenada que representa un punto (x, y)
// en el plano cartesiano, con su respectiva correspondencia en 
// coordenadas polares


// FORMULAS:
// x = r*cos(theta)
// y = r*sen(theta)
// r = sqrt(x**2 + y**2)
// theta = atan(y/x)


// Definimos un Objeto para representar una Coordenada Cartesiana en el origen

let Coordinate = {
    x: 0,
    y: 0
};


// Definimos la propiedad set para establecer la coordenada (x, y)

Object.defineProperty(Coordinate, "set_coord", {
    set: function(coord){
        // coord es un array de 2 entradas que representa a x & y respec.
        try{
            if(coord[0] === null || coord[0] === "" || coord[1] === null || coord[1] === "") throw new Error("Las entradas de la Coordenada deben ser numeros.");
            if(coord[0] === true || coord[0] === false || coord[1] === true || coord[1] === false) throw new Error("Las entradas de la Coordenada deben ser numeros.");
            var myRe = /^\s+$/; // Expresion regular que me denota mas de un espacio
            if(myRe.exec(coord[0]) != null || myRe.exec(coord[1]) != null) throw new Error("Las entradas de la Coordenada deben ser numeros.");
            var x = Number(coord[0]);
            var y = Number(coord[1]);
            if(isNaN(x) || isNaN(y)) throw new Error("Las entradas de la Coordenada deben ser numeros.");
            this.x = Math.round(coord[0] * 1000) / 1000; // Redondeo x con 3 cifras decimales
            this.y = Math.round(coord[1] * 1000) / 1000; // Redondeo y con 3 cifras decimales
        }
        catch(err){
            console.log(err);
        }
    }
});


////////////////////////////////////////////////////////////////////////////////////////

// Definimos la propiedad get para calcular r

Object.defineProperty(Coordinate, "get_radius", {
    get: function(){
        var r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return Math.round(r * 1000) / 1000; // Redondeo r con 3 cifras decimales
    }
});


// Definimos la propiedad get para calcular theta

Object.defineProperty(Coordinate, "get_theta", {
    get: function(){
        var theta = Math.atan2(this.y, this.x);
        return Math.round(theta * 1000) / 1000; // Redondeo theta con 3 cifras decimales
    }
});


// Definimos la propiedad set que calcula las coordenadas
// cartesianas a partir de las polares

Object.defineProperty(Coordinate, "calc_x_y", {
    set: function(polar_coord){
        // polar_coord es un objeto que representa una Coordenada Polar
        try{
            if(!(typeof(polar_coord) === "object")) throw new Error("El argumento debe ser un Objeto.")
            if(!("r" in polar_coord) || !("theta" in polar_coord)) throw new Error("r y theta deben ser las propiedades del Objeto.")
            if(polar_coord.r === true || polar_coord.r === false || polar_coord.theta === true || polar_coord.theta === false) throw new Error("Las entradas de las Coordenada deben ser numeros.");
            if(polar_coord.r === null || polar_coord.r === "" || polar_coord.theta === null || polar_coord.theta === "") throw new Error("Las entradas de la Coordenada deben ser numeros.");
            var myRe = /^\s+$/; // Expresion regular que me denota mas de un espacio
            if(myRe.exec(polar_coord.r) != null || myRe.exec(polar_coord.theta) != null) throw new Error("Las entradas de la Coordenada deben ser numeros.");
            var r = Number(polar_coord.r);
            var theta = Number(polar_coord.theta);
            if(isNaN(r) || isNaN(theta)) throw new Error("Las entradas de la Coordenada deben ser numeros.");
            this.x = Math.round((r * Math.cos(theta)) * 1000) / 1000; // Redondeo x con 3 cifras decimales
            this.y = Math.round((r * Math.sin(theta)) * 1000) / 1000; // Redondeo y con 3 cifras decimales
        }
        catch(err){
            console.log(err);
        }
    }
});
////////////////////////////////////////////////////////////////////////////////////////


//// BLOQUE PRINCIPAL

console.log("Coord: (" + String(Coordinate.x) + ", " + String(Coordinate.y) + ")");
console.log("\n");

// Definimos la coordenada a inicializar en el objeto

let x1 = 7;
let y1 = 10;
let coord1 = [x1, y1];
Coordinate.set_coord = coord1;

console.log("Coord: (" + String(Coordinate.x) + ", " + String(Coordinate.y) + ")");
console.log("r = " + String(Coordinate.get_radius));
console.log("theta = " + String(Coordinate.get_theta) + " rad");
console.log("\n");

// Pasar de Polares a Cartesianas

let r1 = 10;
let theta1 = 5; // Medido en Radianes

let coord2 = [0, 0];
Coordinate.set_coord = coord1;

// Definimos un objeto para representar una Coordenada Polar

let Pol_Coord = {
    r: r1,
    theta: theta1    
};

Coordinate.calc_x_y = Pol_Coord;
console.log("r = " + String(Pol_Coord.r));
console.log("theta = " + String(Pol_Coord.theta) + " rad");
console.log("Coord: (" + String(Coordinate.x) + ", " + String(Coordinate.y) + ")");