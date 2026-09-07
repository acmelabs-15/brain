---
package: matt
name: no-circular
slug: no-circular
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

# no-circular

## Definition — verbatim
> "no-circular" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:69

## Also called — verbatim
`No cycles` — skills/in-progress/setup-ts-deep-modules/SKILL.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 69 | defined here | Configures dependency-cruiser rule to forbid circular dependency cycles across the codebase. |

## Consumes
Module dependency graph across the repository.

## Produces
Linter failure on detection of any circular dependency loops.

## When applied
> "No dependency cycles. Scope to `^${R}/` if you want to allow cycles outside packages." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:70

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
An automated gate forbidding cyclic dependencies between modules, ensuring acyclic architecture and preventing runtime initialization bugs and bundling issues.
