A personal utility toolkit for JavaScript/TypeScript — reusable, simple, and ready for any project.

> ✨ Built with TypeScript, bundled with tsup, tested with Vitest.

---

## 📚 Documentation

Documentation will be available soon.

## 🚀 Installation

```bash
npm install toolzy
```

## 💡 Usage
```ts
import { randomInt, capitalizeFirst, shuffleArray } from 'toolzy';

const number = randomInt(1, 10);
const text = capitalizeFirst('bonjour'); 
const array = shuffle([1, 2, 3, 4, 5]);

```


# 🧪 Testing
This project uses [Vitest](https://vitest.dev/) for unit tests.

To run test :
```bash
npm run test
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