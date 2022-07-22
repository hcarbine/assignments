/* 
Write a function called `largestNumber` that takes 3 numbers and returns the largest number. Test with the following data provided
*/
function largestNumber(num1, num2, num3){
   let x = Math.max(num1, num2, num3)
   return x
}


console.log(largestNumber(3, 8, 9))
console.log(largestNumber(25,-10, 10))

const names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }
names.push(person.firstName)

console.log(names)