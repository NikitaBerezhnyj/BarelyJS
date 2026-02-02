import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
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
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json"
      })
    ]
  }
];
