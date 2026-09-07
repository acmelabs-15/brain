---
package: rjm
name: Atomicity
slug: atomicity
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Atomicity

## Definition — verbatim
> "Score a retrospective learning 0-100 for atomicity." — .claude/skills/retrospective/scripts/score_atomicity.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 65 | used here | Formulated as a core Zettelkasten principle requiring one concept per note with optimal word counts. |
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 33 | used here | Weighed against consolidation as a means of reducing token loading waste per file read. |
| .claude/skills/retrospective/scripts/score_atomicity.py | 2 | defined here | Implemented as a scoring CLI evaluating learnings on a 0-100 scale for singular focus. |
| .claude/skills/retrospective/SKILL.md | 4 | used here | Outlined as Phase 4 quality gate for vetting retrospective learnings prior to memory persistence. |

## Consumes
Draft retrospective learnings, memory notes, and extracted task observations.

## Produces
An atomicity score (0-100) and verified single-concept memory units suitable for indexing.

## When applied
When authoring or scoring new memory notes and retrospective learnings before persisting them to the repository memory layer.

## Sub-concepts
none

## Part of
zettelkasten-method

## Implementation status
clean

## Design notes
The knowledge architecture principle requiring that each memory file encapsulates exactly one distinct idea, concept, or learning. By enforcing small, focused notes (scored 0-100 by `score_atomicity.py`), the system minimizes token consumption during retrieval while preventing conceptual overlap across files.
