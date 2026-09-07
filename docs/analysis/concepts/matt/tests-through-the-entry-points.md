---
package: matt
name: Tests through the entry points
slug: tests-through-the-entry-points
kind: gate
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tests through the entry points

## Definition — verbatim
> "3. **Tests through the entry points**: files under `<pkg>/tests/` may import any package's entry points and their own `tests/` fixtures, but never any package's subfolder internals (not even their own)." — skills/in-progress/setup-ts-deep-modules/SKILL.md:30

## Also called — verbatim
`tests-through-entrypoints` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 30 | defined here | Third rule of deep module enforcement forbidding test files from importing internal implementation subfolders. |

## Consumes
Package test suites located under `tests/`.

## Produces
Test boundary enforcement ensuring tests only interact with public interfaces and their own fixtures.

## When applied
> "files under `<pkg>/tests/` may import any package's entry points and their own `tests/` fixtures, but never any package's subfolder internals (not even their own)." — skills/in-progress/setup-ts-deep-modules/SKILL.md:30

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
Enforces that tests must interact with packages exclusively via their public entry points. By forbidding tests from importing subfolder internals, this rule ensures tests validate observable behavior through public contracts, enabling safe internal refactoring without breaking tests.
