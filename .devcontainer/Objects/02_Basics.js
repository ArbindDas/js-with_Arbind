// const tinderUser = new Object()  // singleton object
// console.log(tinderUser)

const tinder  = {} // non singleton
tinder.id = 121
tinder.user = "Arbjd";
tinder.age = 21
tinder.email = "dasarb@gmail.com"
// console.log(tinder);


// ***************** nesting in objects *********************
const user = {
    fullName:{
        userfullName:{
            firstName:"Arbind",
            lastName:"Das",
        },
        useremail:{
            email:"das@gmail.com",
        }
    }

}
// console.log(user.fullName.userfullName);

// *************  combning the objects ***************8
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);

// using spread operator combning two object
const ans = {...obj1 , ...obj2};
console.log(ans)


// Array of objects

const users = [
    {
        id:1,
        email:"das@gmail.com",
    },
    {
        id:2,
        email:"kal@gmail.com",
    },
    {
        id:3,
        email:"nabuin@gmail.com",
    },
    {
        id:4,
        email:"s@gmail.com",
    },
]
// console.log(users[0].email);
// console.log(users);
// ************  key , values , **********************
console.log(tinder);
console.log( ' Keys of tender obj : ' , Object.keys(tinder));
console.log( ' values of tender obj : ' , Object.values(tinder));
console.log( ' entries of tender obj : ' , Object.entries(tinder));

console.log(tinder.hasOwnProperty('email'))


