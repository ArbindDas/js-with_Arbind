// Control flow in javascript in 1 shot |

// const isUserLoggedIn = false;

// if
// (isUserLoggedIn === true){
//     // console.log("user loggedIn succesfully .");
// }
// else
// {
//     // console.log("user loggedIn Fail ."); 
// }

// implicot scope
// const balance = 1000
// if(balance>=500) console.log("Done") 


// nesting if else else-if
// const totalVal = 1000
// if (totalVal === 500) {
//     console.log("Equal with total Val .");
    
// } else  if(totalVal<=1200){
//     console.log("totalval is less than  1200:");  
// }else{
//     console.log("two condition are not matched : ");
    
// }


const UserLoggedIn  = true
const debitCard = true
const UserLoggedInwihEmail = true;
const UserLoggedInwihGoogle = true;
if (UserLoggedIn && debitCard === true) {
    console.log("allow to buy : ");
    
}else{
    console.log("not allow to loggedIn");
    
} if (UserLoggedInwihEmail || UserLoggedInwihGoogle === true) {
    console.log("buy know : Allow ");
    
}