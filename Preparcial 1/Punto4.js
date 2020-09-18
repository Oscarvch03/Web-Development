// a)

function fecha(Date){
    var dia = String(Date.getDate()).length === 1 ? "0" + String(Date.getDate()) : String(Date.getDate());
    var mes = String(Date.getMonth() + 1).length === 1 ? "0" + String(Date.getMonth() + 1) : String(Date.getMonth() + 1);
    var año = String(Date.getFullYear());
    return dia + "-" + mes + "-" + año;
};

var fecha1 = new Date();
var fecha1_str = fecha(fecha1);
console.log("fecha1: ", fecha1_str);


// b)

function first_sabado(fecha1, fecha2){
    var f1 = fecha1.split("-");
    var f2 = fecha2.split("-");
    var F1 = new Date(Number(f1[2]), Number(f1[1]) - 1, Number(f1[0]));
    var F2 = new Date(Number(f2[2]), Number(f2[1]) - 1, Number(f2[0]));
    if(F1 <= F2){
        var diff_days = 6 - F1.getDay();
        var FF;
        if(diff_days === -1){
            FF = new Date(F1.getFullYear(), F1.getMonth(), F1.getDate() + 6);
        }
        else{
            FF = new Date(F1.getFullYear(), F1.getMonth(), F1.getDate() + diff_days);
        };

        if(FF <= F2){
            return fecha(FF);
        }
        else{
            return "No hay un sabado en este intervalo.";
        }
    }
    else{
        return "El intervalo no es valido.";
    };
};

var fecha1 = "01-10-2020";
var fecha2 = "06-10-2020";
var fs = first_sabado(fecha1, fecha2);
console.log(fs);


// c)

function days_to_christmas(fecha){
    var f = fecha.split("-");
    var F = new Date(Number(f[2]), Number(f[1]) - 1, Number(f[0]));
    var Fmc = new Date(F.getFullYear(), 11, 25);
    var diff;
    if(F == Fmc){
        return "Estás en Navidad.";
    }
    else if(F < Fmc){
        diff = (Fmc - F) / (1000 * 60 * 60 * 24);
        return "Faltan " + String(diff) + " dias para Navidad."
    }
    else{
        Fmc = new Date(F.getFullYear() + 1, 11, 25);
        diff = (Fmc - F) / (1000 * 60 * 60 * 24);
        return "Faltan " + String(diff) + " dias para Navidad."
    };
};

var fecha1 = "25-12-2019";
var dtc1 = days_to_christmas(fecha1);
console.log(dtc1);


// d)

function random_number(input){
    var num = Math.floor(Math.random() * 10 + 1);
    console.log(num);
    if(input === num){
        return "Ganaste";
    }
    else{
        return "Perdiste"
    };
}

var input1 = 5;
var random1 = random_number(input1);
console.log(random1);