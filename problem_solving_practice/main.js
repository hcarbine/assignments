
const array1 = [3,15,2,8,10];
var largest = array1[0];

// function definition
function largestNumber(arr){
 var largestNumber= arr[0]
 for(i=0; i<= arr.length; i++){
    if(arr[i]>largestNumber){
        largestNumber = arr[i]
    }
 }
 return largestNumber
}

// function call 
console.log(largestNumber(array1))
console.log(largestNumber([4, 10, -9, 23, 1]))


// function definition
function wordList(arr, character){
    let result = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i].includes(character))
        result.push(arr[i])
    }
    return result
}
const array2 = ["#3", "$$$", "C%4!", "Hey!"]
const character = "!"

const testArr = ["$ui", "pl$", "hii"]

// function call
console.log(wordList(array2, character))
console.log(wordList(testArr, "i"))

function isDivisible(num1, num2){
    if(num1 % num2 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(isDivisible(4,2)) // true
console.log(isDivisible(9,3)) // true
console.log(isDivisible(15,4)) // false