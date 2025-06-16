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

        // Tests additionnels avec différents formats
        describe('Common date formats', () => {
            it('should format ISO date', () => {
                expect(formatDate(fixedDate, 'YYYY-MM-DD')).toBe('2025-05-07');
            });

            it('should format European date', () => {
                expect(formatDate(fixedDate, 'DD/MM/YYYY')).toBe('07/05/2025');
            });

            it('should format American date', () => {
                expect(formatDate(fixedDate, 'MM/DD/YYYY')).toBe('05/07/2025');
            });

            it('should format time 24h', () => {
                expect(formatDate(fixedDate, 'HH:mm:ss')).toBe('09:04:07');
            });

            it('should format time 12h', () => {
                expect(formatDate(fixedDate, 'hh:mm:ss A')).toBe('09:04:07 AM');
            });

            it('should format long date', () => {
                expect(formatDate(fixedDate, 'dddd, MMMM D, YYYY')).toBe('Wednesday, May 7, 2025');
            });

            it('should format short date', () => {
                expect(formatDate(fixedDate, 'ddd MMM D')).toBe('Wed May 7');
            });

            it('should format datetime', () => {
                expect(formatDate(fixedDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2025-05-07 09:04:07');
            });
        });

        // Tests de cas critiques
        describe('Critical edge cases', () => {
            // Test minuit (00:00)
            it('should handle midnight correctly', () => {
                const midnight = new Date('2025-05-07T00:00:00');
                expect(formatDate(midnight, 'HH:mm')).toBe('00:00');
                expect(formatDate(midnight, 'H:m')).toBe('0:0');
                expect(formatDate(midnight, 'hh:mm A')).toBe('12:00 AM');
                expect(formatDate(midnight, 'h:m a')).toBe('12:0 am');
            });

            // Test midi (12:00)
            it('should handle noon correctly', () => {
                const noon = new Date('2025-05-07T12:00:00');
                expect(formatDate(noon, 'HH:mm')).toBe('12:00');
                expect(formatDate(noon, 'H:m')).toBe('12:0');
                expect(formatDate(noon, 'hh:mm A')).toBe('12:00 PM');
                expect(formatDate(noon, 'h:m a')).toBe('12:0 pm');
            });

            // Test fin de journée (23:59)
            it('should handle end of day correctly', () => {
                const endOfDay = new Date('2025-05-07T23:59:59');
                expect(formatDate(endOfDay, 'HH:mm:ss')).toBe('23:59:59');
                expect(formatDate(endOfDay, 'H:m:s')).toBe('23:59:59');
                expect(formatDate(endOfDay, 'hh:mm:ss A')).toBe('11:59:59 PM');
                expect(formatDate(endOfDay, 'h:m:s a')).toBe('11:59:59 pm');
            });

            // Test premier jour de l'année
            it('should handle first day of year', () => {
                const newYear = new Date('2025-01-01T00:00:00');
                expect(formatDate(newYear, 'YYYY-MM-DD')).toBe('2025-01-01');
                expect(formatDate(newYear, 'YY-M-D')).toBe('25-1-1');
                expect(formatDate(newYear, 'dddd, MMMM D')).toBe('Wednesday, January 1');
            });

            // Test dernier jour de l'année
            it('should handle last day of year', () => {
                const endOfYear = new Date('2025-12-31T23:59:59');
                expect(formatDate(endOfYear, 'YYYY-MM-DD')).toBe('2025-12-31');
                expect(formatDate(endOfYear, 'YY-M-D')).toBe('25-12-31');
                expect(formatDate(endOfYear, 'dddd, MMMM D')).toBe('Wednesday, December 31');
            });

            // Test année bissextile (29 février)
            it('should handle leap year correctly', () => {
                const leapDay = new Date('2024-02-29T12:00:00'); // 2024 est bissextile
                expect(formatDate(leapDay, 'YYYY-MM-DD')).toBe('2024-02-29');
                expect(formatDate(leapDay, 'dddd, MMMM D, YYYY')).toBe('Thursday, February 29, 2024');
            });

            // Test changement de siècle
            it('should handle century change', () => {
                const centuryChange = new Date('2000-01-01T00:00:00');
                expect(formatDate(centuryChange, 'YYYY')).toBe('2000');
                expect(formatDate(centuryChange, 'YY')).toBe('00');
            });

            // Test année à 1 chiffre (simulation d'une date très ancienne)
            it('should handle single digit year padding', () => {
                const ancientDate = new Date('0009-05-07T12:00:00');
                expect(formatDate(ancientDate, 'YYYY')).toBe('9');
                expect(formatDate(ancientDate, 'YY')).toBe('09');
            });
        });

        // Tests avec différents séparateurs
        describe('Different separators', () => {
            it('should handle dots as separators', () => {
                expect(formatDate(fixedDate, 'DD.MM.YYYY')).toBe('07.05.2025');
            });

            it('should handle multiple spaces', () => {
                expect(formatDate(fixedDate, 'D  M  YYYY')).toBe('7  5  2025');
            });

            it('should handle mixed separators', () => {
                expect(formatDate(fixedDate, 'DD/MM-YYYY HH:mm')).toBe('07/05-2025 09:04');
            });
        });

        // Tests de robustesse
        describe('Robustness tests', () => {
            it('should handle unknown tokens gracefully', () => {
                expect(formatDate(fixedDate, 'YYYY-QQ-DD')).toBe('2025-QQ-07');
                expect(formatDate(fixedDate, 'XXX YYY ZZZ')).toBe('XXX YYY ZZZ');
            });

            it('should handle single character tokens', () => {
                expect(formatDate(fixedDate, 'Y')).toBe('Y');
                expect(formatDate(fixedDate, 'Q')).toBe('Q');
            });

            it('should handle repeated separators', () => {
                expect(formatDate(fixedDate, 'DD---MM---YYYY')).toBe('07---05---2025');
                expect(formatDate(fixedDate, 'HH:::mm:::ss')).toBe('09:::04:::07');
            });

            it('should handle format starting with separator', () => {
                expect(formatDate(fixedDate, '-YYYY-MM-DD')).toBe('-2025-05-07');
                expect(formatDate(fixedDate, ' HH:mm')).toBe(' 09:04');
            });

            it('should handle format ending with separator', () => {
                expect(formatDate(fixedDate, 'YYYY-MM-DD-')).toBe('2025-05-07-');
                expect(formatDate(fixedDate, 'HH:mm ')).toBe('09:04 ');
            });

            it('should handle very long format strings', () => {
                const longFormat = 'YYYY-MM-DD dddd MMMM HH:mm:ss A with some extra text';
                expect(formatDate(fixedDate, longFormat)).toBe('2025-05-07 Wednesday May 09:04:07 AM with some extra text');
            });
        });

        // Tests avec différentes dates dans l'année
        describe('Different months and days', () => {
            it('should handle all months correctly', () => {
                const dates = [
                    { date: new Date('2025-01-15'), month: 'January', short: 'Jan' },
                    { date: new Date('2025-02-15'), month: 'February', short: 'Feb' },
                    { date: new Date('2025-03-15'), month: 'March', short: 'Mar' },
                    { date: new Date('2025-04-15'), month: 'April', short: 'Apr' },
                    { date: new Date('2025-05-15'), month: 'May', short: 'May' },
                    { date: new Date('2025-06-15'), month: 'June', short: 'Jun' },
                    { date: new Date('2025-07-15'), month: 'July', short: 'Jul' },
                    { date: new Date('2025-08-15'), month: 'August', short: 'Aug' },
                    { date: new Date('2025-09-15'), month: 'September', short: 'Sep' },
                    { date: new Date('2025-10-15'), month: 'October', short: 'Oct' },
                    { date: new Date('2025-11-15'), month: 'November', short: 'Nov' },
                    { date: new Date('2025-12-15'), month: 'December', short: 'Dec' }
                ];

                dates.forEach(({ date, month, short }) => {
                    expect(formatDate(date, 'MMMM')).toBe(month);
                    expect(formatDate(date, 'MMM')).toBe(short);
                });
            });

            it('should handle all weekdays correctly', () => {
                const dates = [
                    { date: new Date('2025-06-15'), day: 'Sunday', short: 'Sun' },      // Dimanche
                    { date: new Date('2025-06-16'), day: 'Monday', short: 'Mon' },      // Lundi
                    { date: new Date('2025-06-17'), day: 'Tuesday', short: 'Tue' },     // Mardi
                    { date: new Date('2025-06-18'), day: 'Wednesday', short: 'Wed' },   // Mercredi
                    { date: new Date('2025-06-19'), day: 'Thursday', short: 'Thu' },    // Jeudi
                    { date: new Date('2025-06-20'), day: 'Friday', short: 'Fri' },      // Vendredi
                    { date: new Date('2025-06-21'), day: 'Saturday', short: 'Sat' }     // Samedi
                ];

                dates.forEach(({ date, day, short }) => {
                    expect(formatDate(date, 'dddd')).toBe(day);
                    expect(formatDate(date, 'ddd')).toBe(short);
                });
            });
        });

        // Tests de performance (optionnel)
        describe('Performance tests', () => {
            it('should handle multiple calls efficiently', () => {
                const start = performance.now();

                for (let i = 0; i < 1000; i++) {
                    formatDate(fixedDate, 'YYYY-MM-DD HH:mm:ss');
                }

                const end = performance.now();
                const duration = end - start;

                // Le test devrait prendre moins de 100ms pour 1000 appels
                expect(duration).toBeLessThan(100);
            });
        });
    });
});