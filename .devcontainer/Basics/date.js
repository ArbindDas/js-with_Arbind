// Date
let mydate = new Date()
// console.log(mydate.toDateString())  // thids is good
// console.log(mydate.toString());
//console.log(mydate.toLocaleString()); // this is very also  good
// console.log(mydate.toLocaleDateString());


// create your own date
let owndate = new Date(2023 , 0 , 21)
// console.log(owndate.toDateString());
// console.log(owndate.toTimeString());
// console.log(owndate.toLocaleTimeString()); // this is good for time

let date = new Date(2023 , 0 , 21, 5, 4)
// console.log(date.toLocaleString());


let date2 = new Date("01-14-2023")
// console.log(date2.toLocaleString());


// **********************  time  in milisecond **********************
let mytime =  Date.now()
//console.log(mytime);  // output milisecond

//console.log(date2.getTime());  // same as up milisecond

// ************* time in second *********************88
let nicedate = Date.now()
//console.log(Math.floor(Date.now()/1000));  // in sec

// ************ print the date in year month tarik **********
let ydate = new Date()
// console.log(ydate.getMonth());
// console.log(ydate.getHours());
// console.log(ydate.getDay());
// console.log(ydate.getFullYear());

// ******************* vvi *************************************8
let newdate = new Date()

newdate.toLocaleString('default',{
    weekday:"long"
})

// ***** To get the current time in JavaScript, you can use the Date object. Here's a basic 

// Create a new Date object
const now = new Date();

// Get individual components
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Format the time as a string
const currentTime = `${hours}:${minutes}:${seconds}`;

// console.log(currentTime);