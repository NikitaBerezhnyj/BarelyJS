import { useState } from "barelyjs";
import { Button } from "./components/Button.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <Header />

      <div className="count-block">
        <h1>Count: {count}</h1>

        <div className="button-group">
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button onClick={() => setCount(Math.max(0, count - 1))}>-</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
