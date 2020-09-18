class Muestra{

    constructor(array){
        this.size = array.length;
        this.array = array;
        this.media = undefined;
        this.varianza = undefined;
    };

    Media(){
        var sum = 0;
        this.array.forEach(function(x){ return sum += x });
        this.media = sum / this.size;
    };

    Varianza(){
        var sum = 0;
        var med = this.media;
        this.array.forEach(function(x){ return sum += (x - med)**2 });
        this.varianza = sum / this.size;
    };

    static Covarianza(muestra1, muestra2){
        var sum = 0;
        var med1 = muestra1.media;
        var med2 = muestra2.media;
        for(var i = 0; i < muestra1.size; i++){
            sum += (muestra1.array[i] - med1) * (muestra2.array[i] - med2);
        };
        var cov = sum / muestra1.size;
        return Math.round(cov * 10000) / 10000;
    };

    static Correlacion(muestra1, muestra2){
        var cov = this.Covarianza(muestra1, muestra2);
        console.log("cov = ", cov);
        var corr;
        var vari1 = muestra1.varianza;
        var vari2 = muestra2.varianza;
        if(cov === 0){
            corr = 0;
        }
        else{
            corr = cov / (Math.sqrt(vari1 * vari2)); 
        };
        return Math.round(corr * 10000) / 10000;
    };

};

var arr1 = [7, 5, 8, 4, 20];
var arr2 = [4, 13, 17, 8, 10];
var m1 = new Muestra(arr1);
m1.Media();
m1.Varianza();
var m2 = new Muestra(arr2);
m2.Media();
m2.Varianza();

console.log("m1 = ", m1);
console.log("m2 = ", m2);

corrm1m2 = Muestra.Correlacion(m1, m2);
console.log("Corr = ", corrm1m2);

// Add exceptions