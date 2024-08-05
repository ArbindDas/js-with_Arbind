const marvel = ["thor" , "ironMan" , "spiderMan"]
const dc = ["superman" , "flash" , "batman"]

const afterAdd = [...marvel , ...dc] // spread operator
// console.log(afterAdd);

// using concat

const add = marvel.concat(dc)
// console.log(add);

const anotherArr = [1,2,3,4,5,[1,2,3,]]
const anotherArrans = anotherArr.flat(Infinity);
// console.log(anotherArrans);


// console.log(Array.isArray(marvel)); // true
// console.log(Array.from("Hitesh"));

console.log(Array.from({user:"Arbind das"})); // it prints only []   intersting case


// ********  converting number to  Array *********
let sc = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc, sc2, sc3));
