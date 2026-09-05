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
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/setup-pre-commit/SKILL.md

## Purpose — required, verbatim
> "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo." — skills/misc/setup-pre-commit/SKILL.md:3

## Design intent — required
Developer workflow setup skill that installs and configures repository git hooks for automated code quality enforcement. Detects the project's package manager (`npm`, `pnpm`, `yarn`, `bun`), installs `husky`, `lint-staged`, and `prettier` as devDependencies, initializes Husky v9, configures `.husky/pre-commit` to run formatting, type checking, and tests, creates default `.lintstagedrc` and `.prettierrc` configuration files, verifies the setup, and commits the changes.

## Phase — required
none

## Inputs — required
Package manager lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`) and `package.json` script definitions (`typecheck`, `test`).

## Outputs — required
Executable `.husky/pre-commit` hook file, `.lintstagedrc` configuration, optional `.prettierrc` configuration, modified `package.json` (devDependencies and `prepare: "husky"` script), and git commit `Add pre-commit hooks (husky + lint-staged + prettier)`.

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/misc/README.md:8

## Concepts named — required, verbatim
- `setup-pre-commit` — skills/misc/setup-pre-commit/SKILL.md:2 — defined here
- `Husky` — skills/misc/setup-pre-commit/SKILL.md:10 — used here
- `lint-staged` — skills/misc/setup-pre-commit/SKILL.md:11 — used here
- `Prettier` — skills/misc/setup-pre-commit/SKILL.md:12 — used here
- `typecheck` — skills/misc/setup-pre-commit/SKILL.md:13 — used here
- `test` — skills/misc/setup-pre-commit/SKILL.md:13 — used here
- `package manager` — skills/misc/setup-pre-commit/SKILL.md:17 — used here
- `pre-commit` — skills/misc/setup-pre-commit/SKILL.md:37 — defined here
- `.lintstagedrc` — skills/misc/setup-pre-commit/SKILL.md:49 — defined here
- `.prettierrc` — skills/misc/setup-pre-commit/SKILL.md:57 — defined here

## Structure
- Setup Pre-Commit Hooks — skills/misc/setup-pre-commit/SKILL.md:6
- What This Sets Up — skills/misc/setup-pre-commit/SKILL.md:8
- Steps — skills/misc/setup-pre-commit/SKILL.md:15
- 1. Detect package manager — skills/misc/setup-pre-commit/SKILL.md:17
- 2. Install dependencies — skills/misc/setup-pre-commit/SKILL.md:21
- 3. Initialize Husky — skills/misc/setup-pre-commit/SKILL.md:29
- 4. Create `.husky/pre-commit` — skills/misc/setup-pre-commit/SKILL.md:37
- 5. Create `.lintstagedrc` — skills/misc/setup-pre-commit/SKILL.md:49
- 6. Create `.prettierrc` (if missing) — skills/misc/setup-pre-commit/SKILL.md:57
- 7. Verify — skills/misc/setup-pre-commit/SKILL.md:73
- 8. Commit — skills/misc/setup-pre-commit/SKILL.md:81
- Notes — skills/misc/setup-pre-commit/SKILL.md:87

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Notes that modern Husky (v9+) does not require shebang lines in hook scripts. Uses `prettier --ignore-unknown` to safely skip non-text assets.

## Context cost
2258 bytes, 92 lines, approximately 500 tokens.
