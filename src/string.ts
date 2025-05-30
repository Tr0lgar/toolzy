/**
 * Capitalizes the first letter of the given string.
 *
 * @param str The string to be processed.
 * @return The input string with its first character capitalized.
 *
 * @example
 * capitalizeFirst('hello'); // Returns 'Hello'
 */
export function capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

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
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

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
export function truncate(str: string, maxLength: number, suffix: string = '…'): string {
    if (str.length <= maxLength) return str;

    const truncatedLength = maxLength - suffix.length;
    if (truncatedLength <= 0) return suffix.slice(0, maxLength); // Edge case

    return str.slice(0, truncatedLength) + suffix;
}

