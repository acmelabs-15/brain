---
package: matt
path: skills/misc/setup-pre-commit/SKILL.md
type: skill
bytes: 2258
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/misc/setup-pre-commit/SKILL.md

## Purpose — required, verbatim
> "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing." — skills/misc/setup-pre-commit/SKILL.md:3

## Design intent — required
Interactive setup guide for establishing pre-commit code quality gates in a repository. Automatically detects the active package manager (npm, pnpm, yarn, or bun), installs Husky, lint-staged, and Prettier as devDependencies, initializes Husky v9+, configures formatting with `.lintstagedrc` and default `.prettierrc`, hooks up typechecking and test scripts if present, verifies the setup, and performs an initial commit as a smoke test.

## Phase — required
cross-phase

## Inputs — required
Repository configuration files: lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`) to detect package manager, and `package.json` scripts (`typecheck`, `test`).

## Outputs — required
Configuration and hook files created: `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc` (if missing), and updated `package.json` with dependencies and `prepare` script.

## Invokes — required
none

## Invoked by — required
- skill misc — skills/misc/README.md:8

## Concepts named — required, verbatim
- `setup-pre-commit` — skills/misc/setup-pre-commit/SKILL.md:2 — defined here
- `Husky` — skills/misc/setup-pre-commit/SKILL.md:10 — used here
- `pre-commit hook` — skills/misc/setup-pre-commit/SKILL.md:10 — defined here
- `lint-staged` — skills/misc/setup-pre-commit/SKILL.md:11 — used here
- `Prettier` — skills/misc/setup-pre-commit/SKILL.md:12 — used here
- `typecheck` — skills/misc/setup-pre-commit/SKILL.md:13 — used here
- `test` — skills/misc/setup-pre-commit/SKILL.md:13 — used here
- `package-lock.json` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `npm` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `pnpm-lock.yaml` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `pnpm` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `yarn.lock` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `yarn` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `bun.lockb` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `bun` — skills/misc/setup-pre-commit/SKILL.md:19 — used here
- `npx husky init` — skills/misc/setup-pre-commit/SKILL.md:32 — used here
- `.husky/` — skills/misc/setup-pre-commit/SKILL.md:35 — defined here
- `.husky/pre-commit` — skills/misc/setup-pre-commit/SKILL.md:37 — defined here
- `.lintstagedrc` — skills/misc/setup-pre-commit/SKILL.md:49 — defined here
- `.prettierrc` — skills/misc/setup-pre-commit/SKILL.md:57 — defined here
- `smoke test` — skills/misc/setup-pre-commit/SKILL.md:85 — defined here

## Structure
- `# Setup Pre-Commit Hooks` — skills/misc/setup-pre-commit/SKILL.md:6
- `## What This Sets Up` — skills/misc/setup-pre-commit/SKILL.md:8
- `## Steps` — skills/misc/setup-pre-commit/SKILL.md:15
- `### 1. Detect package manager` — skills/misc/setup-pre-commit/SKILL.md:17
- `### 2. Install dependencies` — skills/misc/setup-pre-commit/SKILL.md:21
- `### 3. Initialize Husky` — skills/misc/setup-pre-commit/SKILL.md:29
- "### 4. Create `.husky/pre-commit`" — skills/misc/setup-pre-commit/SKILL.md:37
- "### 5. Create `.lintstagedrc`" — skills/misc/setup-pre-commit/SKILL.md:49
- "### 6. Create `.prettierrc` (if missing)" — skills/misc/setup-pre-commit/SKILL.md:57
- `### 7. Verify` — skills/misc/setup-pre-commit/SKILL.md:73
- `### 8. Commit` — skills/misc/setup-pre-commit/SKILL.md:81
- `## Notes` — skills/misc/setup-pre-commit/SKILL.md:87

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights that Husky v9+ does not require `#!/bin/sh` shebang lines in hook files, and notes that `--ignore-unknown` is passed to Prettier so non-text assets staged for commit are skipped without error.

## Context cost
2258 bytes, 92 lines, approximately 500 tokens.
