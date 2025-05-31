import {describe, it, expect} from "vitest";
import {capitalizeFirst, slugify, truncate} from "../src";

describe('String functions', () => {
    describe('capitalizeFirst', () => {
        it('should capitalize the first letter of a lowercase word', () => {
            expect(capitalizeFirst('hello')).toBe('Hello');
        });

        it('should return the same string if the first letter is already capitalized', () => {
            expect(capitalizeFirst('World')).toBe('World');
        });

        it('should handle a single lowercase letter', () => {
            expect(capitalizeFirst('a')).toBe('A');
        });

        it('should handle a single uppercase letter', () => {
            expect(capitalizeFirst('Z')).toBe('Z');
        });

        it('should not modify numbers or symbols at the start', () => {
            expect(capitalizeFirst('1abc')).toBe('1abc');
            expect(capitalizeFirst('-start')).toBe('-start');
        });

        it('should return an empty string if input is empty', () => {
            expect(capitalizeFirst('')).toBe('');
        });

        it('should preserve the rest of the string', () => {
            expect(capitalizeFirst('test STRING')).toBe('Test STRING');
        });
    });

    describe('slugify', () => {
        it('should convert a simple phrase to a slug', () => {
            expect(slugify('Hello World')).toBe('hello-world');
        });

        it('should remove special characters', () => {
            expect(slugify('Hello @#$ World!')).toBe('hello-world');
        });

        it('should normalize accented characters', () => {
            expect(slugify('Crème brûlée')).toBe('creme-brulee');
        });

        it('should trim and replace multiple spaces with a single hyphen', () => {
            expect(slugify('   Too    many   spaces   ')).toBe('too-many-spaces');
        });

        it('should handle strings with only special characters or whitespace', () => {
            expect(slugify('   !@#$%^&*() ')).toBe('');
        });

        it('should preserve existing hyphens and underscores in words', () => {
            expect(slugify('hello-world_test')).toBe('hello-world_test');
        });

        it('should return an empty string if input is empty', () => {
            expect(slugify('')).toBe('');
        });
    });

    describe('truncate', () => {
        it('should return the same string if it is shorter than maxLength', () => {
            expect(truncate('Hello', 10)).toBe('Hello');
        });

        it('should truncate and add default suffix if string is too long', () => {
            expect(truncate('Hello, world!', 10)).toBe('Hello, ...');
        });

        it('should truncate and add custom suffix if provided', () => {
            expect(truncate('1234567890', 5, '___')).toBe('12___');
        });

        it('should return only the suffix if maxLength is smaller than suffix length', () => {
            expect(truncate('123456', 2)).toBe('...');
            expect(truncate('abcdef', 1, '!!!')).toBe('!!!');
        });

        it('should return an empty string if maxLength is 0', () => {
            expect(truncate('hello', 0)).toBe('');
        });

        it('should not truncate if string length is equal to maxLength', () => {
            expect(truncate('12345', 5)).toBe('12345');
        });

        it('should work with empty string input', () => {
            expect(truncate('', 5)).toBe('');
        });

        it('should handle maxLength smaller than suffix length gracefully', () => {
            expect(truncate('abcdef', 2, '>>>')).toBe('>>>');
        });
    });
})