let currentComponent = null;

export function h(type, props, ...children) {
  return { type, props: props || {}, children };
}

export function render(vnode, container) {
  container.innerHTML = "";
  mount(vnode, container);
}

export function Fragment(props) {
  return props.children;
}

function mount(vnode, container) {
  if (vnode == null || vnode === false) return;

  if (Array.isArray(vnode)) {
    vnode.forEach(child => mount(child, container));
    return;
  }

  if (typeof vnode === "string" || typeof vnode === "number") {
    container.appendChild(document.createTextNode(vnode));
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

  for (const [key, value] of Object.entries(vnode.props || {})) {
    if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "class" || key === "className") {
      el.className = value;
    } else {
      el.setAttribute(key, value);
    }
  }

  vnode.children.forEach(child => mount(child, el));
  container.appendChild(el);
}

export function useState(initial) {
  const comp = currentComponent;
  if (!comp.states) comp.states = [];

  const stateIndex = comp.stateIndex;

  if (comp.states[stateIndex] === undefined) {
    comp.states[stateIndex] = initial;
  }

  function setState(newValue) {
    comp.states[stateIndex] = newValue;
    rerender(comp);
  }

  comp.stateIndex++;
  return [comp.states[stateIndex], setState];
}

function rerender(comp) {
  const container = comp.container;
  container.innerHTML = "";
  currentComponent = comp;
  comp.stateIndex = 0;
  mount(comp.render(), container);
}

export function createComponent(renderFn, container) {
  const comp = { render: renderFn, container, states: [], stateIndex: 0 };
  currentComponent = comp;
  comp.stateIndex = 0;
  mount(renderFn(), container);
  return comp;
}
