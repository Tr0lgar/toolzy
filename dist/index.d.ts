/**
 * Generates a random integer between a given minimum and maximum value, inclusive.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @return {number} A random integer within the specified range.
 */
declare function randomInt(min: number, max: number): number;

/**
 * Capitalizes the first letter of the given string.
 *
 * @param str The string to be processed.
 * @return The input string with its first character capitalized.
 */
declare function capitalizeFirst(str: string): string;
/**
 * Converts a given string into a URL-friendly slug by normalizing characters, removing diacritics,
 * and replacing spaces and special characters with a hyphen.
 *
 * @param {string} text - The input string to be slugified.
 * @return {string} The slugified version of the input string.
 */
declare function slugify(text: string): string;

/**
 * Shuffles the elements of the given array in a random order and returns a new array.
 *
 * @param {T[]} arr - The array to be shuffled.
 * @return {T[]} A new array containing the elements of the input array in random order.
 */
declare function shuffleArray<T>(arr: T[]): T[];

export { capitalizeFirst, randomInt, shuffleArray, slugify };
