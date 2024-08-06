// for each loop with Array
// foreach loop is call back function thats why he have no function name 
// in thier loop
const myarr = ["js", "php" , "java" , "golang" , "rust"]

// myarr.forEach(function(item){
//     console.log(item);
    
// })

// myarr.forEach(element => {
//     console.log(element);
    
// });

// myarr.forEach(element =>{
//     console.log('value is : '+element);
    
// });

// myarr.forEach(element => console.log(element))


// myarr.forEach((item)=>{
//     console.log(item);
    
// })


// const user = ['arbind' , 'abi' , 'jai', 'bhim']
// // printing val , index , and whole Array
// user.forEach((val , index , arr) =>{
//     console.log(val , index , arr);
    
// })

// function print(item){
//     console.log(item);
    
// }

// const res =  (item)=>{
//     console.log(item);
    
// }

// user.forEach(res)



// foreach loop with Array of objects

const mycodding = [
    {
        langName:"javasscript",
        langfileName:"js"
    },

    {
        langName:"python",
        langfileName:"py"
    },

    {
        langName:"c++",
        langfileName:"cpp"
    },
]
mycodding.forEach((item) =>{
    console.log('langName : ' + item.langName);
    console.log('langFileName : ' +item.langfileName);
    
    
})

