/**
 * Shuffles the elements of the given array in a random order and returns a new array.
 *
 * @param {T[]} arr - The array to be shuffled.
 * @return {T[]} A new array containing the elements of the input array in random order.
 *
 * @example
 * shuffleArray([1, 2, 3]); // Returns [3, 1, 2]
 */
export function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

/**
 * Supprime les doublons d'un tableau et retourne un nouveau tableau sans doublons.
 *
 * @param {T[]} arr - Le tableau d'entrée contenant potentiellement des doublons.
 * @return {T[]} Un nouveau tableau contenant les éléments uniques du tableau d'entrée.
 *
 * @example
 * removeDuplicates([1, 2, 2, 3]); // Returns [1, 2, 3]
 */
export function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

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
export function intersect<T>(arrayA: T[], arrayB: T[]): T[] {
    const setB = new Set(arrayB);
    return arrayA.filter(item => setB.has(item));
}

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
export function difference<T>(arrayA: T[], arrayB: T[]): T[] {
    const setB = new Set(arrayB);
    return arrayA.filter(item => !setB.has(item));
}

