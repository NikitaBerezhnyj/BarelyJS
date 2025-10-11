#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const [, , appName] = process.argv;

if (!appName) {
  console.error("Usage: create-barely-app <app-name>");
  process.exit(1);
}

const templateDir = path.join(path.dirname(new URL(import.meta.url).pathname), "template");
const targetDir = path.join(process.cwd(), appName);

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

if (fs.existsSync(targetDir)) {
  console.error(`Directory "${appName}" already exists`);
  process.exit(1);
}

copyDir(templateDir, targetDir);
console.log(`Created new BarelyJS app in "${appName}"`);

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
} else {
  console.warn("No package.json found in template folder.");
}

console.log("Installing dependencies...");
// eslint-disable-next-line sonarjs/no-os-command-from-path
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log("Done!");
console.log("Run the following commands:");
console.log(`  cd ${appName}`);
console.log("  npx serve public");
