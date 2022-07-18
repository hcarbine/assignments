const readline = require('readline-sync');
const name = readline.question('What is your name? ')
console.log('Welcome ' + name + '! You find yourself locked in a room! You need to get out.')

const choice = readline.keyIn('What would you like to do? [1] Put your hand in a hole, [2] Find the key, or [3] Open the door? ', {limit: '123'})

    if(choice === "1"){
        handInHole()
    }
    else if(choice === "2"){
        findKey()
    }
    else if(choice === "3"){
        openDoor()
    }


function handInHole(){
    console.log('Oh No! There was a deadly snake in the hole. You have died!')
    const tryAgain = readline.keyIn('Would you like to [t] try again, or would you like to [q] quit the game? ', {limit: 'tq'})
    if(tryAgain === 't'){
        retry()
    }else{
        console.log('The game has ended. Goodbye.')
    }
}

function findKey(){
    console.log('Congratulations! You found the key!')
    const key = readline.keyIn('Would you like to [h] put your hand in a hole, or would you like to [o] open door, or would you like to [g] give up? ', {limit: 'hog'})
    if(key==='h'){
        handInHole()
    }
    else if(key === 'o'){
        openDoor1()
    }
    else{
        console.log('The game has ended. Goodbye.')
    }
}

function openDoor(){
    console.log("I'm sorry! There are other tasks you must complete to escape.")
    const door = readline.keyIn('Would you like to [h] put your hand in a hole, [k] find the key, or [g] give up? ', {limit: 'hkg'})
    if(door==='h'){
    handInHole()
    }else if(door==='k'){
    findKey()
    }else{
        console.log('The game has ended. Goodbye.')
    }
}

function retry(){
    const tryAgain = readline.keyIn("What would you like to do? [1] Put your hand in a hole, [2] Find the key, or [3] Open the door? ", {limit: '123'})

    if(tryAgain === "1"){
        handInHole()
    }
    else if(tryAgain === "2"){
        findKey()
    }
    else if(tryAgain === "3"){
        openDoor()
    }
}

function openDoor1(){
    console.log("CONGRATULATIONS! You have escaped.")
}

