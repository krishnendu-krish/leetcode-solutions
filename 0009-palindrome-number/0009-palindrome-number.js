/**
 * @param {number} x
 * @return {boolean}
 */
   var isPalindrome = function(x) {
  let str = x.toString();                 // convert number to string
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false