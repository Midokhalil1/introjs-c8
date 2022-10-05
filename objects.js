const person = {

    name: "Mido",
    age: 37,
    address: "1 Boca Drive",

}

// console.log("person is called: ",person.name)
// console.log("person is called: ",person.["name"])

// const name = person.name 
// const age = person.age 

const {name,age} = person 

console.log(`my name is ${person.name} and 
 Iam this old: ${person.age}`)