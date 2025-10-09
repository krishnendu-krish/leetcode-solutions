/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let dsum=0
    let dproduct=1
    
    while(n>0){
        let digit= n%10
        dsum+=digit
        dproduct*=digit
        n=Math.floor(n/10)

    }
  return dproduct-dsum  
};