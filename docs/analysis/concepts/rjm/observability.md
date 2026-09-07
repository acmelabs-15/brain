---
package: rjm
name: Observability
slug: observability
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Observability

## Definition — verbatim
> "- **Observability**: log routing decisions with rationale" — templates/agents/orchestrator.shared.md:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 59 | used here | SRE relationship bullet noting all three pillars validate resilience during experiments. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 21 | used here | Ambiguity docstring identifying observability as a review axis, skill, and agent. |
| .claude/skills/review/references/observability.md | 51 | used here | Review guidance item directing invocation on agent and hook diffs to verify telemetry emission. |
| .claude/skills/review/SKILL.md | 29 | used here | Canonical Stage-2 review axis list evaluating logging, metrics, traces, and telemetry emission. |
| templates/agents/orchestrator.shared.md | 323 | defined here | Core orchestration rule requiring logging of agent routing decisions with rationale. |

## Consumes
Execution logs, metric series, distributed trace spans, and agent decision telemetry.

## Produces
Queryable operational visibility, event logs for debugging and audit, and review findings regarding telemetry quality.

## When applied
Applied continuously across agent routing, code review gating, and production runtime operations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path

## Design notes
Observability provides the telemetry infrastructure across RJM's agentic and software systems. It ensures that system performance, error states, and agent decision-making are transparent, auditable, and empirically verifiable via metrics, logs, and traces.
