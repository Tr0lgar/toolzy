import { describe, it, expect } from 'vitest';
import {randomInt, shuffleArray} from '../src';

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
