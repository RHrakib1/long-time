const number = [1, 2, 3, 4, 5, 6]
// const newmultipal = number.map(e => e * 2)
const filt = number.filter(e => e >= 4)
const another = filt.map(e => e * 3)
const khoja = number.find(e => e >= 2)
const new1 = number.reduce((total, bill) => total + bill)
const new2 = number.includes(1)

console.log(new2);

// console.log(newmultipal);
// console.log(filterr);
console.log(filt);
console.log(another);
console.log(khoja);
console.log(new1);