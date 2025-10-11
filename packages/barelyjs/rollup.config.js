import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/barelyjs.esm.js",
        format: "esm"
      },
      {
        file: "dist/barelyjs.cjs.js",
        format: "cjs"
      },
      {
        file: "dist/barelyjs.iife.js",
        format: "iife",
        name: "BarelyJS",
        plugins: [terser()]
      }
    ]
  }
];
