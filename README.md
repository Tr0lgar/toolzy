<div align="center">
  <img height="200" src="toolzy-logo.png"/>
</div>

<h1 align="center">TOOLZY</h1>
<p align="center"><i>Streamline your code, elevate your productivity.</i></p>
<p align="center"><i>Build with tools and technologies :</i></p>
<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="30" alt="typescript logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" height="30" alt="vite logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=for-the-badge" height="30" alt="npm logo"  />
</div>

<div align="center">
  <a href="https://tr0lgar.github.io/toolzy-doc/" target="_blank">
    <img src="https://img.shields.io/badge/Documentation-00C7B7?style=for-the-badge&logo=bookstack&logoColor=white" alt="Documentation" height="30" />
  </a>
  <img width="12" />
  <a href="https://www.npmjs.com/package/toolzy" target="_blank">
    <img src="https://img.shields.io/badge/NPM_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM Package" height="30" />
  </a>
</div>

---

<h2>Table of content</h2>

- [Overview](#overview)
- [Use Toolzy in your projects](#use-toolzy-in-your-projects)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Testing](#-testing)
- [Documentation](#-documentation)
- [Project Structure](#-project-structure)
- [License](#-license)


---

### Overview

Toolzy is your go-to toolkit for simplifying common tasks in JavaScript and TypeScript projects.

**Why Toolzy ?**

This project enhances development efficiency by providing essential utilities that streamline your coding processes. The
core features include:
- **🎲 Reusable Functions:** Simplifies common tasks, reducing code duplication and enhancing.
- **🔤 String Manipulation:** Offers powerful text processing functions for improved readability and web optimization.
- **#️⃣ ArrayOperations:** Includes shuffling functionality to randomize elements, perfect for games and sampling.
- **🔢 Random Number Generation:** Generates random integers.
- **🛠️ TypeScript Support:** Ensures type safety and adherence to modern JavaScript standards for better code quality.
- **📦 Lightweight and Modular:** Easily integrates into existing projects, promoting a clean and maintainable codebase.

### Use Toolzy in your projects
1. Install the dependency into your project:  
   Using npm:
   ```bash
   > npm install toolzy
   ```
2. Import the methods needed in you project files:  
   For example:
    ```ts
    import { randomInt } from 'toolzy';
   
    const number = randomInt(0, 10);
    ```

### Getting Started
#### Prerequisites
This project requires the following dependencies :
- **Programming Language:** TypeScript
- **Pakcage Manager:** Npm

#### Installation
Build Toolzy from the source and install dependencies:

1. **Clone the repository:**
    ```bash
    > git clone https://github.com/Tr0lgar/toolzy
    ```
2. **Navigate to the project directory:**
    ```bash
    > cd toolzy
    ```
3. **Install the dependencies:**  
    Using npm:
    ```bash
    > npm install
    ```

#### 🧪 Testing
Toolzy uses [Vitest](https://vitest.dev/) test framework. Run the test suite with:

Using npm: 
```bash
> npm test
```

### 🔗 Documentation
- **Documentation** : [https://tr0lgar.github.io/toolzy-doc/](https://tr0lgar.github.io/toolzy-doc/)
- **NPM Package** : [https://www.npmjs.com/package/toolzy](https://www.npmjs.com/package/toolzy)
    
### 📁 Project Structure
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