// function twoSum(a, b) {
//   if (a || b === 10) {
//     return true;
//   } else if (a + b === 10) return false;

// }
// console.log(twoSum(3, 5));

// 2. create a function that removes the first and last characters of a string,
// and returns the updated string.

function remove(string) {
  return string.slice(1, -1);
}
console.log(remove("Adi and Mido"));
