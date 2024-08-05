// Object de-structure and JSON API
const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Arbind",
}

const {courseInstructor} = course
console.log(courseInstructor);
const {courseName} = course
console.log(courseName);

// the second way for bject de-structure

const {price:pr} = course
console.log(pr);
