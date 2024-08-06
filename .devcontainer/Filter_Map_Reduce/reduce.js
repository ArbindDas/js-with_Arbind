// ********** reduce return thier values or function

// const arr = [1,2,3,4,5]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    sum+=arr[i]
// }
// console.log(sum);


// let sum2 = 0;
// for (const element of arr) {
//     sum2+=element
// }
// console.log(sum2);


const mynums = [1,2,3,4,5]

// const mytotal = mynums.reduce(function(acc, cur){
//     return acc + cur;
// }, 0)
// console.log(mytotal);

const afteradd = mynums.reduce((acc , curval)=>{
    console.log(`acc val is : ${acc} , curval is : ${curval}`);
    
        return acc + curval
},0)

console.log(afteradd);


// objects with reduce

const shopping = [
    {
        tshirtbrand:"nike",
        tshirtPrice:999
    },

    {
        tshirtbrand:"nike",
        tshirtPrice:999
    },

    {
        tshirtbrand:"nike",
        tshirtPrice:999
    },

    {
        tshirtbrand:"nike",
        tshirtPrice:999
    },

    {
        tshirtbrand:"nike",
        tshirtPrice:999
    }
]

const afterAdd = shopping.reduce((acc,item) => {
        return acc + item.tshirtPrice;
},0)

console.log(afterAdd)