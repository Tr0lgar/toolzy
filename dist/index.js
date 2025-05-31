"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  capitalizeFirst: () => capitalizeFirst,
  difference: () => difference,
  formatDate: () => formatDate,
  intersect: () => intersect,
  randomInt: () => randomInt,
  removeDuplicates: () => removeDuplicates,
  shuffleArray: () => shuffleArray,
  slugify: () => slugify,
  truncate: () => truncate
});
module.exports = __toCommonJS(index_exports);

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
function truncate(str, maxLength, suffix = "...") {
  if (str.length <= maxLength) return str;
  if (maxLength <= 0) return "";
  const truncatedLength = maxLength - suffix.length;
  if (truncatedLength <= 0) return suffix;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  capitalizeFirst,
  difference,
  formatDate,
  intersect,
  randomInt,
  removeDuplicates,
  shuffleArray,
  slugify,
  truncate
});
