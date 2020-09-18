let counter = (function counter(){
    let value = 0;
    return{
        getValue: function(){
            return value;
        },
        changeBy: function(k){
            value += k;
        },
    }
})();

// a) El objeto counter consiste en ser literalmente un "contador",
//    que se inicializa en 0, del cual yo puedo obtener su valor 
//    (getValue), o cambiar su valor (changeBy). 


// b)

let my_counter = {
    value: 0
};

Object.defineProperty(my_counter, "getValue", {
    get: function(){
        return this.value;
    }
});

Object.defineProperty(my_counter, "changeBy", {
    set: function(k){
        this.value += k;
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////
// BLOQUE PRINCIPAL /////////////////////////////////////////////////////////////////////////////

var val1 = counter.getValue();
console.log("counter =", val1);
counter.changeBy(7);
val1 = counter.getValue();
console.log("counter =", val1);
counter.changeBy(7);
val1 = counter.getValue();
console.log("counter =", val1);

console.log()

var val2 = my_counter.getValue;
console.log("my_counter =", val2);
my_counter.changeBy = 7;
val2 = my_counter.getValue;
console.log("my_counter =", val2);
my_counter.changeBy = 7;
val2 = my_counter.getValue;
console.log("my_counter =", val2);