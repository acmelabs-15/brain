#!/usr/bin/env bun
// Initializes the ideas directory for the idea-refine skill. Prints a JSON status line.
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const IDEAS_DIR = "docs/ideas";
if (existsSync(IDEAS_DIR)) {
  console.error(`Directory already exists: ${IDEAS_DIR}`);
} else {
  await mkdir(IDEAS_DIR, { recursive: true });
  console.error(`Created directory: ${IDEAS_DIR}`);
}
console.log(JSON.stringify({ status: "ready", directory: IDEAS_DIR }));
