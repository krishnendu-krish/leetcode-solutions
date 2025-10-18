/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
     if(num <= 9) return num
    let a = num.toString().split('').map((a) => Number(a)).reduce((a,b) =>a+b)
    if(a >= 10){
        let c = a.toString().split('').map((a)=>Number(a)).reduce((a,b)=>a+b)
        if(c >= 10){
        let d = c.toString().split('').map((a)=>Number(a)).reduce((a,b)=>a+b)
        return d
        }
        return c
    }
    return a
};