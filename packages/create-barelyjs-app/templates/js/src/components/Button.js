const { h } = BarelyJS;

export function Button({ onClick, children }) {
  return h("button", { class: "my-button", onClick }, ...children);
}
