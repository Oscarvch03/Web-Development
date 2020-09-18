// 21/08/2020

// Functions

// function(args){
//     instructions;
// };

function cuadrado(x){
    return x * x;
};

function calculo(x){
    function absoluto(x){
        if(x > 0){
            return x;
        }
        else{
            return -x;
        }
    }
    return cuadrado(absoluto(x));
};

// Funciones flecha (lambda functions)
// (argumentos) => {return};
// Example: a.map((x) => x * x);