// The classes are special functions
// 1. Declarar la clase
// 2. Acceder a la clase

class FichaAjedrez{

    constructor(nombre, color, casilla){
        this.nombre = nombre;
        this.color = color;
        this.casilla = casilla;
    };

    get posiciones(){
        this.Posiciones();
    };

    Posiciones(){
        console.log("F.");
    };

};


var Caballo = new FichaAjedrez("Caballo", "Negra", {fila: 4, columna: 3}); // Instancia de la clase FichaAjedrez



// Class Persona

class Persona{

    constructor(nombre, peso, estatura){
        this.nombre = nombre;
        this.peso = peso;
        this.estatura = estatura;
    };

    static CompararMasaMuscular(persona1, persona2){
        let imcP1 = persona1.peso / persona1.altura ** 2;
        let imcP2 = persona2.peso / persona2.altura ** 2;
        if(imcP1 > imcP2){
            return "I1";
        }
        else{
            return "I2";
        };

    }

};


var gato1 = new Persona("Botas", 50, 1.40);
var gato2 = new Persona("Tom", 40, 1.50);

Persona.CompararMasaMuscular(gato1, gato2);


// Clases extendidas (Herencia)

// class nombre2 extends nombre1

// "super" para referirme a la clase "madre"


// Modo estricto

"use strict";



// REVISAR CLASES EN GENERAL:

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/extends 