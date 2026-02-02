#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import prompts from "prompts";

const FLAG_MAP = {
  "--js": "js",
  "--jsx": "jsx",
  "--ts": "ts",
  "--tsx": "tsx"
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const appName = args.find(arg => !arg.startsWith("--"));
const hasJsFlag = args.includes("--js");
const hasJsxFlag = args.includes("--jsx");
const hasTsFlag = args.includes("--ts");
const hasTsxFlag = args.includes("--tsx");

if (!appName) {
  console.error("Usage: create-barelyjs-app <app-name> [--js | --jsx | --ts | --tsx]");
  process.exit(1);
}

if (hasJsxFlag && hasJsFlag) {
  console.error("Use only one flag: --js, --jsx, --ts, or --tsx");
  process.exit(1);
}

const targetDir = path.join(process.cwd(), appName);

if (fs.existsSync(targetDir)) {
  console.error(`Directory "${appName}" already exists`);
  process.exit(1);
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function askTemplate() {
  const response = await prompts({
    type: "select",
    name: "template",
    message: "Which template do you want to use?",
    choices: [
      { title: "JavaScript", value: "js" },
      { title: "JSX (Vite)", value: "jsx" },
      { title: "TypeScript", value: "ts" },
      { title: "TSX (Vite)", value: "tsx" }
    ],
    initial: 0
  });

  return response.template;
}

let templateType = Object.entries(FLAG_MAP).find(([flag]) => args.includes(flag))?.[1];

if (!templateType) {
  templateType = await askTemplate();
}

const templateDir = path.join(__dirname, "templates", templateType);

if (!fs.existsSync(templateDir)) {
  console.error(`Template "${templateType}" not found`);
  process.exit(1);
}

copyDir(templateDir, targetDir);
console.log(`Created new BarelyJS ${templateType.toUpperCase()} app in "${appName}"`);

const packageJsonPath = path.join(targetDir, "package.json");

if (fs.existsSync(packageJsonPath)) {
  try {
    const packageData = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageData.name = appName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));
    console.log(`Updated package name to "${appName}"`);
  } catch (err) {
    console.warn("Could not update package.json:", err.message);
  }
}

console.log("Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

const viteTemplates = ["jsx", "tsx"];

console.log("Done!");
console.log("Run the following commands:");
console.log(`  cd ${appName}`);
console.log(viteTemplates.includes(templateType) ? "  npm run dev" : "  npx serve");
