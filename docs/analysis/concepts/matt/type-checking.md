---
package: matt
name: type checking
slug: type-checking
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# type checking

## Definition — verbatim
(used, not defined)

> "Set up Husky pre-commit hooks with lint-staged, Prettier, type checking, and tests." — skills/misc/README.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 8 | used here | Specified as a mandatory pre-commit verification gate for TypeScript projects. |

## Consumes
TypeScript source code, compiler configuration (`tsconfig.json`), and type definitions.

## Produces
Diagnostic error report or clean exit allowing commit to proceed.

## When applied
Invoked in `.husky/pre-commit` via `npm run typecheck` before commit completion.

## Sub-concepts
none

## Part of
setup-pre-commit, husky-pre-commit-hooks

## Implementation status
clean

## Design notes
A static verification gate that verifies TypeScript type safety across the repository. Executed at commit time to prevent type errors from polluting shared branches.
