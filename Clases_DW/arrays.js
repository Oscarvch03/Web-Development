// 21/08/2020

// Manage of Arrays

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4, "holi", {a: 1, b: 2}];

array1.length // Tamaño del array

let array3 = new Array(10);
array3[15] = 6; // Expande la capacidad del array
array3["saludo"] = "hola";


// Propiedades

array1.push() // Add a element to the finish position
delete array1[3] // Erase a element in the index 3
1 in array1 // Verify if an element is in array

var object = {a: 1, b: 2, c: 3};
Object.keys(object); // Array with only the keys
array1.concat(array2); // Concat two arrays

array2.pop(); // Erase the last element in array

array1.slice(2); // Slicing

array2.filter(function(x){ return x < 5}); // Return a array with the valid condition
array2.some(function(x){ return x < 5}); // Return a bool
array2.every(function(x){ return x < 5}); // Return a bool


// Map mapea para cada uno de los elementos el resultado de una funcion
var c = array2.map(function(x){ return x * x});

// Reduce mape todos los elementos de un array en un unico resultado
var d = array1.reduce(function(x, y){ return x + y}, 0);

// ForEach
sum = 0;
array1.forEach(function(x){ return sum += x});
                                                    // Revisar
array1.forEach(function(v, i, a){ a[i] = v * v});

// Split and Join                                                                           
str = "holi world";
str.split(" ");
array1.join("-"); // Y hablando de pegarlo...

// Sorting arrays
array1.sort(); // Orden AlfaNumerico

// Mayusculas Y Minusculas
str.toLowerCase();
str.toUpperCase();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
