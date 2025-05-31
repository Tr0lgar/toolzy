/**
 * Formats a JavaScript Date object into a string based on a custom pattern.
 *
 * Supported tokens:
 *
 * Year:
 * - YYYY: 4-digit year (e.g., 2025)
 * - YY: 2-digit year (e.g., 25)
 *
 * Month:
 * - MMMM: Full month name (e.g., January)
 * - MMM: Abbreviated month name (e.g., Jan)
 * - MM: Month with leading zero (e.g., 01)
 * - M: Month without leading zero (e.g., 1)
 *
 * Day:
 * - DD: Day of the month with leading zero (e.g., 05)
 * - D: Day of the month without leading zero (e.g., 5)
 * - dddd: Full weekday name (e.g., Monday)
 * - ddd: Abbreviated weekday name (e.g., Mon)
 *
 * Hours:
 * - HH: Hours (24h format, leading zero) (e.g., 09, 23)
 * - H: Hours (24h format, no leading zero) (e.g., 9, 23)
 * - hh: Hours (12h format, leading zero) (e.g., 09, 11)
 * - h: Hours (12h format, no leading zero) (e.g., 9, 11)
 *
 * Minutes:
 * - mm: Minutes with leading zero (e.g., 04)
 * - m: Minutes without leading zero (e.g., 4)
 *
 * Seconds:
 * - ss: Seconds with leading zero (e.g., 07)
 * - s: Seconds without leading zero (e.g., 7)
 *
 * Meridiem:
 * - A: AM/PM
 * - a: am/pm
 *
 * @param {Date} date - The Date object to format.
 * @param {string} format - A format string containing supported tokens.
 * @returns {string} The formatted date string.
 *
 * @example
 * formatDate(new Date(), 'YYYY-MM-DD') // "2025-05-27"
 * formatDate(new Date(), 'ddd, MMM D, YY hh:mm A') // "Tue, May 27, 25 03:16 PM"
 */
export function formatDate(date: Date, format: string): string {
    const pad = (n: number, size = 2): string => n.toString().padStart(size, '0');

    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const replacements: Record<string, string> = {
        'YYYY': date.getFullYear().toString(),
        'YY': date.getFullYear().toString().slice(-2),
        'MMMM': monthNames[date.getMonth()],
        'MMM': monthNames[date.getMonth()].slice(0, 3),
        'MM': pad(date.getMonth() + 1),
        'M': (date.getMonth() + 1).toString(),
        'DD': pad(date.getDate()),
        'D': date.getDate().toString(),
        'dddd': dayNames[date.getDay()],
        'ddd': dayNames[date.getDay()].slice(0, 3),
        'HH': pad(hours24),
        'H': hours24.toString(),
        'hh': pad(hours12),
        'h': hours12.toString(),
        'mm': pad(date.getMinutes()),
        'm': date.getMinutes().toString(),
        'ss': pad(date.getSeconds()),
        's': date.getSeconds().toString(),
        'A': hours24 < 12 ? 'AM' : 'PM',
        'a': hours24 < 12 ? 'am' : 'pm'
    };


    return format.replace(/YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|H|hh|h|mm|m|ss|s|A|a/g, match => replacements[match]);
}