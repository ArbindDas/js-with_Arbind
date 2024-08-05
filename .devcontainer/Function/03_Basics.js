// 3. Arrow Functions
// Introduced in ES6, providing a concise syntax for function expressions.
// Implicit return for single-line functions.

const printname = (name) =>{
    console.log('my name is : '+name + ' and i am 21 years old');
    
}
// console.log(printname('arbind das'));
// printname('arbind')


const user = {
    userName:"Arbind",
    price:"99",
    welcome:function(){
        console.log(`${this.userName} welcome to our website :`);
        console.log(this);
        
        
    }
}
// console.log(user.welcome());
// user.userName = "jai"
// console.log(user.welcome());

// console.log(this);

// function jai(){
//     let user = "Arbind"
//     console.log(this.user); // we can not directly used this keyword in function
    
// }
// jai()  // output undefiend


// const chai  = ()=>{
//     let user = "arboind"
//     console.log(this);
// }
// chai()


// implicit return 
 const addnum =  (num1 , num2) => (num1 + num2) 
console.log(addnum(5 , 5));


const sub = (num1 , num2) =>  num1 - num2
console.log(sub(10,8));


// object with arrow fun with implicit
const obj = ()=> ({username:"JaiBhim"})
console.log(obj());
