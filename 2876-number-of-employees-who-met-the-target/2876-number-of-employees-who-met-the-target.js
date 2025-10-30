/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let res = 0;
    for(let val of hours){
        val >= target ? res++ : null
    }
   return res 
};