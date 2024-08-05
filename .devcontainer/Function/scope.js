// Global and local scope in javascript
let a = 500  // global scope
if(true){
    let a = 1  // local scope
    const b  = 2
    // var c = 3  // not use this
    console.log("Inner a : "+a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

