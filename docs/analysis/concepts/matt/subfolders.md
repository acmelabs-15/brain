---
package: matt
name: SUBFOLDERS
slug: subfolders
kind: pattern
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

# SUBFOLDERS

## Definition — verbatim
> "Implementation lives in SUBFOLDERS and is" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 6 | defined here | Establishes that all directories nested inside a package are private implementation areas unreachable from outside. |

## Consumes
Internal implementation files, helper libraries, and test directories (`lib/`, `tests/`).

## Produces
Enforced encapsulation boundary isolating package internals from external dependencies.

## When applied
Applied to all imports targeting paths nested beneath a package root.

## Sub-concepts
package-internals

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
Directory-level encapsulation rule where any file situated inside a subfolder of a package is automatically treated as private implementation details. External consumers and tests are blocked from importing subfolder contents directly.
