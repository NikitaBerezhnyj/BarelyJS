import type { VNode, VNodeChild } from "../types";

export function mount(vnode: VNodeChild, container: HTMLElement): void {
  if (vnode == null || vnode === false) {
    return;
  }

  if (Array.isArray(vnode)) {
    vnode.forEach(child => mount(child, container));
    return;
  }

  if (typeof vnode === "string" || typeof vnode === "number") {
    container.appendChild(document.createTextNode(String(vnode)));
    return;
  }

  if (typeof vnode === "boolean") {
    return;
  }

  if (typeof vnode.type === "function") {
    const componentVNode = vnode.type({
      ...(vnode.props || {}),
      children: vnode.children
    });
    mount(componentVNode, container);
    return;
  }

  const el = document.createElement(vnode.type);

  const props = vnode.props || {};
  for (const [key, value] of Object.entries(props)) {
    if (key === "children") {
      continue;
    }

    if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, value);
    } else if (key === "class" || key === "className") {
      el.className = value;
    } else if (key === "style" && typeof value === "object") {
      Object.assign(el.style, value);
    } else if (typeof value === "boolean") {
      if (value) {
        el.setAttribute(key, "");
      }
    } else if (value != null) {
      el.setAttribute(key, String(value));
    }
  }

  vnode.children.forEach(child => mount(child, el));

  container.appendChild(el);
}
