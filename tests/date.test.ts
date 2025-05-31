import {describe, it, expect} from "vitest";
import {formatDate} from "../src";

describe('Date functions', () => {
    describe('formatDate', () => {
        const fixedDate = new Date('2025-05-07T09:04:07'); // Wed, May 7, 2025, 09:04:07 AM

        it('should format full year', () => {
            expect(formatDate(fixedDate, 'YYYY')).toBe('2025');
        });

        it('should format 2-digit year', () => {
            expect(formatDate(fixedDate, 'YY')).toBe('25');
        });

        it('should format full month name', () => {
            expect(formatDate(fixedDate, 'MMMM')).toBe('May');
        });

        it('should format abbreviated month name', () => {
            expect(formatDate(fixedDate, 'MMM')).toBe('May');
        });

        it('should format month with leading zero', () => {
            expect(formatDate(fixedDate, 'MM')).toBe('05');
        });

        it('should format month without leading zero', () => {
            expect(formatDate(fixedDate, 'M')).toBe('5');
        });

        it('should format day with leading zero', () => {
            expect(formatDate(fixedDate, 'DD')).toBe('07');
        });

        it('should format day without leading zero', () => {
            expect(formatDate(fixedDate, 'D')).toBe('7');
        });

        it('should format full weekday name', () => {
            expect(formatDate(fixedDate, 'dddd')).toBe('Wednesday');
        });

        it('should format abbreviated weekday name', () => {
            expect(formatDate(fixedDate, 'ddd')).toBe('Wed');
        });

        it('should format 24h hours with leading zero', () => {
            expect(formatDate(fixedDate, 'HH')).toBe('09');
        });

        it('should format 24h hours without leading zero', () => {
            expect(formatDate(fixedDate, 'H')).toBe('9');
        });

        it('should format 12h hours with leading zero', () => {
            expect(formatDate(fixedDate, 'hh')).toBe('09');
        });

        it('should format 12h hours without leading zero', () => {
            expect(formatDate(fixedDate, 'h')).toBe('9');
        });

        it('should format minutes with leading zero', () => {
            expect(formatDate(fixedDate, 'mm')).toBe('04');
        });

        it('should format minutes without leading zero', () => {
            expect(formatDate(fixedDate, 'm')).toBe('4');
        });

        it('should format seconds with leading zero', () => {
            expect(formatDate(fixedDate, 'ss')).toBe('07');
        });

        it('should format seconds without leading zero', () => {
            expect(formatDate(fixedDate, 's')).toBe('7');
        });

        it('should format AM/PM', () => {
            expect(formatDate(fixedDate, 'A')).toBe('AM');
        });

        it('should format am/pm', () => {
            expect(formatDate(fixedDate, 'a')).toBe('am');
        });

        it('should format complex pattern', () => {
            expect(formatDate(fixedDate, 'ddd, MMM D, YYYY hh:mm A')).toBe('Wed, May 7, 2025 09:04 AM');
        });

        it('should return empty string for empty format', () => {
            expect(formatDate(fixedDate, '')).toBe('');
        });
    });
});