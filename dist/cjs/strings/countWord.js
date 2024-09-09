"use strict";
/**
 * Counts the number of words in a string. A word here refers to alphanumeric combinations separated by spaces or punctuations
 * @param {string} str - the string to count the number of words in it
 * @return {number} the number of words found in the string
 *
 * @example
 * const sentence = "JavaScript is a good language. It is easy to learn Javascript"
 * const words = countWords(sentence)
 * console.log(words) // Outputs: 11
 */
Object.defineProperty(exports, "__esModule", { value: true });
const countWords = (str) => {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
    return 0;
};
exports.default = countWords;
