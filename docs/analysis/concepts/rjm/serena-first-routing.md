---
package: rjm
name: Serena-First Routing
slug: serena-first-routing
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena-First Routing

## Definition — verbatim
(used, not defined)

> "2. **Serena-First Routing**: Serena as canonical layer (per ADR-007), Forgetful as augmentation" — .agents/architecture/ADR-037-memory-router-architecture.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-037-memory-router-architecture.md | 51 | defined here | Defined as an architectural requirement specifying Serena as canonical memory with Forgetful as augmentation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
Serena-First Routing is an architectural routing policy heading in ADR-037 prioritizing repository-synced markdown files over local vector caches rather than an operational lifecycle concept.
