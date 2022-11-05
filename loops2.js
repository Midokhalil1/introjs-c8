// lets create a multiplication table!

/*
1 2 3 4 5 6 7 8 9 10
2 4 6 ...
.
.

10 20 30 40 50 60 70 80 90 100
*/
// for (let i = 1; i <= 10; i++) {
//     let wholeRaw = '';
//     for (let j = 1; j <= 10; j++) {
//         let sum = i * j;
//         if (sum < 10) {
//             wholeRaw += sum + '   ';
//         } else if (sum < 100) {
//             wholeRaw += sum + '  ';
//         } else {
//             wholeRaw += sum;
//         }
//     }
//     console.log(wholeRaw) 
// }

// for (
//     let i = 0;
//     i < 11;
//     i++
// ){
//     console.log(i)
// }

//% -> Gives you the remainder.
    //10 % 5 = 2 Remainder 0
//write a function that takes a number.
//The functio will console.log any number divisibly by 3.

// function divideequally(num) {
// for (let i = 1; i <= num; i++)
//     if(i % 3 === 0)
// console.log(i);
// }
// divideequally(15)

/*fizzbuss 
write a funaction that goes through a list of number 
when the number is divisible by three print fizz.
when the number is divisible by five print buzz.
when number is divisible by both print FIZZBUZZ!
console.log all number except when it's fizz or buzz
output:
1
2
FIZZ
4
BUZZ
*/

// function listOfnumbers(num){
//     for (let i = 1; i <= num; i++)
//     if (i % 3 === 0 && i % 5 !== 0){
//     console.log('FIZZ')}
//         else if (i % 5 === 0 && i % 3 !== 0){
//             console.log('BUZZ')
//         } else if (i % 3 === 0 && i % 5 === 0){
//             console.log('FIZZBUZZ')}
//             else(console.log(i))
//         }

// listOfnumbers(15)

// let num = 121
// let string = String(num)
// let myArray = string.split('')
// console.log(myArray)
// myArray = myArray.reverse
// rev = String(num).split('').reverse().join('');
// console.log("Reverse number : "+rev);
// console.log(rev === string)


const num1 = [2,7,11,15]

let towSum = function(num,target) {
    for(let i = 0; i < num.length; i++){
        for(let j = i + 1; j < num.length; j++ ){
            if(num[i] + num[j] === target){
               return [i,j];
        
            }
        }
    }
}
