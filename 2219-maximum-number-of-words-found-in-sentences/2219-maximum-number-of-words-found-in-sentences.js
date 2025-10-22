/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
 
  var maxCount = 0;

  for (var i = 0; i < sentences.length; i++) {
    
    var count = sentences[i].split(" ").length;

   
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}
