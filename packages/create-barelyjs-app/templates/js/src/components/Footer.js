const { h } = BarelyJS;

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
