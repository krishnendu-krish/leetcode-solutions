/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (var i = 0; i < words.length; i++) {
        var w = words[i].toLowerCase(); 
        if (w === w.split("").reverse().join("")) {
            return words[i]; 
        }
    }
    return ""; 
};