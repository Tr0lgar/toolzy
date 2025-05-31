import {describe, expect, it} from "vitest";
import {difference, intersect, removeDuplicates, shuffleArray} from "../src";

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

    describe('removeDuplicates', () => {
        it('should remove duplicate numbers', () => {
            expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
        });

        it('should remove duplicate strings', () => {
            expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
        });

        it('should work with mixed types', () => {
            expect(removeDuplicates([1, '1', 1, '1'])).toEqual([1, '1']);
        });

        it('should handle empty array', () => {
            expect(removeDuplicates([])).toEqual([]);
        });

        it('should return same array if no duplicates', () => {
            expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
        });

        it('should preserve order of first occurrences', () => {
            expect(removeDuplicates(['b', 'a', 'b', 'c'])).toEqual(['b', 'a', 'c']);
        });

        it('should handle complex types (reference equality)', () => {
            const obj1 = { id: 1 };
            const obj2 = { id: 1 };
            expect(removeDuplicates([obj1, obj1, obj2])).toEqual([obj1, obj2]);
        });
    });

    describe('intersect', () => {
        it('should return common numbers in both arrays', () => {
            expect(intersect([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
        });

        it('should return empty array if no common elements', () => {
            expect(intersect([1, 2], [3, 4])).toEqual([]);
        });

        it('should handle empty first array', () => {
            expect(intersect([], [1, 2, 3])).toEqual([]);
        });

        it('should handle empty second array', () => {
            expect(intersect([1, 2, 3], [])).toEqual([]);
        });

        it('should handle both arrays empty', () => {
            expect(intersect([], [])).toEqual([]);
        });

        it('should return values based on reference equality for objects', () => {
            const obj1 = { a: 1 };
            const obj2 = { a: 1 };
            expect(intersect([obj1], [obj1, obj2])).toEqual([obj1]);
            expect(intersect([obj1], [obj2])).toEqual([]);
        });

        it('should preserve order from the first array', () => {
            expect(intersect(['c', 'a', 'b'], ['a', 'b'])).toEqual(['a', 'b']);
        });

        it('should handle duplicates in first array correctly', () => {
            expect(intersect([1, 2, 2, 3], [2, 3])).toEqual([2, 2, 3]);
        });

        it('should handle duplicates in second array correctly', () => {
            expect(intersect([1, 2, 3], [2, 2, 3, 3])).toEqual([2, 3]);
        });
    });

    describe('difference', () => {
        it('should return elements in arrayA not in arrayB', () => {
            expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
        });

        it('should return all elements if arrayB is empty', () => {
            expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
        });

        it('should return empty array if arrayA is empty', () => {
            expect(difference([], [1, 2, 3])).toEqual([]);
        });

        it('should return empty array if both arrays are the same', () => {
            expect(difference([1, 2], [1, 2])).toEqual([]);
        });

        it('should preserve duplicates from arrayA if not found in arrayB', () => {
            expect(difference([1, 1, 2], [2])).toEqual([1, 1]);
        });

        it('should handle mixed types', () => {
            expect(difference(['a', 2, true], [2, false])).toEqual(['a', true]);
        });

        it('should compare by reference for objects', () => {
            const obj1 = { a: 1 };
            const obj2 = { a: 1 };
            expect(difference([obj1, obj2], [obj1])).toEqual([obj2]);
        });
    });
});