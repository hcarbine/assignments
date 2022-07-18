for(let i = 0; i < 10; i++){
    console.log(i)
}

for(let i = 9; i > 0; --i){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

let arr = []
for(i = 0; i < 10; i++){
    arr.push(i);
    console.log(arr)
}

for(let i = 0; i <= 100; i += 2){
    console.log(i)
}

let arr1 = []
const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(let i = 0; i < fruit1.length; i++){
    if(i % 2 === 0){
    arr1.push(fruit1[i])
    }
}
console.log(arr1)


const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
let names = []
let occupations = []

  for(let i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
  }
    console.log(names)
    console.log (occupations)




