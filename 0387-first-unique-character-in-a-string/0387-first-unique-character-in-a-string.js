/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s =>
    s.split('').findIndex(c => s.indexOf(c)===s.lastIndexOf(c))
