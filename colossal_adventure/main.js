const readline = require('readline-sync');

const greeting = "Welcome to the Candylicious Game!!"
console.log(greeting)

const name = 
readline.question("What is your name?")
console.log("Welcome " + name + "!!")

let isAlive = true;
var ranAway = [1, 2]
var loseHp = [20,40,60,80]

var showInventory = ['black licorice, mouthwash, toothpick']
var useInventory = Math.floor(math.random() * useInventory.length)

class GoodGuy{
    constructor(name, hp, ap){
        this.name = name
        this.hp = hp
        this.ap = ap
        this.inventory = ['black licorice', 'mouth wash', 'toothpick']
    }
}

const chocolate = new GoodGuy("chocolate", 100, 50)

class Enemy{
    constructor(name, hp, ap)
    {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    }
}

const candyCorn = new Enemy("Candy Corn", 50, 25)
const goodAndPlenty = new Enemy("Good and Plenty", 50, 50)
const circusPeanut = new Enemy("Circus Peanut", 75, 50)

const enemies = [candyCorn, goodAndPlenty, circusPeanut]

while(isAlive){
    const movement = readline.keyIn("What move would you like to make? [w] Walk, [s] Show Inventory, or [q] Quit? ", {limit: 'wsq'})

    if(movement === "w"){
        walk()
    }
    else if(movement === "s"){
        showInventory()
    }
    else if(movement === "q"){
        isAlive = false
        console.log("Go brush your teeth")
    }
}
console.log(movement)

function walk(){
    const howWalk = Math.floor(Math.random()*4)
    if(howWalk === 0){
        enemyEncounter()
    }else{
        console.log('You avoided the enemies!')
    }
}
function showInventory(){
    console.log(chocolate.inventory)
}

function enemyEncounter(){
    let random = Math.floor(Math.random() * enemies.length)
    const newEnemy = enemies[random]
    console.log('Oh No! ' + [newEnemy.name] + ' is up ahead!') 
    const movement = readline.keyIn("Do you want to attack [a], run away [r], or quit [q]?",{limit: arq})
    if(movement === 'a'){
        attack(newEnemy)
    }else if(movement === 'r'){
        run()
    }else if(movement === 'q'){
        isAlive = false;
        console.log("Go home and brush your teeth.")
    }
}

function attack(newEnemy){
    while(chocolate.hp > 0 && newEnemy.hp >0 && !ranAway){
        let movement = readline.keyIn("Do you want to attack [a] or run away [r] or use inventory [u]?", {limit: 'aru'})
        if(movement === 'a'){
            attackEnemy(newEnemy)
            enemyAttack(newEnemy)
        }else if(movement === 'r'){
            run()
        }else if(movement === 'u'){
            useInventory()
        }
    }
if(chocolate.hp>0){
    console.log('Way to go '+ [chocolate.name] + '!! You defeated ' + [newEnemy.name] + '!!!')
    enemies.splice(enemies.indexOf(newEnemy), 1)
    if(enemies.length ===0){
        console.log('Congratulations!! You defeated all the enemies!! You have won the game!!!!')
        hasWon = true
    }
}else{
    console.log([newEnemy.name] + 'is still out there. Keep trying!')
    isAlive = false
    }
}

function run(){

    if(ranAway[Math.floor(Math.random())]===1){
        console.log('You have run away, but there are still enemies out there.')
    }else { 
        console.log('You must attack!!');
        attackEnemy()
    }
    
}

function attackEnemy(){}

function enemyAttack(){}

function useInventory(){}