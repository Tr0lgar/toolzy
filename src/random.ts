/**
 * Generates a random integer between a given minimum and maximum value, inclusive.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @return {number} A random integer within the specified range.
 */
export function randomInt(min: number, max: number): number {
    const timestamp = Date.now() % 10000;

    const perfTimestamp= Math.floor(performance.now() * 1000) % 10000;

    const randomValue = Math.random() +
        (timestamp / 10000) +
        (perfTimestamp / 10000);

    const normalizedRandom = (randomValue % 1);

    return Math.floor(normalizedRandom * (max - min + 1)) + min;
}
