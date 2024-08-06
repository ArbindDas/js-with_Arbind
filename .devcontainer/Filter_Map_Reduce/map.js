// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num) => num + 1) // implict return scope is not open in this case
// console.log(newNums);


// const ans = myNumbers.map((num) =>{
//     return num + 10  // in this case scope is open 
// })
// console.log(ans)


// **************************** chaning  *************************
const val = [1,2,3,4,5,6,7,8,9,10]

const newval = val
                .map((val) => val * 10)
                .map((val) => val + 1)
                .filter((val) => val > 40)
console.log(newval)

// **************************** chaning  *************************
