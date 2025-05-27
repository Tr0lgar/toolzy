A personal utility toolkit for JavaScript/TypeScript — reusable, simple, and ready for any project.

> ✨ Built with TypeScript, bundled with tsup, tested with Vitest.

---

# 📁 Modules
## 🔢 Random Utilities
> All random-related functions.

- `randomInt(min: number, max: number): number`  
Returns a random integer between min and max (inclusive).

---

## 🔤 String Utilities
> All string-related functions.

- `capitalizeFirst(str: string): string`  
Capitalizes the first character of a string.
- `slugify(str: string): string`  
Converts a string into a URL-safe slug.

--- 

## #️⃣ Array Utilities
> All array-related functions.

- `shuffle<T>(arr: T[]): T[]`  
Shuffles an array.

---

# 🧪 Testing
This project uses [Vitest](https://vitest.dev/) for unit tests.

To run test :
```bash
npm run test
```

---

# 🚀 Build

The project is bundled using [tsup](https://tsup.egoist.dev/).

To build:
```bash
npm run build
```

---

# 📁 Project Structure
```
toolzy/
├── src/
│   ├── index.ts
│   ├── random.ts
│   ├── string.ts
│   ├── array.ts
│   └── ...
├── tests/
│   └── *.test.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

---

### 📝 License

MIT — @Tr0lgar