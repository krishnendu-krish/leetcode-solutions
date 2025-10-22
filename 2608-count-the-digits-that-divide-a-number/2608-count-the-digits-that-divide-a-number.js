/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    var numStr = num.toString()
    var count=0;

    for(var i=0;i<numStr.length;i++){
        var digit = parseInt(numStr[i])
        if(digit!==0 && num % digit===0){
            count++
        }
    }
    return count
};