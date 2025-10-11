import globals from "globals";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  {
    ignores: ["packages/**/dist/**", "node_modules/**", "packages/**/node_modules/**"],
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: globals.node
    },
    plugins: {
      sonarjs
    },
    rules: {
      ...sonarjs.configs.recommended.rules,

      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
      "no-console": "off",

      "sonarjs/no-commented-code": "off",
      "sonarjs/pseudo-random": "off",
      "sonarjs/cognitive-complexity": ["warn", 15]
    }
  }
];
