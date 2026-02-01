# BarelyJS Monorepo

Repository has [ukrainian :ukraine:](#-barelyjs-monorepo-ukraine) and [english :uk:](#barelyjs-monorepo-uk) localization.

## BarelyJS Monorepo :ukraine:

Цей репозиторій містить розробку **BarelyJS**, мінімалістичної бібліотеки для фронтенду з підтримкою JSX, та **create-barelyjs-app**, CLI-інструмент для швидкого створення нових проєктів.

### Огляд

- **barelyjs** — маленька JavaScript-бібліотека для створення UI-компонентів з декларативним API, базовим реактивним станом та підтримкою JSX.
- **create-barelyjs-app** — CLI-інструмент для швидкого створення нового проєкту BarelyJS з готовими шаблонами (JS або JSX).

Структура цього монорепозиторію дозволяє розробляти і бібліотеку, і CLI-інструмент одночасно:

```
barelyjs-monorepo/
├─ packages/
│  ├─ barelyjs/
│  │  └─ (код бібліотеки)
│  └─ create-barelyjs-app/
│     └─ templates/
│        ├─ js/
│        │  └─ src/
│        └─ jsx/
│           └─ src/
├─ package.json
├─ package-lock.json
└─ README.md
```

### Можливості

**Бібліотека BarelyJS**

- Декларативне рендерування компонентів через `h()` та `render()`
- Підтримка JSX через Vite/esbuild
- Створення компонентів через `createComponent()`
- Базове управління станом через `useState()`
- Підтримка `Fragment` для групування елементів
- Без залежностей, чистий JavaScript
- Працює як з JSX, так і з чистим JS

**CLI-інструмент**

- Створює нові проєкти з готовими шаблонами (JS або JSX)
- Автоматично оновлює поле `name` у `package.json`
- Автоматично встановлює залежності
- Запускає готовий до роботи BarelyJS-проєкт

### Використані технології

- Node.js
- JavaScript (Vanilla JS)
- JSX (через Vite/esbuild)
- NPM для керування пакетами

### Початок роботи

### 1. Клонування репозиторію

```bash
git clone https://github.com/NikitaBerezhnyj/BarelyJS.git
cd BarelyJS
```

### 2. Встановлення залежностей для всіх пакетів

```bash
npm install
```

### 3. Локальне підключення пакетів (для розробки)

```bash
# У корені монорепозиторію BarelyJS
npm link ./packages/barelyjs
npm link ./packages/create-barelyjs-app
```

#### 4. Створення нового проєкту за допомогою CLI

**Варіант 1: JSX шаблон**

```bash
npx create-barelyjs-app my-new-app --jsx
cd my-new-app
npm run dev
```

**Варіант 2: JS шаблон (без JSX)**

```bash
npx create-barelyjs-app my-new-app --js
cd my-new-app
npx serve
```

**Варіант 3: Без прапорця (інтерактивний вибір)**

```bash
npx create-barelyjs-app my-new-app
```

### Використання

#### Бібліотека BarelyJS

**З JSX:**

```jsx
import { h, useState } from "barelyjs";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Без JSX (чистий JS):**

```javascript
import { h, useState } from "barelyjs";

export function Counter() {
  const [count, setCount] = useState(0);

  return h(
    "div",
    null,
    h("h1", null, `Count: ${count}`),
    h("button", { onClick: () => setCount(count + 1) }, "+")
  );
}
```

#### Налаштування JSX

У `vite.config.js`:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  }
});
```

#### CLI-інструмент

```bash
# Створення проєкту з JSX
npx create-barelyjs-app my-app --jsx

# Створення проєкту без JSX
npx create-barelyjs-app my-app --js

# Інтерактивний вибір
npx create-barelyjs-app my-app
```

### Публікація пакетів на NPM

Коли ви оновлюєте **barelyjs** або **create-barelyjs-app**, виконайте такі кроки:

1. **Оновіть версію** у кожному `package.json` у теці `packages/`:

```json
{
  "version": "1.0.2"
}
```

2. **Збірка бібліотеки BarelyJS**:

```bash
cd packages/barelyjs
npm run build
```

3. **Публікація пакетів**:

```bash
cd packages/barelyjs
npm publish --access public

cd ../create-barelyjs-app
npm publish --access public
```

4. **Оновлення залежностей** в CLI-шаблонах, якщо змінилася версія BarelyJS.

### Структура проєкту

#### JSX шаблон

```
my-app/
├─ src/
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ Header.jsx
│  │  └─ Footer.jsx
│  ├─ styles/
│  │  └─ main.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ package.json
```

#### JS шаблон

```
my-app/
├─ src/
│  ├─ components/
│  │  ├─ Button.js
│  │  ├─ Header.js
│  │  └─ Footer.js
│  ├─ styles/
│  │  └─ main.css
│  ├─ App.js
│  └─ main.js
├─ index.html
└─ package.json
```

### API Довідка

#### `h(type, props, ...children)`

Створює віртуальний DOM вузол.

#### `render(vnode, container)`

Рендерить віртуальний DOM у реальний DOM.

#### `Fragment(props)`

Групує дочірні елементи без додаткового обгортання.

#### `useState(initialValue)`

Створює реактивний стан для компонента.

#### `createComponent(renderFn, container)`

Створює та монтує компонент у контейнер.

### Корисні посилання

- [BarelyJS на NPM](https://www.npmjs.com/package/barelyjs)
- [create-barelyjs-app на NPM](https://www.npmjs.com/package/create-barelyjs-app)
- [Документація Vite](https://vitejs.dev/)

### Ліцензія та правила спільноти

- [Ліцензія](LICENSE) — ліцензія проєкту
- [Кодекс поведінки](CODE_OF_CONDUCT.md) — очікувана поведінка для контриб'юторів
- [Посібник для контриб'юторів](CONTRIBUTING.md) — як допомогти проєкту
- [Політика безпеки](SECURITY.md) — повідомлення про проблеми безпеки

---

## BarelyJS Monorepo :uk:

This repository contains the development of **BarelyJS**, a minimalist frontend library with JSX support, and **create-barelyjs-app**, a CLI tool for quickly scaffolding new projects.

### Overview

- **barelyjs** — a small JavaScript library for creating UI components with declarative API, basic reactive state, and JSX support.
- **create-barelyjs-app** — a CLI tool for quickly creating new BarelyJS projects with ready-made templates (JS or JSX).

The structure of this monorepo allows developing both the library and CLI tool simultaneously:

```
barelyjs-monorepo/
├─ packages/
│  ├─ barelyjs/
│  │  └─ (library code)
│  └─ create-barelyjs-app/
│     └─ templates/
│        ├─ js/
│        │  └─ src/
│        └─ jsx/
│           └─ src/
├─ package.json
├─ package-lock.json
└─ README.md
```

### Features

**BarelyJS Library**

- Declarative component rendering via `h()` and `render()`
- JSX support via Vite/esbuild
- Component creation via `createComponent()`
- Basic state management via `useState()`
- `Fragment` support for grouping elements
- Zero dependencies, pure JavaScript
- Works with both JSX and vanilla JS

**CLI Tool**

- Creates new projects with ready-made templates (JS or JSX)
- Automatically updates the `name` field in `package.json`
- Automatically installs dependencies
- Launches a ready-to-use BarelyJS project

### Technologies Used

- Node.js
- JavaScript (Vanilla JS)
- JSX (via Vite/esbuild)
- NPM for package management

### Getting Started

#### 1. Clone the Repository

```bash
git clone https://github.com/NikitaBerezhnyj/BarelyJS.git
cd BarelyJS
```

#### 2. Install Dependencies for All Packages

```bash
npm install
```

#### 3. Local Package Linking (for development)

```bash
# In the BarelyJS monorepo root
npm link ./packages/barelyjs
npm link ./packages/create-barelyjs-app
```

#### 4. Create a New Project Using CLI

**Option 1: JSX template**

```bash
npx create-barelyjs-app my-new-app --jsx
cd my-new-app
npm run dev
```

**Option 2: JS template (without JSX)**

```bash
npx create-barelyjs-app my-new-app --js
cd my-new-app
npx serve
```

**Option 3: No flag (interactive selection)**

```bash
npx create-barelyjs-app my-new-app
```

### Usage

#### BarelyJS Library

**With JSX:**

```jsx
import { h, useState } from "barelyjs";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Without JSX (vanilla JS):**

```javascript
import { h, useState } from "barelyjs";

export function Counter() {
  const [count, setCount] = useState(0);

  return h(
    "div",
    null,
    h("h1", null, `Count: ${count}`),
    h("button", { onClick: () => setCount(count + 1) }, "+")
  );
}
```

#### JSX Configuration

In `vite.config.js`:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  }
});
```

#### CLI Tool

```bash
# Create project with JSX
npx create-barelyjs-app my-app --jsx

# Create project without JSX
npx create-barelyjs-app my-app --js

# Interactive selection
npx create-barelyjs-app my-app
```

### Publishing Packages to NPM

When you update **barelyjs** or **create-barelyjs-app**, follow these steps:

1. **Update the version** in each `package.json` in the `packages/` directory:

```json
{
  "version": "1.0.2"
}
```

2. **Build the BarelyJS library**:

```bash
cd packages/barelyjs
npm run build
```

3. **Publish packages**:

```bash
cd packages/barelyjs
npm publish --access public

cd ../create-barelyjs-app
npm publish --access public
```

4. **Update dependencies** in CLI templates if the BarelyJS version has changed.

## Project Structure

#### JSX Template

```
my-app/
├─ src/
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ Header.jsx
│  │  └─ Footer.jsx
│  ├─ styles/
│  │  └─ main.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ package.json
```

#### JS Template

```
my-app/
├─ src/
│  ├─ components/
│  │  ├─ Button.js
│  │  ├─ Header.js
│  │  └─ Footer.js
│  ├─ styles/
│  │  └─ main.css
│  ├─ App.js
│  └─ main.js
├─ index.html
└─ package.json
```

### API Reference

#### `h(type, props, ...children)`

Creates a virtual DOM node.

#### `render(vnode, container)`

Renders virtual DOM to real DOM.

#### `Fragment(props)`

Groups child elements without additional wrapping.

#### `useState(initialValue)`

Creates reactive state for a component.

#### `createComponent(renderFn, container)`

Creates and mounts a component to a container.

### Useful Links

- [BarelyJS on NPM](https://www.npmjs.com/package/barelyjs)
- [create-barelyjs-app on NPM](https://www.npmjs.com/package/create-barelyjs-app)
- [Vite Documentation](https://vitejs.dev/)

### License and Community Guidelines

- [License](LICENSE) — project license
- [Code of Conduct](CODE_OF_CONDUCT.md) — expected behavior for contributors
- [Contributing Guide](CONTRIBUTING.md) — how to contribute to the project
- [Security Policy](SECURITY.md) — reporting security issues
