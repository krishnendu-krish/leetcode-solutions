/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
      let element = 0;
   let digit = 0;
   
   for(let i of nums){

     element += i;
    let num = i;
     while (num > 0) {
            digit += num % 10;
            num = Math.floor(num / 10);
        }
    }
    return Math.abs(element - digit);
   
};