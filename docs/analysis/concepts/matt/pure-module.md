---
package: matt
name: pure module
slug: pure-module
kind: pattern
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pure module

## Definition — verbatim
> "The logic behind the page is a small pure module (a reducer, a machine, a set of functions) kept clean of the DOM so the validated version lifts straight into the real code." — external/prototype.md:34

## Also called — verbatim
`portable module` — skills/engineering/prototype/LOGIC.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 34 | used here | Describes the underlying state machine or logic engine in an HTML demo isolated from DOM manipulation. |

## Consumes
Domain terminology, data types, and deterministic business rules.

## Produces
A portable, testable logic implementation cleanly separable from interactive UI presentation.

## When applied
When implementing the state machine or business logic underpinning an exploratory HTML prototype.

## Sub-concepts
none

## Part of
the-prototype-skill, two-branches

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44)

## Design notes
Architectural isolation pattern where prototype business logic is written as pure, framework-independent functions or state machines. Keeping the logic free from DOM coupling ensures the validated implementation can be lifted straight into production without rewriting.
