//  baad me learn  singleton



// avee hae learning obect  ***  leterals ***
const jsUser = {
    userName:"Arbind Das",
    userAddress:"Jeetpur",
    userEmail:"dasarbind45@gmail.com",
    isLoggedIn:"True",
    age:21,
    "full Name":"Arbind das tatwa"  // in this case we cannot access using . operator using => brackert[] only you can access

}
// console.log(jsUser);
// console.log(jsUser.userEmail)
// console.log(jsUser["userEmail"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser["age"]);

// change something
// jsUser.userName  = "Kaal"
// Object.freeze(jsUser) // now we can not chage any thing bcz object is freeze
// jsUser.userAddress = "birjung"
jsUser.greeting = function(){
    console.log('hello js users');
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js users its me : ${this.userName}`);
    
}
jsUser.greetingThree = function(){
    console.log(`hello js users email : ${this.userEmail}`);
    
}
console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.greetingThree());








// accessing the symbol in objects

const mysym = Symbol("key1")
// console.log(typeof mysym);

const user = {
    userName:"Arbind Das",
    userAddress:"Jeetpur",
    userEmail:"dasarbind45@gmail.com",
    isLoggedIn:"True",
    age:21,
    [mysym]:"jai ho symbol",
}
// console.log(typeof[mysym]);
// console.log(user[mysym]);
// in the case of symbol if we use the symbol then we must use [] big bracket to decalre thier name and the store what you want to be store  and in print case also used [] big bracket
// console.log(user);



