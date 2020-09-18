class StaffList{

    constructor(){
        this.nickNames = [];
        this.ages = [];
        this.size = 0;
    };

    Add(nickName, age){
        try{
            if(typeof(nickName) != 'string') throw new Error("El nickName debe ser una palabra.");
            var n_age  = Number(age);
            if(isNaN(n_age)) throw new Error("La edad debe ser un numero.");
            if(n_age < 0) throw new Error("La edad debe ser no negativa.");
            if(0 <= n_age && n_age < 18) throw new Error("Alerta de menor de edad");
            var idx = this.nickNames.indexOf(nickName);
            if(idx === -1){
                this.nickNames.push(nickName);
                this.ages.push(n_age);
                this.size += 1;
            }
            else{
                throw new Error("Este nickName ya existe.");
            }
            
        }
        catch(err){
            console.log(err);
        };
    };

    Remove(nickName){
        try{
            if(typeof(nickName) != 'string') throw new Error("El nickName debe ser una palabra.");
            var idx = this.nickNames.indexOf(nickName);
            if(idx === -1){
                throw new Error("El nickName que desea borrar no existe.")
            }
            else{
                delete this.nickNames[idx];
                this.nickNames.splice(idx, 1);
                delete this.ages[idx];
                this.ages.splice(idx, 1);
                this.size -= 1;
            }
        }
        catch(err){
            console.log(err);
        }
    };

    getSize(){
        return this.size;
    };

};


/////////////////////////////////////////////////////////////////////////////////////////////////
// BLOQUE PRINCIPAL /////////////////////////////////////////////////////////////////////////////

var list1 = new StaffList();

var names1 = ["Norberto", "Tom", "Jerry", "Zeus", "Gaia"];
var ages1 = [18, '23', 25, '37', 18];

for(i = 0; i < names1.length; i++){
    list1.Add(names1[i], ages1[i]);
}

console.log(list1)

list1.Remove("Tom");
console.log(list1);
console.log("Hay " + String(list1.getSize()) + " personas del Staff.");

list1.Add("Norbert", 25);
console.log(list1);
console.log("Hay " + String(list1.getSize()) + " personas del Staff.");
