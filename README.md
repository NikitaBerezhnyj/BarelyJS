# BarelyJS Monorepo

Repository has [ukrainian :ukraine:](#-barelyjs-monorepo-ukraine) and [english :uk:](#barelyjs-monorepo-uk) localization.

## BarelyJS Monorepo :ukraine:

Цей репозиторій містить розробку **BarelyJS**, мінімалістичної бібліотеки для фронтенду, та **create-barelyjs-app**, CLI-інструмент для швидкого створення нових проєктів з BarelyJS.

### Огляд

- **barelyjs** — маленька (~200 рядків) JavaScript-бібліотека для створення UI-компонентів з декларативним API та базовим реактивним станом.
- **create-barelyjs-app** — CLI-інструмент для швидкого створення нового проєкту BarelyJS з готовим шаблоном.

Структура цього монорепозиторію дозволяє розробляти і бібліотеку, і CLI-інструмент одночасно:

```
barelyjs-monorepo/
├─ packages/
│  ├─ barelyjs/
│  │  └─ (джерельний код бібліотеки)
│  └─ create-barelyjs-app/
│     └─ template/
│        ├─ public/
│        └─ src/
├─ package.json
├─ package-lock.json
└─ README.md
```

### Можливості

**Бібліотека BarelyJS**

- Декларативне рендерення компонентів через `h()` та `render()`
- Створення компонентів через `createComponent()`
- Базове управління станом через `useState()`
- Без залежностей, чистий JavaScript
- Не потрібна збірка — просто підключаєте у HTML

**CLI-інструмент**

- Створює нові проєкти з готовим шаблоном
- Автоматично оновлює поле `name` у `package.json`
- Автоматично встановлює залежності
- Запускає готовий до роботи BarelyJS-проєкт

### Використані технології

- Node.js
- Чистий JavaScript (Vanilla JS)
- NPM для керування пакетами

### Початок роботи

#### 1. Клонування репозиторію

```bash
git clone https://github.com/NikitaBerezhnyj/BarelyJS.git
cd BarelyJS
```

#### 2. Встановлення залежностей для всіх пакетів

```bash
npm install
```

#### 3. Локальне підключення пакетів (необов’язково для розробки)

```bash
# У корені монорепозиторію BarelyJS
npm link ./packages/barelyjs
npm link ./packages/create-barelyjs-app
```

#### 4. Створення нового проєкту за допомогою CLI

```bash
npx create-barelyjs-app my-new-app
cd my-new-app
npx serve public
```

Новий проєкт використовуватиме останню локальну версію бібліотеки BarelyJS.

### Використання

#### Бібліотека BarelyJS

- Підключіть бібліотеку у ваш HTML через `iife` бандл або імпортуйте як модуль.
- Створюйте компоненти з `h()`, `render()` та `createComponent()`.
- Керуйте станом через `useState()`.

#### CLI-інструмент

- Запустіть `create-barelyjs-app <app-name>` для створення нового проєкту.
- CLI скопіює шаблон, оновить `package.json` та встановить залежності.

### Публікація пакетів на NPM

Коли ви оновлюєте **barelyjs** або **create-barelyjs-app**, виконайте такі кроки:

1. **Оновіть версію** у кожному `package.json` у папці `packages/`:

```json
{
  "version": "1.0.1"
}
```

2. **Збірка (якщо потрібно)** — для BarelyJS можна збирати бандл через Rollup:

```bash
cd packages/barelyjs
npm run build
```

3. **Публікація пакета**:

```bash
cd packages/barelyjs
npm publish --access public

cd ../create-barelyjs-app
npm publish --access public
```

4. **Оновлення посилань** в інших пакетах при необхідності (наприклад, CLI залежить від BarelyJS).

### Корисні посилання

- [BarelyJS](https://www.npmjs.com/package/barelyjs) (npm)
- [create-barelyjs-app](https://www.npmjs.com/package/create-barelyjs-app) (npm)

### Ліцензія та правила спільноти

- [Ліцензія](LICENSE) — ліцензія проєкту.
- [Кодекс поведінки](CODE_OF_CONDUCT.md) — очікувана поведінка для контриб’юторів.
- [Посібник для контриб’юторів](CONTRIBUTING.md) — як допомогти проєкту.
- [Політика безпеки](SECURITY.md) — повідомлення про проблеми безпеки.

## BarelyJS Monorepo :uk:

This repository contains the development of **BarelyJS**, a minimalistic frontend library, and **create-barelyjs-app**, a CLI tool for scaffolding new projects using BarelyJS.

### Overview

- **barelyjs** — tiny (~200 lines) JavaScript library for building UI components with a declarative API and basic reactive state.
- **create-barelyjs-app** — CLI tool to quickly scaffold a new BarelyJS project with a ready-to-use template.

This monorepo structure allows you to develop both the library and the project scaffolding tool together:

```

barelyjs-monorepo/
├─ packages/
│  ├─ barelyjs/
│  │  └─ (library source code)
│  └─ create-barelyjs-app/
│     └─ template/
│        ├─ public/
│        └─ src/
├─ package.json
├─ package-lock.json
└─ README.md

```

### Features

**BarelyJS Library**

- Declarative component rendering with `h()` and `render()`
- Component creation with `createComponent()`
- Basic reactive state management with `useState()`
- No dependencies, pure JavaScript
- No build step required — just include in HTML

**CLI Tool**

- Scaffolds new projects using a ready-made template
- Updates `package.json` name automatically
- Installs dependencies automatically
- Starts a project-ready BarelyJS app

### Technologies Used

- Node.js
- Vanilla JavaScript
- NPM for package management

### Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/NikitaBerezhnyj/BarelyJS.git
cd BarelyJS
```

#### 2. Install dependencies for all packages

```bash
npm install
```

#### 3. Link local packages (optional for development)

```bash
# Inside BarelyJS monorepo root
npm link ./packages/barelyjs
npm link ./packages/create-barelyjs-app
```

#### 4. Create a new project using the CLI

```bash
npx create-barelyjs-app my-new-app
cd my-new-app
npx serve public
```

Your new project will use the latest local BarelyJS library.

### Usage

#### BarelyJS Library

- Include the library in your HTML via the `iife` bundle or import it as a module.
- Create components with `h()`, `render()`, and `createComponent()`.
- Manage state with `useState()`.

#### CLI Tool

- Run `create-barelyjs-app <app-name>` to scaffold a new project.
- The CLI will copy the template, update `package.json`, and install dependencies.

### Publishing Packages to NPM

When you update **barelyjs** or **create-barelyjs-app**, follow these steps to publish:

1. **Update version** in each `package.json` under `packages/`:

```json
{
  "version": "1.0.1"
}
```

1. **Build (if needed)** — for BarelyJS, you can build bundle using a Rollup bundler:

```bash
cd packages/barelyjs
npm run build
```

3. **Publish the package**:

```bash
cd packages/barelyjs
npm publish --access public

cd ../create-barelyjs-app
npm publish --access public
```

4. **Update references** in other packages if needed (e.g., CLI depends on BarelyJS).

### Useful Links

- [BarelyJS](https://www.npmjs.com/package/barelyjs) (npm)
- [create-barelyjs-app](https://www.npmjs.com/package/create-barelyjs-app) (npm)

### License & Community Guidelines

- [License](LICENSE) — project license.
- [Code of Conduct](CODE_OF_CONDUCT.md) — expected behavior for contributors.
- [Contributing Guide](CONTRIBUTING.md) — how to help the project.
- [Security Policy](SECURITY.md) — reporting security issues.
