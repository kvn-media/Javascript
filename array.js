/*
var myFunction = function(){
    let a = 'hello'
    return a
}
var hewan = []; 
hewan = ['kelinci', 'kucing', 'anjing', 'hamster', 23, true, myFunction]
console.log(hewan);
*/

/*
var hewan = []; 
hewan = ['kelinci', 'kucing', 'anjing', 'hamster']
console.log(hewan[2]);
*/

/*
var hewan = [];
hewan [0] = 'kelinci'
hewan [1] = 'hamster'
hewan [3] = 'kucing'
console.log(hewan);
*/

//array.pop()

/*
let array = []
console.log(array);
array.push(1)
console.log(array);
array.push("egi")
array.push("brod")
console.log(array);
array.unshift(0)
console.log(array);
let removed = array.shift()
console.log(removed, array);
*/


/*
let KA1 = ["tika", "edi", "egi"];
KA1.reverse()
console.log(KA1);
let KA2 = ["joni", "jojo"];
let result = KA1.concat(KA2);
console.log(result);
*/

let names = ["tika", "edi", "egi"]
let newData = names.filter(checkLengthName)

function checkLengthName(name) {
    return name.length > 3;
}

    console.log(newData);
//let keys = names.keys();

/*
let iterator = names.entries()
 for (const [index, name] of names.entries) {
    console.log('ini adalah index : $(index) dan ini adalah name $(name)');
 }


console.log(ky.next().value);
console.log(ky.next().value);
console.log(ky.next().value);
*/