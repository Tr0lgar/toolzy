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
  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dayNamesShort = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  const getDateValues = (date2) => {
    const year = date2.getFullYear();
    const month = date2.getMonth();
    const day = date2.getDate();
    const weekday = date2.getDay();
    const hours = date2.getHours();
    const minutes = date2.getMinutes();
    const seconds = date2.getSeconds();
    const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    const meridiem = hours >= 12 ? "PM" : "AM";
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
  const replaceToken = (token, values2) => {
    switch (token) {
      case "YYYY":
        return values2.year.toString();
      case "YY":
        return (values2.year % 100).toString().padStart(2, "0");
      case "MMMM":
        return monthNames[values2.month];
      case "MMM":
        return monthNamesShort[values2.month];
      case "MM":
        return (values2.month + 1).toString().padStart(2, "0");
      case "M":
        return (values2.month + 1).toString();
      case "DD":
        return values2.day.toString().padStart(2, "0");
      case "D":
        return values2.day.toString();
      case "dddd":
        return dayNames[values2.weekday];
      case "ddd":
        return dayNamesShort[values2.weekday];
      case "HH":
        return values2.hours.toString().padStart(2, "0");
      case "H":
        return values2.hours.toString();
      case "hh":
        return values2.hours12.toString().padStart(2, "0");
      case "h":
        return values2.hours12.toString();
      case "mm":
        return values2.minutes.toString().padStart(2, "0");
      case "m":
        return values2.minutes.toString();
      case "ss":
        return values2.seconds.toString().padStart(2, "0");
      case "s":
        return values2.seconds.toString();
      case "A":
        return values2.meridiem;
      case "a":
        return values2.meridiem.toLowerCase();
      default:
        return token;
    }
  };
  const values = getDateValues(date);
  const separators = /[,\-\/ :.]/;
  let result = "";
  let i = 0;
  while (i < format.length) {
    const char = format[i];
    if (separators.test(char)) {
      result += char;
      i++;
    } else {
      let currentToken = "";
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
