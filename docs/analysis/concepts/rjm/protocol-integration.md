---
package: rjm
name: Protocol Integration
slug: protocol-integration
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-050-adr-protocol-sync.md, sha256: b19f1dcefa7f4fc2b5d2ca4e8f5e0c0c8407ae4c803857418a2621ce744bc9ab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Protocol Integration

## Definition — verbatim
> "The ADR template gains an optional \"Protocol Integration\" section for ADRs that introduce enforceable requirements." — .agents/architecture/ADR-050-adr-protocol-sync.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-050-adr-protocol-sync.md | 53 | defined here | Defined as an optional ADR template section explicitly mapping ADR requirements to session protocols. |

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
defects: missing-path

## Design notes
Protocol Integration designates an optional section within the ADR template that explicitly lists which session protocol documents require updates to enforce the ADR's requirements.
