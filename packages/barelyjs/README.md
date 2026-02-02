# BarelyJS

**BarelyJS** is a minimalistic frontend library for building UI components. It provides a lightweight way to create and render components, manage state, and build simple reactive interfaces, without any virtual DOM libraries or heavy frameworks.

## Features

- Tiny and minimal (~200 lines of code)
- Declarative component rendering with `h()` and `render()`
- Basic reactive state management with `useState()`
- Component creation with `createComponent()`
- No dependencies, pure JavaScript
- No build step required — just install, include in your HTML, and start using

> NOTE: If you want to quickly scaffold a new project using BarelyJS, check out the [create-barelyjs-app](https://www.npmjs.com/package/create-barelyjs-app) CLI tool.

## Installation

```bash
npm install barelyjs
```

Include via a script tag:

```html
<script src="dist/barelyjs.iife.js"></script>
```

## Usage

### Basic Example

To use BarelyJS in a plain HTML project:

1. Include the BarelyJS library in your HTML via the `iife` bundle.
2. Create a `main.js` (or any JS file) where you define your components and render them.
3. Make sure you have a `<div>` with `id="root"` in your HTML — all components will be mounted there.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>BarelyJS Example</title>
  </head>

  <body>
    <!-- Container for your BarelyJS app -->
    <div id="root"></div>

    <!-- Include the BarelyJS library -->
    <script src="node_modules/barelyjs/dist/barelyjs.iife.js"></script>

    <!-- Your main JS file -->
    <script type="module" src="src/main.js"></script>
  </body>
</html>
```

```javascript
// main.js
import { h, render, useState, createComponent } from "barelyjs";

// Define a component
function Counter() {
  const [count, setCount] = useState(0);

  return h(
    "div",
    null,
    h("h1", null, `Count: ${count}`),
    h("button", { onClick: () => setCount(count + 1) }, "Increment")
  );
}

// Render the component into the root div
const container = document.getElementById("root");
createComponent(Counter, container);
```

### Simple Rendering

```javascript
import { h, render } from "barelyjs";

const hello = h("div", { class: "box" }, "Hello BarelyJS!");
render(hello, document.getElementById("app"));
```

## API

### `h(type, props, ...children)`

Creates a virtual node.

- `type` — string (HTML tag) or function (component)
- `props` — object of attributes and event handlers
- `children` — child nodes

### `render(vnode, container)`

Renders a virtual node into a container. Clears container content before mounting.

### `useState(initial)`

Returns a reactive state array `[state, setState]` for functional components.

### `createComponent(renderFn, container)`

Creates a component instance, renders it into the container, and manages state.

## Basic Project Template

When creating a new project with **BarelyJS**, the recommended folder structure looks like this:

```
my-app/
├─ public/
│  └─ index.html
├─ src/
│  ├─ App.js
│  ├─ main.js
│  ├─ components/
│  │  ├─ Button.js
│  │  ├─ Header.js
│  │  └─ Footer.js
│  └─ styles/
│     └─ main.css
└─ package.json
```

- `public/index.html` — the main HTML file containing the `<div id="root"></div>` container.
- `src/main.js` — entry point for your JS code, mounts the app.
- `src/App.js` — root component of your project.
- `src/components/` — folder for reusable components.
- `src/styles/main.css` — basic styling for your app.

Example `main.js`:

```javascript
import { App } from "./App.js";
const { createComponent } = BarelyJS;

createComponent(App, document.getElementById("root"));
```

Example `App.js`:

```javascript
import { Button } from "./components/Button.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

const { h, useState } = BarelyJS;

export function App() {
  const [count, setCount] = useState(0);

  return h(
    "div",
    { class: "app-wrapper" },
    h(Header),
    h(
      "div",
      { class: "count-block" },
      h("h1", null, `Count: ${count}`),
      h(
        "div",
        { class: "button-group" },
        h(Button, { onClick: () => setCount(count + 1) }, "+"),
        h(Button, { onClick: () => setCount(Math.max(0, count - 1)) }, "-"),
        h(Button, { onClick: () => setCount(0) }, "Reset")
      )
    ),
    h(Footer)
  );
}
```

Example `Button.js`:

```javascript
const { h } = BarelyJS;

export function Button({ onClick, children }) {
  return h("button", { class: "my-button", onClick }, ...children);
}
```

**Example `Header.js` and `Footer.js`:**

```javascript
const { h } = BarelyJS;

export function Header() {
  return h("header", { class: "app-header" }, "BarelyJS Example");
}

export function Footer() {
  return h(
    "footer",
    { class: "app-footer" },
    h(
      "a",
      { href: "https://github.com/NikitaBerezhnyj/BarelyJS", target: "_blank" },
      "Source Code"
    ),
    h("a", { href: "https://www.npmjs.com/package/barelyjs", target: "_blank" }, "Npm Package")
  );
}
```

main.css includes simple styling for layout, buttons, header/footer, and spacing.
