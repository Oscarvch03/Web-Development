// 19/08/2020

// Factorial controlled by exceptions

function Factorial(x){
    try{
        y = Number(x);
        if(!Number.isInteger(x)) throw new Error("x must be a number.");
        if(isNaN(x)) throw new Error("x must be a number.");
        if(x < 0) throw new Error("x must be a number greater than 0.");
        if(x === 0 || x === 1) return 1;
        var out = 1;
        for(var i = 2; i <= y; i++){
            out *= i;
        }
        return out;
    }
    catch(err){
        console.log(err);
    }
};

console.log(Factorial(4));