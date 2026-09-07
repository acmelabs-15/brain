---
package: rjm
name: Aggregation strategies
slug: aggregation-strategies
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Aggregation strategies

## Definition — verbatim
> "Aggregation strategies**: Merge (non-conflicting), Vote (redundant), Escalate (conflicts)" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 45 | defined here | Architectural decision defining merge, vote, and escalate aggregation strategies for concurrent agent outputs. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 54 | used here | Cited to affirm that ADR-009 defines aggregation strategies rather than an unenforced agent tier rank hierarchy. |

## Consumes
Concurrent agent execution outputs and conflict classification results.

## Produces
Synthesized outputs, majority consensus decisions, or escalated issue packages.

## When applied
Applied by the orchestrator following parallel agent execution to combine outputs according to whether they are non-conflicting, redundant, or contradictory.

## Sub-concepts
merge, vote, escalate

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs); doc-drift · .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:366 (cites ADR-078 without .md extension). Operationalized in scripts/workflow/parallel.py and scripts/consensus/.

## Design notes
A tripartite taxonomy of synthesis patterns (merge, vote, escalate) governing how the orchestrator combines parallel agent results. By explicitly distinguishing non-conflicting additions, redundant validations, and substantive disagreements, aggregation strategies ensure that concurrent agent work does not collapse into silent overwrites or unhandled contradictions.
