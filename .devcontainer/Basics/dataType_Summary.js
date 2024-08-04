// **** primitive dataTypes
// 7 types: String , Number , Boolean , null , Undefined , symobl , bigINt

// ***  Reference (Non primitive)
// Array , Objects , Functions

// 1.Array
const heros = ['shaktiman'  , 'hanuman' , 'naagraj']
console.log(heros);

// objects
let obj = {
    user:"arbind",
    userid:234,
}
console.log(obj);

// functions
function print(){
    console.log('jai shree ram');
    
}
print()

// function
function printName(username){
    console.log('name is : '+username);
    
}
printName("arbind das")

const myfunction = function(user){
    console.log('username is : '+user);
    
}
myfunction("jai")

// arrow function

const printdet = (userid)=>{
    console.log('userId is : '+userid);
    
}
printdet(12)