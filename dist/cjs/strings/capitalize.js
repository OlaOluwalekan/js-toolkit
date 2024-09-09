"use strict";
/**
 * Capitalize the first letter in each word in a string
 * @param {string} str - the string or text to be capitalized
 * @returns {string} the capitalized string
 *
 * @example
 * const text = "hello world"
 * const capitalized = capitalize(text);
 * console.log(capitalized) // Outputs: Hello World
 */
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize = (str) => {
    const words = str.split(" ");
    const capitalWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalWords.join(" ");
};
exports.default = capitalize;
