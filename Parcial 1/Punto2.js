let timeToDate = {
    days_to: undefined,
    weeks_to: undefined
};

Object.defineProperty(timeToDate, "calc_days_weeks", {
    set: function(date){ // date es una fecha en formato dd/mm/aa
        var date_arr = date.split("/");
        var Dt = new Date(Number(date_arr[2]), Number(date_arr[1]) - 1, Number(date_arr[0]));
        var act_date = new Date();
        if(Dt > act_date){
            var diff = Dt - act_date; // diferencia entre las 2 fechas (en milisegundos)
            this.days_to = Math.round(diff / (1000 * 60 * 60 * 24) * 10) / 10;
            this.weeks_to = Math.round(diff / (1000 * 60 * 60 * 24 * 7) * 10) / 10;
        }
        else{
            console.log("Esta fecha ya pasó.")
        };
    }
});


Object.defineProperty(timeToDate, "daysToDate", {
    get: function(){
        return this.days_to;
    }
});


Object.defineProperty(timeToDate, "weeksToDate", {
    get: function(){
        return this.weeks_to;
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////
// BLOQUE PRINCIPAL /////////////////////////////////////////////////////////////////////////////

var fecha = "03/10/2020";
console.log("Fecha: " + fecha)
timeToDate.calc_days_weeks = fecha;
console.log("Faltan " + String(timeToDate.daysToDate) + " dias para la fecha.");
console.log("Faltan " + String(timeToDate.weeksToDate) + " semanas para la fecha.");