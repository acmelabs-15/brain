---
package: rjm
name: Memory Persistence
slug: memory-persistence
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Persistence

## Definition — verbatim
> "### Memory Persistence" — .claude/skills/retrospective/references/learning-template.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 106 | defined here | Table in Phase 5 recording atomicity, existing match, and persistence results for each learning. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 303 | defined here | Section header in retrospective generator script formatting the memory persistence results table. |

## Consumes
Extracted learnings and atomicity scores from Phase 4.

## Produces
Tabular persistence audit showing match decisions and persistence results (Added, Updated, Deduplicated, Skipped, or Failed).

## When applied
Applied in Phase 5 to persist validated learnings that meet the atomicity threshold (>= 70%) to long-term memory.

## Sub-concepts
none

## Part of
persist-and-close

## Implementation status
clean

## Design notes
Memory Persistence provides the transition mechanism from transient session insights to persistent institutional memory. By enforcing deduplication checks against existing memories and filtering by atomicity thresholds, it prevents memory pollution and retains high-fidelity operational guidance.
