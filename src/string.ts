/**
 * Capitalizes the first letter of the given string.
 *
 * @param str The string to be processed.
 * @return The input string with its first character capitalized.
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
