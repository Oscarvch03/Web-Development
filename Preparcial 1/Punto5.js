function change(frase, palabra){
    var arr = frase.split(" ");
    var mp = arr.map(function(x){ return x.length })
    var mx = Math.max.apply(null, mp);
    var idx = mp.findIndex(function(x){ return x === mx});
    arr[idx] = palabra;
    return arr.join(" ");
};

var frase1 = "El Señor de los Anillos";
var pal1 = "Buñuelos";
var new_frase1 = change(frase1, pal1);
console.log(new_frase1);