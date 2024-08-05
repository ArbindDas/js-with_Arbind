// const myarr = [0,1,2,3]
// console.log(myarr[0]);

// ************ methods in Array ****************************8
const myarr = [1,2,3]
myarr.push(5);  // push add the value at the last
//console.log(myarr);  //output => 1,2,3,5


myarr.pop()  // pop => remove the last value
//console.log(myarr); // output => 1,2,3


myarr.unshift(10) // adding value at first
//console.log(myarr); // output => 10,1,2,3

myarr.shift() // remove the first value
//console.log(myarr); // output => 1,2,3

// const newarr = myarr.join()  // convert into STring
// console.log(typeof newarr);

// slice and splice 
const arr  = [0,1,2,3,4,5]
const newarr =  arr.slice(1,3) // f value include l val exclude
console.log('A' , newarr);
// console.log(arr);

// in splice 
const array = [0,1,2,3,4,5]
const afetrarr = array.splice(1,3)// f value include l val incl
console.log('B' , afetrarr);
// console.log(arr);




