/*
var angka = 0

do {
    // mengeprint hello
    console.log("hello")

    // melakukan implement terhadap variabel angka
    angka++

    // dicetak apakah angka <1
} while (angka < 1);
*/

// continuary

/*
var s = ''

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
        s += 'angka' + i
        s += '\n'
}
console.log(s);
*/
/*
function myNumber(angka) {
    for (let i = 0; i < angka; i++) {
        if ( i == 7) return i;
    }
}

console.log(myNumber(10));
*/
/*
var arr = ['grand livina', 'terios', 'rush']

for (let i = 0; i< arr.length; i++) {
    console.log(arr[i],);
}
*/

/*
// jawaban challenge js
let numbers = [
    [7, 9, 8, 4, 3],
    [10, 11, 13, 12],
];

let even = 0
let odd = 1

for (let b = 0; b < numbers.length; b++) {
    var numbB = numbers[b]
    for (let k = 0; k < numbB.length; k++) {
        // if ternary
        // kondisi                  // true            : // false
        numbers[b][k] % 2 === 0 ? numbB.splice((b,k), 1, even) : numbB.splice((b,k), 1, odd)

        // if(numbers[b][k] % 2 === 0) {
        //     numbers[b][k] = even
        // } else {
        //     numbers[b][k] = odd
        // }
    }
}

console.log(numbers);
*/

/*
const arr = ['Tika', 'edi', 'Joe', 'Egi']

arr.forEach(cetaknama)

function cetaknama(name) {
    console.log(`${name}`);
}
*/

/*
const arr = ['Tika', 'edi', 'Joe', 'Egi']

console.log("Keluarga enigma");
let kelEnigma = arr.map(manipulateData)

function manipulateData(data) {
    return data + `enigma`
}

kelEnigma.forEach((name)=>{
    console.log(`$(name)`);
})
*/

//arguments
function nama() {
    return arguments
}

var result = nama (2, 'hi', true, 3);

//console.log(result);

function tambah() {
    var results = 0
    for (let i = 0; i <arguments.length; i++) {
        results += arguments[i]
    }
    return results;
}

var results = tambah(2, 4, 5, 6, 8, 7, 8, 9, 10, 2)
console.log(result);