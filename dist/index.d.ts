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
 *
 * @example
 * capitalizeFirst('hello'); // Returns 'Hello'
 */
declare function capitalizeFirst(str: string): string;
/**
 * Converts a given string into a URL-friendly slug by normalizing characters, removing diacritics,
 * and replacing spaces and special characters with a hyphen.
 *
 * @param {string} text - The input string to be slugified.
 * @return {string} The slugified version of the input string.
 *
 * @example
 * slugify('Hello World'); // Returns 'hello-world'
 */
declare function slugify(text: string): string;
/**
 * Truncates a string to a specified maximum length, optionally adding a suffix.
 *
 * @param str - The string to be truncated.
 * @param maxLength - The maximum allowed length of the output string including the suffix.
 * @param suffix - A string to append if truncation occurs (default: '…').
 * @return The truncated string with suffix if needed.
 *
 * @example
 * truncate('Hello, world!', 10)); //returns "Hello, w…"
 * truncate('1234567890', 5, '___'); returns "12___"
 */
declare function truncate(str: string, maxLength: number, suffix?: string): string;

/**
 * Shuffles the elements of the given array in a random order and returns a new array.
 *
 * @param {T[]} arr - The array to be shuffled.
 * @return {T[]} A new array containing the elements of the input array in random order.
 *
 * @example
 * shuffleArray([1, 2, 3]); // Returns [3, 1, 2]
 */
declare function shuffleArray<T>(arr: T[]): T[];
/**
 * Supprime les doublons d'un tableau et retourne un nouveau tableau sans doublons.
 *
 * @param {T[]} arr - Le tableau d'entrée contenant potentiellement des doublons.
 * @return {T[]} Un nouveau tableau contenant les éléments uniques du tableau d'entrée.
 *
 * @example
 * removeDuplicates([1, 2, 2, 3]); // Returns [1, 2, 3]
 */
declare function removeDuplicates<T>(arr: T[]): T[];
/**
 * Returns a new array containing only the elements that are present in both arrays.
 *
 * @param arrayA - The first array.
 * @param arrayB - The second array.
 * @returns An array of elements common to both arrays.
 *
 * @example
 * intersect([1, 2, 3], [2, 3, 4]); // Returns [2, 3]
 */
declare function intersect<T>(arrayA: T[], arrayB: T[]): T[];
/**
 * Returns a new array containing elements from the first array that are not present in the second.
 *
 * @param arrayA - The source array.
 * @param arrayB - The array to compare against.
 * @returns An array with elements from arrayA not in arrayB.
 *
 * @example
 * difference([1, 2, 3], [2, 3, 4]); // Returns [1]
 */
declare function difference<T>(arrayA: T[], arrayB: T[]): T[];

/**
 * Formats a JavaScript Date object into a string based on a custom pattern.
 *
 * Supported tokens:
 *
 * Year:
 * - YYYY: 4-digit year (e.g., 2025)
 * - YY: 2-digit year (e.g., 25)
 *
 * Month:
 * - MMMM: Full month name (e.g., January)
 * - MMM: Abbreviated month name (e.g., Jan)
 * - MM: Month with leading zero (e.g., 01)
 * - M: Month without leading zero (e.g., 1)
 *
 * Day:
 * - DD: Day of the month with leading zero (e.g., 05)
 * - D: Day of the month without leading zero (e.g., 5)
 * - dddd: Full weekday name (e.g., Monday)
 * - ddd: Abbreviated weekday name (e.g., Mon)
 *
 * Hours:
 * - HH: Hours (24h format, leading zero) (e.g., 09, 23)
 * - H: Hours (24h format, no leading zero) (e.g., 9, 23)
 * - hh: Hours (12h format, leading zero) (e.g., 09, 11)
 * - h: Hours (12h format, no leading zero) (e.g., 9, 11)
 *
 * Minutes:
 * - mm: Minutes with leading zero (e.g., 04)
 * - m: Minutes without leading zero (e.g., 4)
 *
 * Seconds:
 * - ss: Seconds with leading zero (e.g., 07)
 * - s: Seconds without leading zero (e.g., 7)
 *
 * Meridiem:
 * - A: AM/PM
 * - a: am/pm
 *
 * @param {Date} date - The Date object to format.
 * @param {string} format - A format string containing supported tokens.
 * @returns {string} The formatted date string.
 *
 * @example
 * formatDate(new Date(), 'YYYY-MM-DD') // "2025-05-27"
 * formatDate(new Date(), 'ddd, MMM D, YY at hh:mm A') // "Tue, May 27, 25 at 03:16 PM"
 */
declare function formatDate(date: Date, format: string): string;

export { capitalizeFirst, difference, formatDate, intersect, randomInt, removeDuplicates, shuffleArray, slugify, truncate };
