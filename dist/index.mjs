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
export {
  capitalizeFirst,
  randomInt,
  shuffleArray,
  slugify
};
