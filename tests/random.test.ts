import { describe, it, expect } from 'vitest';
import {randomInt, shuffleArray} from '../src';

// region Random

describe('Random functions', () => {
    describe('randomInt()', () => {
        it('should return a number between min & max (include)', () => {
            const min = 1;
            const max = 10;
            for (let i = 0; i < 1000; i++) {
                const result = randomInt(min, max);
                expect(result).toBeGreaterThanOrEqual(min);
                expect(result).toBeLessThanOrEqual(max);
                expect(Number.isInteger(result)).toBe(true);
            }
        });

        it('should generate a uniform distribution ', () => {
            const min = 1;
            const max = 6;
            const counts = new Map();

            for (let i = 0; i < 10000; i++) {
                const result = randomInt(min, max);
                counts.set(result, (counts.get(result) || 0) + 1);
            }

            for (let i = min; i <= max; i++) {
                expect(counts.get(i)).toBeGreaterThan(1000);
            }
        });
    });
});

// endregion

// region Array

describe('Array functions', () => {
    describe('shuffleArray', () => {
        it('should return an array of same length', () => {
            const arr = [1, 2, 3, 4, 5];
            const shuffledArray = shuffleArray(arr);

            expect(shuffledArray).toHaveLength(arr.length);
        });

        it('should contain all elements of the original array', () => {
            const arr = [1, 2, 3, 4, 5];
            const shuffledArray = shuffleArray(arr);

            expect(shuffledArray).toEqual(expect.arrayContaining(arr));
            expect(arr).toEqual(expect.arrayContaining(shuffledArray));
        });

        it('should not modify the original array', () => {
            const arr = [1, 2, 3, 4, 5];
            const  original = [...arr];

            shuffleArray(arr);

            expect(arr).toEqual(original);
        });

        it('should make different shuffles', () => {
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const shuffles = new Set();

            for (let i = 0; i < 100; i++) {
                shuffles.add(JSON.stringify(shuffleArray(arr)));
            }

            expect(shuffles.size).toBeGreaterThan(95);
        });

        it('should work with different data types', () => {
            const stringArray = ['a', 'b', 'c'];
            const numberArray = [1, 2, 3];
            const objectArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

            expect(() => shuffleArray(stringArray)).not.toThrow();
            expect(() => shuffleArray(numberArray)).not.toThrow();
            expect(() => shuffleArray(objectArray)).not.toThrow();
        });

        it('should work with empty arrays', () => {
            const emptyArray: number[] = [];

            expect(shuffleArray(emptyArray)).toEqual([]);
        });

        it('should work with single item arrays', () => {
            const singleItemArray = [1];

            expect(shuffleArray(singleItemArray)).toEqual([1]);
        })
    });
});

// endregion
