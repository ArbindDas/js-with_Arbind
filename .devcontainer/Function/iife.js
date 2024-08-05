// Immediately Invoked Function Expressions IIFE 
(function print(){
    // named iife
    console.log("Db connected");
    
})();


( (user) => {
    // simple ioife
    console.log(`DB connected : Two  ${user}`);
    
} )('arbind')