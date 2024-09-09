/**
 * Counts the number of words in a string. A word here refers to alphanumeric combinations separated by spaces.
 * @param {string} str - the string to count the number of words in it
 * @return {number} the number of words found in the string
 *
 * @example
 * const sentence = "JavaScript is a good language. It is easy to learn Javascript"
 * const words = countWords(sentence)
 * console.log(words) // Outputs: 11
 */
const countWords = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // const isPunctuation = /^[\p{P}]+$/u.test(str[i]);
        if (str[i] === " ") {
            count++;
        }
    }
    return count;
};
export default countWords;
