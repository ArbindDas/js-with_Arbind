const accontId = 13342 // you cannot change const 

// accontId = 78  // not allowed
// console.log(accontId)

let accountEmail = "jai44@gmail.com"
var accountPassword = "433434"
accountCity = "jeetpur"  //  this is right
console.table([accontId , accountEmail , accountPassword , accountCity])
/* prefer not use to var 
because of issue in block scope and functional scope
*/

let user;  // this print undefined
console.log(user)