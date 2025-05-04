const arr = [4, 5, 6, 7, 'hasan']

const arr2 = [0, 1, 2, 3, ...arr, 8, 9]

console.log(arr2);

const arr3 = [...arr]
const submit = arr3.filter(e => e > 5)
const submit2 = submit.map(e => e * 3)

console.log('the result is', submit);
console.log('the map is multipal', submit2);