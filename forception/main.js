

// function definition
function forception(pplArr, alphaArr){
    let arr = []
    for(var i = 0; i < pplArr.length; i++){
        arr.push(pplArr[i])
        
        for(var j = 0; j < alphaArr.length; j++){
            arr.push(alphaArr[j].toUpperCase())
        }
    }
    return arr
}
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// function call
console.log(forception(people, alphabet))

console.log(forception(["max", "john"], "defj"))

let resultArray = forception(people, alphabet)
console.log(resultArray)