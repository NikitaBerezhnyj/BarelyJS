import { App } from "./App";
import { createComponent } from "barelyjs";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createComponent(App, root);
