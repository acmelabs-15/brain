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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs

## Purpose — required, verbatim
> "Deep-module enforcement for dependency-cruiser." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:2

## Design intent — required
Configuration template for `dependency-cruiser` implementing architectural enforcement of deep module design in TypeScript repositories. Enforces strict boundary encapsulation by disallowing external or cross-package imports into package subfolders (internals), mandating that all consumption occurs solely through root entry-point files. Configures five rules with `error` severity: `entrypoint-boundary-from-app`, `entrypoint-boundary-across-packages`, `tests-through-entrypoints`, `tests-folder-is-private`, and `no-circular`, alongside commented stubs for package layering.

## Phase — required
none

## Inputs — required
Consumed as a template by `setup-ts-deep-modules/SKILL.md` (copied to `.dependency-cruiser.cjs` at repository root). Configured via `PACKAGES_ROOT = "src/packages"` (`skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:15`).

## Outputs — required
Exports a CommonJS configuration object (`module.exports`) containing `forbidden` rules array and resolver `options` (`skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:27-95`).

## Invokes — required
none

## Invoked by — required
- skill setup-ts-deep-modules — skills/in-progress/setup-ts-deep-modules/SKILL.md:2

## Concepts named — required, verbatim
- `DEEP MODULE` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:4 — defined here
- `interface` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5 — used here
- `PUBLIC SURFACE` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5 — defined here
- `ENTRY POINTS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5 — defined here
- `SUBFOLDERS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:6 — defined here
- `barrel index` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:10 — defined here
- `PACKAGES_ROOT` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:15 — defined here
- `PACKAGE_INTERNALS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:24 — defined here
- `entrypoint-boundary-from-app` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:30 — defined here
- `entrypoint-boundary-across-packages` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:38 — defined here
- `tests-through-entrypoints` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:50 — defined here
- `tests-folder-is-private` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:61 — defined here
- `no-circular` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:69 — defined here
- `Layering` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:76 — defined here
- `Interface-hiding` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:77 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- **path**: `skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`, CommonJS JavaScript, 96 lines
- **documented invocation**: `> "depcruise <packages-root>" — skills/in-progress/setup-ts-deep-modules/SKILL.md:61`
- **executed**: yes
- **actual command run**: `node sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs` (also verified via `node -e "const cfg = require('./sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs'); console.log(Object.keys(cfg));"` producing `[ 'forbidden', 'options' ]`)
- **actual exit code**: 0
- **documented exit codes vs actual exit paths**: No explicit exit codes documented in configuration file; standard Node.js module evaluation returns exit code 0 when required or executed without top-level errors.
- **for validators/gates**: Defines rules evaluated by the external `depcruise` CLI; enforces 5 rules with `severity: "error"` (`skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:33, 41, 53, 64, 71`), which causes `depcruise` to exit non-zero upon rule violations.
- **output matches claim**: Yes, valid CommonJS module exporting `forbidden` rules array and resolver `options`.

## Defects — required
none

## Observations
Uses regular expression capturing group `$1` (`pathNot: \`^${R}/$1/\`` on line 47) for intra-package freedom, allowing files within the same package to import each other without violating the cross-package boundary rule.

## Context cost
3712 bytes, 96 lines, approximately 750 tokens.
