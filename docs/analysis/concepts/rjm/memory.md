---
package: rjm
name: memory
slug: memory
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# memory

## Definition — verbatim
> "| **Memory** | Cross-session context persistence via Serena + Forgetful for knowledge retention |" — README.md:146

## Also called — verbatim
> "| **memory** | Context continuity | Cross-session persistence |" — templates/AGENTS.md:177

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 105 | used here | Agent role evaluated for downgrade to Haiku 4.5 for CRUD and context retrieval operations |
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 33 | used here | Skill composed as part of the blocking Step 0.5 Memory-First Gate in spec authoring |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 16 | used here | Known single-token skill reference exempt from hyphenated pattern validation |
| .claude/skills/research-and-incorporate/SKILL.md | 165 | used here | Related skill for searching and retrieving incorporated knowledge |
| README.md | 146 | defined here | Key architectural term defining cross-session context persistence via Serena and Forgetful |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 5 | used here | Evaluated in skill overlap testing against exploring-knowledge-graph |
| templates/AGENTS.md | 177 | used here | Agent catalog template entry defining memory role for context continuity |

## Consumes
Session logs, memory entities, architectural decisions, and agent interaction transcripts.

## Produces
Contextual recall, relevant prior art, and persisted cross-session knowledge entries.

## When applied
Triggered during pre-work context gathering, before spec generation, and at session retrospectives.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path (.claude/agents/memory.md missing in ADR-039, though implemented under .claude/skills/memory/)

## Design notes
Memory provides long-term context retention across stateless CLI agent sessions in rjm. By maintaining a structured retrieval and persistence layer via Serena and Forgetful, it prevents knowledge loss between sessions, avoids duplicate exploration, and informs current planning with historical architectural decisions.
