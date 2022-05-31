const number = [4,6,8,9,10]

const every = number.every(e => e % 2 === 0)    //semua angka yg ada di dlm array habis dibagi 2

const some = number.some(e => e % 2 === 0)      //beberapa angka yg ada di dlm array habis dibagi 2

console.log(every);
console.log(some);