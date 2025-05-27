/**
 * Shuffles the elements of the given array in a random order and returns a new array.
 *
 * @param {T[]} arr - The array to be shuffled.
 * @return {T[]} A new array containing the elements of the input array in random order.
 */
export function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}