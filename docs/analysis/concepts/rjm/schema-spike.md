---
package: rjm
name: Schema spike
slug: schema-spike
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Schema spike

## Definition — verbatim
> "Should there be a canonical schema for context artifacts, or a family of per-type schemas, or none at all? (Schema-first risks killing the corpus this principle is trying to protect.)" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 69 | defined here | Identified as an open downstream question exploring whether to establish canonical or per-type schemas for context artifacts. |

## Consumes
The context corpus principle from ADR-069 and catalogued context artifacts across the repository.

## Produces
Architectural recommendation on canonical versus per-type schema governance without prematurely restricting contributor velocity.

## When applied
During downstream corpus modeling and governance planning following ADR-069 adoption.

## Sub-concepts
none

## Part of
context-corpus

## Implementation status
not-implemented (ADR-069 open question deferred to downstream issue)

## Design notes
An architectural spike investigating whether repository context artifacts require schema formalization or if rigid schemas would prematurely stifle contributor velocity and corpus growth.
