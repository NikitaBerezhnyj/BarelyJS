# create-barelyjs-app

**create-barelyjs-app** is a command-line tool for quickly scaffolding new projects using the **BarelyJS** library.

> Note: This CLI tool works with the [BarelyJS](https://www.npmjs.com/package/barelyjs) library. Check out BarelyJS to see how to build UI components and use the template created by this tool.

## Installation

```bash
npm install -g create-barelyjs-app
```

Or run it with `npx`:

```bash
npx create-barelyjs-app my-new-app
```

## Usage

```bash
create-barelyjs-app <app-name> [--js | --jsx | --ts | --tsx]
```

- `<app-name>` — the name of the new project folder.
- `--js` — uses a basic JavaScript template.
- `--jsx` — uses JSX (Vite) template.
- `--ts` — uses a basic TypeScript template with Vite for runtime.
- `--tsx` — uses TSX (Vite) template.
- The tool will create a folder with this name in your current working directory.

Example:

```bash
npx create-barelyjs-app barelyjs-example
npx create-barelyjs-app barelyjs-example --js
npx create-barelyjs-app barelyjs-example --jsx
npx create-barelyjs-app barelyjs-example --ts
npx create-barelyjs-app barelyjs-example --tsx
```

This will:

1. Copy all files from the template folder to `./barelyjs-example`.
2. Update `package.json` name to `"barelyjs-example"`.
3. Run `npm install` inside the new folder.
4. Print instructions for starting the project.

## After Creation

Once the project is created, you can run:

- For JS:

  ```bash
  cd <app-name>
  npx serve
  ```

- For JSX/TS/TSX:
  ```bash
  cd <app-name>
  npm run dev
  ```

This will start a local server serving your new BarelyJS project.

## Notes

- Make sure you have Node.js installed (version >=18 recommended).
- The template folder inside this package contains the base structure of a BarelyJS project, including `index.html`, `src/`, and `package.json`.
- No build step is required — the template is ready to use immediately.
