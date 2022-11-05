// let life = 100;
// let name = 'Mido'

// life = life -90

// console.log(life)

// **function adder (num1,num2){
// console.log(num1 + num2)

// }
// adder(2,5)

// **make a function to uppercase (Emily Khalil)

// const name ='emily khalil'
// const secondName ='mido khalil'

// function toUpper (text){

// const uppercased = text.toUpperCase();
// console.log(uppercased);


// }
// toUpper(name);
// toUpper(secondName)

// const toUpper = (text) => {
//     const uppercased = text.toUpperCase();
//     console.log(uppercased)
// }
// toUpper(name)


// **adding age with + 

// const myAge = 37;
// const yourAge = 30;

// console.log(myAge+yourAge)

// **adding all string together 

// console.log('My name is ' + 'Mido')

//**/ using string with backtick and ${}

// const name = "Mido"

// console.log(`My name is ${name}`)

// * Age with IF ELSE 

// const age = 21;

// if (age === 21){
//     console.log('You are good!')
// }
// else if(age < 15){
//     console.log('Super young! why you even here')
// }


// else {
//     console.log('you are good to go ')
// }

// If ELSE statments with (=== and &&)

// const dice1 = 6;
// const dice2 = 3;

// if (dice1 === 6 && dice2 === 7){
//     console.log('double hit')
// } else {
//     console.log('you didnt')
// }

/*   --------   Arrays --------- (adding and deleting for the arrays)

1 is reading the arrays 
*/

// const schedule =['wake up','eat breakfast','go for a run']
// console.log(schedule) 
// //to read on spacific item 
// console.log(schedule[1])

//adding item in the arrays 

// const schedule =['wake up','eat breakfast','go for a run']
// schedule.push('and go to the gym after')
// console.log(schedule)

//removing item from the arrays 

// const schedule =['wake up','eat breakfast','go for a run']
// schedule.pop()
// console.log(schedule)

//removing item form the begnning of the arrays

// const schedule =['wake up','eat breakfast','go for a run']
// schedule.shift()

// console.log(schedule)

//adding item from the begnning of the arrays 

// const schedule =['wake up','eat breakfast','go for a run']
// schedule.unshift('alarm ringing ')
// console.log(schedule)

//accesing an item in the arrays and knowing the number of it

// const schedule =['wake up','eat breakfast','go for a run'];
// console.log(schedule.indexOf('eat breakfast'));

//----------   objects    ------

// const user = {
//     Name:'Mido',
//     Age:37,
//     Married: true,
//     Purchasees:['Phone','laptop','car']
// };
// console.log(user)

// ((reading one item in objects ))

// const user = {
//     Name:'Mido',
//     Age:37,
//     Married: true,
//     Purchasees:['Phone','laptop','car']
// };
// console.log(user.Purchasees)

//using (this) in objeats

// const user = {
//     Name:'Mido',
//     Age:37,
//     Married: true,
//     Purchasees:['Phone','laptop','car'],
// sayName: function(){
//         console.log(this.Name)
// }}
// user.sayName()

// ------ Loops ------

// const Names = ["Emily", "Mido", "Ryan", "Khalil"];

// for(Name of Names){
//     console.log(`Hello there ${Name}`)
// };

// How to pick a item with a subject next to it and (Break) the loop

// const names = ["Emily", "Mido", "Ryan", "Khalil"];

// for (name of names) {
//     console.log(name);
// if(name === "Ryan"){
//     console.log("Ryan my man!");
//     break;
// }

// }

// while loops

// let num = 0;
// while(num < 100) {
//     console.log(num);
//     num++
    
// }
// let createPhoneNumber(numbers) = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 0];

let numbers = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 0]
    
    function createPhoneNumber(numbers){
        numbers.unshift("(");
        numbers.splice(4, 0, ")", " ");
        numbers.splice(9, 0, "-");
        return numbers.join("");

    }
    createPhoneNumber(numbers)
    
    
    



