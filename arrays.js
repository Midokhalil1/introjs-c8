// const fruits = [

//     "bananas",
//     "berry",
//     "apple",
//     "mango",
//     "guanabana",

// ]
// console.log("My Fruits are", fruits)
// console.log("The first Fruits is:", fruits[0])
// console.log("The second Fruits is:", fruits[1])
// return the fruit at position i from the array
function getFruit(index) {
    return fruits[index];
}
// console.log(`i have ${fruits.length} fruits in my list`)
// console.log(getFruit(0))
// console.log(getFruit(1))
// console.log(getFruit(2))
// console.log(getFruit(3))


// let playersNumber = [12,33,44,55,33,99]

// console.log(playersNumber[0] + playersNumber[2])

let students = [
{
    name:"bob",
    age: 24
},
{
    name:"jennifer",
    age: 32,
},
{
    name:"lily",
    age: 55,
},

];

const firstStudent = students[0]

// console.log(firstStudent.name)
// console.log(students[1])
// console.log(student[2])

const {name,age} = students [0]
// console.log(`First students name is: ${name} and they are ${age} years old`)

const sentence = "Hello Boca Code"
// console.log(sentence.length)
const arrayOfLetters = sentence.split("")
const arrayOfWords = sentence.split(" ")
// console.log(arrayOfWords)
// console.log(`There are ${arrayOfWords.length} number of words`)

let fruits = [

    "bananas",
    "berry",
    "apple",
    "mango",
    "guanabana",

];
console.log(fruits)
fruits.push("grapes")
console.log(fruits)
const oldFruit = fruits.pop()
console.log(oldFruit)
console.log(fruits)

const oldFruit2 = fruits.shift() // Removes from the front 
console.log(oldFruit2);
console.log(fruits)

fruits.unshift("kiwi")
fruits.unshift("fig")
console.log(fruits)

// fruits = ["tomatos,...fruits,"dragon fruit"]
// console.log(fruits)


// console.log(fruits.indexOf("mango"))

console.log(` my fruits are: ${fruits.join(", ")}`)