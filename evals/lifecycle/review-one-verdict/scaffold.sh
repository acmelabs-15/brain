#!/usr/bin/env bash
set -euo pipefail
git init -q .
git config user.email eval@example.com
git config user.name eval
mkdir -p src
printf 'export function add(a: number, b: number): number {\n  return a + b;\n}\n' > src/math.ts
printf '{ "name": "mathlib", "type": "module" }\n' > package.json
git add -A && git commit -qm "add"
printf 'export function add(a: number, b: number): number {\n  return a + b;\n}\n\nexport function div(a: number, b: number): number {\n  return a / b;\n}\n' > src/math.ts
git add -A && git commit -qm "div without a zero check"
