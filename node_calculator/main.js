const readlineSync = require('readline-sync');

var enterNum1 = readlineSync.question('Enter a number: ');
var enterNum2 = readlineSync.question('Enter another number: ');
var operations = ["add", "subtract", "multiply", "divide"];
var selectOperation = readlineSync.keyInSelect(operations, 'What operation would you like to use?')

function addNum(num1, num2){
    return (Number(num1) + Number(num2));    
}
    
function subNum(num1, num2){
    console.log("The result is: " + (Number(num1) - Number(num2)));
}

function multNum(num1, num2){
    console.log("The result is: " + (Number(num1) * Number(num2)));    
}

function divNum(num1, num2){
    console.log("The result is: " + (Number(num1) / Number(num2)))
};
    
if(selectOperation === 0){
    console.log("The result is: " + addNum(enterNum1, enterNum2));
}
else if(selectOperation === 1){
    subNum(enterNum1, enterNum2);
}
else if(selectOperation === 2){
    multNum(enterNum1, enterNum2);
}
else{
    divNum(enterNum1, enterNum2);
}
    

