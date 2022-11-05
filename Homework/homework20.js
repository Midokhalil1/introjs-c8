// Create a function that takes two arguments.
// Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// function twoSum(a, b) {
//   if (a === 10 || b === 10) {
//     return true;
//   } else if (a + b === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// twoSum(2, 35);

const hide = (string) => {
  let a = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      a += string[i];
    }
  }
  return a;
};
console.log(hide("PImReDCoQw"));
