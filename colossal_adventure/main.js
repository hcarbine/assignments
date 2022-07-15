const readline = require('readline-sync');

const greeting = "Welcome to the Candylicious Game!!"
console.log(greeting)

const name = 
readline.question("What is your name?")
console.log("Welcome " + name + "!!")

let isAlive = true;
let hasWon = false;
let ranAway = false;
var loseHp = [20,40,60,80]

class GoodGuy{
    constructor(name, hp){
        this.name = name
        this.hp = hp
        this.inventory = ['black licorice', 'mouth wash', 'toothpick']
    }
}
const chocolate = new GoodGuy("chocolate", 100)

class Enemy{
    constructor(name, hp)
    {
    this.name = name
    this.hp = hp
    this.inventory = ['toothbrush']
    }
}

const candyCorn = new Enemy("Candy Corn", 100)
const goodAndPlenty = new Enemy("Good and Plenty", 80)
const circusPeanut = new Enemy("Circus Peanut", 120)

const enemies = [candyCorn, goodAndPlenty, circusPeanut]

while(isAlive && !hasWon){
    const movement = readline.keyIn("What move would you like to make? [w] Walk, [s] Show Inventory, or [q] Quit? ", {limit: 'wsq'})

    if(movement === "w"){
        walk()
    }
    else if(movement === "s"){
        showInventory()
    }
    else if(movement === "q"){
        isAlive = false
        console.log("Go home and brush your teeth.")
    }
}

function walk(){
    let howWalk = Math.floor(Math.random()*4)
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
    let enemyEnc = Math.floor(Math.random() * enemies.length)
    const newEnemy = enemies[enemyEnc]
    console.log('Oh No! ' + [newEnemy.name] + ' is up ahead!') 
    const movement = readline.keyIn("Do you want to attack [a], run away [r], or quit [q]?",{limit: "arq"})
    if(movement === 'a'){
        attack(newEnemy)
    }else if(movement === 'r'){
        run()
    }else if(movement === 'q'){
        isAlive = false;
        console.log("Go home and brush your teeth.")
    }


function attack(newEnemy){
    // throw an attack on the enemy here
    // 

    while(chocolate.hp > 0 && newEnemy.hp >0 && !ranAway){
        // begin attack sequence

        // user attacks enemy 
        // console.log stmt
        // newEnemy.hp -= loseHp[Math.floor(Math.random() * loseHp.length)]

        // enemy attack enemy
        // console.log stmt
        // chocolate.hp -= loseHp[Math.floor(Math.random() * loseHp.length)]
        /*
        let movement = readline.keyIn("Do you want to attack [a] or run away [r] or use inventory [u]?", {limit: 'aru'})
        if(movement === 'a'){
            attackEnemy(newEnemy)
            enemyAttack(newEnemy)
        }else if(movement === 'r'){
            run()
        }else if(movement === 'u'){
            useInventory()
        }
        */
    }

    // you might have to consider if both hp are 0
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
    let random = Math.floor(Math.random() * 4)
    if(random===2 || random===3){
        console.log('You have run away, but there are still enemies out there.')
    }else { 
        console.log('You must attack!!')
        // call attack() function
        //attackEnemy()
    }
    
}

function attackEnemy(){
    chocolate.hp -= loseHp[Math.floor(Math.random() * loseHp.length)]
    if(newEnemy.hp <= 0){
        console.log ("You have defeated" + [newEnemy.name] + "!!") 
    }
    else{
        console.log('Keep fighting!')
        enemyAttack()
    }

}
function enemyAttack(){
    if(newEnemy.hp <=0){
        console.log("You have defeated " + [newEnemy.name] + "!!")
    }
    else{
        newEnemy.hp -= loseHp[Math.floor(Math.random() * loseHp.length)]
        console.log(+[newEnemy.name]+ "is attacking back!")
    }
    if(chocolate.hp <= 0){
        console.log("You have been defeated! Go home and brush your teeth.")
    }
}
}

function useInventory(){
    
}
