// firstly convert string into int
// let score = "123"
// console.log(typeof score);
// let valueInNumber =  Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let num = "123abc" // this is not a number
// console.log(typeof num);
// let number = Number(num)
// console.log(number)
; // after conversion string 
// into int output is Nan bcz 123abc is not a number


//convert null into number
let val = null
console.log(val);
console.log(typeof val);
let aftervall = Number(val)
console.log(typeof aftervall);
console.log(aftervall);
// null convert into int output is 0 

// note

// "33" => 33
// "22323abc" => Nan
// true => 1
// false => 0
// null => 0
// undefined => Nan

let isval = ""
let isboolean = Boolean(isval)
console.log(isboolean);

// note
// 1 => true
// 0 => false
// "" => false
// " " , "arbinf"  => true


// string to number
let user = 345
let afteruser = String(user)
console.log(typeof afteruser);







