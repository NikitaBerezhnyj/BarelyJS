#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import readline from "readline";
import { fileURLToPath } from "url";
import prompts from "prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const appName = args.find(arg => !arg.startsWith("--"));
const hasJsxFlag = args.includes("--jsx");
const hasJsFlag = args.includes("--js");

if (!appName) {
  console.error("Usage: create-barelyjs-app <app-name> [--js | --jsx]");
  process.exit(1);
}

if (hasJsxFlag && hasJsFlag) {
  console.error("Use only one flag: --js OR --jsx");
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
      { title: "JSX (Vite)", value: "jsx" }
    ],
    initial: 0
  });

  return response.template;
}

let templateType;

if (hasJsxFlag) {
  templateType = "jsx";
} else if (hasJsFlag) {
  templateType = "js";
} else {
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

console.log("Done!");
console.log("Run the following commands:");
console.log(`  cd ${appName}`);
console.log(templateType === "jsx" ? "  npm run dev" : "  npx serve");
