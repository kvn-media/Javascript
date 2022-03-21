// soal no 4
// a² = b² + c² - 2bc.Cos A
let b = 8
let c = 5
let A = 60
let a = Math.sqrt((b ** 2) + (c ** 2) - ((2 * b * c * Math.cos(A * Math.PI/180))))
console.log("Segitiga: panjang sisi a =", Math.round(a))