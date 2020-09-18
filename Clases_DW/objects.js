// 19/08/2020

// Objetos se definen como diccionarios de Python

object1 = {"nombre": "oscar",
           "saludo": function(){
               return "Hola " + this.nombre;
           }};

console.log(object1.saludo());

object1.apellido = "velasco";

console.log(object1)
delete object1.apellido;
console.log(object1);


new Array();
new Object();
new Date();
new RegExp();



// Scope (alcance de las variables) var, let & const

// var w = 0;
// function change(){
//     var w = 10;
// }
// change()

// let p = "";
// let p = 0;

// const n = 0;
// n = 10;



// Come to Objects
// GETTERS & SETTERS

let compra = {id: "1234",
              valor_unit: 30000,
              n_art: 10,
              get valor_compra(){
                  return this.valor_unit * this.n_art;
              },
              set valor_unit(val){
                   this.valor_unit = val; 
              }
};

Object.defineProperty(compra, "iva", {
    get: function(){
        return this.valor_compra*0.19;
    }
});


Object.defineProperty(compra, "propina", {
    set: function(prop){
        this.valor_compra += prop;
    }
})


// TAREA: Crear un objeto que tenga las coordenadas (x, y) de un punto en el espacio 
// y hacer un get y set para obtener las coordenadas polares. El usuario puede hacer 
// set a r y theta y automaticamente se deberia modificar el valor de x & y



// Sellado y congelado de Objetos

var objeto1 = Object.freeze({"a": 1, "b": 2}); // No deja hacer cambios en el objeto

var objeto2 = {y: {value: 3, writable: false}}; // Ni monda idea 

var objeto3 = Object.seal({"a": 1, "b": 2}); // Se pueden modificar las propiedades pero no agregar mas

Object.isFrozen(objeto1);
Object.isSealed(objeto3);