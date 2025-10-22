/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   const letters = new Set();

   for(let char of sentence){
    if(char >= 'a'&& char <='z'){
    letters.add(char);

    }
   }

   return letters.size===26
};