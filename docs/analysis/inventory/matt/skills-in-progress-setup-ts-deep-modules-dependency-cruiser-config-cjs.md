---
package: matt
path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs
type: skill
bytes: 3712
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs, sha256: 3c4973bec69f73b2117654abf9e666a7c28665b213be20e6d39869e29842428e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs

## Purpose — required, verbatim
> "Deep-module enforcement for dependency-cruiser." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:2

## Design intent — required
Implements automated architectural boundary rules for dependency-cruiser in TypeScript monorepos or multi-package trees. Enforces that each package under the packages root behaves as a deep module where root files serve as public entry points and all subfolder files (`lib/`, `tests/`) remain private implementation details. Out-of-package code and peer packages are restricted to importing root entry points, tests are required to exercise packages through entry points rather than internal subfolders, test fixture folders are protected from non-test imports, and circular dependencies are forbidden.

## Phase — required
none

## Inputs — required
`PACKAGES_ROOT` directory path variable (skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:15).

## Outputs — required
Exported configuration object conforming to dependency-cruiser `IConfiguration` schema (skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:26-27).

## Invokes — required
none

## Invoked by — required
- config dependency-cruiser.config.cjs — skills/in-progress/setup-ts-deep-modules/SKILL.md:55

## Concepts named — required, verbatim
- `DEEP MODULE` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:4 — defined here
- `PUBLIC SURFACE` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5 — defined here
- `ENTRY POINTS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5 — defined here
- `SUBFOLDERS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:6 — defined here
- `PACKAGES_ROOT` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:15 — defined here
- `PACKAGE_INTERNALS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:24 — defined here
- `entrypoint-boundary-from-app` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:30 — defined here
- `entrypoint-boundary-across-packages` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:38 — defined here
- `tests-through-entrypoints` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:50 — defined here
- `tests-folder-is-private` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:61 — defined here
- `no-circular` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:69 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`, CommonJS JavaScript, 96 lines
- documented invocation: `Copy [`dependency-cruiser.config.cjs`](./dependency-cruiser.config.cjs) to the repo root as `.dependency-cruiser.cjs`.` — skills/in-progress/setup-ts-deep-modules/SKILL.md:55
- executed: yes
- actual command run: `node -e 'const cfg = require("./sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs"); console.log("rules:", cfg.forbidden.map(r => r.name));'`
- stdout: `rules: [ 'entrypoint-boundary-from-app', 'entrypoint-boundary-across-packages', 'tests-through-entrypoints', 'tests-folder-is-private', 'no-circular' ]`
- actual exit code: 0
- documented exit codes: none (evaluates as configuration module loaded by `depcruise`)
- for validators/gates: Configuration module for `depcruise`. Directly evaluating the configuration module in Node exits 0.
- does the output match what the documentation claims: yes, exports the expected 5 forbidden boundary rules and options.

## Defects — required
- `doc-drift` · skills/in-progress/setup-ts-deep-modules/SKILL.md:26 · `SKILL.md:26` states there are "Four rules, all `error`" but `dependency-cruiser.config.cjs:28-74` defines five forbidden rules: `entrypoint-boundary-from-app`, `entrypoint-boundary-across-packages`, `tests-through-entrypoints`, `tests-folder-is-private`, and `no-circular`.

## Observations
Employs regex backreferences (`$1`) in `entrypoint-boundary-across-packages` and `tests-through-entrypoints` to allow intra-package imports while barring cross-package deep access.

## Context cost
3712 bytes, 96 lines, ~800 tokens. Loads no external files.
