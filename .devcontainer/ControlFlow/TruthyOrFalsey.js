// truth values
// 1.[] , 2."0" , 3.'false' ,  4." " , 5.{} , 6.function(){}
const userEmail = "das34@gmail.com"
if (userEmail) {  // its take as a true
    // console.log("Got user Email : ");
}else{
    // console.log("Dont have email : ");
    
}

// falsey value
// 1. false , 2. 0, 3. -0 , 4. BigInt 0n , 5. null , 6.undefined , 7.NaN  


// const isuserAva = []
// if (isuserAva.length === 0) {
//     console.log('array is Empty : ');
    
// }else{
//     console.log("not Empty : ");
    
// }
// const obj = {}
// if (Object.keys(obj).length === 0) {
//     console.log("object is Emoty : ");
// }else{
//     console.log("NOt Empty : ");
    
// }

//*** Nullish coalescing operator (??) null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null|| 20
val1 = undefined || 100
// console.log(val1);

// ternary operator
// condition ? true : false
let age = 18;
age >= 15 ? console.log("elegible jai ho "): console.log("not");


