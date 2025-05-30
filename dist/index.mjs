// src/random.ts
function randomInt(min, max) {
  const timestamp = Date.now() % 1e4;
  const perfTimestamp = Math.floor(performance.now() * 1e3) % 1e4;
  const randomValue = Math.random() + timestamp / 1e4 + perfTimestamp / 1e4;
  const normalizedRandom = randomValue % 1;
  return Math.floor(normalizedRandom * (max - min + 1)) + min;
}

// src/string.ts
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function slugify(text) {
  return text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}
function truncate(str, maxLength, suffix = "\u2026") {
  if (str.length <= maxLength) return str;
  const truncatedLength = maxLength - suffix.length;
  if (truncatedLength <= 0) return suffix.slice(0, maxLength);
  return str.slice(0, truncatedLength) + suffix;
}

// src/array.ts
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
function intersect(arrayA, arrayB) {
  const setB = new Set(arrayB);
  return arrayA.filter((item) => setB.has(item));
}
function difference(arrayA, arrayB) {
  const setB = new Set(arrayB);
  return arrayA.filter((item) => !setB.has(item));
}

// src/date.ts
function formatDate(date, format) {
  const pad = (n, size = 2) => n.toString().padStart(size, "0");
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const replacements = {
    "YYYY": date.getFullYear().toString(),
    "YY": date.getFullYear().toString().slice(-2),
    "MMMM": monthNames[date.getMonth()],
    "MMM": monthNames[date.getMonth()].slice(0, 3),
    "MM": pad(date.getMonth() + 1),
    "M": (date.getMonth() + 1).toString(),
    "DD": pad(date.getDate()),
    "D": date.getDate().toString(),
    "dddd": dayNames[date.getDay()],
    "ddd": dayNames[date.getDay()].slice(0, 3),
    "HH": pad(hours24),
    "H": hours24.toString(),
    "hh": pad(hours12),
    "h": hours12.toString(),
    "mm": pad(date.getMinutes()),
    "m": date.getMinutes().toString(),
    "ss": pad(date.getSeconds()),
    "s": date.getSeconds().toString(),
    "A": hours24 < 12 ? "AM" : "PM",
    "a": hours24 < 12 ? "am" : "pm"
  };
  return format.replace(/YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|H|hh|h|mm|m|ss|s|A|a/g, (match) => replacements[match]);
}
export {
  capitalizeFirst,
  difference,
  formatDate,
  intersect,
  randomInt,
  removeDuplicates,
  shuffleArray,
  slugify,
  truncate
};
