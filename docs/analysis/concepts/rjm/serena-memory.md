---
package: rjm
name: Serena memory
slug: serena-memory
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: scripts/consolidate_skills.py, sha256: 14ba13d8d34815bfa54c2286f6383f005cba9ed1aae7c57810f669bd8399bfc9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena memory

## Definition — verbatim
> "Render a skill candidate as a Serena memory markdown file." — scripts/consolidate_skills.py:436

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 21 | used here | Named as an accepted location where memory retrieval evidence may live. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 12 | defined here | Cited alongside per-issue handoffs as the store where project continuity lives. |
| .claude/skills/merge-resolver/SKILL.md | 250 | used here | Included in merge completion checklist to ensure resolution learnings are persisted. |
| .claude/skills/retrospective/SKILL.md | 151 | used here | Designated as the persistence target for learnings scoring at or above 70% atomicity. |
| scripts/consolidate_skills.py | 436 | used here | Function docstring describing rendering of candidate patterns to memory markdown files. |

## Consumes
Retrospective learning extractions, resolved merge patterns, and architectural decisions.

## Produces
Git-tracked markdown files in `.serena/memories/[domain]-[name].md`.

## When applied
When persisting verified lessons learned, recording cross-session context, or conducting retrospective consolidation.

## Sub-concepts
none

## Part of
memory-first-architecture

## Implementation status
out-of-scope

## Design notes
The canonical, repository-tracked memory layer for the system. Implemented as markdown files under `.serena/memories/` that synchronize across machines via Git, ensuring that institutional knowledge and operational patterns persist across ephemeral agent execution sessions.
