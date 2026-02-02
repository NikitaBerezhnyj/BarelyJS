import { h, useState } from "barelyjs";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));
  const reset = () => setCount(0);

  return h(
    "div",
    { class: "app-wrapper" },
    h(Header, null),
    h(
      "div",
      { class: "count-block" },
      h("h1", null, `Count: ${count}`),
      h(
        "div",
        { class: "button-group" },
        h(Button, { onClick: increment }, "+"),
        h(Button, { onClick: decrement }, "-"),
        h(Button, { onClick: reset }, "Reset")
      )
    ),
    h(Footer, null)
  );
}
