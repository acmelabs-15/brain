---
package: matt
path: skills/in-progress/setup-ts-deep-modules/SKILL.md
type: skill
bytes: 7546
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/SKILL.md

## Purpose — required, verbatim
> "Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked." — skills/in-progress/setup-ts-deep-modules/SKILL.md:3

## Design intent — required
Automates the setup and verification of structural package boundaries in TypeScript repositories using `dependency-cruiser`. Guides the agent through detecting the package manager and repository layout, installing `dependency-cruiser`, copying `.dependency-cruiser.cjs`, wiring `lint:boundaries` into CI/umbrella check commands, scaffolding a canonical template package (`<packages-root>/example/`), and critically proving the rules bite by generating and observing an intentional violation failure before reverting. Establishes documentation in the package directory discouraging barrel files in favor of multiple discrete entry points.

## Phase — required
none

## Inputs — required
- Existing project files (`package.json`, lockfiles `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`, existing `.dependency-cruiser.*`, `tsconfig.json`) (`skills/in-progress/setup-ts-deep-modules/SKILL.md:41-43`)
- Bundled template `dependency-cruiser.config.cjs` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:55`)

## Outputs — required
- Configuration file `.dependency-cruiser.cjs` at repository root (`skills/in-progress/setup-ts-deep-modules/SKILL.md:55`)
- `package.json` script `lint:boundaries` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:61`)
- Scaffolded template package `<packages-root>/example/` (`index.ts`, `lib/impl.ts`, `tests/example.test.ts`) (`skills/in-progress/setup-ts-deep-modules/SKILL.md:69-73`)
- Documentation file `<packages-root>/README.md` and pointer in `CLAUDE.md`/`AGENTS.md` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:91-93`)

## Invokes — required
- skill codebase-design — skills/in-progress/setup-ts-deep-modules/SKILL.md:11
- file dependency-cruiser.config.cjs — skills/in-progress/setup-ts-deep-modules/SKILL.md:55

## Invoked by — required
- doc README.md — skills/in-progress/README.md:16

## Concepts named — required, verbatim
- `setup-ts-deep-modules` — skills/in-progress/setup-ts-deep-modules/SKILL.md:2 — defined here
- `deep module` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — defined here
- `entry points` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — defined here
- `dependency-cruiser` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — used here
- `codebase-design` — skills/in-progress/setup-ts-deep-modules/SKILL.md:11 — used here
- `barrel files` — skills/in-progress/setup-ts-deep-modules/SKILL.md:33 — defined here
- `lint:boundaries` — skills/in-progress/setup-ts-deep-modules/SKILL.md:61 — defined here
- `tests-through-entrypoints` — skills/in-progress/setup-ts-deep-modules/SKILL.md:84 — used here
- `context pointer` — skills/in-progress/setup-ts-deep-modules/SKILL.md:93 — defined here

## Structure
- `name: setup-ts-deep-modules` — skills/in-progress/setup-ts-deep-modules/SKILL.md:2
- `# Setup TS Deep Modules` — skills/in-progress/setup-ts-deep-modules/SKILL.md:7
- `## The shape this enforces` — skills/in-progress/setup-ts-deep-modules/SKILL.md:13
- `## Steps` — skills/in-progress/setup-ts-deep-modules/SKILL.md:37
- `### 1. Detect the environment` — skills/in-progress/setup-ts-deep-modules/SKILL.md:39
- `### 2. Install dependency-cruiser` — skills/in-progress/setup-ts-deep-modules/SKILL.md:47
- `### 3. Write the config` — skills/in-progress/setup-ts-deep-modules/SKILL.md:53
- `### 4. Wire it into the checks` — skills/in-progress/setup-ts-deep-modules/SKILL.md:59
- `### 5. Scaffold the example package` — skills/in-progress/setup-ts-deep-modules/SKILL.md:67
- `### 6. Prove the rules bite` — skills/in-progress/setup-ts-deep-modules/SKILL.md:79
- `### 7. Document the convention` — skills/in-progress/setup-ts-deep-modules/SKILL.md:89
- `## Notes` — skills/in-progress/setup-ts-deep-modules/SKILL.md:97

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Step 6 ("Prove the rules bite") enforces an explicit negative testing requirement: an architectural boundary is only verified if it actively fails when a boundary rule is violated (adding a deep import to `tests/example.test.ts`), preventing toothless linter installations.
- Rejects barrel file anti-patterns by permitting multiple discrete entry points per package (`index.ts`, `client.ts`, `server.ts`).

## Context cost
7546 bytes (~1887 tokens) for SKILL.md. Loads `dependency-cruiser.config.cjs` (3712 bytes) and calls `codebase-design` (`skills/engineering/codebase-design/SKILL.md`, 4894 bytes), totaling ~16152 bytes (~4038 tokens).
