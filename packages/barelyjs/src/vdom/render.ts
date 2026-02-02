import type { VNode } from "../types";
import { mount } from "./mount";

export function render(vnode: VNode, container: HTMLElement): void {
  container.innerHTML = "";
  mount(vnode, container);
}
