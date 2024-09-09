/**
 * Reverse the order of a string
 * @param {string} str - the string to be reversed
 * @return {string} the reverse string
 *
 * @example
 * const text = 'hello world'
 * const reversed = reverse(text);
 * console.log(reversed) // Outputs: dlrow olleh
 */
const reverse = (text) => {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
};
export default reverse;
