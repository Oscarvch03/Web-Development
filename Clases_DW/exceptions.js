// 19/08/2020

// Exceptions to manage the errors

function sqrt_1(x){
    if(x < 0) throw new Error("The number can't be negative.");
    return Math.sqrt(x);
}


function compare_age_and_mult(x){
    try{
        x = Number(x);
        if(x == "") throw new Error("The age can't be empty.");
        if(x < 0) throw new Error("The age can't be negative.");
        if(x == undefined) throw new Error("The age can't be undefined.");
        if(x > 200) throw new Error("So old for my code.");
        if(isNaN(x)) throw new Error("x must be a number.");
        // return "The age is valid";
    }
    catch(err){
        console.log(err);
    }
    finally{
        return 2 * x;
    }
}