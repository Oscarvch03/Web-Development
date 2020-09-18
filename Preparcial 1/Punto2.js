var a =  [[1, 2, 3, 4], [3, [4, 5]], [3, 9]];
console.log("a = ", a);
var types = a.map(function(x){ return typeof(x)});
var bool = types.some(function(x){ return x === "object" });
while(bool){
    a = a.reduce(function(x, y){
                    if(typeof(x) != "object" && typeof(y) != "object"){
                        return [x].concat([y]);  
                    }
                    else if(typeof(x) != "object" && typeof(y) === "object"){
                        return [x].concat(y); 
                    } 
                    else if(typeof(x) === "object" && typeof(y) != "object"){
                        return x.concat([y]); 
                    }
                    else{
                        return x.concat(y); 
                    }; 
                });
    types = a.map(function(x){ return typeof(x)});
    bool = types.some(function(x){ return x === "object" });
}
console.log("new_a = ", a);