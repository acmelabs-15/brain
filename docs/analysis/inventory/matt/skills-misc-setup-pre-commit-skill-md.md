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
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/setup-pre-commit/SKILL.md

## Purpose — required, verbatim
> "description: Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing." — skills/misc/setup-pre-commit/SKILL.md:3

## Design intent — required
Automates repository setup of git pre-commit quality gates. Configures Husky (v9+) to trigger `lint-staged` for Prettier code formatting on staged files, followed by full project type-checking (`typecheck`) and automated tests (`test`). Dynamically detects the active package manager (npm, pnpm, yarn, bun) and generates `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc` (if absent), and updates `package.json`.

## Phase — required
cross-phase

## Inputs — required
Detection of repository lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`), existing `package.json` scripts (`typecheck`, `test`), existing Prettier configuration.

## Outputs — required
Generated `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc`; `package.json` updated with devDependencies (`husky`, `lint-staged`, `prettier`) and `prepare` script; git commit `Add pre-commit hooks (husky + lint-staged + prettier)`.

## Invokes — required
none

## Invoked by — required
- doc skills/misc/README.md — skills/misc/README.md:8

## Concepts named — required, verbatim
- `Husky` — skills/misc/setup-pre-commit/SKILL.md:10 — used here
- `lint-staged` — skills/misc/setup-pre-commit/SKILL.md:11 — used here
- `Prettier` — skills/misc/setup-pre-commit/SKILL.md:12 — used here
- `typecheck` — skills/misc/setup-pre-commit/SKILL.md:13 — used here
- `test` — skills/misc/setup-pre-commit/SKILL.md:13 — used here

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
Modern setup targeting Husky v9+ (not requiring shebangs in hook files). Runs fast staged formatting first before executing slower whole-repo `typecheck` and `test` scripts.

## Context cost
2258 bytes (~560 tokens).
