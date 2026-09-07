---
package: rjm
name: Single source of truth principle
slug: single-source-of-truth-principle
kind: pattern
package_phase: cross-phase
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

# Single source of truth principle

## Definition — verbatim
(used, not defined)

> "Single source of truth principle violated" — .agents/architecture/ADR-050-adr-protocol-sync.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-050-adr-protocol-sync.md | 63 | used here | Cited in ADR-050 alternatives analysis as violated by ADR-embedded enforcement. |

## Consumes
none

## Produces
none

## When applied
When designing repository governance and protocol architectures, enforcing that operational rules are centralized in a single governing document rather than fragmented across decisions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The single source of truth principle requires that operational agent guidance and session protocols be maintained in one centralized, authoritative document (`SESSION-PROTOCOL.md`) rather than distributed across dozens of architectural decision records. In rjm's governance design, embedding enforcement rules across 47+ ADR files would fragment instructions and make it difficult for autonomous agents to reliably discover and follow system policies.
