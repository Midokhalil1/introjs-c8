// const score = 40

// function assignGrade (numScore) {
//     if ( numScore >= 90 ){
//         console.log('A')
//     } else if (numScore >= 80){
//         console.log('B')
//     } else if (numScore >= 70){
//         console.log('C')
//     }else if (numScore >= 60){
//         console.log('D')
//     } else if (numScore <= 59){
//         console.log('F')
//     }
// }

// assignGrade(score)

// class vehicle {
//     constructor(make.model){
//         this.make = make
//         this model = model
//     }
//     getName (){
//         return this.make + ' ' + this.made
//     }
//     }

//     class course {
//         constructor(tittle) {
//             this_coursetittle = tittle

//         }
//         get constructor() {
//             return this.constructor
//         }
//         set constructor(newTittle) {
//             this.this_coursetittle = newTittle

//         }
//     }

//     let tree = {
//         genus: 'ficus'
//         species: 'benghalensis'
//         commonName:'banyan'
//         origin:'India'
//     }
//     console.log(tree.commonName)
//     tree.size = 'XL'
//     tree.nickname = 'walking tree'
//     tree.size = '40'
//     tree.units = 'feet'

// function XO(str) {

//     // make the string lowercase because we are case insensitive
//     str = str.toLowerCase();

//     // put the string into an array
//     let arrayOfCharacters = str.split("");

//     //count the x's
//     let countX = arrayOfCharacters.reduce( function( n, val ) {
//         return n + (val === 'x');
//       }, 0);

// count the o's
//     let countO = arrayOfCharacters.reduce( function( n, val ) {
//         return n + (val === 'o');
//       }, 0);

//     // do these numbers match? if so return true and if not return false
//     if ( countX == countO ) {
//       return true;
//     } else {
//       return false;
//     }
// }
// XO

// function stringChecker(stringEx) {
//         let xNumber = 0;
//         let oNumber = 0;
//         for (let i = 0; i < stringEx.length; i++) {
//             if (stringEx[i].toLowerCase() === “o”) {
//                 oNumber++;
//             } else if (stringEx[i].toLowerCase() === “x”) {
//                 xNumber++;
//             }
//         if (oNumber === xNumber) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
//     stringChecker();

// Create a function to concatenate two integer arrays.
// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// -------merging tow loops -------//
// const myArr1 = [1, 3, 5];
// const myArr2 = [2, 6, 8];

// const myArr3 = myArr1.concat(myArr2);
// console.log(myArr3);

// const myArr1 = [1, 3, 5];
// const myArr2 = [2, 6, 8];




// ----- reverse LOOP----- //

// const items = ["apricot", "banana", "cherry"];

// for (let i = items.length - 1; i >= 0; i -= 1) {
//   console.log(`${i}. ${items[i]}`);
// }


// ------ filtering two Arrys----------- //

// / const listArr = [ 'eggs', 'milk', 'wine', 'bread', 'crackers' ]
// const cartArr = ['chips', 'candy', 'milk', 'crackers']
// const missingItems = (list, cart) => {
//    const newList = list.filter(item => !cart.includes(item))
//    return newList
// }
// const missing = missingItems(listArr, cartArr)
// console.log(missing)
//--------------------------------OR-----------------------------------
// const missingItems = (list, cart) => list.filter(item => !cart.includes(item))
// const missing = missingItems(listArr, cartArr)
// console.log(missing)
//--------------------------------OR-----------------------------------
// function missingItems(list, cart) {
//     return list.filter(item => !cart.includes(item))
// }
//     console.log(missingItems(listArr, cartArr))
//--------------------------------OR-----------------------------------
// function missingItems(list, cart) {
//    const missing = list.filter(item => !cart.includes(item))
//    return missing
// }
// console.log(missingItems(listArr, cartArr))
//--------------------------------OR-----------------------------------
// function whatsLeft (arr1, arr2) {
//    let newList = []
//    for (let i = 0; i < arr1.length; i++){
//       let wasFound = false
//       for(let j = 0; j< arr2.length; j++){
//          if(arr1[i]===arr2[j]) {
//             wasFound = true
//             break
//          }
//       }
//       if(!wasFound) {
//          newList.push(arr1[i])
//       }
//    }
//    return newList
// }
// const missingItems = whatsLeft(listArr, cartArr)
// console.log(missingItems)
//--------------------------------OR-----------------------------------
// const greenFruits = ['watermelon', 'avocado', 'kiwi']
// console.log(greenFruits.join(' > '))
// const fruit = ['lychee', 'rambutan' , 'kiwi', 'grapefruit', 'açai', 'limes']
// function alphaBet (arr) {
//    newArr = 0
//    for(let i= 0; i < arr.length; i++);
// }