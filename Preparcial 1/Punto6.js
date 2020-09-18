// a)

function herencia(p){
    if (p == null) throw TypeError(); // Si p es null, generar un TypeError
    var t = typeof p; // Tomo el tipo de dato a p
    if (t !== "object" && t !== "function") throw TypeError(); // Si p no es un objeto ni una funcion, generar TypeError
    function f() {}; // Inicializar una funcion f
    f.prototype = p; // Agrego propiedades o metodos a la funcion f
    return new f(); // Retorno una instancia de la funcion f
};


// b)

var Casa = {direccion: "Cll 116 # 34-50", tipo: "Comercial", color_fachada: "Rojo", clase: "Casa"};
console.log("For Casa: ")
for(i in Casa){
    console.log(String(i) + ":", Casa[i])
};
console.log()

var Casa1 = herencia(Casa);
Casa1.tipo = "Vivienda";
Casa1.direccion = "Cll 26 # 4-80";
console.log("For Casa1: ")
for(i in Casa1){
    console.log(String(i) + ":", Casa1[i])
};
console.log()

var Empresa = {nombre: "Norberto" , direccion: "Cll 25 # 4-80", gerente: "Patuco"};
console.log("For Empresa: ")
for(i in Empresa){
    console.log(String(i) + ":", Empresa[i])
};