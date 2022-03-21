// soal no 5
// total sudut 30 + 90
// panjang AC2 = BC2 - 2. AB.AC Cos 120
let sudutTotal = 30 + 90
let sudutCos = sudutTotal * (Math.PI/180)
let ac = Math.pow(30, 2) + Math.pow(60, 2) - (2 * 30 * 60 * (Math.cos(sudutTotal)))
let akarAc = Math.sqrt(ac)
let result = Math.round(akarAc)
console.log(result);