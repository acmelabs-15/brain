---
package: matt
name: tests-folder-is-private
slug: tests-folder-is-private
kind: gate
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs, sha256: 3c4973bec69f73b2117654abf9e666a7c28665b213be20e6d39869e29842428e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tests-folder-is-private

## Definition — verbatim
> "tests-folder-is-private" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 61 | defined here | Dependency-cruiser rule ensuring test fixtures and helpers cannot be imported by production code. |

## Consumes
Import statements across all repository files targeting test directories.

## Produces
Linter error if production code attempts to import test files or fixtures.

## When applied
> "A package's tests/ folder is reachable only from tests: nothing else may import fixtures." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:63

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
An architectural protection rule that isolates test folders, preventing production implementation files or public entry points from mistakenly importing test helpers, mocks, or fixtures.
