// object destructuring 

const course = {
    courseName : 'js in hindi',
    price : '999',
    courseInstructor : 'prashant'
}

// course.courseInstructor // instead of invoking it again and again following will make u code easily
// const {courseInstructor}  = course
const {courseInstructor: instructor}  = course
console.log(instructor)

// +++++++++++++ api ++++++++++++++++++++++++++++++++
// little bit jason  talk 
// {
//     name : 'prashant',
//     courseName : 'js in hindi',
//     'price' : 'free'
// }


