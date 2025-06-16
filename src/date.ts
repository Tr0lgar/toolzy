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
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthNamesShort = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const dayNamesShort = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];

    // Fonction pour obtenir les valeurs de date
    const getDateValues = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const weekday = date.getDay();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        return {
            year,
            month,
            day,
            weekday,
            hours,
            minutes,
            seconds,
            hours12,
            meridiem
        };
    };

    // Function to replace a token with its value
    const replaceToken = (token: string, values: ReturnType<typeof getDateValues>): string => {
        switch (token) {
            case 'YYYY': return values.year.toString();
            case 'YY': return (values.year % 100).toString().padStart(2, '0');

            case 'MMMM': return monthNames[values.month];
            case 'MMM': return monthNamesShort[values.month];
            case 'MM': return (values.month + 1).toString().padStart(2, '0');
            case 'M': return (values.month + 1).toString();

            case 'DD': return values.day.toString().padStart(2, '0');
            case 'D': return values.day.toString();
            case 'dddd': return dayNames[values.weekday];
            case 'ddd': return dayNamesShort[values.weekday];

            case 'HH': return values.hours.toString().padStart(2, '0');
            case 'H': return values.hours.toString();
            case 'hh': return values.hours12.toString().padStart(2, '0');
            case 'h': return values.hours12.toString();

            case 'mm': return values.minutes.toString().padStart(2, '0');
            case 'm': return values.minutes.toString();

            case 'ss': return values.seconds.toString().padStart(2, '0');
            case 's': return values.seconds.toString();

            case 'A': return values.meridiem;
            case 'a': return values.meridiem.toLowerCase();

            default: return token;
        }
    };

    const values = getDateValues(date);
    const separators = /[,\-\/ :.]/;
    let result = '';
    let i = 0;

    while (i < format.length) {
        const char = format[i];

        if (separators.test(char)) {
            result += char;
            i++;
        } else {
            let currentToken = '';

            while (i < format.length && !separators.test(format[i])) {
                currentToken += format[i];
                i++;
            }

            if (currentToken) {
                result += replaceToken(currentToken, values);
            }
        }
    }

    return result;
}