// 14/08/2020

function saludo(date){
    var week_day = date.getDay();
    var hour_day = date.getHours();
    var moment;
    
    if(hour_day < 12){
        moment = "Buenos días, ";
    }
    else if(12 <= hour_day < 18){
        moment = "Buenas tardes, ";
    }
    else{
        moment = "Buenas noches, ";
    };

    var text;
    switch(week_day){
        case 1:
        case 2:
            text = "Falta mucho para el fin de semana. ";
        case 3:
        case 4:
            text = "Falta poco para el fin de semana. ";
        default:
            text = "Ya estamos en fin de semana. ";
    };

    return moment + text;
};


var date = new Date();
var date_ret = saludo(date);
console.log(date_ret);