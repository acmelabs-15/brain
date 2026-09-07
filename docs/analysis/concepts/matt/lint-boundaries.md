---
package: matt
name: lint:boundaries
slug: lint-boundaries
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

# lint:boundaries

## Definition — verbatim
(used, not defined)

> "Add a `lint:boundaries` script: `depcruise <packages-root>` (or `depcruise src`)." — skills/in-progress/setup-ts-deep-modules/SKILL.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 61 | defined here | Script wired into package.json to execute dependency-cruiser validation across the codebase. |

## Consumes
`dependency-cruiser` CLI and `.dependency-cruiser.cjs` configuration.

## Produces
Exit code 0 on clean boundaries or non-zero failure upon deep import violations.

## When applied
> "Fold it into the repo's umbrella check command, the one that already runs typecheck (e.g. a `check` / `ci` / `validate` script)." — skills/in-progress/setup-ts-deep-modules/SKILL.md:62

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
An automated boundary verification script defined in `package.json` that executes `depcruise` to enforce deep module encapsulation rules in CI and local pre-commit checks.
