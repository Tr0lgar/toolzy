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
  randomInt: () => randomInt,
  shuffleArray: () => shuffleArray,
  slugify: () => slugify
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

// src/array.ts
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  capitalizeFirst,
  randomInt,
  shuffleArray,
  slugify
});
