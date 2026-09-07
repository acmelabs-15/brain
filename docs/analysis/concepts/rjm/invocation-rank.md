---
package: rjm
name: invocation rank
slug: invocation-rank
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# invocation rank

## Definition — verbatim
> "**invocation rank**. ADR-009 does rank two agents" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 128 | defined here | Rejected hierarchical concept conferring authority to delegate or override based on rank. |

## Consumes
Agent hierarchy models and rank definitions.

## Produces
Artificial delegation authority gradients.

## When applied
Rejected across the repository; replaced by orchestrator task-based routing.

## Sub-concepts
none

## Part of
four-tier-agent-hierarchy

## Implementation status
defects: doc-drift

## Design notes
An anti-pattern rejected by ADR-098 that falsely assumed agents hold intrinsic rank conferring authority to delegate, override peers, or demand consultation priority.
