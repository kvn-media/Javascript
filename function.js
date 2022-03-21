//kalkulator dengan menggunakan jenis function declaration dimana kalkulator bisa penjumblahan, pengurangan, 
/*
const penjumblahan = function (a, b) { //parameter
    return a + b
}

var result = penjumblahan(2,2) //argument

console.log(result);

//function declaration
function total(a,b) {
    return a + b
}

console.log(total)
*/

/*
const penjumblahan = function (a, b, c) {
    console.log("di dalam function", c);
    return a + b + c
}

var result = penjumblahan(2, 2)

console.log(result);
*/

const prompt = require('prompt-sync')()


function main() {
var a = parseInt(prompt('angka 1:'))
var b = parseInt(prompt('angka 2:'))
var c = parseInt(prompt('angka 3:'))
var d = parseInt(prompt('angka 4:'))

console.log("1. penjumblahan(+)");
console.log("1. pengurangan(-)");
console.log("1. perkalian(*)");
console.log("1. pembagian(/)");
var operator = prompt ('operator:')

calc(a, b, c, d, operator)
}

function calc(num1, num2, num3, num4, opr) {
    switch (opr) {
        case '+':
            penjumblahan(num1, num2, num3, num4)
            break;
        case '-':
            pengurangan(num1, num2, num3, num4)
            break;
        case '*':
            perkalian(num1, num2, num3, num4)
            break;    
        case '/':
            pembagian(num1, num2, num3, num4)
            break;    
        default:
            console.log('tolong inputkan operator, +, - ');
            break;    
    }
}

function add(num1, num2, num3, num4) {
    let total = num1, num2, num3, num4
    console.log(num1+num2+num3+num4)
}