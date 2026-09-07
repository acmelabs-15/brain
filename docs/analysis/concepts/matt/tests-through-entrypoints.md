---
package: matt
name: tests-through-entrypoints
slug: tests-through-entrypoints
kind: gate
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
  - {path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs, sha256: 3c4973bec69f73b2117654abf9e666a7c28665b213be20e6d39869e29842428e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tests-through-entrypoints

## Definition — verbatim
> "tests-through-entrypoints" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:50

## Also called — verbatim
`Tests through the entry points` — skills/in-progress/setup-ts-deep-modules/SKILL.md:30

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 50 | defined here | Configures the dependency-cruiser rule requiring tests to exercise packages via public entry points. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 84 | used here | Verified as the failing rule during the setup skill's red-green verification step. |

## Consumes
Import statements in test files (`tests/*.test.ts`).

## Produces
Linter failure whenever a test attempts a deep import into implementation subfolders.

## When applied
> "A package's tests exercise it through its entry points like everyone else: they may import any package's entry points and their own tests/ fixtures, but never any package's internals, not even their own." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:52

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
A testing constraint and boundary rule requiring unit and integration tests to consume packages through their public entry points, preventing tests from becoming tightly coupled to private internal structures.
