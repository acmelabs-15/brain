---
package: matt
name: barrel index
slug: barrel-index
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

# barrel index

## Definition — verbatim
(used, not defined)

> "barrel index." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:10

## Also called — verbatim
`barrel` — skills/in-progress/setup-ts-deep-modules/SKILL.md:33

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 10 | defined here | Anti-pattern discouraged in favor of exposing multiple discrete entry points at the package root. |

## Consumes
Package submodules and export statements.

## Produces
Monolithic re-export file consolidating an entire package's surface area.

## When applied
Discouraged during package architecture design and module structuring.

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
An architectural anti-pattern where a single monolithic index file re-exports all internals of a package. Matt's deep module approach explicitly discourages barrel indexes in favor of exposing multiple smaller, specialized entry points at the package root while keeping subfolder implementation strictly private.
