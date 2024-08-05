// 2. Function Expressions
// Assigned to a variable like any other expression.
// Cannot be called before they are declared.

const add = function(num1 , num2){
    return num1 + num2;
}
console.log('the sum is '+add(5,5));
// add(5,5) => this is wrong


// res operator holding multiple price in a function with the help of res op \
function calculatePrice(...buy){
    return buy;
}
console.log(calculatePrice(1000, 2300 , 3100));


// function calculatePriceTwo(val1 , val2 , ...buy){
//         return buy;
// }
// console.log(calculatePriceTwo(100, 200 , 400));
// console.log(calculatePriceTwo(val1));

// function  with Object
const user = {
    name:"Arbind das",
    age:"21",
}
function handelObject(anyobject){
   console.log( `username is : ${anyobject.name} age is : ${anyobject.age}`);
    
}
handelObject(user)

handelObject({ // directly object passed into function
    name:"jai",
    age:"23"
})

const myarr = [1,2,3,4]
function returnThirdValue(getarray){
    return getarray[3]
}
console.log(returnThirdValue(myarr));

console.log(returnThirdValue([23,24,25,27]));
