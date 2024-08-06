const num = [1,2,3,4,5,6,7,8,9,10]
//  num.forEach((nums)=>{
//     if (nums>5) {
//         console.log(nums);
        
//     }
// })


const newnums = num.filter((num) => num > 5)  // in this case scope is not open  implicit return

const newval = num.filter((num) => {
    return num > 6
})
// console.log(newval);

// console.log(newnums);


const val = [1,2,3,4,5,6,7,8,9,10]
const Newval = []
val.forEach((item)=>{
    if (item > 5) {
        Newval.push(item)
    }
})
// console.log('using forEach ' + Newval);


const books = [
    {
        title:'book one' , genre:'fiction' , publish:'1947' , edition:'2004'
    },

    {
        title:'book two' , genre:'non-fiction' , publish:'1957' , edition:'2008'
    },

    {
        title:'book three' , genre:'history' , publish:'1967' , edition:'2009'
    },

    {
        title:'book four' , genre:'science' , publish:'1987' , edition:'2024'
    },

    {
        title:'book five' , genre:'history' , publish:'1997' , edition:'2000'
    },

    {
        title:'book six' , genre:'fiction' , publish:'1937' , edition:'2002'
    },
]

 const booksRes = books.filter((bk) => {
    return bk.edition <= 2008 && bk.genre === 'history'
 })
 console.log(booksRes);


 const bookTwoAns = books.filter((bk) => bk.publish <= 1960)
 console.log(bookTwoAns)
 