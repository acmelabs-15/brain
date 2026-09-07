---
package: matt
name: Expand
slug: expand
kind: phase
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Expand

## Definition — verbatim
> "add the new form beside the old, so nothing breaks." — docs/engineering/to-tickets.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 50 | defined here | Defines the Expand stage in expand-contract wide refactorings as adding the new form beside the old. |
| external/to-tickets.md | 45 | defined here | External catalog definition of the Expand phase in wide refactor sequencing. |

## Consumes
An interface, schema, or function signature targeted for wide refactoring across a codebase.

## Produces
The new interface, method, or column introduced alongside the existing deprecated implementation.

## When applied
The initial ticket scheduled in an expand-contract sequence for wide refactors.

## Sub-concepts
none

## Part of
expand-contract, to-tickets

## Implementation status
clean

## Design notes
`Expand` is the initial phase of the expand-contract pattern used in `to-tickets` when managing wide refactors with large blast radiuses. Instead of attempting an atomic change that breaks hundreds of call sites simultaneously, Expand introduces the new abstraction or schema alongside the legacy version, allowing continuous integration builds to remain green while callers transition.
