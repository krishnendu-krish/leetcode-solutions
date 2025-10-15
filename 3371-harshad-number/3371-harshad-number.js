/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum =0
    let split = x.toString().split("")
    for(let str of split){
        sum += parseInt(str)
    }
    if(x%sum===0){
       return sum
    }else{
        return -1
    }
  
};