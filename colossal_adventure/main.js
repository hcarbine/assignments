const readline = require('readline-sync');

const greeting = "Welcome to the Candylicious Game!!"
console.log(greeting)

const name = 
readline.question("What is your name?")
console.log("Welcome " + name + "!!")

let isAlive = true;
let hasWon = false;

class GoodGuy{
    constructor(name, hp){
        this.name = name
        this.hp = hp
        this.inventory = ['black licorice', 'mouth wash', 'toothpick']
    }
}
const chocolate = new GoodGuy("Chocolate", 200)

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
const circusPeanut = new Enemy("Circus Peanut", 60)

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
        console.log("Goodbye!")
    }
}

function walk(){
    let howWalk = Math.floor(Math.random()*3)
    if(howWalk === 0){
        enemyEncounter()
    }else{
        console.log('You avoided the enemies!')
        walk()
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
        console.log("Goodbye!")
    }
} 

function attack(newEnemy){
    while(chocolate.hp > 0 && newEnemy.hp > 0){
    // /console.log('Way to go '+ [chocolate.name] + '!! You defeated ' + [newEnemy.name] + '!!!
     let loseHp =[0,20,40,60]
        chocolate.hp -= loseHp[Math.floor(Math.random()*loseHp.length)];
        newEnemy.hp -= loseHp[Math.floor(Math.random()*loseHp.length)];
            console.log([newEnemy.name] + " has " + [newEnemy.hp] + " left.")
            console.log([chocolate.name] + " has " + [chocolate.hp] + " points left.") 
    } 
        if(newEnemy.hp <= 0 && chocolate.hp >0){
        console.log ("You have defeated " + [newEnemy.name] + "!!")
        chocolate.hp +=100 
        enemies.splice(enemies.indexOf(newEnemy), 1)
        
    
         }
         else if(newEnemy.hp>0 && chocolate.hp<=0){
            console.log("You have been defeated.")
            isAlive = false
         }
         else if(newEnemy.hp<=0 && chocolate.hp<=0){
            console.log("You both lost all your Hp. Game Over.")
            isAlive=false
         }
         
        if(enemies.length===0){
            console.log("Congratulations! You defeated all the enemies!")
            hasWon=true
            } 
}
        

    


        // enemies.splice(enemies.indexOf(newEnemy), 1)
        // splice enemy array
        // check if user has defeated all enemies
    // } else
    //     console.log([newEnemy.name] + " has defeated you. Go brush your teeth.")
    //     hasWon = false
    // else{
    //     console.log('Keep fighting!')
    //     attack(newEnemy)
    // }



function run(){
    let enemyEnc = Math.floor(Math.random() * enemies.length)
    const newEnemy = enemies[enemyEnc]
    let random = (Math.floor(Math.random() * 2))
    if(random === 1){
        console.log('You have run away, but there are still enemies out there.')
    }else{
        console.log('You must attack!!')
        attack(newEnemy)
                // call attack() function
                //attackEnemy()

            }
        }
    
   console.log("Goodbye!") 
    
  // if(chocolate.hp>0){
            
        // begin attack sequence

        // user attacks enemy 
        // console.log stmt
        //  

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
    

    // you might have to consider if both hp are 0





/*function attackEnemy(){
    
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
*/
// function useInventory(){
//     var usingInventory=Math.floor(Math.random()*chocolate.inventory.length)
// }


