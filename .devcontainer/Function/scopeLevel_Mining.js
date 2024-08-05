// Scope level and mini hoisting in javascript 

function one(){
    const name = "Arbind"

    function two(){
        const web = "java"
        console.log(name);  
    }
    // console.log(web);
    
    two();
}
one()