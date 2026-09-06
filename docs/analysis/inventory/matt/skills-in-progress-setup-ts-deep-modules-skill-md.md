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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/SKILL.md

## Purpose — required, verbatim
> "Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked." — skills/in-progress/setup-ts-deep-modules/SKILL.md:3

## Design intent — required
Automates configuring and mechanically enforcing "deep module" boundaries in TypeScript codebases using `dependency-cruiser`. Enforces John Ousterhout's architectural philosophy where packages present large capabilities behind thin, small public surfaces (package root entry points like `index.ts` and `client.ts`), hiding all internal implementation files inside subfolders (`lib/`, `tests/`). Executes a rigorous 7-step sequence requiring an explicit red-green-green verification step to prove the boundaries reject deep imports before considering the setup complete.

## Phase — required
none

## Inputs — required
Existing package manager lockfiles (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`, or `package-lock.json` — `skills/in-progress/setup-ts-deep-modules/SKILL.md:41`), repository packages root directory (`src/packages` or `packages` — `skills/in-progress/setup-ts-deep-modules/SKILL.md:42`), existing `.dependency-cruiser.*` configuration (`skills/in-progress/setup-ts-deep-modules/SKILL.md:43`), and sibling config template `dependency-cruiser.config.cjs` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:55`).

## Outputs — required
`.dependency-cruiser.cjs` at repo root (`skills/in-progress/setup-ts-deep-modules/SKILL.md:55`), `lint:boundaries` script in `package.json` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:61`), starter example package at `<packages-root>/example/` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:69-77`), `<packages-root>/README.md` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:91`), and context pointer in `CLAUDE.md` or `AGENTS.md` (`skills/in-progress/setup-ts-deep-modules/SKILL.md:93`).

## Invokes — required
- skill codebase-design — skills/in-progress/setup-ts-deep-modules/SKILL.md:11
- reference dependency-cruiser.config.cjs — skills/in-progress/setup-ts-deep-modules/SKILL.md:55

## Invoked by — required
- doc docs/engineering/codebase-design.md — docs/engineering/codebase-design.md:52

## Concepts named — required, verbatim
- `setup-ts-deep-modules` — skills/in-progress/setup-ts-deep-modules/SKILL.md:2 — defined here
- `deep module` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — defined here
- `entry points` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — defined here
- `codebase-design` — skills/in-progress/setup-ts-deep-modules/SKILL.md:11 — used here
- `seam` — skills/in-progress/setup-ts-deep-modules/SKILL.md:11 — used here
- `depth` — skills/in-progress/setup-ts-deep-modules/SKILL.md:11 — used here
- `root files` — skills/in-progress/setup-ts-deep-modules/SKILL.md:24 — defined here
- `Entry-point boundary` — skills/in-progress/setup-ts-deep-modules/SKILL.md:28 — defined here
- `Intra-package freedom` — skills/in-progress/setup-ts-deep-modules/SKILL.md:29 — defined here
- `Tests through the entry points` — skills/in-progress/setup-ts-deep-modules/SKILL.md:30 — defined here
- `No cycles` — skills/in-progress/setup-ts-deep-modules/SKILL.md:31 — defined here
- `barrel` — skills/in-progress/setup-ts-deep-modules/SKILL.md:33 — defined here
- `Layering` — skills/in-progress/setup-ts-deep-modules/SKILL.md:35 — defined here
- `lint:boundaries` — skills/in-progress/setup-ts-deep-modules/SKILL.md:61 — defined here
- `tests-through-entrypoints` — skills/in-progress/setup-ts-deep-modules/SKILL.md:84 — used here
- `context pointer` — skills/in-progress/setup-ts-deep-modules/SKILL.md:93 — defined here

## Structure
- The shape this enforces — skills/in-progress/setup-ts-deep-modules/SKILL.md:13
- Steps — skills/in-progress/setup-ts-deep-modules/SKILL.md:37
- 1. Detect the environment — skills/in-progress/setup-ts-deep-modules/SKILL.md:39
- 2. Install dependency-cruiser — skills/in-progress/setup-ts-deep-modules/SKILL.md:47
- 3. Write the config — skills/in-progress/setup-ts-deep-modules/SKILL.md:53
- 4. Wire it into the checks — skills/in-progress/setup-ts-deep-modules/SKILL.md:59
- 5. Scaffold the example package — skills/in-progress/setup-ts-deep-modules/SKILL.md:67
- 6. Prove the rules bite — skills/in-progress/setup-ts-deep-modules/SKILL.md:79
- 7. Document the convention — skills/in-progress/setup-ts-deep-modules/SKILL.md:89
- Notes — skills/in-progress/setup-ts-deep-modules/SKILL.md:97

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · `docs/engineering/codebase-design.md:52` states that `setup-ts-deep-modules` "has no lint rule shipped with it", but this skill ships a complete `dependency-cruiser.config.cjs` template containing four forbidden boundary rules.

## Observations
Step 6 ("Prove the rules bite", lines 79-88) defines a strict behavioral test gate: the agent must verify a pass on clean code, induce a failure via a deep import into `tests/example.test.ts`, confirm the failure with `tests-through-entrypoints`, and restore the clean state.

## Context cost
7546 bytes, 103 lines, approximately 1650 tokens. Discloses `codebase-design` (~2800 tokens) and `dependency-cruiser.config.cjs` (3712 bytes, ~750 tokens), for total context cost of ~5200 tokens if fully loaded.
