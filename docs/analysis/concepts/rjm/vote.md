---
package: rjm
name: vote
slug: vote
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
  - {path: scripts/consensus/algorithms.py, sha256: 1877d5ff7c79a0ac61b50a53c7740142fb86aedb4c5b1c5be53274ac1bf20f67}
  - {path: scripts/consensus/decision_recorder.py, sha256: 685928c8108ab34bd2097a05886f27a74381a4291bd8bfd53b93ff4395ea72e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vote

## Definition — verbatim
> "**vote** | Redundant execution | Select majority" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 91 | defined here | Aggregation strategy row defining majority selection for redundant agent execution. |
| scripts/consensus/__init__.py | 21 | used here | Re-exported `Vote` dataclass symbol from `scripts.consensus.algorithms`. |
| scripts/consensus/algorithms.py | 30 | defined here | Class definition of the frozen `Vote` dataclass with agent, position, rationale, and confidence score. |
| scripts/consensus/decision_recorder.py | 17 | used here | Imported under `TYPE_CHECKING` for recording individual agent votes in persistent decision logs. |

## Consumes
Redundant agent execution results, individual agent votes (approve, reject, abstain), and confidence scores.

## Produces
A majority, weighted, quorum, or unanimous consensus determination.

## When applied
Applied during redundant multi-agent execution or review steps when multiple agents evaluate the same problem to select a prevailing decision.

## Sub-concepts
none

## Part of
aggregation-strategies, consensus-protocols

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs); orphan · scripts/consensus/__init__.py:1; script-bug · line 18 (absolute import fails on direct execution). Clean in scripts/consensus/algorithms.py:30 and scripts/consensus/decision_recorder.py:17.

## Design notes
An aggregation and consensus technique used when multiple agents execute redundantly against the same artifact. In ADR-009 it selects majority or weighted positions among specialists; in scripts/consensus it is formalised as a frozen Vote dataclass with position, confidence, and rationale, supporting majority, weighted, quorum, and unanimous algorithms.
