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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/SKILL.md

## Purpose — required, verbatim
> "Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked." — skills/in-progress/setup-ts-deep-modules/SKILL.md:3

## Design intent — required
Installs and configures dependency-cruiser to enforce deep module boundaries across a TypeScript codebase. Solves the architectural decay problem where external code or tests bypass public interfaces by reaching directly into internal subfolders. Provides a complete workflow: environment detection, configuration copying, adding `lint:boundaries` to repository checks, scaffolding an example deep module package, proving that the boundary rules actively catch deep imports through an adversarial verification loop, documenting package layout conventions in a packages README, and adding navigation pointers from CLAUDE.md/AGENTS.md.

## Phase — required
none

## Inputs — required
- Package manager lockfiles (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`, or npm default) (skills/in-progress/setup-ts-deep-modules/SKILL.md:41).
- Repository packages directory structure (`src/packages` or `packages`) (skills/in-progress/setup-ts-deep-modules/SKILL.md:42).
- Existing `.dependency-cruiser.*` configuration files (skills/in-progress/setup-ts-deep-modules/SKILL.md:43).

## Outputs — required
- Root configuration file `.dependency-cruiser.cjs` (skills/in-progress/setup-ts-deep-modules/SKILL.md:55).
- Boundary lint script `lint:boundaries` in package scripts and CI checks (skills/in-progress/setup-ts-deep-modules/SKILL.md:61).
- Starter package directory `<packages-root>/example/` containing `index.ts`, `lib/impl.ts`, and `tests/example.test.ts` (skills/in-progress/setup-ts-deep-modules/SKILL.md:69-74).
- Documentation file `<packages-root>/README.md` explaining layout and discouraging barrel files (skills/in-progress/setup-ts-deep-modules/SKILL.md:91).
- Context pointer in `CLAUDE.md` or `AGENTS.md` (skills/in-progress/setup-ts-deep-modules/SKILL.md:93).

## Invokes — required
- skill codebase-design — skills/in-progress/setup-ts-deep-modules/SKILL.md:11
- config dependency-cruiser.config.cjs — skills/in-progress/setup-ts-deep-modules/SKILL.md:55

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:16
- doc docs/engineering/codebase-design.md — docs/engineering/codebase-design.md:52

## Concepts named — required, verbatim
- `setup-ts-deep-modules` — skills/in-progress/setup-ts-deep-modules/SKILL.md:2 — defined here
- `deep module` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — defined here
- `entry points` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — defined here
- `dependency-cruiser` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9 — used here
- `codebase-design` — skills/in-progress/setup-ts-deep-modules/SKILL.md:11 — used here
- `root files` — skills/in-progress/setup-ts-deep-modules/SKILL.md:24 — defined here
- `Entry-point boundary` — skills/in-progress/setup-ts-deep-modules/SKILL.md:28 — defined here
- `Intra-package freedom` — skills/in-progress/setup-ts-deep-modules/SKILL.md:29 — defined here
- `Tests through the entry points` — skills/in-progress/setup-ts-deep-modules/SKILL.md:30 — defined here
- `No cycles` — skills/in-progress/setup-ts-deep-modules/SKILL.md:31 — defined here
- `Barrel files` — skills/in-progress/setup-ts-deep-modules/SKILL.md:33 — defined here
- `lint:boundaries` — skills/in-progress/setup-ts-deep-modules/SKILL.md:61 — defined here
- `tests-through-entrypoints` — skills/in-progress/setup-ts-deep-modules/SKILL.md:84 — used here
- `context pointer` — skills/in-progress/setup-ts-deep-modules/SKILL.md:93 — defined here
- `CLAUDE.md` — skills/in-progress/setup-ts-deep-modules/SKILL.md:93 — used here
- `AGENTS.md` — skills/in-progress/setup-ts-deep-modules/SKILL.md:93 — used here

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
- `doc-drift` · skills/in-progress/setup-ts-deep-modules/SKILL.md:26 · Documents "Four rules, all `error`" but `dependency-cruiser.config.cjs:28-74` provides five forbidden rules (`entrypoint-boundary-from-app`, `entrypoint-boundary-across-packages`, `tests-through-entrypoints`, `tests-folder-is-private`, and `no-circular`).
- `doc-drift` · docs/engineering/codebase-design.md:52 · `docs/engineering/codebase-design.md:52` asserts that `setup-ts-deep-modules` "has no lint rule shipped with it", yet the skill ships with `dependency-cruiser.config.cjs` which enforces explicit module boundary rules.

## Observations
Step 6 ("Prove the rules bite") establishes an essential verification discipline: introducing a deliberate violation to verify that the check fails with the exact expected error rule before declaring installation complete.

## Context cost
7546 bytes, 103 lines, ~1500 tokens. Loads `dependency-cruiser.config.cjs` (3712 bytes) and `codebase-design` (skills/engineering/codebase-design/SKILL.md: 3676 bytes).
