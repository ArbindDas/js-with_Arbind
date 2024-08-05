// 1. Function Declarations
// Defined using the function keyword followed by the function name, parameters, and body.
// Can be called before they are declared (hoisting). 

function printmtname(name){
    console.log(`my name is : ${name}`);
    
}
// console.log(printmtname("Arbind"));
printmtname('jai')


function print(name){
    console.log('name is : '+name);
    
}
// console.log(print('arbind das'));
print('arind')


function addTwoNumber(number1 , number2){
     console.log(number1 +number2);
     
}
addTwoNumber(5 , 6)

function add(num1 , num2){
    return num1+num2;
}
console.log(add(8,6));
const ansofadd = add(12,3)
console.log(ansofadd);


function loginuserMessage(username){
    if(username === undefined){
        console.log('please enter the username');
        return;
    }

    return `${username} just logged in`
}
console.log(loginuserMessage());
